const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "NodeJS (Modules, FS, OP, APIs)",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- CLI\n2- Git\n3- Github\n4- Core Commands\n5- Branching\n6- README.md file\n7- .gitignore file\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-node-js-introduction",
            "title": "Node.js Introduction",
            "content": "<h3>Node.js Fundamentals</h3><pre class=\"lecture-pre\"><code>/*\n- Node is not a framework, it is a runtime. =&gt; interpreter.\n- Compiler Vs. Interpreter:\n=&gt; code =&gt; compile =&gt; machine code =&gt; output\n=&gt; code =&gt; interprete =&gt; output\n\n=&gt; Node js runtime and is not a compiler.\n\n- JS on browser BY V8 Engine =&gt; 2008: JS on server = node js\n\n- Node js is single threaded (line by line) =&gt; one thread is work\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-node-js-globals",
            "title": "Node.js Globals",
            "content": "<h3>Global Variables in Node.js</h3><pre class=\"lecture-pre\"><code>/* \n- No window in node js (because no browser) like browser (it has a window &amp; DOM)\n- node js has filesystem but in browser it does not has filesystem \n- global variables =&gt; anywhere in your application you can access them\n\nKey Global Variables:\n\n1. __dirname =&gt; path to current working directory\n2. __filename =&gt; file name\n3. require =&gt; method to use modules in common.js\n4. module =&gt; info about current module\n5. process =&gt; info about env where the program is being executed\n\nExamples:\nconsole.log(__dirname);\nconsole.log(__filename.split('\\\\')[__filename.split('\\\\').length - 1]);\nconsole.log(process.env.OS);\nprocess.stdout.write('Hi');\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-node-js-modules",
            "title": "Node.js Modules",
            "content": "<h3>Modules System in Node.js</h3><pre class=\"lecture-pre\"><code>// Question: have i write all my app code in one file? =&gt; answer: yes &amp; no\n\n// Common.js =&gt; each file is module (by default) and you can change it from package.json =&gt; &quot;type&quot;: &quot;module&quot;\n\n/*\nModule Export/Import Pattern:\n\nfile: x.js\n    const x = 1;\n    module.exports = x;\n\nfile: log.js\n    const x = require('./x');\n    console.log(x);\n*/\n\nCore Built-in Modules:\n- OS Module\n- Path Module  \n- FS Module\n- HTTP Module\n- And many more...</code></pre>",
            "examples": []
        },
        {
            "id": "topic-4-os-path-modules",
            "title": "OS & Path Modules",
            "content": "<h3>Operating System and Path Utilities</h3><pre class=\"lecture-pre\"><code>// OS Module\nconst os = require('os');\n\nconst currentOS = {\n    platform: os.platform(),\n    name: os.type(),\n    hostname: os.hostname(),\n    version: os.version(),\n    userInfo: os.userInfo(),\n    release: os.release(),\n    arch: os.arch(),\n    loadavg: os.loadavg(),\n    tmpdir: os.tmpdir(),\n    networkInterfaces: os.networkInterfaces(),\n};\n\n// Path Module\nconst path = require('path');\n\nconst uri = &quot;C:\\\\Users\\\\97150\\\\OneDrive/Desktop/Focal/Ass Coach/Node 8/course/code&quot;\nconsole.log(path.normalize(uri));\nconsole.log(path.sep)\nconsole.log(path.join(uri));\nconsole.log(path.basename(uri));\nconsole.log(path.resolve(uri));</code></pre>",
            "examples": []
        },
        {
            "id": "topic-5-fs-module",
            "title": "FS Module",
            "content": "<h3>File System Operations</h3><pre class=\"lecture-pre\"><code>const fs = require('fs');\nconst filePath = 'main.js';\nconst data = 'const x = 1;\\n// console.log(x);';\n\n// Synchronous Methods\nfs.writeFileSync(filePath, data, 'utf8');\nconst content = fs.readFileSync(filePath, 'utf-8');\nfs.unlinkSync(&quot;main.txt&quot;);\n\n// Asynchronous Methods (Callback)\nfs.writeFile('', 'hello world', (err, res) =&gt; {\n    if(err) {\n        console.log(err);\n        return;\n    }\n    console.log(res)\n});\n\nfs.readFile('main.js', 'utf8', (err, res) =&gt; {\n    if(err) {\n        console.log(err);\n        return;\n    }\n    console.log(res)\n});</code></pre>",
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
