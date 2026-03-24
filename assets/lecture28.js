const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "Advanced Security & Express Validation",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson</h3><pre class=\"lecture-pre\"><code>1- Create Superadmin by Seeds\n2- Locked by Failed Login \n3- Rate Limiter\n4- Security Practice (helmet, cors)</code></pre>",
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
            "id": "topic-3-advanced-express",
            "title": "Advanced Express",
            "content": "<h3>Production-Ready Express Applications</h3><pre class=\"lecture-pre\"><code>/*\nProduction Best Practices:\n• Environment configuration\n• Security headers\n• Rate limiting\n• Request sanitization\n• Proper error handling\n• Logging\n• Performance optimization\n*/\n\nconst cors = require('cors');\nconst helmet = require('helmet');\nconst rateLimit = require('express-rate-limit');\nconst compression = require('compression');\n\n// Security middleware\napp.use(helmet({\n    contentSecurityPolicy: {\n        directives: {\n            defaultSrc: [&quot;'self'&quot;],\n            styleSrc: [&quot;'self'&quot;, &quot;'unsafe-inline'&quot;],\n            scriptSrc: [&quot;'self'&quot;],\n            imgSrc: [&quot;'self'&quot;, &quot;data:&quot;, &quot;https:&quot;],\n        },\n    },\n    crossOriginEmbedderPolicy: false\n}));\n\n// CORS configuration\napp.use(cors({\n    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],\n    credentials: true\n}));\n\n// Rate limiting\nconst limiter = rateLimit({\n    windowMs: 15 * 60 * 1000, // 15 minutes\n    max: 100, // limit each IP to 100 requests per windowMs\n    message: {\n        error: 'Too many requests from this IP, please try again later.'\n    }\n});\napp.use('/api/', limiter);\n\n// Compression\napp.use(compression());\n\n// Environment-based configuration\nconst config = {\n    development: {\n        port: 4000,\n        host: 'localhost',\n        logLevel: 'debug'\n    },\n    production: {\n        port: process.env.PORT || 80,\n        host: '0.0.0.0',\n        logLevel: 'warn'\n    }\n};\n\nconst environment = process.env.NODE_ENV || 'development';\nconst currentConfig = config[environment];\n\n// Advanced error handling\nclass AppError extends Error {\n    constructor(message, statusCode) {\n        super(message);\n        this.statusCode = statusCode;\n        this.isOperational = true;\n        Error.captureStackTrace(this, this.constructor);\n    }\n}\n\n// Async error wrapper (avoid try-catch in every route)\nconst asyncHandler = (fn) =&gt; (req, res, next) =&gt; {\n    Promise.resolve(fn(req, res, next)).catch(next);\n};\n\n// Example with async handler\napp.get('/api/async-users', asyncHandler(async (req, res) =&gt; {\n    // Simulate async operation\n    const users = await Promise.resolve([...users]);\n    res.json({ success: true, data: users });\n}));\n\n// Global error handler\napp.use((err, req, res, next) =&gt; {\n    err.statusCode = err.statusCode || 500;\n    err.status = err.status || 'error';\n\n    if (process.env.NODE_ENV === 'development') {\n        res.status(err.statusCode).json({\n            status: err.status,\n            error: err,\n            message: err.message,\n            stack: err.stack\n        });\n    } else {\n        // Production: don't leak error details\n        if (err.isOperational) {\n            res.status(err.statusCode).json({\n                status: err.status,\n                message: err.message\n            });\n        } else {\n            console.error('ERROR 💥', err);\n            res.status(500).json({\n                status: 'error',\n                message: 'Something went wrong!'\n            });\n        }\n    }\n});\n\n// Graceful shutdown\nprocess.on('SIGTERM', () =&gt; {\n    console.log('SIGTERM received. Shutting down gracefully...');\n    server.close(() =&gt; {\n        console.log('Process terminated');\n    });\n});</code></pre>",
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
