const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "ExpressJS (Setup, Routing, HTTP Methods, Request & Response)",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- NodeJS\n2- Modules\n3- OS Module\n4- Path Module \n5- FS Module\n6- HTTP Module\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-introduction-to-express-js",
            "title": "Introduction to Express.js",
            "content": "<h3>Why Express.js?</h3><pre class=\"lecture-pre\"><code>/*\nExpress.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.\n\nWhy Express.js over HTTP module?\n• Faster development\n• Built-in middleware support\n• Robust routing\n• Better error handling\n• Large ecosystem of packages\n• Community support\n\nThink of it like this:\n• HTTP module = Building a car from scratch\n• Express.js = Using a car manufacturing framework\n\nPopular Express-based frameworks:\n• Nest.js - Enterprise-grade\n• Next.js - React-based SSR\n• Fastify - Performance focused\n*/\n\n// Basic comparison: HTTP vs Express\nconst http = require('http');\nconst express = require('express');\n\n// HTTP module approach\nconst httpServer = http.createServer((req, res) =&gt; {\n    if (req.url === '/api/users' &amp;&amp; req.method === 'GET') {\n        res.writeHead(200, {'Content-Type': 'application/json'});\n        res.end(JSON.stringify({users: []}));\n    }\n});\n\n// Express approach\nconst app = express();\napp.get('/api/users', (req, res) =&gt; {\n    res.json({users: []});\n});</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-express-server-setup",
            "title": "Express Server Setup",
            "content": "<h3>Creating Your First Express Server</h3><pre class=\"lecture-pre\"><code>/*\nBasic Express Server Structure:\n1. Import Express\n2. Create app instance\n3. Configure middleware\n4. Define routes\n5. Start server\n*/\n\nconst express = require('express');\nconst app = express();\n\n// Middleware configuration\napp.use(express.json()); // Parse JSON bodies\napp.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies\n\n// Basic route\napp.get('/', (req, res) =&gt; {\n    res.send('Hello World!');\n});\n\n// Health check endpoint\napp.get('/health', (req, res) =&gt; {\n    res.status(200).json({ \n        status: 'OK', \n        timestamp: new Date().toISOString(),\n        uptime: process.uptime()\n    });\n});\n\n// Server configuration\nconst PORT = process.env.PORT || 4000;\nconst HOST = process.env.HOST || 'localhost';\n\napp.listen(PORT, HOST, () =&gt; {\n    console.log(`Server running at http://${HOST}:${PORT}`);\n});\n\n/*\nEnvironment Variables (.env file):\nPORT=4000\nHOST=localhost\nNODE_ENV=development\n\nAccess with: process.env.PORT\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-4-routing-http-methods",
            "title": "Routing & HTTP Methods",
            "content": "<h3>Complete Routing Guide</h3><pre class=\"lecture-pre\"><code>/*\nExpress Routing Methods:\n• GET    - Retrieve data\n• POST   - Create data\n• PUT    - Update entire resource\n• PATCH  - Partial update\n• DELETE - Remove data\n• ALL    - Handle all methods\n\nRoute Parameters:\n• :id - Dynamic segments\n• Query strings - ?key=value\n• Request body - JSON/form data\n*/\n\n// Route parameters\napp.get('/users/:userId/posts/:postId', (req, res) =&gt; {\n    const { userId, postId } = req.params;\n    res.json({ userId, postId });\n});\n\n// Query parameters\napp.get('/search', (req, res) =&gt; {\n    const { q, page, limit } = req.query;\n    res.json({ query: q, page: page || 1, limit: limit || 10 });\n});\n\n// All HTTP methods demonstration\napp.route('/api/products')\n    .get((req, res) =&gt; {\n        // Get all products\n        res.json({ message: 'GET all products' });\n    })\n    .post((req, res) =&gt; {\n        // Create new product\n        const product = req.body;\n        res.status(201).json({ message: 'Product created', product });\n    })\n    .put((req, res) =&gt; {\n        // Update all products (rare)\n        res.json({ message: 'All products updated' });\n    });\n\napp.route('/api/products/:id')\n    .get((req, res) =&gt; {\n        const { id } = req.params;\n        res.json({ message: `GET product ${id}` });\n    })\n    .put((req, res) =&gt; {\n        const { id } = req.params;\n        const updates = req.body;\n        res.json({ message: `PUT product ${id}`, updates });\n    })\n    .patch((req, res) =&gt; {\n        const { id } = req.params;\n        const partialUpdates = req.body;\n        res.json({ message: `PATCH product ${id}`, partialUpdates });\n    })\n    .delete((req, res) =&gt; {\n        const { id } = req.params;\n        res.json({ message: `DELETE product ${id}` });\n    });</code></pre>",
            "examples": []
        },
        {
            "id": "topic-5-request-response-objects",
            "title": "Request & Response Objects",
            "content": "<h3>Mastering Request &amp; Response</h3><pre class=\"lecture-pre\"><code>/*\nRequest Object Properties:\n• req.params - Route parameters\n• req.query - URL query parameters\n• req.body - Request body (needs middleware)\n• req.headers - HTTP headers\n• req.method - HTTP method\n• req.url - Request URL\n• req.ip - Client IP address\n\nResponse Object Methods:\n• res.json() - Send JSON response\n• res.send() - Send various types\n• res.status() - Set status code\n• res.redirect() - Redirect request\n• res.render() - Render view template\n• res.set() - Set headers\n• res.cookie() - Set cookies\n*/\n\n// Request object deep dive\napp.post('/api/users', (req, res) =&gt; {\n    console.log('Request Method:', req.method);\n    console.log('Request URL:', req.url);\n    console.log('Request Headers:', req.headers);\n    console.log('Request IP:', req.ip);\n    \n    // Body parsing (requires express.json() middleware)\n    const { name, email, age } = req.body;\n    \n    // Query parameters\n    const { debug, version } = req.query;\n    \n    // Response examples\n    if (debug === 'true') {\n        res.status(200).json({\n            success: true,\n            data: { name, email, age },\n            debug: { \n                headers: req.headers,\n                ip: req.ip,\n                timestamp: new Date().toISOString()\n            }\n        });\n    } else {\n        res.status(201).json({\n            success: true,\n            message: 'User created successfully',\n            data: { name, email, age }\n        });\n    }\n});\n\n// Response methods examples\napp.get('/redirect-example', (req, res) =&gt; {\n    res.redirect('/new-location');\n});\n\napp.get('/set-headers', (req, res) =&gt; {\n    res.set({\n        'Content-Type': 'application/json',\n        'X-Custom-Header': 'MyValue',\n        'Cache-Control': 'no-cache'\n    });\n    res.json({ message: 'Custom headers set' });\n});\n\napp.get('/download', (req, res) =&gt; {\n    res.download('./file.pdf'); // Force file download\n});\n\napp.get('/jsonp', (req, res) =&gt; {\n    res.jsonp({ message: 'JSONP response' }); // JSON with padding\n});</code></pre>",
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
