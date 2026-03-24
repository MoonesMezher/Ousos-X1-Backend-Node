const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "NPM, Development Tools & ExpressJS (Middlewares, Project Structure)",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- HTTP Module\n2- ExpressJS Setup\n3- ExpressJS Routing\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-npm-package-management",
            "title": "NPM & Package Management",
            "content": "<h3>Node Package Manager Essentials</h3><pre class=\"lecture-pre\"><code>/*\nNPM (Node Package Manager) - Your development toolbox\n\nWhy we need libraries?\n• Write code faster &amp; more efficient\n• Solve common problems others have already solved\n• Focus on business logic rather than reinventing wheels\n\nKey Commands:\n• npm init / npm init -y - Create package.json\n• npm install &lt;package&gt; - Local installation\n• npm install -g &lt;package&gt; - Global installation\n• npm uninstall &lt;package&gt; - Remove package\n• npm update &lt;package&gt; - Update package\n\nUnderstanding package.json:\n• dependencies - Production packages\n• devDependencies - Development-only packages (nodemon, testing tools)\n• scripts - Custom automation commands\n\nWhat is node_modules?\n• Contains all modules and their dependencies\n• Can see library code (open source)\n• Be careful about package size and dependencies\n\nSecurity Best Practices:\n• Check package popularity and maintenance\n• Regular security audits: npm audit\n• Use specific versions, not wildcards\n*/\n\n// package.json example\n{\n  &quot;name&quot;: &quot;my-express-app&quot;,\n  &quot;version&quot;: &quot;1.0.0&quot;,\n  &quot;description&quot;: &quot;A sample Express application&quot;,\n  &quot;main&quot;: &quot;app.js&quot;,\n  &quot;scripts&quot;: {\n    &quot;start&quot;: &quot;node app.js&quot;,\n    &quot;dev&quot;: &quot;nodemon app.js&quot;,\n    &quot;test&quot;: &quot;jest&quot;\n  },\n  &quot;dependencies&quot;: {\n    &quot;express&quot;: &quot;^4.18.0&quot;,\n    &quot;cors&quot;: &quot;^2.8.5&quot;\n  },\n  &quot;devDependencies&quot;: {\n    &quot;nodemon&quot;: &quot;^2.0.0&quot;,\n    &quot;jest&quot;: &quot;^28.0.0&quot;\n  }\n}\n\n// Versioning: [major].[minor].[patch]\n// Example: 1.2.3 - Major changes . minor features . bug fixes</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-development-tools-environment",
            "title": "Development Tools & Environment",
            "content": "<h3>Essential Development Setup</h3><pre class=\"lecture-pre\"><code>/*\nDevelopment Tools &amp; Environment Configuration\n*/\n\n// 1. Nodemon - Auto-restart server on changes\n// Difference between nodemon and --watch?\n// nodemon: More features, watches multiple file types, configurable\n// --watch: Basic file watching built into Node.js\n\n// Installation: npm install -g nodemon\n// Usage: nodemon app.js instead of node app.js\n\n// 2. Environment Variables &amp; .env Files\n// What is .env file?\n// - Configuration file for environment variables\n// - Stores sensitive data (API keys, database URLs, ports)\n// - Never commit to version control\n\n// How to use dotenv:\nconst dotenv = require('dotenv');\ndotenv.config();\n\n// Access environment variables:\nconst port = process.env.PORT || 3000;\nconst dbUrl = process.env.DATABASE_URL;\n\n// Why process.env exists?\n// - Node.js provides access to system environment variables\n// - dotenv loads .env file into process.env\n\n// .env file example:\n/*\nPORT=4000\nDATABASE_URL=mongodb://localhost:27017/mydb\nJWT_SECRET=your-secret-key\nAPI_KEY=your-api-key\nNODE_ENV=development\n*/\n\n// 3. .gitignore - Files to exclude from version control\n// Essential entries for Node.js:\n/*\nnode_modules/\n.env\n.env.local\n.DS_Store\nlogs/\n*.log\ncoverage/\n.nyc_output/\n*/\n\n// 4. API Testing Tools\n// Postman: https://www.postman.com/downloads/\n// - API development and testing environment\n// - Create, test, and document APIs\n// - Features: Collections, Environments, Automated testing\n\n// Thunder Client (VS Code Extension)\n// - Lightweight REST API client\n// - Integrated directly in VS Code\n// - No separate application needed\n\n// Why use these tools?\n// - Test APIs without building frontend\n// - Debug request/response cycles\n// - Document API endpoints\n// - Automated testing</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-request-response-objects",
            "title": "Request & Response Objects",
            "content": "<h3>Mastering Request &amp; Response</h3><pre class=\"lecture-pre\"><code>/*\nRequest Object Properties:\n• req.params - Route parameters\n• req.query - URL query parameters  \n• req.body - Request body (needs middleware)\n• req.headers - HTTP headers\n• req.method - HTTP method\n• req.url - Request URL\n• req.ip - Client IP address\n\nResponse Object Methods:\n• res.json() - Send JSON response\n• res.send() - Send various types\n• res.status() - Set status code\n• res.redirect() - Redirect request\n• res.render() - Render view template\n• res.set() - Set headers\n• res.cookie() - Set cookies\n\nData Access Cheatsheet:\n| Data Type | Source                    | Example                          | Access Method            |\n|-----------|---------------------------|----------------------------------|--------------------------|\n| Params    | URL path segments         | GET /users/123 → 123             | req.params.id            |\n| Query     | URL query string          | GET /search?name=John → John     | req.query.name           |\n| Body      | Submitted data (POST/PUT) | { &quot;name&quot;: &quot;John&quot; } → John       | req.body.name            |\n| Headers   | HTTP headers              | Authorization: Bearer token      | req.headers.authorization|\n*/\n\n// Body parsing middleware (REQUIRED for req.body)\napp.use(express.json()); // Parse JSON bodies\napp.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies\n\n// Request object deep dive\napp.post('/api/users', (req, res) =&gt; {\n    try {\n        console.log('Request Method:', req.method);\n        console.log('Request URL:', req.url);\n        console.log('Request Headers:', req.headers);\n        console.log('Request IP:', req.ip);\n        \n        // Body parsing (requires express.json() middleware)\n        const { name, email, age } = req.body;\n        \n        // Query parameters for debugging/options\n        const { debug, version } = req.query;\n        \n        // Response examples with proper error handling\n        if (debug === 'true') {\n            res.status(200).json({\n                success: true,\n                data: { name, email, age },\n                debug: { \n                    headers: req.headers,\n                    ip: req.ip,\n                    timestamp: new Date().toISOString()\n                }\n            });\n        } else {\n            res.status(201).json({\n                success: true,\n                message: 'User created successfully',\n                data: { name, email, age }\n            });\n        }\n    } catch (error) {\n        console.error('Error processing request:', error);\n        res.status(500).json({\n            success: false,\n            error: 'Internal server error'\n        });\n    }\n});\n\n// Response methods examples\napp.get('/redirect-example', (req, res) =&gt; {\n    res.redirect('/new-location');\n});\n\napp.get('/set-headers', (req, res) =&gt; {\n    res.set({\n        'Content-Type': 'application/json',\n        'X-Custom-Header': 'MyValue',\n        'Cache-Control': 'no-cache'\n    });\n    res.json({ message: 'Custom headers set' });\n});</code></pre>",
            "examples": []
        },
        {
            "id": "topic-4-middleware-concepts",
            "title": "Middleware Concepts",
            "content": "<h3>Express Middleware Mastery</h3><pre class=\"lecture-pre\"><code>/*\nMiddleware: Functions that have access to request, response, and next function\n\nTypes of Middleware:\n1. Application-level middleware\n2. Router-level middleware  \n3. Error-handling middleware\n4. Built-in middleware\n5. Third-party middleware\n\nExecution Order Matters!\n\nHigher Order Functions (HOF) in Middleware:\n• Functions that return other functions\n• Used for configuration (like morgan(&quot;dev&quot;))\n• Enable reusable, configurable middleware\n*/\n\n// Custom middleware example\nconst loggerMiddleware = (req, res, next) =&gt; {\n    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);\n    next(); // Continue to next middleware/route\n};\n\n// HOF Middleware example (configurable)\nconst createAuthMiddleware = (requiredRole = 'user') =&gt; {\n    return (req, res, next) =&gt; {\n        const token = req.headers.authorization;\n        \n        if (!token) {\n            return res.status(401).json({ error: 'No token provided' });\n        }\n        \n        // Validate token and role (simplified)\n        const user = validateToken(token);\n        if (!user || (requiredRole !== 'user' &amp;&amp; user.role !== requiredRole)) {\n            return res.status(403).json({ error: 'Insufficient permissions' });\n        }\n        \n        req.user = user;\n        next();\n    };\n};\n\n// Apply middleware in correct order\napp.use(express.json()); // Built-in - MUST come first for body parsing\napp.use(express.urlencoded({ extended: true })); // URL-encoded data\napp.use(loggerMiddleware); // Custom logging\napp.use('/api/admin', createAuthMiddleware('admin')); // Route-specific with HOF\napp.use('/api/protected', createAuthMiddleware()); // Route-specific\n\n// Error handling middleware (must be last)\napp.use((error, req, res, next) =&gt; {\n    console.error('Error:', error);\n    res.status(500).json({ \n        error: 'Something went wrong!',\n        ...(process.env.NODE_ENV === 'development' &amp;&amp; { stack: error.stack })\n    });\n});\n\n// 404 handler (must be last middleware)\napp.use('*', (req, res) =&gt; {\n    res.status(404).json({ error: 'Route not found' });\n});\n\n// Popular third-party middleware:\n// • cors - Enable CORS\n// • helmet - Security headers  \n// • morgan - HTTP request logger\n// • compression - Response compression\n// • cookie-parser - Parse cookies\n\n// API Logging options:\n// 1. Handmade logger (like above)\n// 2. Morgan: npm install morgan\nconst morgan = require('morgan');\napp.use(morgan('dev')); // Pre-configured logging formats</code></pre>",
            "examples": []
        },
        {
            "id": "topic-5-project-structure-organization",
            "title": "Project Structure & Organization",
            "content": "<h3>Scalable Express Application Architecture</h3><pre class=\"lecture-pre\"><code>/*\nRecommended Project Structure:\nsrc/\n  ├── controllers/     # Route handlers (OOP style)\n  ├── routes/         # Route definitions\n  ├── middlewares/    # Custom middleware functions\n  ├── models/         # Data models and schemas\n  ├── config/         # Configuration files\n  ├── utils/          # Utility functions\n  └── app.js          # Express app setup\n\nBenefits:\n• Better code organization\n• Easier maintenance\n• Separation of concerns\n• Team collaboration\n• Testing simplicity\n*/\n\n// Example of OOP Controller with try-catch\nclass UserController {\n    async getAllUsers(req, res) {\n        try {\n            // Business logic here\n            const users = await UserModel.findAll();\n            res.json({\n                success: true,\n                count: users.length,\n                data: users\n            });\n        } catch (error) {\n            console.error('Get users error:', error);\n            res.status(500).json({\n                success: false,\n                error: 'Failed to fetch users'\n            });\n        }\n    }\n\n    async createUser(req, res) {\n        try {\n            const { name, email, age } = req.body;\n            \n            // Validation\n            if (!name || !email) {\n                return res.status(400).json({\n                    success: false,\n                    error: 'Name and email are required'\n                });\n            }\n\n            const newUser = await UserModel.create({ name, email, age });\n            \n            res.status(201).json({\n                success: true,\n                message: 'User created successfully',\n                data: newUser\n            });\n        } catch (error) {\n            console.error('Create user error:', error);\n            res.status(500).json({\n                success: false,\n                error: 'Failed to create user'\n            });\n        }\n    }\n}\n\n// Route definition example (routes/users.js)\nconst express = require('express');\nconst router = express.Router();\nconst userController = new UserController();\n\nrouter.get('/', userController.getAllUsers.bind(userController));\nrouter.post('/', userController.createUser.bind(userController));\n\nmodule.exports = router;\n\n// Main app.js structure\nconst express = require('express');\nconst app = express();\n\n// Middleware\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\n\n// Routes\napp.use('/api/users', require('./src/routes/users'));\napp.use('/api/products', require('./src/routes/products'));\n\n// Error handling middleware\napp.use(require('./src/middlewares/errorHandler'));\n\nmodule.exports = app;\n\n// Using plop.js for code generation (devDependencies)\n// Why in devDependencies? Only used during development, not in production</code></pre>",
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
