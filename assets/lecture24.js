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
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- Populate\n2- Pagination\n3- Statics \n4- Plugins\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-auth-fundamentals",
            "title": "Auth Fundamentals",
            "content": "<h3>Authentication &amp; Authorization Fundamentals</h3><pre class=\"lecture-pre\"><code>// ###################### AUTHENTICATION vs AUTHORIZATION ##############################\n\n/*\n1. Authentication (Who are you?)\n   - Verifying user identity\n   - Examples: Username/password, Social login, Biometrics\n   - Answers: &quot;Is this person who they claim to be?&quot;\n\n2. Authorization (What can you do?)\n   - Checking permissions after authentication\n   - Examples: Role-based access, Permission levels\n   - Answers: &quot;What is this person allowed to do?&quot;\n\n3. Real-world Analogy:\n   - Hotel Key Card System:\n     • Authentication: Checking your ID at front desk\n     • Authorization: Your key card only opens your room, not others\n*/\n\n// ###################### MODERN AUTHENTICATION CONCEPTS ##############################\n\n/*\nAuthentication Methods:\n• Password-based (traditional)\n• Multi-factor (MFA/2FA)\n• Social OAuth (Google, GitHub, Facebook)\n• Biometric (Face ID, Fingerprint)\n• Passwordless (Magic links, WebAuthn)\n• Single Sign-On (SSO)\n\nAuthorization Models:\n• Role-Based Access Control (RBAC)\n• Permission-based systems\n• Scope-based access (OAuth2)\n• Attribute-Based Access Control (ABAC)\n*/\n\n// ###################### AUTH FLOW OVERVIEW ##############################\n\n/*\nModern Authentication Flow:\n\n1. Registration/Login → Credentials verification\n2. Multi-factor authentication (if enabled)\n3. Token generation (Access + Refresh tokens)\n4. Secure token storage (HTTP-only cookies)\n5. Automatic token inclusion in requests\n6. Token validation + permission checks\n7. Token refresh mechanism\n\n    Client          Server          Database\n    |                |                |\n    |── Login ──────&gt;│                |\n    │                │← Verify Creds →│\n    │                │← Check MFA ───&gt;│\n    │                │← Generate JWT ─│\n    │← Set Cookies ──│                │\n    │                │                │\n    │── API Request →│                │\n    │ (Auto cookie)  │← Verify JWT ──&gt;│\n    │                │← Check RBAC ──&gt;│\n    │←── Response ───│                │\n*/\n\n// ###################### WHY BEARER TOKENS? ##############################\n\n/*\nBearer Token Standard: Authorization: Bearer &lt;token&gt;\n\nWhy use &quot;Bearer&quot; prefix?\n1. Standard Convention - RFC 6750\n2. Clear Identification - Differentiates from other auth schemes\n3. Security Best Practice - Prevents confusion with other token types\n4. Framework Compatibility - Understood by all modern frameworks\n\nExamples of other schemes:\n• Basic: Authorization: Basic base64(username:password)\n• Digest: More secure than Basic\n• API Key: Authorization: Api-Key xxx\n*/\n\n// ###################### COOKIES VS LOCALSTORAGE ##############################\n\n/*\nSecurity Comparison:\n\nHTTP-Only Cookies (Recommended):\n✅ Automatic sending with requests\n✅ Protected from XSS (JavaScript can't access)\n✅ Secure, SameSite options available\n✅ Proper expiration management\n❌ Requires CSRF protection\n❌ Slightly more complex setup\n\nLocalStorage (Not Recommended for tokens):\n✅ Simple to implement\n✅ Large storage capacity\n❌ Vulnerable to XSS attacks\n❌ Manual token attachment required\n❌ No built-in security features\n\nBest Practice: Use HTTP-only cookies for tokens in production.</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-jwt-deep-dive",
            "title": "JWT Deep Dive",
            "content": "<h3>JWT Tokens &amp; Implementation</h3><pre class=\"lecture-pre\"><code>// ###################### JWT DEEP DIVE ##############################\n\n/*\nJWT Structure: Header.Payload.Signature\n\n1. Header (Base64Url encoded):\n   {\n     &quot;alg&quot;: &quot;HS256&quot;,     // Algorithm\n     &quot;typ&quot;: &quot;JWT&quot;        // Token type\n   }\n\n2. Payload (Base64Url encoded):\n   {\n     &quot;sub&quot;: &quot;1234567890&quot;,  // Subject (user ID)\n     &quot;name&quot;: &quot;John Doe&quot;,   // Custom claims\n     &quot;role&quot;: &quot;admin&quot;,      // Custom claims\n     &quot;iat&quot;: 1516239022,   // Issued at\n     &quot;exp&quot;: 1516242622    // Expiration time\n   }\n\n3. Signature:\n   HMACSHA256(\n     base64UrlEncode(header) + &quot;.&quot; +\n     base64UrlEncode(payload),\n     secret-key\n   )\n*/\n\n// ###################### JWT IMPLEMENTATION ##############################\n\nconst jwt = require('jsonwebtoken');\nconst crypto = require('crypto');\n\n// Secure JWT configuration\nconst JWT_CONFIG = {\n    accessTokenSecret: process.env.JWT_ACCESS_SECRET || crypto.randomBytes(64).toString('hex'),\n    refreshTokenSecret: process.env.JWT_REFRESH_SECRET || crypto.randomBytes(64).toString('hex'),\n    accessTokenExpiry: '15m',    // Short-lived for security\n    refreshTokenExpiry: '7d',    // Longer-lived for convenience\n    issuer: 'your-app-name',\n    audience: 'your-app-users'\n};\n\n// Token service with enhanced security\nconst tokenService = {\n    generateAccessToken(payload) {\n        return jwt.sign(\n            {\n                ...payload,\n                type: 'access',\n                jti: crypto.randomUUID() // Unique token ID for revocation\n            },\n            JWT_CONFIG.accessTokenSecret,\n            {\n                expiresIn: JWT_CONFIG.accessTokenExpiry,\n                issuer: JWT_CONFIG.issuer,\n                audience: JWT_CONFIG.audience\n            }\n        );\n    },\n\n    generateRefreshToken(payload) {\n        return jwt.sign(\n            {\n                ...payload,\n                type: 'refresh',\n                jti: crypto.randomUUID()\n            },\n            JWT_CONFIG.refreshTokenSecret,\n            {\n                expiresIn: JWT_CONFIG.refreshTokenExpiry,\n                issuer: JWT_CONFIG.issuer,\n                audience: JWT_CONFIG.audience\n            }\n        );\n    },\n\n    verifyAccessToken(token) {\n        try {\n            return jwt.verify(token, JWT_CONFIG.accessTokenSecret, {\n                issuer: JWT_CONFIG.issuer,\n                audience: JWT_CONFIG.audience\n            });\n        } catch (error) {\n            if (error.name === 'TokenExpiredError') {\n                throw new Error('Access token expired');\n            }\n            if (error.name === 'JsonWebTokenError') {\n                throw new Error('Invalid access token');\n            }\n            throw new Error('Token verification failed');\n        }\n    },\n\n    verifyRefreshToken(token) {\n        try {\n            return jwt.verify(token, JWT_CONFIG.refreshTokenSecret, {\n                issuer: JWT_CONFIG.issuer,\n                audience: JWT_CONFIG.audience\n            });\n        } catch (error) {\n            throw new Error('Invalid or expired refresh token');\n        }\n    },\n\n    decodeTokenWithoutVerification(token) {\n        // Only for debugging - doesn't verify signature\n        return jwt.decode(token);\n    }\n};\n\n// ###################### PASSWORD SECURITY ##############################\nHashing vs Encryption - Key Difference:\n- Hashing: One-way function (cannot be reversed)\n\n- Encryption: Two-way function (can be decrypted with key)\n\n=&gt; Passwords should always be HASHED, never encrypted.\n\n=&gt; There are many Hashing algorithms but Argon2 is the current winner of the Password Hashing \nCompetition and is considered the most secure option for modern applications.\n\nconst bcrypt = require('bcryptjs');\n\nconst passwordService = {\n    async hashPassword(password) {\n        const saltRounds = 12; // Modern standard (was 10 previously)\n        return await bcrypt.hash(password, saltRounds);\n    },\n\n    async verifyPassword(password, hashedPassword) {\n        return await bcrypt.compare(password, hashedPassword);\n    },\n\n    validatePasswordStrength(password) {\n        const minLength = 8;\n        const hasUpperCase = /[A-Z]/.test(password);\n        const hasLowerCase = /[a-z]/.test(password);\n        const hasNumbers = /d/.test(password);\n        const hasSpecialChar = /[!@#$%^&amp;*(),.?&quot;:{}|&lt;&gt;]/.test(password);\n\n        if (password.length &lt; minLength) {\n            throw new Error('Password must be at least 8 characters long');\n        }\n        if (!hasUpperCase || !hasLowerCase) {\n            throw new Error('Password must contain both uppercase and lowercase letters');\n        }\n        if (!hasNumbers) {\n            throw new Error('Password must contain at least one number');\n        }\n        if (!hasSpecialChar) {\n            throw new Error('Password must contain at least one special character');\n        }\n\n        return true;\n    }\n};\n\n// ###################### TOKEN TYPES &amp; USAGE ##############################\n\n/*\nAccess Token:\n• Short-lived (15-30 minutes)\n• Contains user identity and permissions\n• Used for API access\n• Sent with every request\n\nRefresh Token:\n• Long-lived (7-30 days)\n• Used only to get new access tokens\n• Stored securely (HTTP-only cookie)\n• Can be revoked if compromised\n\nWhy two tokens?\n• Security: Short access tokens limit exposure\n• User Experience: Don't need to login frequently\n• Control: Can revoke refresh tokens without changing password\n*/\n\n// Example token payloads\nconst accessTokenPayload = {\n    id: '507f1f77bcf86cd799439011',\n    email: 'user@example.com',\n    role: 'user',\n    permissions: ['read:profile', 'write:posts'],\n    iat: Math.floor(Date.now() / 1000),\n    exp: Math.floor(Date.now() / 1000) + (15 * 60), // 15 minutes\n    jti: 'unique-token-id-123',\n    type: 'access'\n};\n\nconst refreshTokenPayload = {\n    id: '507f1f77bcf86cd799439011',\n    iat: Math.floor(Date.now() / 1000),\n    exp: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60), // 7 days\n    jti: 'unique-refresh-token-456',\n    type: 'refresh'\n};</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-cookie-security",
            "title": "Cookie Security",
            "content": "<h3>Secure Cookie Management &amp; Sessions</h3><pre class=\"lecture-pre\"><code>// ###################### COOKIE SECURITY CONFIGURATION ##############################\n\nconst cookieParser = require('cookie-parser');\n\n// Initialize cookie parser middleware\napp.use(cookieParser());\n\n// Secure cookie configuration\nconst cookieConfig = {\n    httpOnly: true,        // Prevent XSS attacks - JavaScript cannot access\n    secure: process.env.NODE_ENV === 'production', // HTTPS only in production\n    sameSite: 'strict',    // CSRF protection - 'strict', 'lax', or 'none'\n    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days for refresh token\n    path: '/',             // Available across the entire app\n    domain: process.env.COOKIE_DOMAIN || undefined // Specify domain if needed\n};\n\nconst accessTokenCookieConfig = {\n    ...cookieConfig,\n    maxAge: 15 * 60 * 1000 // 15 minutes for access token\n};\n\n// ###################### COOKIE ATTRIBUTES EXPLAINED ##############################\n\n/*\nhttpOnly: true\n• Prevents JavaScript access to cookies\n• Critical for protecting against XSS attacks\n• Cookies can only be sent to server\n\nsecure: true (production only)\n• Cookies only sent over HTTPS\n• Prevents man-in-the-middle attacks\n• Always true in production, false in development\n\nsameSite: 'strict'\n• Prevents CSRF attacks\n• 'strict': No cross-site requests\n• 'lax': Allows some safe cross-site requests\n• 'none': Allows all cross-site requests (requires secure: true)\n\nmaxAge: milliseconds\n• Automatic cookie expiration\n• Better than 'expires' for modern browsers\n• Automatically cleaned up by browser\n\npath: '/'\n• Which paths can access the cookie\n• '/' means entire domain\n• '/api' would restrict to API routes only\n*/\n\n// ###################### COOKIE MANAGEMENT FUNCTIONS ##############################\n\nconst cookieService = {\n    setAccessToken(res, token) {\n        res.cookie('accessToken', token, accessTokenCookieConfig);\n    },\n\n    setRefreshToken(res, token) {\n        res.cookie('refreshToken', token, cookieConfig);\n    },\n\n    clearTokens(res) {\n        res.clearCookie('accessToken');\n        res.clearCookie('refreshToken');\n    },\n\n    getAccessToken(req) {\n        return req.cookies.accessToken;\n    },\n\n    getRefreshToken(req) {\n        return req.cookies.refreshToken;\n    },\n\n    // For cross-domain scenarios (microservices)\n    setCrossDomainToken(res, token, domain) {\n        res.cookie('serviceToken', token, {\n            ...cookieConfig,\n            domain: domain,\n            sameSite: 'none',\n            secure: true\n        });\n    }\n};\n\n// ###################### COOKIE-BASED AUTH ENDPOINTS ##############################\n\n// Login endpoint with secure cookies\napp.post('/api/auth/login', asyncHandler(async (req, res) =&gt; {\n    const { email, password } = req.body;\n\n    // Validate input\n    if (!email || !password) {\n        throw new AppError('Email and password are required', 400);\n    }\n\n    // Find user and verify credentials\n    const user = await User.findOne({ email }).select('+password');\n    if (!user || !(await passwordService.verifyPassword(password, user.password))) {\n        throw new AppError('Invalid credentials', 401);\n    }\n\n    // Generate tokens\n    const tokenPayload = {\n        id: user._id,\n        email: user.email,\n        role: user.role\n    };\n\n    const accessToken = tokenService.generateAccessToken(tokenPayload);\n    const refreshToken = tokenService.generateRefreshToken(tokenPayload);\n\n    // Store refresh token in database for rotation\n    await RefreshToken.create({\n        token: refreshToken,\n        userId: user._id,\n        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)\n    });\n\n    // Set secure cookies\n    cookieService.setAccessToken(res, accessToken);\n    cookieService.setRefreshToken(res, refreshToken);\n\n    // Update user last login\n    user.lastLogin = new Date();\n    await user.save();\n\n    res.json({\n        success: true,\n        data: {\n            user: {\n                id: user._id,\n                email: user.email,\n                name: user.name,\n                role: user.role\n            }\n        }\n    });\n}));\n\n// Logout endpoint with token cleanup\napp.post('/api/auth/logout', asyncHandler(async (req, res) =&gt; {\n    const refreshToken = cookieService.getRefreshToken(req);\n\n    // Revoke refresh token from database\n    if (refreshToken) {\n        await RefreshToken.findOneAndUpdate(\n            { token: refreshToken },\n            { isRevoked: true, revokedAt: new Date() }\n        );\n    }\n\n    // Clear cookies\n    cookieService.clearTokens(res);\n\n    res.json({\n        success: true,\n        message: 'Logged out successfully'\n    });\n}));\n\n// Refresh token endpoint\napp.post('/api/auth/refresh', asyncHandler(async (req, res) =&gt; {\n    const refreshToken = cookieService.getRefreshToken(req);\n    \n    if (!refreshToken) {\n        throw new AppError('Refresh token required', 401);\n    }\n\n    // Verify refresh token and check database\n    const decoded = tokenService.verifyRefreshToken(refreshToken);\n    const storedToken = await RefreshToken.findOne({ \n        token: refreshToken, \n        userId: decoded.id \n    });\n\n    if (!storedToken || storedToken.isRevoked) {\n        throw new AppError('Invalid refresh token', 401);\n    }\n\n    // Generate new tokens\n    const tokenPayload = {\n        id: decoded.id,\n        email: decoded.email,\n        role: decoded.role\n    };\n\n    const newAccessToken = tokenService.generateAccessToken(tokenPayload);\n    const newRefreshToken = tokenService.generateRefreshToken(tokenPayload);\n\n    // Token rotation: revoke old, store new\n    await RefreshToken.findByIdAndUpdate(storedToken._id, { \n        isRevoked: true,\n        revokedAt: new Date()\n    });\n    \n    await RefreshToken.create({\n        token: newRefreshToken,\n        userId: decoded.id,\n        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)\n    });\n\n    // Set new cookies\n    cookieService.setAccessToken(res, newAccessToken);\n    cookieService.setRefreshToken(res, newRefreshToken);\n\n    res.json({\n        success: true,\n        message: 'Tokens refreshed successfully'\n    });\n}));\n\n// ###################### CSRF PROTECTION ##############################\n\n/*\nSince we're using SameSite cookies, CSRF risk is reduced.\nFor additional protection, consider:\n\n1. CSRF Tokens:\n   const csrf = require('csurf');\n   app.use(csrf({ cookie: true }));\n\n2. Double Submit Cookie Pattern:\n   - Server sends CSRF token in separate cookie\n   - Client includes token in header for state-changing requests\n\n3. Additional Headers:\n   app.use((req, res, next) =&gt; {\n     res.setHeader('X-Content-Type-Options', 'nosniff');\n     res.setHeader('X-Frame-Options', 'DENY');\n     res.setHeader('X-XSS-Protection', '1; mode=block');\n     next();\n   });\n*/\n\n// ###################### COOKIE SECURITY AUDIT ##############################\n\nconst cookieSecurity = {\n    auditCookies(req) {\n        const cookies = req.cookies;\n        const securityReport = {};\n\n        for (const [name, value] of Object.entries(cookies)) {\n            securityReport[name] = {\n                hasHttpOnly: false, // We can't detect this from server-side\n                hasSecure: req.secure, // Assuming secure cookies only sent over HTTPS\n                length: value.length,\n                isJWT: value.split('.').length === 3 // Basic JWT detection\n            };\n        }\n\n        return securityReport;\n    },\n\n    validateCookieSecurity(res) {\n        // In real implementation, you'd check response headers\n        const securityHeaders = res.getHeaders();\n        return {\n            hasSecureFlag: securityHeaders['set-cookie']?.some(cookie =&gt; cookie.includes('Secure')),\n            hasHttpOnly: securityHeaders['set-cookie']?.some(cookie =&gt; cookie.includes('HttpOnly')),\n            hasSameSite: securityHeaders['set-cookie']?.some(cookie =&gt; cookie.includes('SameSite'))\n        };\n    }\n};</code></pre>",
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
