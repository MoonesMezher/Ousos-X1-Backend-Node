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
