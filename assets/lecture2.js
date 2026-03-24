const courseData = {
    "courseInfo": {
        "name": "Focal X V10 - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "JavaScript Fundamentals: Variables, Data Types, and More",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Concepts</h3><pre class=\"lecture-pre\"><code>/* \n1- Backend Development Explained\n2- HTTP - The Language of the Web\n3- Understanding APIs and Web Communication\n4- JSON - JavaScript Object Notation\n5- Middleware - The Processing Layer\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-intro-to-js",
            "title": "Intro to JS",
            "content": "<h3>Introduction to JavaScript</h3><pre class=\"lecture-pre\"><code>// JavaScript is a versatile programming language\n// Initially created for web browsers, now used everywhere\n// Key characteristics:\n// - High-level language\n// - Dynamic typing\n// - Interpreted (JIT compiled in modern engines)\n// - Multi-paradigm (OOP, functional, imperative)\n\n// Why JavaScript?\n// - Runs in browsers (frontend)\n// - Runs on servers (Node.js)\n// - Mobile apps (React Native, Ionic)\n// - Desktop apps (Electron)\n// - Even in databases (MongoDB) and IoT devices\n\nconsole.log(&quot;Hello, JavaScript World!&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-setup-guide",
            "title": "Setup Guide",
            "content": "<h3>Setting Up Node.js and Visual Studio Code</h3><pre class=\"lecture-pre\"><code>// Step 1: Install Node.js\n// - Visit https://nodejs.org/\n// - Download the LTS (Long Term Support) version\n// - Run the installer and follow the steps\n\n// Step 2: Verify Node.js installation\n// Open terminal/command prompt and run:\n// node --version\n// npm --version\n\n// Step 3: Install Visual Studio Code\n// - Visit https://code.visualstudio.com/\n// - Download for your operating system\n// - Run the installer\n\n// Step 4: Create your first Node.js file\n// - Create a new folder for your project\n// - Open it in VS Code\n// - Create app.js file\n// - Write: console.log(&quot;Hello from Node.js!&quot;);\n// - Run with: node app.js\n\n// Step 5: Initialize package.json\n// - Run: npm init -y\n// - This creates package.json for managing dependencies</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-vs-code-extensions",
            "title": "VS Code Extensions",
            "content": "<h3>Essential VS Code Extensions for Node.js</h3><pre class=\"lecture-pre\"><code>/* \n1- JavaScript (ES6) code snippets: For quick JS templates.\n2- Prettier: Code formatter for consistent style.\n3- Code Runner: Quickly run JS files with a click. \n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-4-variables",
            "title": "Variables",
            "content": "<h3>Variable Declaration</h3><pre class=\"lecture-pre\"><code>// JS is loosely typed =&gt; you don't need to specify variable types\nconst a = 1\nlet b = 2\nvar c = 3\nd = 4\n\n{\n    var c = 5\n}\n\nconsole.log(a, b, c, d);</code></pre><table class=\"comparison-table\"><thead><tr><th></th><th>const</th><th>let</th><th>var</th></tr></thead><tbody><tr><td>Change</td><td>NO</td><td>YES</td><td>YES</td></tr><tr><td>Before declare</td><td>NO</td><td>NO</td><td>YES</td></tr><tr><td>Break scope</td><td>NO</td><td>NO</td><td>YES</td></tr><tr><td>Redeclare</td><td>NO</td><td>NO</td><td>YES</td></tr></tbody></table>",
            "examples": []
        },
        {
            "id": "topic-5-logging",
            "title": "Logging",
            "content": "<h3>Logging Examples</h3><pre class=\"lecture-pre\"><code>const username = &quot;Moones&quot;\n\nconsole.log(&quot;Hello, &quot; + username)\nconsole.log(&quot;Hello, &quot;, username)\nconsole.log(`Hello, ${username}`)\nconsole.log(&quot;Hello, &quot;.concat(username))</code></pre>",
            "examples": []
        },
        {
            "id": "topic-6-scopes",
            "title": "Scopes",
            "content": "<h3>Scopes</h3><pre class=\"lecture-pre\"><code>let aa = 1\nconsole.log(aa)\n\n{\n    let bb = 2\n    console.log(aa)\n    console.log(bb)\n}\n\n// console.log(bb) // This would cause an error\n\n// # 1) global\nconst globalVar = &quot;global variable&quot;;\nfunction f1() {\n    console.log(globalVar);\n}\n\n// # 2) local\nfunction f1() {\n    const localVar = &quot;local variable&quot;;\n}\n// console.log(localVar); // This would cause an error\n\n// # 3) block\n{\n    const blockVar = &quot;block variable&quot;;\n}\n// console.log(blockVar); // This would cause an error</code></pre>",
            "examples": []
        },
        {
            "id": "topic-7-data-types",
            "title": "Data Types",
            "content": "<h3>Data Types</h3><pre class=\"lecture-pre\"><code>const a1 = 'moones'; // string\nconst a2 = 20.5; // number\nconst a3 = []; // object =&gt; array\nconst a4 = {}; // object\nconst a5 = true; // boolean\nlet a6 = null; // object =&gt; null\nlet a7;  // undefined\nconst a8 = NaN; // not a number =&gt; number\n\n// string =&gt; '', &quot;&quot;, `\nconsole.log(a1, typeof(a1));\n// number =&gt; 10, 20.5, .5, 2000/2\nconsole.log(a2, typeof(a2));\n// object =&gt; array [value1, value1]\nconsole.log(a3, typeof(a3));\n// object =&gt; object {key1: value1, key2: value2}\nconsole.log(a4, typeof(a4));\n// boolean =&gt; true, false\nconsole.log(a5, typeof(a5));\n// object =&gt; null (empty)\nconsole.log(a6, typeof(a6));\n// object =&gt; undefined (not exist)\nconsole.log(a7, typeof(a7));\n// number =&gt; Nan (not a number)\nconsole.log(a8, typeof(a8));</code></pre>",
            "examples": []
        },
        {
            "id": "topic-8-arithmetic",
            "title": "Arithmetic",
            "content": "<h3>Arithmetic Operators</h3><pre class=\"lecture-pre\"><code>// +, -, *, /, ++, --, **, %</code></pre>",
            "examples": []
        },
        {
            "id": "topic-9-coercion",
            "title": "Coercion",
            "content": "<h3>Coercion</h3><pre class=\"lecture-pre\"><code>// # string -&gt; number\nconst str = `10`;\n\n// 1\nconst num1 = +str;\n// 2\nconst num2 = Number(str);\n// 3\nconst num3 = parseInt(str, 10);\n// 4\nconst num4 = new Number(str);\n\nconsole.log(num1, typeof num1);\nconsole.log(num2, typeof num2);\nconsole.log(num3, typeof num3);\nconsole.log(num4.valueOf(), typeof num4, typeof num4.valueOf());\n\n// NOTE: NaN\nconsole.log(+&quot;s&quot;, +undefined);\n\n// # boolean -&gt; number\nconsole.log(+false, +true, +null, +&quot;&quot;);\nconsole.log(-false, -true, -null, -&quot;&quot;);\n\n// NOTE:\nconsole.log(10 + &quot;s&quot;);\nconsole.log(10 + +&quot;10&quot;);\nconsole.log(10 + 10);\nconsole.log(&quot;10&quot; + 10);\nconsole.log(&quot;s&quot; + 10);\nconsole.log(&quot;10&quot; + &quot;s&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-10-syntactic-sugar",
            "title": "Syntactic Sugar",
            "content": "<h3>Syntactic Sugar</h3><pre class=\"lecture-pre\"><code>console.log(1000000, 1_000_000, 1e6);\nconsole.log(Number.MAX_SAFE_INTEGER);\nconsole.log(Number.MAX_VALUE);\nconsole.log(Number.MIN_SAFE_INTEGER);\nconsole.log(Number.MIN_VALUE);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-11-numbers",
            "title": "Numbers",
            "content": "<h3>Number Methods</h3><pre class=\"lecture-pre\"><code>const num = 10.5;\nconsole.log(num.toFixed(0), num.toString());\n\nconst str = &quot;100.556 hello&quot;;\nconsole.log(parseInt(str, 10), parseFloat(str));</code></pre>",
            "examples": []
        },
        {
            "id": "topic-12-math-library",
            "title": "Math Library",
            "content": "<h3>Math Library</h3><pre class=\"lecture-pre\"><code>console.log(Math.cos(Math.PI)); // cons(180 degree)\nconsole.log(Math.pow(10, 2)); // 10 ^ 2\nconsole.log(Math.sqrt(144)); // 12 * 12 = 144\nconsole.log(Math.floor(4.9)); \nconsole.log(Math.ceil(4.1)); \nconsole.log(Math.round(4.6)); \nconsole.log(Math.random()); // generate random number between 0 and 1\nconsole.log(Math.random() * 100); // generate random number between 0 and 100\nconsole.log(Math.trunc(100.52)); // get the int number\nconsole.log(Math.max(100, 60, 3600, 500)); // return the max number\nconsole.log(Math.min(100, 60, 3600, 500)); // return the min number</code></pre>",
            "examples": []
        },
        {
            "id": "topic-13-comments",
            "title": "Comments",
            "content": "<h3>JavaScript Comments</h3><pre class=\"lecture-pre\"><code>// Single-line comment\n\n/* \n Multi-line comment\n This can span multiple lines\n*/\n\n/**\n * JSDoc style comment\n * @param {string} name - The name to greet\n * @returns {string} A greeting message\n */\nfunction greet(name) {\n    return &quot;Hello, &quot; + name;\n}\n\n// Good comments explain why, not what\n// Bad: increment i (obvious)\n// Good: track iteration count for processing queue\n\nconsole.log(&quot;Comments help document your code!&quot;);</code></pre>",
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
