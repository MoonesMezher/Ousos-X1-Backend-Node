const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "Advanced JavaScript: Promises, Async/Await, Event Loop, Regex",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- Solve Task 1\n2- Semicolons (ASI)\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-asynchronous",
            "title": "Asynchronous",
            "content": "<h3>JavaScript Asynchronous</h3><pre class=\"lecture-pre\"><code>// Synchronous: Executes line by line consecutively in a sequental manner\n// Code that waites for an operation to complete\n\n// Asynchronous: Allows multiple operations to be perfomed consecutively without waiting\n// Handled with: Callbacks, Promises, Async/Await\n\n// Promises represent the eventual completion of an asynchronous operation\n\n// Promise =&gt; an object that  mNGES ASYNC operations\n// &quot;I promise to return a value&quot;\n// PENDING -&gt; RESOLVED or REJECTED\n// Form: new Promise((resolve, reject) =&gt; { async code })\n\n// Creating a promise\nconst promise = new Promise((resolve, reject) =&gt; {\n    // Simulate complex code\n    for(let i = 0; i &lt; 1_000_000_000; i++) {}\n    \n    const data = Math.random();\n    \n    if(data &lt; 0.5) {\n        resolve(data); // Success\n    } else {\n        reject(&quot;Error&quot;); // Failure\n    }\n});\n\n// Using .then() and .catch()\npromise\n    .then((data) =&gt; {\n        console.log(data);\n    })\n    .catch((err) =&gt; {\n        console.log(err);\n    })\n    .finally(() =&gt; {\n        console.log(&quot;Completed&quot;);\n    });\n\n// Chores Example: (Callback Hell -&gt; Promise)\n1. Walk The Dog\n2. Clean The Kitchen\n3. Take Out The Trash\n\n// Converting to async/await \n\n// Async/Await -&gt; Special Keys in JavaScript, allows you write async code in a sync manner\n\n// Async -&gt; makes a function return a promise\n// Await -&gt; makes an async function wait for a promise \n\nconst app = async () =&gt; {\n    try {\n        const data = await promise;\n        console.log(&quot;Success:&quot;, data);\n    } catch (error) {\n        console.log(&quot;Error:&quot;, error);\n    }\n};\napp();\n\n// Real-world example: API call simulation\nfunction fetchUserData() {\n    return new Promise((resolve, reject) =&gt; {\n        setTimeout(() =&gt; {\n            const success = Math.random() &gt; 0.3;\n            if (success) {\n                resolve({ name: &quot;Alice&quot;, age: 30 });\n            } else {\n                reject(&quot;Failed to fetch user data&quot;);\n            }\n        }, 2000);\n    });\n}\n\n// Using the promise\nfetchUserData()\n    .then(user =&gt; console.log(&quot;User:&quot;, user))\n    .catch(error =&gt; console.error(&quot;Error:&quot;, error));\n\n// Using Promise.all() with arrays\nconst promise1 = Promise.resolve(3);\nconst promise2 = new Promise((resolve) =&gt; setTimeout(resolve, 100, 'foo'));\nconst promise3 = fetchUserData();\n\nPromise.all([promise1, promise2, promise3])\n    .then(values =&gt; console.log(values))\n    .catch(error =&gt; console.error(error));</code></pre><table class=\"comparison-table\"><thead><tr><th></th><th>Description</th></tr></thead><tbody><tr><td>Synchronous</td><td>Executes line by line consecutively in a sequental manner, code that waites for an operation to complete</td></tr><tr><td>Asynchronous</td><td>Allows multiple operations to be perfomed consecutively without waiting, handled with: Callbacks, Promises, Async/Await</td></tr></tbody></table>",
            "examples": []
        },
        {
            "id": "topic-2-event-loop",
            "title": "Event Loop",
            "content": "<h3>JavaScript Event Loop</h3><pre class=\"lecture-pre\"><code>// Question: who is know about this concept?\n\n/*\n- Node is not a framework, it is a runtime. =&gt; interpreter.\n=&gt; there are a huge deffrince between framework and library and runtime.\n- JS on browser BY V8 Engine =&gt; 2008: JS on server = node js\n\nQuestion: who is know the deffrince between Compiler &amp; Intrpreter?\n\n- Compiler Vs. Interpreter:\n=&gt; code =&gt; compile =&gt; machine code =&gt; output\n=&gt; code =&gt; interprete =&gt; output\n\n=&gt; Node js is a runtime and is not a compiler.\n\n- 1- Node js is single threaded (line by line) =&gt; one thread is work\n- 2- Node.js uses libuv for async I/O (not truly single-threaded)\n\n- Event loop check each time on (Task Queue &amp; Microtask Queue) then =&gt; execute if the Call stack is empty. \n- Microtask Queue &gt; Task Queue\n*/\n\n// Call stack =&gt; output\nconsole.log(&quot;1&quot;);\n\n// Call stack add it to =&gt; Web APIs then =&gt; execute the callback in Task Queue =&gt; output\nsetTimeout(() =&gt; {\n    console.log(&quot;2&quot;);\n}, 0) \n\n// Call stack add it to =&gt; Web APIs then =&gt; execute the callback in Microtask Queue =&gt; output\nPromise.resolve()\n.then(() =&gt; {\n    console.log(&quot;3&quot;);\n})\n\n// Call stack =&gt; output\nconsole.log(&quot;4&quot;);\n\n// Output order: 1, 4, 3, 2</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-regex",
            "title": "Regex",
            "content": "<h3>Regular Expressions (Regex)</h3><pre class=\"lecture-pre\"><code>// Question: who is know about this concept?\n\n/*\n- Is =&gt; A Regular Expression (RegEx) is a sequence of characters defining a search pattern. It is used for:\n    - Validating input (e.g., emails, passwords). =&gt; like emails in websites\n    - Searching/Extracting specific text from strings.\n    - Replacing parts of strings.\n*/\n\nconst regex = /hello/; // another way: \nconsole.log(regex.test('hello')); // true\nconsole.log(regex.test('hello world')); // true\n\n// Ex: smart search in websites\nconst colors = [&quot;red&quot;, &quot;green&quot;, &quot;yellow&quot;, &quot;black&quot;, &quot;white&quot;];\n\nfunction search(key) {\n    return colors.filter(e =&gt; e === key);\n}\n\nfunction smartSearch(key) {\n    const regex = new RegExp(`.*${key}.*`, 'i');   \n    return colors.filter(e =&gt; e.match(regex));\n}\n\nconsole.log(search(&quot;re&quot;)); // []\nconsole.log(smartSearch(&quot;re&quot;)); // [&quot;red&quot;, &quot;green&quot;]\n\n// - Real World Example:\nconst emailRegex = /^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/;\nconsole.log(emailRegex.test('user@example.com')); // true\nconsole.log(emailRegex.test('userexample.com')); // false</code></pre><table class=\"comparison-table\"><thead><tr><th>Pattern</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>\\d</td><td>Match any digit ([0-9]).</td><td>/\\d/ → &quot;5&quot; in &quot;a5&quot;</td></tr><tr><td>\\s</td><td>Match whitespace (space, tab, etc.).</td><td>/\\s/ → &quot; &quot;</td></tr><tr><td>\\w</td><td>Match word character ([a-zA-Z0-9_]).</td><td>/\\w+/ → &quot;hello&quot;</td></tr><tr><td>.</td><td>Match any character except newline.</td><td>/a.c/ → &quot;abc&quot;</td></tr><tr><td>^</td><td>Start of string/line.</td><td>/^abc/ → &quot;abc&quot; at start</td></tr><tr><td>$</td><td>End of string/line.</td><td>/xyz$/ → &quot;xyz&quot; at end</td></tr><tr><td>[abc]</td><td>Match any of a, b, or c.</td><td>/[aeiou]/ → &quot;e&quot;</td></tr><tr><td>[^abc]</td><td>Match anything not a, b, or c.</td><td>/[^0-9]/ → &quot;a&quot; in &quot;a1&quot;</td></tr><tr><td>a|b</td><td>Match a or b.</td><td>/yes|no/ → &quot;yes&quot;</td></tr><tr><td>()</td><td>Capture group.</td><td>/(\\d{2})-(\\d{2})/ → Groups in &quot;12-34&quot;</td></tr><tr><td>{n}</td><td>Exact n repetitions.</td><td>/\\d{3}/ → &quot;123&quot;</td></tr><tr><td>{n,}</td><td>At least n repetitions.</td><td>/\\d{2,}/ → &quot;123&quot;</td></tr><tr><td>{n,m}</td><td>Between n and m repetitions.</td><td>/\\d{2,4}/ → &quot;123&quot;</td></tr><tr><td>&quot;*&quot;</td><td>Zero or more repetitions.</td><td>/a&quot;*&quot;/ → &quot;aaa&quot;</td></tr><tr><td>&quot;+&quot;</td><td>One or more repetitions.</td><td>/a+/ → &quot;aaa&quot;</td></tr><tr><td>&quot;?&quot;</td><td>Zero or one repetition.</td><td>/a?/ → &quot;a&quot; or &quot;&quot;</td></tr></tbody></table>",
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
