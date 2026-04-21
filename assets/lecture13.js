const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "Folder Structure, Postman, Plop",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- Request Query\n2- Middleware\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-5-project-structure-organization",
            "title": "Project Structure & Organization",
            "content": "<h3>Scalable Express Application Architecture</h3><pre class=\"lecture-pre\"><code>/*\nRecommended Project Structure:\nsrc/\n  ├── controllers/     # Route handlers (OOP style)\n  ├── routes/         # Route definitions\n  ├── middlewares/    # Custom middleware functions\n  ├── models/         # Data models and schemas\n  ├── config/         # Configuration files\n  ├── utils/          # Utility functions\n  └── app.js          # Express app setup\n\nBenefits:\n• Better code organization\n• Easier maintenance\n• Separation of concerns\n• Team collaboration\n• Testing simplicity\n*/\n\n// Example of OOP Controller with try-catch\nclass UserController {\n    async getAllUsers(req, res) {\n        try {\n            // Business logic here\n            const users = await UserModel.findAll();\n            res.json({\n                success: true,\n                count: users.length,\n                data: users\n            });\n        } catch (error) {\n            console.error('Get users error:', error);\n            res.status(500).json({\n                success: false,\n                error: 'Failed to fetch users'\n            });\n        }\n    }\n\n    async createUser(req, res) {\n        try {\n            const { name, email, age } = req.body;\n            \n            // Validation\n            if (!name || !email) {\n                return res.status(400).json({\n                    success: false,\n                    error: 'Name and email are required'\n                });\n            }\n\n            const newUser = await UserModel.create({ name, email, age });\n            \n            res.status(201).json({\n                success: true,\n                message: 'User created successfully',\n                data: newUser\n            });\n        } catch (error) {\n            console.error('Create user error:', error);\n            res.status(500).json({\n                success: false,\n                error: 'Failed to create user'\n            });\n        }\n    }\n}\n\n// Route definition example (routes/users.js)\nconst express = require('express');\nconst router = express.Router();\nconst userController = new UserController();\n\nrouter.get('/', userController.getAllUsers.bind(userController));\nrouter.post('/', userController.createUser.bind(userController));\n\nmodule.exports = router;\n\n// Main app.js structure\nconst express = require('express');\nconst app = express();\n\n// Middleware\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\n\n// Routes\napp.use('/api/users', require('./src/routes/users'));\napp.use('/api/products', require('./src/routes/products'));\n\n// Error handling middleware\napp.use(require('./src/middlewares/errorHandler'));\n\nmodule.exports = app;\n\n// Using plop.js for code generation (devDependencies)\n// Why in devDependencies? Only used during development, not in production</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-postman",
            "title": "Postman",
            "content": "<h3>Postman Setup &amp; Usage</h3><pre class=\"lecture-pre\"><code>/*\nWhy Postman?\n• API Development &amp; Testing\n• Automated Testing Collections\n• Environment Variables\n• Team Collaboration\n• Documentation Generation\n• Mock Servers\n\nSetup Steps:\n1. Download &amp; Install Postman\n2. Create Workspace for your project\n3. Set up Environment Variables:\n   - base_url: http://localhost:4000\n   - token: (for authentication later)\n4. Create Collections for each resource (Users, Products, etc.)\n\nAdvanced Features:\n• Pre-request Scripts (set variables, generate tokens)\n• Tests (automated validation)\n• Collection Runner (batch testing)\n• Monitoring (scheduled API checks)\n\nExample Test Script in Postman:\n// Check status code is 200\npm.test(&quot;Status code is 200&quot;, function () {\n    pm.response.to.have.status(200);\n});\n\n// Validate response structure\npm.test(&quot;Response has correct structure&quot;, function () {\n    const response = pm.response.json();\n    pm.expect(response).to.have.property('success', true);\n    pm.expect(response).to.have.property('data');\n});\n\nEnvironment Variables Usage:\nconst baseUrl = pm.environment.get(&quot;base_url&quot;);\npm.sendRequest(`${baseUrl}/api/users`, function (err, response) {\n    console.log(response.json());\n});\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-plop-js",
            "title": "Plop.js",
            "content": "<h3>Plop.js - Code Generation</h3><pre class=\"lecture-pre\"><code>/*\nWhy Use Plop.js?\n• Consistent code structure\n• Time-saving automation\n• Team standardization\n• Reduced boilerplate code\n\nSetup:\n1. Install: npm install -D plop\n2. Create plopfile.js in root directory\n3. Define generators for common components\n\nExample plopfile.js:\nmodule.exports = function (plop) {\n    // Controller generator\n    plop.setGenerator('controller', {\n        description: 'Create a new controller',\n        prompts: [{\n            type: 'input',\n            name: 'name',\n            message: 'Controller name (without &quot;Controller&quot; suffix):'\n        }],\n        actions: [{\n            type: 'add',\n            path: 'src/controllers/{{pascalCase name}}Controller.js',\n            templateFile: 'plop-templates/controller.hbs'\n        }]\n    });\n\n    // Route generator\n    plop.setGenerator('route', {\n        description: 'Create a new route file',\n        prompts: [{\n            type: 'input',\n            name: 'name',\n            message: 'Route name (plural):'\n        }],\n        actions: [{\n            type: 'add',\n            path: 'src/routes/{{lowerCase name}}.js',\n            templateFile: 'plop-templates/route.hbs'\n        }]\n    });\n};\n\nExample controller template (plop-templates/controller.hbs):\nclass {{pascalCase name}}Controller {\n    async getAll(req, res) {\n        try {\n            // TODO: Implement get all logic\n            res.json({ success: true, data: [] });\n        } catch (error) {\n            console.error('Error in {{camelCase name}}Controller.getAll:', error);\n            res.status(500).json({ success: false, error: 'Internal server error' });\n        }\n    }\n\n    async getById(req, res) {\n        try {\n            const { id } = req.params;\n            // TODO: Implement get by ID logic\n            res.json({ success: true, data: { id } });\n        } catch (error) {\n            console.error('Error in {{camelCase name}}Controller.getById:', error);\n            res.status(500).json({ success: false, error: 'Internal server error' });\n        }\n    }\n\n    async create(req, res) {\n        try {\n            const data = req.body;\n            // TODO: Implement create logic\n            res.status(201).json({ success: true, data });\n        } catch (error) {\n            console.error('Error in {{camelCase name}}Controller.create:', error);\n            res.status(500).json({ success: false, error: 'Internal server error' });\n        }\n    }\n\n    async update(req, res) {\n        try {\n            const { id } = req.params;\n            const data = req.body;\n            // TODO: Implement update logic\n            res.json({ success: true, data: { id, ...data } });\n        } catch (error) {\n            console.error('Error in {{camelCase name}}Controller.update:', error);\n            res.status(500).json({ success: false, error: 'Internal server error' });\n        }\n    }\n\n    async delete(req, res) {\n        try {\n            const { id } = req.params;\n            // TODO: Implement delete logic\n            res.json({ success: true, message: 'Deleted successfully' });\n        } catch (error) {\n            console.error('Error in {{camelCase name}}Controller.delete:', error);\n            res.status(500).json({ success: false, error: 'Internal server error' });\n        }\n    }\n}\n\nmodule.exports = {{pascalCase name}}Controller;\n\nUsage:\nnpx plop controller\n# Enter: user\n# Generates: UserController.js with all CRUD methods\n\nBenefits:\n• Standardized error handling\n• Consistent method names\n• Pre-built try-catch structure\n• Team alignment\n*/\n</code></pre>",
            "examples": []
        },
        {
            "id": "topic-4-views-mvc-architecture",
            "title": "Views & MVC Architecture",
            "content": "<h3>Server-Side Rendering with Express Templates</h3><pre class=\"lecture-pre\"><code>/*\nMVC Architecture:\n• Model: Data &amp; business logic (Database models)\n• View: Presentation layer (Templates)\n• Controller: Handles requests &amp; coordinates between Model and View\n\nExpress Template Engine Support:\n• EJS (Embedded JavaScript) - HTML-like syntax (recommended for beginners)\n• Pug (formerly Jade) - Indentation-based, concise syntax\n• Handlebars - Mustache-like syntax with logic\n• Nunjucks - Jinja2-inspired, powerful inheritance\n\nSetup Steps for EJS:\n*/\n\n// 1. Install EJS\n// npm install ejs\n\n// 2. Configure Express to use EJS\nconst express = require('express');\nconst app = express();\n\n// Set views directory and engine\napp.set('views', './src/views'); \napp.set('view engine', 'ejs');\n\n// 3. Serve static files (CSS, JS, images)\napp.use(express.static('public'));\n\n// 4. Create views structure:\n// views/\n//   ├── partials/\n//   │   ├── header.ejs\n//   │   ├── footer.ejs\n//   │   ├── head.ejs\n//   │   └── navigation.ejs\n//   ├── pages/\n//   │   ├── home.ejs\n//   │   ├── users.ejs\n//   │   └── products.ejs\n//   └── layouts/\n//       └── main.ejs\n\n// Example EJS Layout (layouts/main.ejs)\n&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n    &lt;%- include('../partials/head', { title: pageTitle || 'Default Title' }) %&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;%- include('../partials/header') %&gt;\n    \n    &lt;main class=&quot;container&quot;&gt;\n        &lt;%- body %&gt;\n    &lt;/main&gt;\n\n    &lt;%- include('../partials/footer') %&gt;\n    \n&lt;/body&gt;\n&lt;/html&gt;\n\n// Example partial (partials/head.ejs)\n&lt; meta charset=&quot;UTF-8&quot;&gt;\n&lt; meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n&lt;title&gt;&lt;%= title %&gt;&lt;/title&gt;&lt;link rel=&quot;manifest&quot; href=&quot;./manifest.json&quot; /&gt;\n    &lt;link rel=&quot;apple-touch-icon&quot; href=&quot;./logo.jpg&quot;&gt;\n    &lt;meta name=&quot;apple-mobile-web-app-status-bar&quot; content=&quot;#aa7700&quot;&gt;\n    &lt;meta name=&quot;theme-color&quot; content=&quot;#b21f1f&quot;&gt;\n&lt;link rel=&quot;stylesheet&quot; href=&quot;/css/style.css&quot;&gt;\n\n// Example page template (pages/home.ejs)\n&lt;h1&gt;Welcome to &lt;%= appName %&gt;&lt;/h1&gt;\n\n&lt;% if (userLoggedIn) { %&gt;\n    &lt;div class=&quot;welcome-message&quot;&gt;\n        &lt;p&gt;Hello &lt;strong&gt;&lt;%= username %&gt;&lt;/strong&gt;!&lt;/p&gt;\n        &lt;a href=&quot;/dashboard&quot; class=&quot;btn&quot;&gt;Go to Dashboard&lt;/a&gt;\n    &lt;/div&gt;\n&lt;% } else { %&gt;\n    &lt;div class=&quot;auth-prompt&quot;&gt;\n        &lt;p&gt;Please log in to continue&lt;/p&gt;\n        &lt;a href=&quot;/login&quot; class=&quot;btn&quot;&gt;Login&lt;/a&gt;\n        &lt;a href=&quot;/register&quot; class=&quot;btn btn-secondary&quot;&gt;Register&lt;/a&gt;\n    &lt;/div&gt;\n&lt;% } %&gt;\n\n&lt;div class=&quot;products-grid&quot;&gt;\n    &lt;h2&gt;Featured Products&lt;/h2&gt;\n    &lt;div class=&quot;products-list&quot;&gt;\n        &lt;% products.forEach(product =&gt; { %&gt;\n            &lt;div class=&quot;product-card&quot;&gt;\n                &lt;h3&gt;&lt;%= product.name %&gt;&lt;/h3&gt;\n                &lt;p class=&quot;price&quot;&gt;$&lt;%= product.price.toFixed(2) %&gt;&lt;/p&gt;\n                &lt;p class=&quot;description&quot;&gt;&lt;%= product.description %&gt;&lt;/p&gt;\n                &lt;% if (product.onSale) { %&gt;\n                    &lt;span class=&quot;sale-badge&quot;&gt;On Sale!&lt;/span&gt;\n                &lt;% } %&gt;\n            &lt;/div&gt;\n        &lt;% }) %&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n// Controller rendering the view\napp.get('/', (req, res) =&gt; {\n    res.render('pages/home', {\n        title: 'Home Page',\n        appName: 'My Express Store',\n        userLoggedIn: true,\n        username: 'JohnDoe',\n        products: [\n            { \n                name: 'Gaming Laptop', \n                price: 1299.99, \n                description: 'High-performance gaming laptop',\n                onSale: false\n            },\n            { \n                name: 'Wireless Mouse', \n                price: 29.99, \n                description: 'Ergonomic wireless mouse',\n                onSale: true\n            },\n            { \n                name: 'Mechanical Keyboard', \n                price: 89.99, \n                description: 'RGB mechanical keyboard',\n                onSale: false\n            }\n        ]\n    });\n});\n\n// Advanced EJS Features:\n\n// 1. Includes with parameters\n&lt;%- include('partials/product-card', { product: item, showDetails: true }) %&gt;\n\n// 2. Conditional rendering\n&lt;% if (user.role === 'admin') { %&gt;\n    &lt;button class=&quot;admin-btn&quot;&gt;Admin Panel&lt;/button&gt;\n&lt;% } %&gt;\n\n// 3. Loops with index\n&lt;% users.forEach((user, index) =&gt; { %&gt;\n    &lt;tr class=&quot;&lt;%= index % 2 === 0 ? 'even' : 'odd' %&gt;&quot;&gt;\n        &lt;td&gt;&lt;%= user.name %&gt;&lt;/td&gt;\n        &lt;td&gt;&lt;%= user.email %&gt;&lt;/td&gt;\n    &lt;/tr&gt;\n&lt;% }) %&gt;\n\n// 4. Using JavaScript functions\n&lt;% const formatDate = (date) =&gt; new Date(date).toLocaleDateString(); %&gt;\n&lt;p&gt;Created: &lt;%= formatDate(post.createdAt) %&gt;&lt;/p&gt;\n\n// For Handlebars users (alternative template engine):\n// const hbs = require('hbs');\n// hbs.registerHelper('uppercase', (str) =&gt; str.toUpperCase());\n// hbs.registerHelper('eq', (a, b) =&gt; a === b);\n\n// Usage in Handlebars: {{uppercase name}}\n\n// Benefits of Server-Side Rendering:\n// • SEO friendly\n// • Fast initial page load\n// • Consistent user experience\n// • Better performance on low-powered devices\n</code></pre>",
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
