const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "Events, WebSockets & Socket.IO",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson</h3><pre class=\"lecture-pre\"><code>1- Solve Task 8</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-events-in-node-js",
            "title": "Events in Node.js",
            "content": "<h3>Events in Node.js</h3><pre class=\"lecture-pre\"><code>// =&gt; The purpose of events in Node.js is to enable an event-driven architecture, \n// where objects (called &quot;emitters&quot;) can emit named events that cause listener functions to be called. \n// This pattern is fundamental to Node.js' asynchronous, non-blocking nature.\n\n// Key Purposes of Events:\n    // - Decouple Components: Allow different parts of your code to communicate without direct dependencies\n    // - Handle Asynchronous Operations: Signal when tasks complete (e.g., file I/O, network requests)\n    // - Implement Custom Event Systems: Create your own observable objects\n    // - Replace Callback Hell: Better alternative to deeply nested callbacks\n\n// const EventEmitter = require('events');\n\n// const customEvent = new EventEmitter();\n\n// // can i write more than one event in the same name\n// customEvent.on(&quot;send&quot;, (data) =&gt; {\n//     console.log(&quot;1-&quot;,data);\n// });\n\n// customEvent.on(&quot;send&quot;, (data) =&gt; {\n//     console.log(&quot;2-&quot;,data);\n// });\n\n// customEvent.emit(&quot;send&quot;, &quot;hiwwwww&quot;); // it emit to the previous events\n\n// - Note:\n// While powerful, overuse can lead to &quot;event spaghetti&quot; - use judiciously! For single async operations, \n// promises/async-await are often simpler.</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-websockets-socket-io",
            "title": "WebSockets & Socket.IO",
            "content": "<h3>Introduction to WebSockets &amp; Socket.IO</h3><pre class=\"lecture-pre\"><code>// ################## Introduction to WebSockets ##########################\n\n// =&gt; A communication protocol that enables persistent, bidirectional communication between clients (browsers) \n// and servers over a single TCP connection. Unlike HTTP's request-response model.\n\n// WebSockets allow:\n//     - Real-time data transfer\n//     - Low-latency communication\n//     - Server-initiated message pushing\n\n// Key Features:\n//     - Full-duplex communication (both send/receive simultaneously)\n//     - Lightweight header (2-10 bytes vs HTTP's 800+ bytes)\n//     - Designed for real-time applications\n\n// ################## Socket.io ##########################\n\n// =&gt; A JavaScript library that builds on WebSockets with additional features:\n//     - Automatic fallback to HTTP long-polling if WebSockets unavailable\n//     - Automatic reconnection\n//     - Room-based messaging\n//     - Built-in acknowledgements\n//     - Broadcasting capabilities\n\n// ################## Why use Socket.IO over raw WebSockets? ##########################\n\n//     Raw WebSockets\t      |       Socket.IO\n// ----------------------------------------------------------\n// No built-in reconnection   | Automatic reconnection\n// ----------------------------------------------------------\n// No fallback mechanisms     | Degrades to HTTP long-polling\n// ----------------------------------------------------------\n// Manual room implementation | Built-in room management\n// ----------------------------------------------------------\n// Basic error handling       | Advanced error recovery\n\n// ################## HTTP vs Socket.IO: Key Differences ##########################\n\n//              |       Feature\tHTTP\t              |         Socket.IO\n// ------------------------------------------------------------------------------------\n// Connection\t|    Short-lived (per request)\t      |  Persistent (stays open)\n// Direction\t|    Client → Server only (request)\t  |  Bidirectional (client ↔ server)\n// Latency\t    |    High (new TCP handshake per req) |\t Low (no repeated handshakes)\n// Server Push\t|    Requires polling/SSE\t          |  Native capability\n// Overhead\t    |    High (headers per request)\t      |  Minimal after initial handshake\n// Use Cases\t|    Static content, forms, APIs\t  |  Chat, gaming, live dashboards\n\n// Key Takeaway:\n// &quot;HTTP is for getting data when you ask, Socket.IO is for streaming data as it happens.&quot;</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-implementation",
            "title": "Implementation",
            "content": "<h3>Socket.IO Implementation Examples</h3><pre class=\"lecture-pre\"><code>// ################## Sending &amp; Receiving Events ##########################\n\n// io.on('connection', (socket) =&gt; {\n//     socket.emit('welcome', 'Hello from server!');\n\n//     socket.on('client-message', (data) =&gt; {\n//         console.log('Client says:', data);\n//     });\n// });\n\n// ################## Broadcasting to All Clients ##########################\n\n// Concept: Send events to all connected clients\n\n// io.on('connection', (socket) =&gt; {\n//     socket.on('new-user', (username) =&gt; {\n//         io.emit('user-joined', `${username} joined!`); // Broadcast to all\n//     });\n// });\n\n// ################## Private Messaging ##########################\n\n// Concept: Send messages to specific clients using socket.id\n\n// io.on('connection', (socket) =&gt; {\n//     socket.on('private', (data) =&gt; {\n//         io.to(data.targetId).emit('private-msg', data.message);\n//     });\n// });\n\n// ################## Rooms &amp; Groups ##########################\n\n// Concept: Create isolated communication channels\n\n// io.on('connection', (socket) =&gt; {\n//     socket.on('join-room', (room) =&gt; {\n//         socket.join(room);\n//         io.to(room).emit('room-msg', `New user in ${room}`);\n//     });\n// });\n\n// ################## Disconnection Handling ##########################\n\n// Concept: Detect client disconnections\n\n// io.on('connection', (socket) =&gt; {\n//     socket.on('disconnect', (reason) =&gt; {\n//         console.log(`${socket.id} disconnected: ${reason}`);\n//         io.emit('user-left', socket.id);\n//     });\n// });\n\n// ################## Basic Socket.IO Setup ##########################\n\n// const http = require('http');\n// const { Server } = require('socket.io');\n\n// const server = http.createServer(app);\n// const io = new Server(server);\n\n// io.on('connection', (socket) =&gt; {\n//     socket.on('chat-msg', (data) =&gt; {\n//         console.log('Client says:', data);\n//         socket.emit('new-msg', data);\n//     });\n\n//     socket.on('disconnect', (reason) =&gt; {\n//         console.log(`${socket.id} disconnected: ${reason}`);\n//         io.emit('user-left', socket.id);\n//     });\n// });</code></pre>",
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
