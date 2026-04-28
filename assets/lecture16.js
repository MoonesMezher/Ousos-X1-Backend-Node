const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "Postman, Databases, MongoDB",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- Folder Structure\n2- MVC\n 3- Plop*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-postman",
            "title": "Postman",
            "content": "<h3>Postman Setup &amp; Usage</h3><pre class=\"lecture-pre\"><code>/*\nWhy Postman?\n• API Development &amp; Testing\n• Automated Testing Collections\n• Environment Variables\n• Team Collaboration\n• Documentation Generation\n• Mock Servers\n\nSetup Steps:\n1. Download &amp; Install Postman\n2. Create Workspace for your project\n3. Set up Environment Variables:\n   - base_url: http://localhost:4000\n   - token: (for authentication later)\n4. Create Collections for each resource (Users, Products, etc.)\n\nAdvanced Features:\n• Pre-request Scripts (set variables, generate tokens)\n• Tests (automated validation)\n• Collection Runner (batch testing)\n• Monitoring (scheduled API checks)\n\nExample Test Script in Postman:\n// Check status code is 200\npm.test(&quot;Status code is 200&quot;, function () {\n    pm.response.to.have.status(200);\n});\n\n// Validate response structure\npm.test(&quot;Response has correct structure&quot;, function () {\n    const response = pm.response.json();\n    pm.expect(response).to.have.property('success', true);\n    pm.expect(response).to.have.property('data');\n});\n\nEnvironment Variables Usage:\nconst baseUrl = pm.environment.get(&quot;base_url&quot;);\npm.sendRequest(`${baseUrl}/api/users`, function (err, response) {\n    console.log(response.json());\n});\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-4-views-mvc-architecture",
            "title": "Views & MVC Architecture",
            "content": "<h3>Server-Side Rendering with Express Templates</h3><pre class=\"lecture-pre\"><code>/*\nMVC Architecture:\n• Model: Data &amp; business logic (Database models)\n• View: Presentation layer (Templates)\n• Controller: Handles requests &amp; coordinates between Model and View\n\nExpress Template Engine Support:\n• EJS (Embedded JavaScript) - HTML-like syntax (recommended for beginners)\n• Pug (formerly Jade) - Indentation-based, concise syntax\n• Handlebars - Mustache-like syntax with logic\n• Nunjucks - Jinja2-inspired, powerful inheritance\n\nSetup Steps for EJS:\n*/\n\n// 1. Install EJS\n// npm install ejs\n\n// 2. Configure Express to use EJS\nconst express = require('express');\nconst app = express();\n\n// Set views directory and engine\napp.set('views', './src/views'); \napp.set('view engine', 'ejs');\n\n// 3. Serve static files (CSS, JS, images)\napp.use(express.static('public'));\n\n// 4. Create views structure:\n// views/\n//   ├── partials/\n//   │   ├── header.ejs\n//   │   ├── footer.ejs\n//   │   ├── head.ejs\n//   │   └── navigation.ejs\n//   ├── pages/\n//   │   ├── home.ejs\n//   │   ├── users.ejs\n//   │   └── products.ejs\n//   └── layouts/\n//       └── main.ejs\n\n// Example EJS Layout (layouts/main.ejs)\n&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n    &lt;%- include('../partials/head', { title: pageTitle || 'Default Title' }) %&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;%- include('../partials/header') %&gt;\n    \n    &lt;main class=&quot;container&quot;&gt;\n        &lt;%- body %&gt;\n    &lt;/main&gt;\n\n    &lt;%- include('../partials/footer') %&gt;\n    \n&lt;/body&gt;\n&lt;/html&gt;\n\n// Example partial (partials/head.ejs)\n&lt; meta charset=&quot;UTF-8&quot;&gt;\n&lt; meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n&lt;title&gt;&lt;%= title %&gt;&lt;/title&gt;&lt;link rel=&quot;manifest&quot; href=&quot;./manifest.json&quot; /&gt;\n    &lt;link rel=&quot;apple-touch-icon&quot; href=&quot;./logo.jpg&quot;&gt;\n    &lt;meta name=&quot;apple-mobile-web-app-status-bar&quot; content=&quot;#aa7700&quot;&gt;\n    &lt;meta name=&quot;theme-color&quot; content=&quot;#b21f1f&quot;&gt;\n&lt;link rel=&quot;stylesheet&quot; href=&quot;/css/style.css&quot;&gt;\n\n// Example page template (pages/home.ejs)\n&lt;h1&gt;Welcome to &lt;%= appName %&gt;&lt;/h1&gt;\n\n&lt;% if (userLoggedIn) { %&gt;\n    &lt;div class=&quot;welcome-message&quot;&gt;\n        &lt;p&gt;Hello &lt;strong&gt;&lt;%= username %&gt;&lt;/strong&gt;!&lt;/p&gt;\n        &lt;a href=&quot;/dashboard&quot; class=&quot;btn&quot;&gt;Go to Dashboard&lt;/a&gt;\n    &lt;/div&gt;\n&lt;% } else { %&gt;\n    &lt;div class=&quot;auth-prompt&quot;&gt;\n        &lt;p&gt;Please log in to continue&lt;/p&gt;\n        &lt;a href=&quot;/login&quot; class=&quot;btn&quot;&gt;Login&lt;/a&gt;\n        &lt;a href=&quot;/register&quot; class=&quot;btn btn-secondary&quot;&gt;Register&lt;/a&gt;\n    &lt;/div&gt;\n&lt;% } %&gt;\n\n&lt;div class=&quot;products-grid&quot;&gt;\n    &lt;h2&gt;Featured Products&lt;/h2&gt;\n    &lt;div class=&quot;products-list&quot;&gt;\n        &lt;% products.forEach(product =&gt; { %&gt;\n            &lt;div class=&quot;product-card&quot;&gt;\n                &lt;h3&gt;&lt;%= product.name %&gt;&lt;/h3&gt;\n                &lt;p class=&quot;price&quot;&gt;$&lt;%= product.price.toFixed(2) %&gt;&lt;/p&gt;\n                &lt;p class=&quot;description&quot;&gt;&lt;%= product.description %&gt;&lt;/p&gt;\n                &lt;% if (product.onSale) { %&gt;\n                    &lt;span class=&quot;sale-badge&quot;&gt;On Sale!&lt;/span&gt;\n                &lt;% } %&gt;\n            &lt;/div&gt;\n        &lt;% }) %&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n// Controller rendering the view\napp.get('/', (req, res) =&gt; {\n    res.render('pages/home', {\n        title: 'Home Page',\n        appName: 'My Express Store',\n        userLoggedIn: true,\n        username: 'JohnDoe',\n        products: [\n            { \n                name: 'Gaming Laptop', \n                price: 1299.99, \n                description: 'High-performance gaming laptop',\n                onSale: false\n            },\n            { \n                name: 'Wireless Mouse', \n                price: 29.99, \n                description: 'Ergonomic wireless mouse',\n                onSale: true\n            },\n            { \n                name: 'Mechanical Keyboard', \n                price: 89.99, \n                description: 'RGB mechanical keyboard',\n                onSale: false\n            }\n        ]\n    });\n});\n\n// Advanced EJS Features:\n\n// 1. Includes with parameters\n&lt;%- include('partials/product-card', { product: item, showDetails: true }) %&gt;\n\n// 2. Conditional rendering\n&lt;% if (user.role === 'admin') { %&gt;\n    &lt;button class=&quot;admin-btn&quot;&gt;Admin Panel&lt;/button&gt;\n&lt;% } %&gt;\n\n// 3. Loops with index\n&lt;% users.forEach((user, index) =&gt; { %&gt;\n    &lt;tr class=&quot;&lt;%= index % 2 === 0 ? 'even' : 'odd' %&gt;&quot;&gt;\n        &lt;td&gt;&lt;%= user.name %&gt;&lt;/td&gt;\n        &lt;td&gt;&lt;%= user.email %&gt;&lt;/td&gt;\n    &lt;/tr&gt;\n&lt;% }) %&gt;\n\n// 4. Using JavaScript functions\n&lt;% const formatDate = (date) =&gt; new Date(date).toLocaleDateString(); %&gt;\n&lt;p&gt;Created: &lt;%= formatDate(post.createdAt) %&gt;&lt;/p&gt;\n\n// For Handlebars users (alternative template engine):\n// const hbs = require('hbs');\n// hbs.registerHelper('uppercase', (str) =&gt; str.toUpperCase());\n// hbs.registerHelper('eq', (a, b) =&gt; a === b);\n\n// Usage in Handlebars: {{uppercase name}}\n\n// Benefits of Server-Side Rendering:\n// • SEO friendly\n// • Fast initial page load\n// • Consistent user experience\n// • Better performance on low-powered devices\n</code></pre>",
            "examples": []
        },
        {
            "id": "topic-5-database-fundamentals",
            "title": "Database Fundamentals",
            "content": "<h3>Database Systems</h3><pre class=\"lecture-pre\"><code>/*Why Databases? (vs Arrays/Objects):\n| Aspect               | In-Memory Storage          | Database Storage            |\n|----------------------|----------------------------|----------------------------|\n| Persistence          | ❌ Lost on restart         | ✅ Permanent storage       |\n| Scalability          | ❌ Limited to RAM size     | ✅ Handles TB/PB of data   |\n| Concurrent Access    | ❌ Single application      | ✅ Multiple applications   |\n| Query Optimization   | ❌ Manual implementation   | ✅ Built-in optimization   |\n| Data Integrity       | ❌ No transactions         | ✅ ACID transactions       |\n| Backup &amp; Recovery    | ❌ Manual backup needed    | ✅ Built-in solutions      |\n\nReal-world Example:\n// ❌ Volatile in-memory storage\nlet users = [\n    {id: 1, name: &quot;John&quot;, email: &quot;john@example.com&quot;},\n    // ... 100,000 more users\n];\n// Data lost when server restarts!\n\n// ✅ Persistent database storage\nconst users = await User.find({ \n    age: { $gte: 18 },\n    status: 'active'\n}).sort({ createdAt: -1 }).limit(50);\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-6-sql-vs-nosql",
            "title": "SQL vs NoSQL",
            "content": "<h3>SQL vs NoSQL</h3><pre class=\"lecture-pre\"><code>/*\n| Aspect               | SQL Databases              | NoSQL Databases            |\n|----------------------|----------------------------|----------------------------|\n| Data Structure       | Table-based (Rows/Columns) | Document/Key-Value/Graph   |\n| Schema               | ✅ Strict, predefined      | ✅ Flexible, dynamic       |\n| Scaling              | ✅ Vertical scaling        | ✅ Horizontal scaling      |\n| Transactions         | ✅ ACID compliance         | ✅ BASE principle          |\n| Joins                | ✅ Native JOIN operations  | ❌ Manual references       |\n| Examples             | MySQL, PostgreSQL          | MongoDB, Cassandra         |\n\nWhen to Use Each:\n\nSQL (Structured Data):\n• Financial systems (banks, accounting)\n• E-commerce platforms\n• Applications requiring complex joins\n• Data with strict relationships\n\nNoSQL (Flexible Data):\n• Real-time applications (chat, gaming)\n• Content management systems\n• IoT data processing\n• Rapid prototyping\n• Scalable web applications\n\nModern Approach: Polyglot Persistence\n• Use SQL for transactional data\n• Use NoSQL for content, logs, analytics\n• Use Redis for caching\n• Use Elasticsearch for search\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-7-mongodb",
            "title": "MongoDB",
            "content": "<h3>MongoDB Introduction</h3><pre class=\"lecture-pre\"><code>/*MongoDB Features:\n• Document-oriented NoSQL database\n• BSON format (Binary JSON - extended data types)\n• Horizontal scaling with sharding\n• High availability with replica sets\n• Flexible schema design\n• Rich query language with aggregation\n• Full-text search capabilities\n• Geospatial queries\n\nMongoDB Structure:\nDatabase → Collections → Documents\n\nExample Document:\n{\n    _id: ObjectId(&quot;507f1f77bcf86cd799439011&quot;),\n    title: &quot;Understanding MongoDB&quot;,\n    content: &quot;Complete guide to MongoDB...&quot;,\n    author: {\n        name: &quot;John Doe&quot;,\n        email: &quot;john@example.com&quot;\n    },\n    tags: [&quot;database&quot;, &quot;mongodb&quot;, &quot;nosql&quot;],\n    metadata: {\n        views: 1500,\n        likes: 42,\n        published: true\n    },\n    createdAt: ISODate(&quot;2024-01-15T10:30:00Z&quot;),\n    updatedAt: ISODate(&quot;2024-01-20T14:45:00Z&quot;)\n}\n\nCollection: [documents...] (similar to SQL table)\nDatabase: { collections... } (similar to SQL database)\n*/\n</code></pre>",
            "examples": []
        },
        {
            "id": "topic-8-mongodb-setup-mongoose",
            "title": "MongoDB Setup & Mongoose",
            "content": "<h3>Database Configuration with MongoDB &amp; Mongoose ODM</h3><pre class=\"lecture-pre\"><code>/*\nOption A: MongoDB Atlas (Cloud - Recommended for Production)\n1. Create account at https://www.mongodb.com/cloud/atlas\n2. Build a Cluster:\n   - Choose cloud provider (AWS, Google Cloud, Azure)\n   - Select region closest to your users\n   - Choose M0 (Free tier) for development\n3. Security Configuration:\n   - Create database user with read/write privileges\n   - Add IP whitelist: 0.0.0.0/0 (all IPs) for development\n4. Get Connection String:\nmongodb+srv://username:password@cluster0.xzyr.mongodb.net/databaseName?retryWrites=true&amp;w=majority\n\nOption B: Local Installation (Development)\n1. Download MongoDB Community Server\n2. Installation:\n   - Windows: MSI installer with MongoDB Compass\n   - macOS: brew install mongodb-community\n   - Linux: apt-get install mongodb\n3. Start MongoDB service\n4. Connect: mongodb://localhost:27017/databaseName\n*/\n\n// ## MongoDB Compass GUI\n\n/*\nMongoDB Compass Features:\n• Visual document explorer and editor\n• Query performance analytics\n• Index management and optimization\n• Schema analysis and validation\n• Aggregation pipeline builder\n• Import/Export capabilities\n\nConnection Strings:\n• Local: mongodb://localhost:27017\n• Atlas: mongodb+srv://username:password@cluster...\n*/\n\n// ## Mongoose ODM Setup\n\n// 1. Installation: npm install mongoose\n\n// 2. Database Connection Configuration\nconst mongoose = require('mongoose');\n\nconst connectDB = async () =&gt; {\n    try {\n        const conn = await mongoose.connect(process.env.MONGODB_URI, {\n            // Note: useNewUrlParser and useUnifiedTopology are now default in Mongoose 6+\n            // No need to specify them in newer versions\n        });\n\n        console.log(`MongoDB Connected: ${conn.connection.host}`);\n    } catch (error) {\n        console.error('Database connection error:', error);\n        process.exit(1);\n    }\n};\n\n// Modern connection event handling\nmongoose.connection.on('connected', () =&gt; {\n    console.log('Mongoose connected to MongoDB');\n});\n\nmongoose.connection.on('error', (err) =&gt; {\n    console.error('Mongoose connection error:', err);\n});\n\nmongoose.connection.on('disconnected', () =&gt; {\n    console.log('Mongoose disconnected');\n});\n\n// Graceful shutdown\nprocess.on('SIGINT', async () =&gt; {\n    await mongoose.connection.close();\n    console.log('MongoDB connection closed due to app termination');\n    process.exit(0);\n});\n\n// ## Mongoose Schema &amp; Models\n\n/*\nSchema Definition Best Practices:\n• Define data types and validation\n• Set required fields appropriately\n• Add indexes for frequently queried fields\n• Use timestamps for audit trails\n*/\n\nconst userSchema = new mongoose.Schema({\n    name: { \n        type: String, \n        required: [true, 'Name is required'],\n        trim: true,\n        minlength: [2, 'Name must be at least 2 characters'],\n        maxlength: [50, 'Name cannot exceed 50 characters']\n    },\n    email: {\n        type: String,\n        required: [true, 'Email is required'],\n        unique: true,\n        lowercase: true,\n        validate: {\n            validator: function(email) {\n                return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);\n            },\n            message: 'Please provide a valid email address'\n        }\n    },\n    age: {\n        type: Number,\n        min: [18, 'Age must be at least 18'],\n        max: [120, 'Age cannot exceed 120']\n    },\n    role: {\n        type: String,\n        enum: ['user', 'admin', 'moderator'],\n        default: 'user'\n    },\n    profile: {\n        bio: String,\n        avatar: String,\n        website: String\n    },\n    preferences: {\n        newsletter: { type: Boolean, default: true },\n        notifications: { type: Boolean, default: true }\n    }\n}, {\n    timestamps: true, // Adds createdAt and updatedAt automatically\n    toJSON: { virtuals: true },\n    toObject: { virtuals: true }\n});\n\n// Virtual properties (not stored in database)\nuserSchema.virtual('displayName').get(function() {\n    return `${this.name} (${this.email})`;\n});\n\n// Instance methods\nuserSchema.methods.getProfileInfo = function() {\n    return `Name: ${this.name}, Email: ${this.email}, Role: ${this.role}`;\n};\n\n// Static methods\nuserSchema.statics.findByEmail = function(email) {\n    return this.findOne({ email: email.toLowerCase() });\n};\n\n// Middleware (pre and post hooks)\nuserSchema.pre('save', function(next) {\n    console.log(`Saving user: ${this.name}`);\n    next();\n});\n\nuserSchema.post('save', function(doc, next) {\n    console.log(`User ${doc.name} saved successfully`);\n    next();\n});\n\nconst User = mongoose.model('User', userSchema);\n\n// ## CRUD Operations with Mongoose\n\n// Create (Multiple ways)\nconst newUser = await User.create({\n    name: 'Alice Johnson',\n    email: 'alice@example.com',\n    age: 28\n});\n\n// Or using save()\nconst user = new User({ name: 'Bob Smith', email: 'bob@example.com' });\nawait user.save();\n\n// Read (Multiple query methods)\nconst allUsers = await User.find();\nconst adultUsers = await User.find({ age: { $gte: 18 } });\nconst specificUser = await User.findOne({ email: 'alice@example.com' });\nconst userById = await User.findById('507f1f77bcf86cd799439011');\n\n// With projection (select specific fields)\nconst usersWithNames = await User.find({}, 'name email');\n\n// With population (if there were references)\n// const usersWithPosts = await User.find().populate('posts');\n\n// Update\nawait User.updateOne(\n    { _id: '507f1f77bcf86cd799439011' },\n    { $set: { age: 30, name: 'Updated Name' } }\n);\n\n// Or using findOneAndUpdate (returns the document)\nconst updatedUser = await User.findOneAndUpdate(\n    { email: 'alice@example.com' },\n    { $inc: { age: 1 } }, // Increment age by 1\n    { new: true } // Return updated document\n);\n\n// Delete\nawait User.deleteOne({ _id: '507f1f77bcf86cd799439011' });\nawait User.findOneAndDelete({ email: 'bob@example.com' });\n\nmodule.exports = User;\n</code></pre>",
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
