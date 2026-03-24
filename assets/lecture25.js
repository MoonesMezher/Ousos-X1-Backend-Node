const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "Authentication & Authorization",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- Authentication &amp; Authorization Fundamentals\n2- JWT Tokens &amp; Implementation\n3- Secure Cookie Management \n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-password-security",
            "title": "Password Security",
            "content": "<h3>Password Security</h3><pre class=\"lecture-pre\"><code>// ###################### PASSWORD SECURITY ##############################\nHashing vs Encryption - Key Difference:\n- Hashing: One-way function (cannot be reversed)\n\n- Encryption: Two-way function (can be decrypted with key)\n\n=&gt; Passwords should always be HASHED, never encrypted.\n\n=&gt; There are many Hashing algorithms but Argon2 is the current winner of the Password Hashing \nCompetition and is considered the most secure option for modern applications.\n\nconst bcrypt = require('bcryptjs');\n\nconst passwordService = {\n    async hashPassword(password) {\n        const saltRounds = 12; // Modern standard (was 10 previously)\n        return await bcrypt.hash(password, saltRounds);\n    },\n\n    async verifyPassword(password, hashedPassword) {\n        return await bcrypt.compare(password, hashedPassword);\n    },\n\n    validatePasswordStrength(password) {\n        const minLength = 8;\n        const hasUpperCase = /[A-Z]/.test(password);\n        const hasLowerCase = /[a-z]/.test(password);\n        const hasNumbers = /d/.test(password);\n        const hasSpecialChar = /[!@#$%^&amp;*(),.?&quot;:{}|&lt;&gt;]/.test(password);\n\n        if (password.length &lt; minLength) {\n            throw new Error('Password must be at least 8 characters long');\n        }\n        if (!hasUpperCase || !hasLowerCase) {\n            throw new Error('Password must contain both uppercase and lowercase letters');\n        }\n        if (!hasNumbers) {\n            throw new Error('Password must contain at least one number');\n        }\n        if (!hasSpecialChar) {\n            throw new Error('Password must contain at least one special character');\n        }\n\n        return true;\n    }\n};</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-auth-endpoints",
            "title": "Auth Endpoints",
            "content": "<h3>Auth Endpoints</h3><pre class=\"lecture-pre\"><code>// ###################### COOKIE-BASED AUTH ENDPOINTS ##############################\n\n// Login endpoint with secure cookies\napp.post('/api/auth/login', asyncHandler(async (req, res) =&gt; {\n    const { email, password } = req.body;\n\n    // Validate input\n    if (!email || !password) {\n        throw new AppError('Email and password are required', 400);\n    }\n\n    // Find user and verify credentials\n    const user = await User.findOne({ email }).select('+password');\n    if (!user || !(await passwordService.verifyPassword(password, user.password))) {\n        throw new AppError('Invalid credentials', 401);\n    }\n\n    // Generate tokens\n    const tokenPayload = {\n        id: user._id,\n        email: user.email,\n        role: user.role\n    };\n\n    const accessToken = tokenService.generateAccessToken(tokenPayload);\n    const refreshToken = tokenService.generateRefreshToken(tokenPayload);\n\n    // Store refresh token in database for rotation\n    await RefreshToken.create({\n        token: refreshToken,\n        userId: user._id,\n        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)\n    });\n\n    // Set secure cookies\n    cookieService.setAccessToken(res, accessToken);\n    cookieService.setRefreshToken(res, refreshToken);\n\n    // Update user last login\n    user.lastLogin = new Date();\n    await user.save();\n\n    res.json({\n        success: true,\n        data: {\n            user: {\n                id: user._id,\n                email: user.email,\n                name: user.name,\n                role: user.role\n            }\n        }\n    });\n}));\n\n// Logout endpoint with token cleanup\napp.post('/api/auth/logout', asyncHandler(async (req, res) =&gt; {\n    const refreshToken = cookieService.getRefreshToken(req);\n\n    // Revoke refresh token from database\n    if (refreshToken) {\n        await RefreshToken.findOneAndUpdate(\n            { token: refreshToken },\n            { isRevoked: true, revokedAt: new Date() }\n        );\n    }\n\n    // Clear cookies\n    cookieService.clearTokens(res);\n\n    res.json({\n        success: true,\n        message: 'Logged out successfully'\n    });\n}));\n\n// Refresh token endpoint\napp.post('/api/auth/refresh', asyncHandler(async (req, res) =&gt; {\n    const refreshToken = cookieService.getRefreshToken(req);\n    \n    if (!refreshToken) {\n        throw new AppError('Refresh token required', 401);\n    }\n\n    // Verify refresh token and check database\n    const decoded = tokenService.verifyRefreshToken(refreshToken);\n    const storedToken = await RefreshToken.findOne({ \n        token: refreshToken, \n        userId: decoded.id \n    });\n\n    if (!storedToken || storedToken.isRevoked) {\n        throw new AppError('Invalid refresh token', 401);\n    }\n\n    // Generate new tokens\n    const tokenPayload = {\n        id: decoded.id,\n        email: decoded.email,\n        role: decoded.role\n    };\n\n    const newAccessToken = tokenService.generateAccessToken(tokenPayload);\n    const newRefreshToken = tokenService.generateRefreshToken(tokenPayload);\n\n    // Token rotation: revoke old, store new\n    await RefreshToken.findByIdAndUpdate(storedToken._id, { \n        isRevoked: true,\n        revokedAt: new Date()\n    });\n    \n    await RefreshToken.create({\n        token: newRefreshToken,\n        userId: decoded.id,\n        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)\n    });\n\n    // Set new cookies\n    cookieService.setAccessToken(res, newAccessToken);\n    cookieService.setRefreshToken(res, newRefreshToken);\n\n    res.json({\n        success: true,\n        message: 'Tokens refreshed successfully'\n    });\n}));\n\n// ###################### CSRF PROTECTION ##############################\n\n/*\nSince we're using SameSite cookies, CSRF risk is reduced.\nFor additional protection, consider:\n\n1. CSRF Tokens:\n   const csrf = require('csurf');\n   app.use(csrf({ cookie: true }));\n\n2. Double Submit Cookie Pattern:\n   - Server sends CSRF token in separate cookie\n   - Client includes token in header for state-changing requests\n\n3. Additional Headers:\n   app.use((req, res, next) =&gt; {\n     res.setHeader('X-Content-Type-Options', 'nosniff');\n     res.setHeader('X-Frame-Options', 'DENY');\n     res.setHeader('X-XSS-Protection', '1; mode=block');\n     next();\n   });\n*/\n\n// ###################### COOKIE SECURITY AUDIT ##############################\n\nconst cookieSecurity = {\n    auditCookies(req) {\n        const cookies = req.cookies;\n        const securityReport = {};\n\n        for (const [name, value] of Object.entries(cookies)) {\n            securityReport[name] = {\n                hasHttpOnly: false, // We can't detect this from server-side\n                hasSecure: req.secure, // Assuming secure cookies only sent over HTTPS\n                length: value.length,\n                isJWT: value.split('.').length === 3 // Basic JWT detection\n            };\n        }\n\n        return securityReport;\n    },\n\n    validateCookieSecurity(res) {\n        // In real implementation, you'd check response headers\n        const securityHeaders = res.getHeaders();\n        return {\n            hasSecureFlag: securityHeaders['set-cookie']?.some(cookie =&gt; cookie.includes('Secure')),\n            hasHttpOnly: securityHeaders['set-cookie']?.some(cookie =&gt; cookie.includes('HttpOnly')),\n            hasSameSite: securityHeaders['set-cookie']?.some(cookie =&gt; cookie.includes('SameSite'))\n        };\n    }\n};</code></pre>",
            "examples": []
        }
    ]
};

// DOM Elements
const topicsList = document.getElementById('topics-list');
const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');

const contentTitles = {
    content: document.getElementById('current-topic-title'),
    examples: document.getElementById('current-example-title')
};

const contentContainers = {
    content: document.getElementById('topic-content'),
    examples: document.getElementById('topic-examples')
};

let currentTopicId = null;
let currentSection = 'content';

function init() {
    const sub = document.getElementById('lecture-subtitle');
    if (sub && courseData.lectureSubtitle) {
        sub.textContent = courseData.lectureSubtitle;
    }
    renderTopicsList();
    setupEventListeners();
    if (courseData.topics.length > 0) {
        setActiveTopic(courseData.topics[0].id);
    }
}

function renderTopicsList() {
    topicsList.innerHTML = '';
    courseData.topics.forEach(topic => {
        const listItem = document.createElement('li');
        listItem.className = 'topic-item';
        listItem.textContent = topic.title;
        listItem.dataset.topicId = topic.id;
        listItem.addEventListener('click', () => setActiveTopic(topic.id));
        topicsList.appendChild(listItem);
    });
}

function setupEventListeners() {
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            setActiveSection(button.dataset.section);
        });
    });
}

function setActiveTopic(topicId) {
    currentTopicId = topicId;
    document.querySelectorAll('.topic-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.topicId === topicId) item.classList.add('active');
    });
    updateContent();
}

function setActiveSection(section) {
    currentSection = section;
    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.section === section) button.classList.add('active');
    });
    contentSections.forEach(sectionEl => sectionEl.classList.remove('active'));
    document.getElementById(section + '-section').classList.add('active');
    if (currentTopicId) updateContent();
}

function updateContent() {
    const topic = courseData.topics.find(t => t.id === currentTopicId);
    if (!topic) return;
    contentTitles.content.textContent = topic.title;
    contentTitles.examples.textContent = topic.title + ' - Examples';
    switch (currentSection) {
        case 'content':
            renderContent(topic);
            break;
        case 'examples':
            renderExamples(topic);
            break;
    }
}

function renderContent(topic) {
    contentContainers.content.innerHTML = '<div class="content-box">' + topic.content + '</div>';
}

function renderExamples(topic) {
    if (!topic.examples || topic.examples.length === 0) {
        contentContainers.examples.innerHTML = '<div class="example-box"><p>No examples available for this topic yet.</p></div>';
        return;
    }
    let examplesHTML = '';
    topic.examples.forEach(example => {
        examplesHTML += '<div class="example-box"><h3>' + example.title + '</h3>' + example.content + '</div>';
    });
    contentContainers.examples.innerHTML = examplesHTML;
}

document.addEventListener('DOMContentLoaded', init);
