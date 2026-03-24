const courseData = {
    "courseInfo": {
        "name": "Focal X V10 - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "Backend Concepts & API Theory",
    "topics": [
        {
            "id": "topic-0-what-is-backend",
            "title": "What is Backend?",
            "content": "<h3>Backend Development Explained</h3><pre class=\"lecture-pre\"><code>// Backend Development: The &quot;Server-Side&quot; of Applications\n\n// Frontend (Client-Side)         Backend (Server-Side)\n// - What users see               - What users DON'T see\n// - User interface               - Business logic\n// - HTML, CSS, JavaScript        - Node.js, Python, Java, etc.\n// - Browser runs                 - Server runs\n\n// Backend Responsibilities:\n// 1. Data storage &amp; management\n// 2. Business logic processing\n// 3. User authentication &amp; authorization\n// 4. Server-side validation\n// 5. Communication with databases\n// 6. File handling &amp; processing\n// 7. API creation &amp; management\n\n// Example: Online Shopping\n// Frontend: Product images, buttons, forms\n// Backend: User accounts, payment processing, order tracking, inventory management\n\nconsole.log(&quot;Welcome to Backend Development!&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-client-server",
            "title": "Client-Server",
            "content": "<h3>Client-Server Architecture</h3><pre class=\"lecture-pre\"><code>// Client-Server Model: The Foundation of Web\n\n// Client (Frontend)                  Server (Backend)\n// - Makes REQUESTS                    - Receives requests\n// - Browser, Mobile App, Postman      - Processes requests\n// - Displays data                     - Sends RESPONSES\n//                                      - Stores/retrieves data\n\n// Communication Flow:\n// 1. Client sends request → Server\n// 2. Server processes request\n// 3. Server sends response → Client\n// 4. Client displays response\n\n// Analogy: Restaurant\n// Customer (Client)   →   Waiter (API)   →   Kitchen (Server)\n\n// Types of Clients:\n// - Web browsers (Chrome, Firefox)\n// - Mobile apps (iOS, Android)\n// - Desktop applications\n// - IoT devices\n// - Other servers (microservices)\n\n// Types of Servers:\n// - Web servers (Apache, Nginx)\n// - Application servers (Node.js, Django)\n// - Database servers (MySQL, MongoDB)\n// - File servers\n\nconsole.log(&quot;Client: I need data!&quot;);\nconsole.log(&quot;Server: Here's your data!&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-http-protocol",
            "title": "HTTP Protocol",
            "content": "<h3>HTTP - The Language of the Web</h3><pre class=\"lecture-pre\"><code>// HTTP (HyperText Transfer Protocol)\n// The foundation of data communication on the web\n\n// HTTP Methods (CRUD Operations):\n// GET    - Read data (Safe, Idempotent)\n// POST   - Create data (Not idempotent)\n// PUT    - Update/replace data (Idempotent)\n// PATCH  - Partial update (Not idempotent)\n// DELETE - Remove data (Idempotent)\n\n// HTTP Status Codes:\n// 1xx - Informational (100 Continue)\n// 2xx - Success (200 OK, 201 Created, 204 No Content)\n// 3xx - Redirection (301 Moved, 304 Not Modified)\n// 4xx - Client Error (400 Bad Request, 401 Unauthorized, 404 Not Found)\n// 5xx - Server Error (500 Internal Server Error, 502 Bad Gateway)\n\n// HTTP Request Structure:\n// GET /api/users HTTP/1.1\n// Host: api.example.com\n// Content-Type: application/json\n// Authorization: Bearer token123\n\n// HTTP Response Structure:\n// HTTP/1.1 200 OK\n// Content-Type: application/json\n// Date: Wed, 11 Dec 2024 10:00:00 GMT\n// \n// {\n//   &quot;data&quot;: &quot;Hello World&quot;\n// }\n\n// Key Headers:\n// - Content-Type: Format of data (JSON, HTML, XML)\n// - Authorization: Authentication tokens\n// - Accept: What client can accept\n// - User-Agent: Client information\n\nconsole.log(&quot;HTTP: The language servers and clients speak!&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-what-are-apis",
            "title": "What are APIs?",
            "content": "<h3>APIs Explained Simply</h3><pre class=\"lecture-pre\"><code>// API = Application Programming Interface\n\n// Simple Definition:\n// A set of rules that allows different software applications to communicate.\n\n// Restaurant Analogy:\n// Menu = API Documentation\n// Order = API Request\n// Food = API Response\n// Kitchen = Server/Business Logic\n\n// Real-World Examples:\n// 1. Weather App → Weather API → Gets weather data\n// 2. Payment App → Bank API → Processes payment\n// 3. Social Media App → Facebook API → Posts content\n\n// Types of APIs:\n// 1. Web APIs (HTTP APIs) - Most common for web\n// 2. Library APIs (SDKs) - Code libraries\n// 3. Operating System APIs - System functions\n// 4. Database APIs - Database access\n\n// Why APIs are Important:\n// - Enable software communication\n// - Allow building on existing services\n// - Facilitate microservices architecture\n// - Enable mobile app development\n// - Allow third-party integrations\n\n// Example API Request:\n// GET https://api.weather.com/forecast?city=Damascus\n\n// Example API Response:\n// {\n//   &quot;city&quot;: &quot;Damascus&quot;,\n//   &quot;temperature&quot;: &quot;22°C&quot;,\n//   &quot;condition&quot;: &quot;Sunny&quot;\n// }\n\nconsole.log(&quot;APIs: The bridges between applications!&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-4-apis-http-methods",
            "title": "APIs & HTTP Methods",
            "content": "<h3>Understanding APIs and Web Communication</h3><pre class=\"lecture-pre\"><code># API: Application Programming Interface\n\n## What is an API?\n- Like a waiter in a restaurant: You (the application) give your order to the waiter (the API) who delivers it to the kitchen (the server) and brings back the result\n- A mediator for communication between different applications\n- A set of rules that govern how software programs communicate with each other\n\n## Backend Role (Server)\nThe backend works like the kitchen in a restaurant:\n1. Receives requests - Like receiving customer orders\n2. Applies rules - Validates data and prevents errors\n3. Handles database - Stores and retrieves information\n4. Verifies identity - Checks user permissions for actions\n5. Sends results - Provides the requested data\n\n## Frontend Role (User Interface)\nThe frontend works like the menu and ordering system:\n1. Displays data - Like showing the menu\n2. Sends user requests - Like ordering a specific meal\n3. Updates interface - Shows changes immediately\n4. Handles user interaction - Receives clicks and inputs\n\n# Request Components\n\n## Request Structure:\nRequest Method + URL + Headers + Body (optional)\n\n### 1. HTTP Methods (Actions)\nGET - Retrieve data (like: asking for a menu)\nPOST - Add new data (like: ordering a new meal)\nPUT - Update existing data (like: modifying an order)\nDELETE - Delete data (like: canceling an order)\n\n### 2. URL (Address)\n- Like a home address or table number in a restaurant\n- Specifies the location you want to access\n- Examples:\n  - `/api/products` - All products\n  - `/api/products/1` - Product number 1\n  - `/api/products?category=electronics` - Only electronics products\n\n### 3. Headers\n- Metadata about the request\n- Like additional instructions: &quot;Meal for diabetic person&quot;, &quot;Delivery required&quot;\n- Examples:\n  - `Content-Type`: Data type (Arabic, English, JSON)\n  - `Authorization`: ID card or permission\n  - `User-Agent`: Type of device used\n\n### 4. Body\n- The actual data being sent\n- Like order details: &quot;Large pizza, drink, salad&quot;\n- Used with POST and PUT requests\n\n# Response Components\n\n## Response Structure:\nStatus Code + Headers + Data\n\n### Response Examples:\n- Success: 200 - With product list\n- Created: 201 - With new product data\n- Error: 404 - Product not found\n- Permission Error: 401 - Login required\n\n# HTTP Methods Explained with Life Examples\n\n## GET - Read Data\nLike: Asking for a restaurant menu\nRequest: &quot;I want the menu&quot;\nResponse: Complete menu list\n\n## POST - Create New Data\nLike: Ordering a new meal\nRequest: &quot;I want a large pizza&quot;\nResponse: &quot;Your order number 5 has been received&quot;\n\n## PUT - Update Data\nLike: Modifying an order\nRequest: &quot;I want to change the pizza to medium&quot;\nResponse: &quot;Order 5 has been modified&quot;\n\n## DELETE - Delete Data\nLike: Canceling an order\nRequest: &quot;I want to cancel order 5&quot;\nResponse: &quot;Order 5 has been canceled&quot;\n\n# Status Codes\n\n## 100-199: Informational\n- Like: &quot;Preparing&quot;, &quot;Please wait&quot;\n\n## 200-299: Success ✅\n- 200 OK - Operation completed successfully\n- 201 Created - New item created successfully\n- 204 No Content - Success but no content to return\n\n## 300-399: Redirects 🔄\n- 301 Moved - Content moved to another location\n- 304 Not Modified - Content hasn't changed (like using cached version)\n\n## 400-499: Client Errors ❌\n- 400 Bad Request - Request not understood (like: incomplete order)\n- 401 Unauthorized - Login required\n- 403 Forbidden - Access denied (like: employee trying to access manager data)\n- 404 Not Found - Content doesn't exist\n- 409 Conflict - Conflict (like: trying to register an existing email)\n\n## 500-599: Server Errors 🚨\n- 500 Internal Error - Server error (like: database malfunction)\n- 503 Service Unavailable - Service not available (like: maintenance)\n\n# Complete Life Example\n\n## Ordering from an Online Store:\n\n### 1. User Opens the Store (Frontend)\n- Displays product list (GET request)\n- Clicks &quot;Add to Cart&quot; (POST request)\n- Modifies quantity (PUT request)\n- Deletes product (DELETE request)\n\n### 2. The Store (Backend)\n- Receives requests and validates them\n- Checks product availability in inventory\n- Calculates final price\n- Sends order confirmation\n\n### 3. Communication Between Them:\nFrontend: &quot;I want product number 123&quot; (GET)\nBackend: &quot;Here is product 123&quot; (200)\n\nFrontend: &quot;I want to buy product 123&quot; (POST)\nBackend: &quot;Operation completed successfully&quot; (201)\n\nFrontend: &quot;I want to cancel the order&quot; (DELETE)\nBackend: &quot;Order canceled&quot; (200)\n\n# Summary\nAPIs are the communication bridge between user interface and server, working like an ordering system in a restaurant where:\n- Frontend is the customer who places orders\n- API is the waiter who delivers orders\n- Backend is the kitchen that prepares orders\n\nEvery request has a method (GET, POST, PUT, DELETE) and every response has a status (200, 404, 500) that tells us the operation result.</code></pre><table class=\"comparison-table\"><thead><tr><th>Aspect</th><th>Headers</th><th>Body</th></tr></thead><tbody><tr><td>Purpose</td><td>Metadata about the request</td><td>Actual data</td></tr><tr><td>Content</td><td>Data type, permissions</td><td>Products, users, orders</td></tr><tr><td>Usage</td><td>Present in every request</td><td>Only when needed</td></tr><tr><td>Life Example</td><td>Delivery instructions, meal type</td><td>The actual meal</td></tr></tbody></table>",
            "examples": []
        },
        {
            "id": "topic-5-json-format",
            "title": "JSON Format",
            "content": "<h3>JSON - JavaScript Object Notation</h3><pre class=\"lecture-pre\"><code>// JSON = JavaScript Object Notation\n// A lightweight data format for exchanging data\n\n// Why JSON?\n// - Human readable and writable\n// - Machine parsable\n// - Language independent\n// - Supported by all modern programming languages\n\n// JSON Syntax Rules:\n// - Data is in key/value pairs\n// - Keys must be strings (in double quotes)\n// - Values can be: string, number, object, array, boolean, null\n// - Data separated by commas\n// - Curly braces hold objects {}\n// - Square brackets hold arrays []\n\n// Valid JSON Example:\n{\n  &quot;name&quot;: &quot;Moones&quot;,\n  &quot;age&quot;: 30,\n  &quot;isInstructor&quot;: true,\n  &quot;courses&quot;: [&quot;Node.js&quot;, &quot;JavaScript&quot;, &quot;React&quot;],\n  &quot;address&quot;: {\n    &quot;city&quot;: &quot;Damascus&quot;,\n    &quot;country&quot;: &quot;Syria&quot;\n  }\n}\n\n// Common Mistakes:\n// BAD:  { name: &quot;Moones&quot; }          // Keys need quotes\n// BAD:  { 'name': 'Moones' }        // Must use double quotes\n// BAD:  { &quot;age&quot;: undefined }        // undefined not valid in JSON\n// GOOD: { &quot;name&quot;: &quot;Moones&quot; }\n\n// Working with JSON in JavaScript:\nconst user = {\n  name: &quot;Moones&quot;,\n  age: 30\n};\n\n// Convert JavaScript object to JSON string\nconst jsonString = JSON.stringify(user);\nconsole.log(jsonString); // '{&quot;name&quot;:&quot;Moones&quot;,&quot;age&quot;:30}'\n\n// Convert JSON string to JavaScript object\nconst parsedObject = JSON.parse(jsonString);\nconsole.log(parsedObject.name); // 'Moones'\n\n// JSON vs JavaScript Object:\n// JSON (for data exchange)     JavaScript Object (for programming)\n// Keys in quotes               Keys without quotes OK\n// No functions                 Can have functions\n// No undefined                 Can have undefined\n// No comments                  Can have comments\n\nconsole.log(&quot;JSON: The universal language for data exchange!&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-6-middlewares",
            "title": "Middlewares",
            "content": "<h3>Middleware - The Processing Layer</h3><pre class=\"lecture-pre\"><code>// Middleware: Software that sits between client and server\n\n// Simple Analogy:\n// Request → Security Check (Middleware) → Processing → Response\n// Like airport security before boarding\n\n// What Middleware Does:\n// 1. Intercepts incoming requests\n// 2. Performs operations\n// 3. Passes request to next middleware/route\n// 4. Can modify request/response\n\n// Common Middleware Examples:\n// 1. Authentication (Is user logged in?)\n// 2. Logging (Log all requests)\n// 3. Validation (Check data format)\n// 4. Compression (Compress responses)\n// 5. CORS (Cross-Origin Resource Sharing)\n// 6. Rate Limiting (Prevent abuse)\n\n// Middleware Flow in Express.js:\n// Request → Middleware 1 → Middleware 2 → Route Handler → Response\n//        (Logging)      (Auth Check)     (Process Data)\n\n// Express.js Middleware Example:\nconst express = require('express');\nconst app = express();\n\n// Logger Middleware\napp.use((req, res, next) =&gt; {\n  console.log(`${req.method} ${req.url} - ${new Date()}`);\n  next(); // Pass to next middleware\n});\n\n// Authentication Middleware\napp.use('/api', (req, res, next) =&gt; {\n  const token = req.headers.authorization;\n  if (!token) {\n    return res.status(401).json({ error: 'No token provided' });\n  }\n  next(); // User is authenticated\n});\n\n// Route Handler\napp.get('/api/users', (req, res) =&gt; {\n  res.json({ users: ['Moones', 'Ali', 'Sarah'] });\n});\n\n// Types of Middleware:\n// 1. Application-level (app.use())\n// 2. Router-level (router.use())\n// 3. Error-handling (app.use(err, req, res, next))\n// 4. Built-in (express.json(), express.static())\n// 5. Third-party (cors, helmet, morgan)\n\n// Why Use Middleware?\n// - Reusable code\n// - Separation of concerns\n// - Easier testing\n// - Better error handling\n// - Security enhancement\n\nconsole.log(&quot;Middleware: The gatekeepers and processors of your app!&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-7-api-lifecycle",
            "title": "API Lifecycle",
            "content": "<h3>Complete API Request-Response Flow</h3><pre class=\"lecture-pre\"><code>// Complete Journey of an API Request:\n\n// 1. Client Makes Request\n// Browser/App → GET https://api.example.com/users\n\n// 2. DNS Resolution\n// api.example.com → 192.168.1.1\n\n// 3. Request Reaches Server\n// Server receives HTTP request\n\n// 4. Middleware Processing\n// - Security checks\n// - Authentication\n// - Logging\n// - Rate limiting\n\n// 5. Route Matching\n// GET /users → Users Controller\n\n// 6. Business Logic\n// - Validate data\n// - Process request\n// - Database operations\n\n// 7. Database Interaction\n// - Query database\n// - Get/update data\n\n// 8. Response Preparation\n// - Format data as JSON\n// - Set HTTP status\n// - Add headers\n\n// 9. Response Sent Back\n// Server → Client (JSON response)\n\n// 10. Client Processes Response\n// - Parse JSON\n// - Update UI\n// - Handle errors\n\n// Example Complete Flow:\n// 1. User clicks &quot;Load Users&quot; in app\n// 2. App sends: GET /api/users\n// 3. Server logs request\n// 4. Server checks authentication token\n// 5. Server queries database: SELECT * FROM users\n// 6. Database returns user list\n// 7. Server formats as JSON\n// 8. Server sends: 200 OK + JSON data\n// 9. App receives data and displays users\n\n// Tools for Testing APIs:\n// - Postman (API testing)\n// - cURL (Command line)\n// - Insomnia (Alternative to Postman)\n// - Browser DevTools (Network tab)\n\nconsole.log(&quot;API Flow: From request to response!&quot;);</code></pre>",
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
