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
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- Authentication &amp; Authorization Fundamentals\n2- JWT Tokens &amp; Implementation\n \n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-auth-endpoints",
            "title": "Auth Endpoints",
            "content": "<h3>Auth Endpoints</h3><pre class=\"lecture-pre\"><code>// ###################### COOKIE-BASED AUTH ENDPOINTS ##############################\n\n// Login endpoint with secure cookies\napp.post('/api/auth/login', asyncHandler(async (req, res) =&gt; {\n    const { email, password } = req.body;\n\n    // Validate input\n    if (!email || !password) {\n        throw new AppError('Email and password are required', 400);\n    }\n\n    // Find user and verify credentials\n    const user = await User.findOne({ email }).select('+password');\n    if (!user || !(await passwordService.verifyPassword(password, user.password))) {\n        throw new AppError('Invalid credentials', 401);\n    }\n\n    // Generate tokens\n    const tokenPayload = {\n        id: user._id,\n        email: user.email,\n        role: user.role\n    };\n\n    const accessToken = tokenService.generateAccessToken(tokenPayload);\n    const refreshToken = tokenService.generateRefreshToken(tokenPayload);\n\n    // Store refresh token in database for rotation\n    await RefreshToken.create({\n        token: refreshToken,\n        userId: user._id,\n        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)\n    });\n\n    // Set secure cookies\n    cookieService.setAccessToken(res, accessToken);\n    cookieService.setRefreshToken(res, refreshToken);\n\n    // Update user last login\n    user.lastLogin = new Date();\n    await user.save();\n\n    res.json({\n        success: true,\n        data: {\n            user: {\n                id: user._id,\n                email: user.email,\n                name: user.name,\n                role: user.role\n            }\n        }\n    });\n}));\n\n// Logout endpoint with token cleanup\napp.post('/api/auth/logout', asyncHandler(async (req, res) =&gt; {\n    const refreshToken = cookieService.getRefreshToken(req);\n\n    // Revoke refresh token from database\n    if (refreshToken) {\n        await RefreshToken.findOneAndUpdate(\n            { token: refreshToken },\n            { isRevoked: true, revokedAt: new Date() }\n        );\n    }\n\n    // Clear cookies\n    cookieService.clearTokens(res);\n\n    res.json({\n        success: true,\n        message: 'Logged out successfully'\n    });\n}));\n\n// Refresh token endpoint\napp.post('/api/auth/refresh', asyncHandler(async (req, res) =&gt; {\n    const refreshToken = cookieService.getRefreshToken(req);\n    \n    if (!refreshToken) {\n        throw new AppError('Refresh token required', 401);\n    }\n\n    // Verify refresh token and check database\n    const decoded = tokenService.verifyRefreshToken(refreshToken);\n    const storedToken = await RefreshToken.findOne({ \n        token: refreshToken, \n        userId: decoded.id \n    });\n\n    if (!storedToken || storedToken.isRevoked) {\n        throw new AppError('Invalid refresh token', 401);\n    }\n\n    // Generate new tokens\n    const tokenPayload = {\n        id: decoded.id,\n        email: decoded.email,\n        role: decoded.role\n    };\n\n    const newAccessToken = tokenService.generateAccessToken(tokenPayload);\n    const newRefreshToken = tokenService.generateRefreshToken(tokenPayload);\n\n    // Token rotation: revoke old, store new\n    await RefreshToken.findByIdAndUpdate(storedToken._id, { \n        isRevoked: true,\n        revokedAt: new Date()\n    });\n    \n    await RefreshToken.create({\n        token: newRefreshToken,\n        userId: decoded.id,\n        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)\n    });\n\n    // Set new cookies\n    cookieService.setAccessToken(res, newAccessToken);\n    cookieService.setRefreshToken(res, newRefreshToken);\n\n    res.json({\n        success: true,\n        message: 'Tokens refreshed successfully'\n    });\n}));\n\n// ###################### CSRF PROTECTION ##############################\n\n/*\nSince we're using SameSite cookies, CSRF risk is reduced.\nFor additional protection, consider:\n\n1. CSRF Tokens:\n   const csrf = require('csurf');\n   app.use(csrf({ cookie: true }));\n\n2. Double Submit Cookie Pattern:\n   - Server sends CSRF token in separate cookie\n   - Client includes token in header for state-changing requests\n\n3. Additional Headers:\n   app.use((req, res, next) =&gt; {\n     res.setHeader('X-Content-Type-Options', 'nosniff');\n     res.setHeader('X-Frame-Options', 'DENY');\n     res.setHeader('X-XSS-Protection', '1; mode=block');\n     next();\n   });\n*/\n\n// ###################### COOKIE SECURITY AUDIT ##############################\n\nconst cookieSecurity = {\n    auditCookies(req) {\n        const cookies = req.cookies;\n        const securityReport = {};\n\n        for (const [name, value] of Object.entries(cookies)) {\n            securityReport[name] = {\n                hasHttpOnly: false, // We can't detect this from server-side\n                hasSecure: req.secure, // Assuming secure cookies only sent over HTTPS\n                length: value.length,\n                isJWT: value.split('.').length === 3 // Basic JWT detection\n            };\n        }\n\n        return securityReport;\n    },\n\n    validateCookieSecurity(res) {\n        // In real implementation, you'd check response headers\n        const securityHeaders = res.getHeaders();\n        return {\n            hasSecureFlag: securityHeaders['set-cookie']?.some(cookie =&gt; cookie.includes('Secure')),\n            hasHttpOnly: securityHeaders['set-cookie']?.some(cookie =&gt; cookie.includes('HttpOnly')),\n            hasSameSite: securityHeaders['set-cookie']?.some(cookie =&gt; cookie.includes('SameSite'))\n        };\n    }\n};</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-auth-middleware",
            "title": "Auth Middleware",
            "content": "<h3>Authentication Middleware &amp; Authorization</h3><pre class=\"lecture-pre\"><code>// ###################### AUTHENTICATION MIDDLEWARE ##############################\n\n// Main authentication middleware\nconst authenticateToken = asyncHandler(async (req, res, next) =&gt; {\n    // Get token from cookie (preferred) or Authorization header\n    const token = req.cookies.accessToken || \n                 req.headers.authorization?.replace('Bearer ', '');\n\n    if (!token) {\n        throw new AppError('Access token required', 401);\n    }\n\n    try {\n        const decoded = tokenService.verifyAccessToken(token);\n        \n        // Optional: Verify user still exists and is active\n        const user = await User.findById(decoded.id).select('-password');\n        if (!user) {\n            throw new AppError('User no longer exists', 401);\n        }\n        \n        if (user.isSuspended) {\n            throw new AppError('Account suspended', 403);\n        }\n\n        // Attach user to request object\n        req.user = {\n            id: user._id,\n            email: user.email,\n            role: user.role,\n            permissions: user.permissions,\n            isVerified: user.isVerified\n        };\n\n        next();\n    } catch (error) {\n        if (error.name === 'TokenExpiredError') {\n            throw new AppError('Access token expired', 401);\n        }\n        throw new AppError('Invalid access token', 401);\n    }\n});\n\n// Optional authentication (user might be logged in)\nconst optionalAuth = asyncHandler(async (req, res, next) =&gt; {\n    const token = req.cookies.accessToken || \n                 req.headers.authorization?.replace('Bearer ', '');\n\n    if (token) {\n        try {\n            const decoded = tokenService.verifyAccessToken(token);\n            const user = await User.findById(decoded.id).select('-password');\n            \n            if (user &amp;&amp; !user.isSuspended) {\n                req.user = {\n                    id: user._id,\n                    email: user.email,\n                    role: user.role,\n                    permissions: user.permissions\n                };\n            }\n        } catch (error) {\n            // Silently fail for optional auth\n        }\n    }\n\n    next();\n});\n\n// ###################### AUTHORIZATION MIDDLEWARE ##############################\n\n// Role-based authorization\nconst authorize = (...allowedRoles) =&gt; {\n    return (req, res, next) =&gt; {\n        if (!req.user) {\n            throw new AppError('Authentication required', 401);\n        }\n\n        if (!allowedRoles.includes(req.user.role)) {\n            throw new AppError('Insufficient permissions', 403);\n        }\n\n        next();\n    };\n};\n\n// Permission-based authorization\nconst requirePermission = (permission) =&gt; {\n    return asyncHandler(async (req, res, next) =&gt; {\n        if (!req.user) {\n            throw new AppError('Authentication required', 401);\n        }\n\n        // Check user permissions (you might fetch from database)\n        const userPermissions = req.user.permissions || [];\n        \n        if (!userPermissions.includes(permission)) {\n            throw new AppError('Insufficient permissions', 403);\n        }\n\n        next();\n    });\n};\n\n// Resource ownership check\nconst checkResourceOwnership = (model, paramName = 'id') =&gt; {\n    return asyncHandler(async (req, res, next) =&gt; {\n        if (!req.user) {\n            throw new AppError('Authentication required', 401);\n        }\n\n        const resourceId = req.params[paramName];\n        const resource = await model.findById(resourceId);\n\n        if (!resource) {\n            throw new AppError('Resource not found', 404);\n        }\n\n        // Check if user owns resource or is admin\n        const isOwner = resource.userId &amp;&amp; resource.userId.toString() === req.user.id;\n        const isAdmin = req.user.role === 'admin' || req.user.role === 'superadmin';\n\n        if (!isOwner &amp;&amp; !isAdmin) {\n            throw new AppError('Access denied to this resource', 403);\n        }\n\n        req.resource = resource;\n        next();\n    });\n};\n\n// ###################### COMPOSITE MIDDLEWARE EXAMPLES ##############################\n\n// Admin-only middleware (composition of auth + role check)\nconst requireAdmin = [authenticateToken, authorize('admin', 'superadmin')];\n\n// Verified user middleware\nconst requireVerifiedUser = [\n    authenticateToken,\n    (req, res, next) =&gt; {\n        if (!req.user.isVerified) {\n            throw new AppError('Please verify your email address', 403);\n        }\n        next();\n    }\n];\n\n// Self or admin middleware (users can access their own data)\nconst requireSelfOrAdmin = (paramName = 'id') =&gt; {\n    return [\n        authenticateToken,\n        (req, res, next) =&gt; {\n            const targetUserId = req.params[paramName];\n            const isSelf = targetUserId === req.user.id;\n            const isAdmin = ['admin', 'superadmin'].includes(req.user.role);\n\n            if (!isSelf &amp;&amp; !isAdmin) {\n                throw new AppError('Access denied', 403);\n            }\n            next();\n        }\n    ];\n};\n\n// ###################### ROUTE IMPLEMENTATIONS ##############################\n\n// Public route (no auth required)\napp.get('/api/public/data', (req, res) =&gt; {\n    res.json({ message: 'This is public data' });\n});\n\n// Protected route (auth required)\napp.get('/api/profile', authenticateToken, asyncHandler(async (req, res) =&gt; {\n    const user = await User.findById(req.user.id).select('-password');\n    res.json({\n        success: true,\n        data: { user }\n    });\n}));\n\n// Admin-only route\napp.get('/api/admin/users', \n    requireAdmin, // Composite middleware\n    asyncHandler(async (req, res) =&gt; {\n        const users = await User.find().select('-password');\n        res.json({\n            success: true,\n            data: { users }\n        });\n    })\n);\n\n// User can access their own data, admin can access any\napp.get('/api/users/:userId', \n    requireSelfOrAdmin('userId'),\n    asyncHandler(async (req, res) =&gt; {\n        const user = await User.findById(req.params.userId).select('-password');\n        res.json({\n            success: true,\n            data: { user }\n        });\n    })\n);\n\n// Resource ownership example (user can only update their own posts)\napp.put('/api/posts/:postId',\n    [authenticateToken, checkResourceOwnership(Post, 'postId')],\n    asyncHandler(async (req, res) =&gt; {\n        const updatedPost = await Post.findByIdAndUpdate(\n            req.params.postId,\n            req.body,\n            { new: true, runValidators: true }\n        );\n        \n        res.json({\n            success: true,\n            data: { post: updatedPost }\n        });\n    })\n);\n\n// Permission-based route\napp.delete('/api/users/:userId',\n    [authenticateToken, requirePermission('users:delete')],\n    asyncHandler(async (req, res) =&gt; {\n        await User.findByIdAndDelete(req.params.userId);\n        res.json({\n            success: true,\n            message: 'User deleted successfully'\n        });\n    })\n);\n\n// ###################### ERROR HANDLING FOR AUTH ##############################\n\n// Custom error classes for auth\nclass AuthenticationError extends AppError {\n    constructor(message = 'Authentication failed') {\n        super(message, 401);\n    }\n}\n\nclass AuthorizationError extends AppError {\n    constructor(message = 'Insufficient permissions') {\n        super(message, 403);\n    }\n}\n\nclass TokenExpiredError extends AppError {\n    constructor(message = 'Token expired') {\n        super(message, 401);\n    }\n}\n\n// Enhanced global error handler for auth errors\napp.use((err, req, res, next) =&gt; {\n    // Handle JWT errors\n    if (err.name === 'JsonWebTokenError') {\n        err = new AuthenticationError('Invalid token');\n    }\n    if (err.name === 'TokenExpiredError') {\n        err = new TokenExpiredError('Token expired');\n    }\n\n    // Handle mongoose validation errors for auth\n    if (err.name === 'ValidationError') {\n        const messages = Object.values(err.errors).map(val =&gt; val.message);\n        err = new AppError(messages.join(', '), 400);\n    }\n\n    // Handle duplicate key errors (registration)\n    if (err.code === 11000) {\n        const field = Object.keys(err.keyValue)[0];\n        err = new AppError(`${field} already exists`, 409);\n    }\n\n    // Pass to default error handler\n    next(err);\n});</code></pre>",
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
