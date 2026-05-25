const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "Seeds & Security Practices",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- Logout &amp; Refresh Token APIs\n2- Auth Middlewares (requireAuth, auhtorize)\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-security-hashing",
            "title": "Security & Hashing",
            "content": "<h3>Advanced Security Practices</h3><pre class=\"lecture-pre\"><code>/*\nModern Security Implementation:\n• Argon2 Password Hashing\n• XSS Protection\n• Data Validation &amp; Sanitization\n• Secure File Uploads\n*/\n\n// ===== ARGON2 HASHING IMPLEMENTATION =====\nconst argon2 = require('argon2');\n\nclass PasswordService {\n    // Hash password with Argon2 (modern &amp; secure)\n    static async hashPassword(password) {\n        try {\n            return await argon2.hash(password, {\n                type: argon2.argon2id,\n                memoryCost: 2 ** 16, // 64MB\n                timeCost: 3,\n                parallelism: 1,\n                hashLength: 32\n            });\n        } catch (error) {\n            throw new Error('Password hashing failed');\n        }\n    }\n\n    // Verify password against hash\n    static async verifyPassword(hash, password) {\n        try {\n            return await argon2.verify(hash, password);\n        } catch (error) {\n            throw new Error('Password verification failed');\n        }\n    }\n}\n\n// Usage in auth controller\nconst registerUser = async (userData) =&gt; {\n    const hashedPassword = await PasswordService.hashPassword(userData.password);\n    \n    return await User.create({\n        ...userData,\n        password: hashedPassword\n    });\n};\n\nconst loginUser = async (email, password) =&gt; {\n    const user = await User.findOne({ email });\n    if (!user) return false;\n\n    const isValid = await PasswordService.verifyPassword(user.password, password);\n    return isValid ? user : false;\n};\n\n// ===== XSS PROTECTION =====\nconst xss = require('xss');\n\n// XSS sanitization function\nconst sanitizeInput = (input) =&gt; {\n    if (typeof input === 'string') {\n        return xss(input, {\n            whiteList: {}, // empty means remove all tags\n            stripIgnoreTag: true,\n            stripIgnoreTagBody: ['script', 'style']\n        }).trim();\n    }\n    return input;\n};\n\n// Middleware to sanitize all incoming data\nconst xssSanitize = (req, res, next) =&gt; {\n    if (req.body) {\n        Object.keys(req.body).forEach(key =&gt; {\n            req.body[key] = sanitizeInput(req.body[key]);\n        });\n    }\n    if (req.query) {\n        Object.keys(req.query).forEach(key =&gt; {\n            req.query[key] = sanitizeInput(req.query[key]);\n        });\n    }\n    if (req.params) {\n        Object.keys(req.params).forEach(key =&gt; {\n            req.params[key] = sanitizeInput(req.params[key]);\n        });\n    }\n    next();\n};\n\napp.use(xssSanitize);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-data-validation",
            "title": "Data Validation",
            "content": "<h3>Express Validator &amp; Sanitization</h3><pre class=\"lecture-pre\"><code>/*\nData Validation &amp; Sanitization:\n• Request validation with express-validator\n• Custom validation rules\n• Optional fields handling\n• Input sanitization\n*/\n\n// src/validation/userValidation.js\nconst { body, param, query, validationResult } = require('express-validator');\nconst User = require('../models/User');\n\n// Custom validation functions\nconst isStrongPassword = (value) =&gt; {\n    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&amp;])[A-Za-z\\d@$!%*?&amp;]{8,}/.test(value)) {\n        throw new Error('Password must contain uppercase, lowercase, number, special character, and be at least 8 characters long');\n    }\n    return true;\n};\n\nconst isEmailAvailable = async (email) =&gt; {\n    const user = await User.findOne({ email });\n    if (user) {\n        throw new Error('Email is already registered');\n    }\n    return true;\n};\n\n// User registration validation schema\nconst validateUserRegistration = [\n    body('email')\n        .isEmail().normalizeEmail()\n        .withMessage('Please provide a valid email')\n        .custom(isEmailAvailable),\n\n    body('password')\n        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')\n        .custom(isStrongPassword),\n\n    body('username')\n        .optional() // Optional field\n        .isAlphanumeric().withMessage('Username must be alphanumeric')\n        .isLength({ min: 3, max: 30 }).withMessage('Username must be between 3-30 characters')\n        .trim(),\n\n    body('phone')\n        .optional()\n        .isMobilePhone().withMessage('Please provide a valid phone number'),\n\n    body('role')\n        .optional()\n        .isIn(['user', 'admin', 'moderator']).withMessage('Invalid role specified')\n];\n\n// User update validation (different rules for updates)\nconst validateUserUpdate = [\n    body('email')\n        .optional()\n        .isEmail().normalizeEmail()\n        .withMessage('Please provide a valid email'),\n\n    body('username')\n        .optional()\n        .isAlphanumeric().withMessage('Username must be alphanumeric')\n        .isLength({ min: 3, max: 30 }).withMessage('Username must be between 3-30 characters')\n        .trim(),\n\n    body('profile.bio')\n        .optional()\n        .isLength({ max: 500 }).withMessage('Bio cannot exceed 500 characters')\n        .escape() // HTML escape for safety\n];\n\n// ID parameter validation\nconst validateObjectId = [\n    param('id')\n        .isMongoId().withMessage('Invalid ID format')\n        .escape()\n];\n\n// Search query validation\nconst validateSearchQuery = [\n    query('q')\n        .optional()\n        .isLength({ min: 1, max: 50 }).withMessage('Search query must be between 1-50 characters')\n        .trim().escape(),\n\n    query('page')\n        .optional()\n        .isInt({ min: 1 }).withMessage('Page must be a positive integer')\n        .toInt(),\n\n    query('limit')\n        .optional()\n        .isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1-100')\n        .toInt()\n];\n\n// Validation middleware\nconst handleValidationErrors = (req, res, next) =&gt; {\n    const errors = validationResult(req);\n    if (!errors.isEmpty()) {\n        return res.status(400).json({\n            success: false,\n            message: 'Validation failed',\n            errors: errors.array().map(err =&gt; ({\n                field: err.path,\n                message: err.msg,\n                value: err.value\n            }))\n        });\n    }\n    next();\n};\n\n// Usage in routes\nrouter.post('/register', \n    validateUserRegistration, \n    handleValidationErrors,\n    userController.register\n);\n\nrouter.put('/users/:id',\n    validateObjectId,\n    validateUserUpdate,\n    handleValidationErrors, \n    userController.updateUser\n);\n\nrouter.get('/search',\n    validateSearchQuery,\n    handleValidationErrors,\n    userController.searchUsers\n);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-security-practices",
            "title": "Security Practices",
            "content": "<h3>Advanced Security &amp; Best Practices</h3><pre class=\"lecture-pre\"><code>// ###################### SECURITY BEST PRACTICES ##############################\n\n/*\nMODERN SECURITY MEASURES:\n\n1. Password Security:\n   - Minimum 8 characters with complexity requirements\n   - Breached password detection (Have I Been Pwned)\n   - Regular password rotation policies\n   - Secure password reset flows\n\n2. Token Security:\n   - Short-lived access tokens (15-30 minutes)\n   - Long-lived refresh tokens (7 days) with rotation\n   - Token blacklisting/revocation capabilities\n   - Secure storage (HTTP-only, Secure, SameSite cookies)\n\n3. Rate Limiting:\n   - Stricter limits on authentication endpoints\n   - Account lockout after failed attempts\n   - IP-based and user-based rate limiting\n*/\n\n// ###################### ENHANCED RATE LIMITING ##############################\n\nconst rateLimit = require('express-rate-limit');\n\n// General API rate limiting\nconst apiLimiter = rateLimit({\n    windowMs: 15 * 60 * 1000, // 15 minutes\n    max: 100, // Limit each IP to 100 requests per windowMs\n    message: {\n        error: 'Too many requests from this IP, please try again later.'\n    },\n    standardHeaders: true,\n    legacyHeaders: false\n});\n\n// Stricter limits for auth endpoints\nconst authLimiter = rateLimit({\n    windowMs: 15 * 60 * 1000, // 15 minutes\n    max: 5, // 5 attempts per window for sensitive endpoints\n    message: {\n        error: 'Too many authentication attempts, please try again later.'\n    },\n    skipSuccessfulRequests: true, // Only count failed attempts\n    keyGenerator: (req) =&gt; {\n        // Use IP + user agent for more precise limiting\n        return `${req.ip}-${req.get('User-Agent')}`;\n    }\n});\n\n// Bruteforce protection for login\nconst loginLimiter = rateLimit({\n    windowMs: 60 * 60 * 1000, // 1 hour\n    max: 10, // Max 10 failed attempts per hour\n    skipSuccessfulRequests: true,\n    handler: (req, res) =&gt; {\n        // Log security event\n        console.warn(`Bruteforce attempt detected from IP: ${req.ip}`);\n        res.status(429).json({\n            error: 'Too many failed login attempts. Please try again in an hour.'\n        });\n    }\n});\n\n// Apply rate limiting\napp.use('/api/', apiLimiter);\napp.use('/api/auth/login', [authLimiter, loginLimiter]);\napp.use('/api/auth/register', authLimiter);\napp.use('/api/auth/forgot-password', authLimiter);\n\n// ###################### ACCOUNT LOCKOUT MECHANISM ##############################\n\nconst accountLockout = {\n    async handleFailedLogin(userId) {\n        const user = await User.findById(userId);\n        if (!user) return;\n\n        user.failedLoginAttempts = (user.failedLoginAttempts || 0) + 1;\n        \n        // Lock account after 5 failed attempts\n        if (user.failedLoginAttempts &gt;= 5) {\n            user.isLocked = true;\n            user.lockedUntil = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes\n        }\n\n        await user.save();\n    },\n\n    async resetFailedAttempts(userId) {\n        await User.findByIdAndUpdate(userId, {\n            failedLoginAttempts: 0,\n            isLocked: false,\n            lockedUntil: null\n        });\n    },\n\n    async isAccountLocked(userId) {\n        const user = await User.findById(userId);\n        if (!user) return false;\n\n        // Check if lock period has expired\n        if (user.lockedUntil &amp;&amp; user.lockedUntil &gt; new Date()) {\n            return true;\n        }\n\n        // Auto-unlock if lock period expired\n        if (user.isLocked &amp;&amp; user.lockedUntil &amp;&amp; user.lockedUntil &lt;= new Date()) {\n            user.isLocked = false;\n            user.lockedUntil = null;\n            user.failedLoginAttempts = 0;\n            await user.save();\n            return false;\n        }\n\n        return user.isLocked;\n    }\n};\n\n// ###################### PASSWORD SECURITY ENHANCEMENTS ##############################\n\nconst passwordPolicy = {\n    async isPasswordBreached(password) {\n        // In production, integrate with Have I Been Pwned API\n        // This is a simplified version\n        const breachedPasswords = ['password123', '12345678', 'qwerty'];\n        return breachedPasswords.includes(password);\n    },\n\n    validatePasswordHistory(userId, newPassword) {\n        // Check if password was used before (simplified)\n        // In reality, you'd check against previously hashed passwords\n        return false;\n    },\n\n    generatePasswordRequirements() {\n        return {\n            minLength: 8,\n            requireUppercase: true,\n            requireLowercase: true,\n            requireNumbers: true,\n            requireSpecialChars: true,\n            maxAge: 90 // days until password expiry\n        };\n    }\n};\n\n// ###################### SECURITY HEADERS ENHANCEMENT ##############################\n\n// Enhanced security headers specifically for auth\napp.use(helmet({\n    contentSecurityPolicy: {\n        directives: {\n            defaultSrc: [&quot;'self'&quot;],\n            styleSrc: [&quot;'self'&quot;, &quot;'unsafe-inline'&quot;, &quot;https://fonts.googleapis.com&quot;],\n            scriptSrc: [&quot;'self'&quot;, &quot;'unsafe-inline'&quot;],\n            imgSrc: [&quot;'self'&quot;, &quot;data:&quot;, &quot;https:&quot;],\n            connectSrc: [&quot;'self'&quot;, &quot;https://api.yourdomain.com&quot;],\n            fontSrc: [&quot;'self'&quot;, &quot;https://fonts.gstatic.com&quot;],\n            frameAncestors: [&quot;'none'&quot;], // Prevent clickjacking\n            formAction: [&quot;'self'&quot;] // Restrict form submissions\n        },\n    },\n    crossOriginEmbedderPolicy: false,\n    hsts: {\n        maxAge: 31536000, // 1 year\n        includeSubDomains: true,\n        preload: true\n    },\n    referrerPolicy: { policy: 'strict-origin-when-cross-origin' }\n}));\n\n// Additional security headers\napp.use((req, res, next) =&gt; {\n    // Prevent MIME type sniffing\n    res.setHeader('X-Content-Type-Options', 'nosniff');\n    \n    // Prevent clickjacking\n    res.setHeader('X-Frame-Options', 'DENY');\n    \n    // Enable XSS filter\n    res.setHeader('X-XSS-Protection', '1; mode=block');\n    \n    // Remove server information\n    res.removeHeader('X-Powered-By');\n    \n    next();\n});\n\n// ###################### SECURITY MONITORING &amp; AUDITING ##############################\n\nconst securityLogger = {\n    logAuthAttempt(email, success, ip, userAgent) {\n        const logEntry = {\n            timestamp: new Date(),\n            event: success ? 'LOGIN_SUCCESS' : 'LOGIN_FAILED',\n            email: success ? email : undefined, // Don't log failed emails for privacy\n            ip,\n            userAgent: userAgent?.substring(0, 100), // Limit length\n            success\n        };\n\n        console.log('AUTH_ATTEMPT:', logEntry);\n        \n        // In production, send to security monitoring service\n        // await SecurityLog.create(logEntry);\n    },\n\n    logTokenRefresh(userId, success) {\n        console.log(`TOKEN_REFRESH: user=${userId} success=${success}`);\n    },\n\n    logSecurityEvent(event, details) {\n        const securityEvent = {\n            timestamp: new Date(),\n            event,\n            ...details\n        };\n\n        console.warn('SECURITY_EVENT:', securityEvent);\n    }\n};\n\n// ###################### PRODUCTION SECURITY CHECKLIST ##############################\n\n/*\n✅ Environment Variables:\n   - JWT secrets set and strong\n   - Database credentials secure\n   - API keys not in code\n\n✅ HTTPS Enforcement:\n   - SSL certificate valid\n   - HTTP to HTTPS redirect\n   - HSTS headers enabled\n\n✅ Cookie Security:\n   - HTTP-only flag set\n   - Secure flag in production\n   - SameSite policy configured\n   - Proper domain and path settings\n\n✅ Rate Limiting:\n   - Authentication endpoints protected\n   - API endpoints limited\n   - Bruteforce protection enabled\n\n✅ Input Validation:\n   - Request body validation\n   - SQL injection prevention\n   - XSS protection\n\n✅ Error Handling:\n   - No sensitive data in errors\n   - Proper logging\n   - Generic error messages in production\n\n✅ Dependency Security:\n   - Regular dependency updates\n   - Security audits\n   - Vulnerability monitoring\n\n✅ Monitoring:\n   - Failed login attempts logged\n   - Suspicious activity detection\n   - Regular security audits\n*/\n\n// ###################### REGULAR SECURITY AUDITS ##############################\n\nconst securityAudit = {\n    async runSecurityCheck() {\n        const checks = {\n            weakPasswords: await this.checkWeakPasswords(),\n            expiredTokens: await this.cleanExpiredTokens(),\n            oldSessions: await this.checkOldSessions(),\n            adminUsers: await this.auditAdminUsers()\n        };\n\n        return checks;\n    },\n\n    async checkWeakPasswords() {\n        // Check for users with weak passwords (simplified)\n        // In reality, you'd check password strength\n        return { checked: true, issues: [] };\n    },\n\n    async cleanExpiredTokens() {\n        // Clean up expired refresh tokens\n        const result = await RefreshToken.deleteMany({\n            expiresAt: { $lt: new Date() }\n        });\n        return `Cleaned ${result.deletedCount} expired tokens`;\n    },\n\n    async checkOldSessions() {\n        // Check for suspiciously long sessions\n        const oldSessions = await RefreshToken.find({\n            createdAt: { $lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } // 30 days\n        });\n        return oldSessions.length;\n    },\n\n    async auditAdminUsers() {\n        // Audit admin users and their activity\n        const adminUsers = await User.find({ role: { $in: ['admin', 'superadmin'] } });\n        return adminUsers.map(user =&gt; ({\n            id: user._id,\n            email: user.email,\n            lastLogin: user.lastLogin\n        }));\n    }\n};</code></pre>",
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
