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
            "id": "topic-3-plop-js",
            "title": "Plop.js",
            "content": "<h3>Plop.js - Code Generation</h3><pre class=\"lecture-pre\"><code>/*\nWhy Use Plop.js?\n• Consistent code structure\n• Time-saving automation\n• Team standardization\n• Reduced boilerplate code\n\nSetup:\n1. Install: npm install -D plop\n2. Create plopfile.js in root directory\n3. Define generators for common components\n\nExample plopfile.js:\nmodule.exports = function (plop) {\n    // Controller generator\n    plop.setGenerator('controller', {\n        description: 'Create a new controller',\n        prompts: [{\n            type: 'input',\n            name: 'name',\n            message: 'Controller name (without &quot;Controller&quot; suffix):'\n        }],\n        actions: [{\n            type: 'add',\n            path: 'src/controllers/{{pascalCase name}}Controller.js',\n            templateFile: 'plop-templates/controller.hbs'\n        }]\n    });\n\n    // Route generator\n    plop.setGenerator('route', {\n        description: 'Create a new route file',\n        prompts: [{\n            type: 'input',\n            name: 'name',\n            message: 'Route name (plural):'\n        }],\n        actions: [{\n            type: 'add',\n            path: 'src/routes/{{lowerCase name}}.js',\n            templateFile: 'plop-templates/route.hbs'\n        }]\n    });\n};\n\nExample controller template (plop-templates/controller.hbs):\nclass {{pascalCase name}}Controller {\n    async getAll(req, res) {\n        try {\n            // TODO: Implement get all logic\n            res.json({ success: true, data: [] });\n        } catch (error) {\n            console.error('Error in {{camelCase name}}Controller.getAll:', error);\n            res.status(500).json({ success: false, error: 'Internal server error' });\n        }\n    }\n\n    async getById(req, res) {\n        try {\n            const { id } = req.params;\n            // TODO: Implement get by ID logic\n            res.json({ success: true, data: { id } });\n        } catch (error) {\n            console.error('Error in {{camelCase name}}Controller.getById:', error);\n            res.status(500).json({ success: false, error: 'Internal server error' });\n        }\n    }\n\n    async create(req, res) {\n        try {\n            const data = req.body;\n            // TODO: Implement create logic\n            res.status(201).json({ success: true, data });\n        } catch (error) {\n            console.error('Error in {{camelCase name}}Controller.create:', error);\n            res.status(500).json({ success: false, error: 'Internal server error' });\n        }\n    }\n\n    async update(req, res) {\n        try {\n            const { id } = req.params;\n            const data = req.body;\n            // TODO: Implement update logic\n            res.json({ success: true, data: { id, ...data } });\n        } catch (error) {\n            console.error('Error in {{camelCase name}}Controller.update:', error);\n            res.status(500).json({ success: false, error: 'Internal server error' });\n        }\n    }\n\n    async delete(req, res) {\n        try {\n            const { id } = req.params;\n            // TODO: Implement delete logic\n            res.json({ success: true, message: 'Deleted successfully' });\n        } catch (error) {\n            console.error('Error in {{camelCase name}}Controller.delete:', error);\n            res.status(500).json({ success: false, error: 'Internal server error' });\n        }\n    }\n}\n\nmodule.exports = {{pascalCase name}}Controller;\n\nUsage:\nnpx plop controller\n# Enter: user\n# Generates: UserController.js with all CRUD methods\n\nBenefits:\n• Standardized error handling\n• Consistent method names\n• Pre-built try-catch structure\n• Team alignment\n*/\n</code></pre>",
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
