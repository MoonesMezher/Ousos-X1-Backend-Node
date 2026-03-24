const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "TypeScript",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- Solve Task 2\n2- APIs &amp; JSON\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-info",
            "title": "Info",
            "content": "<h3>What is TypeScript?</h3><pre class=\"lecture-pre\"><code>// TypeScript is a superset of JavaScript developed by Microsoft that allows developers to write statically typed code. \n\n// This means you can define variable types, which can help in catching errors during development and improving code maintainability.\n\n// example: sort the rubish\n\n// Q: what did happen before typescript?</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-installation",
            "title": "Installation ",
            "content": "<h3>TypeScript Installation</h3><pre class=\"lecture-pre\"><code>// 1- node js\n// 2- npm install typescript --save-dev</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-types",
            "title": "Types ",
            "content": "<h3>Types in TypeScript</h3><pre class=\"lecture-pre\"><code>let carName = &quot;ooo&quot;;\n\n// Error:\ncarName = 5;\n\nconst num: number = 10;\nconst username: string = &quot;moones&quot;;\nconst isTrue: boolean = true;\nconst list: Array&lt;string&gt; = [&quot;1&quot;, &quot;2&quot;];\nconst list2: Array&lt;number | string&gt; = [1, 2, &quot;s&quot;];\nconst list3: (string | number)[] = [&quot;A&quot;, &quot;B&quot;, &quot;C&quot;, 12];\nconst undifinedVar: undefined = undefined;\nconst nullVar: null = null;\n\ntype s = string;\n\nlet a: s = &quot;oooo&quot;;\n\ntype obj = {\n    key: number;\n    val: string | null;\n}\n\nconst obj: obj = { key: 1, val: &quot;!&quot; };\n\nconst listOfObj: Array&lt;obj&gt; = [\n    { key: 0, val: &quot;0&quot; },\n    { key: 1, val: &quot;1&quot; },\n    { key: 2, val: null },\n];\n\nlet msg: string|number = &quot;Hi&quot;;\n\nmsg = &quot;Hi 2&quot;;\nmsg = 10;</code></pre>",
            "examples": []
        },
        {
            "id": "topic-4-config",
            "title": "Config",
            "content": "<h3>TypeScript Installation</h3><pre class=\"lecture-pre\"><code>// tsc --init\n\n// tsc --watch\n\n// node --watch index.js</code></pre>",
            "examples": []
        },
        {
            "id": "topic-5-arrays-objects",
            "title": "Arrays & Objects",
            "content": "<h3>Arrays &amp; Objects in TypeScript</h3><pre class=\"lecture-pre\"><code>const arr: string[] = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;];\n\nconst arr2 = [&quot;a&quot;, &quot;b&quot;];\n\nconst arr3: Array&lt;string&gt; = [&quot;a&quot;];\n\n// Error\nconst item: number = arr[0];\nconst item: number = arr2[0];\nconst item: number = arr3[0];\n\nconst obj: { age: number, name: string } = { age: 1, name: &quot;hello&quot; };\n\ntype objectType = { age: number, name: string };\n\nconst obj1: objectType = { age: 1, name: &quot;hello&quot; };</code></pre>",
            "examples": []
        },
        {
            "id": "topic-6-functions",
            "title": "Functions",
            "content": "<h3>Functions in TypeScript</h3><pre class=\"lecture-pre\"><code>function sum(num1: number, num2: number): number {\n    return num1 + num2;\n}\n\nfunction printHello(value: string): void {\n    console.log(`Hello ${value}`);\n}\n\n// Error\nconst str: number[] = [1,2].map(e =&gt; e);\n\n// Error\nfunction sum(num1: number, num2: number): string {\n    return num1 + num2;\n}</code></pre>",
            "examples": []
        },
        {
            "id": "topic-7-any",
            "title": "Any",
            "content": "<h3>Any Type</h3><pre class=\"lecture-pre\"><code>// useful for migrating project from javascript to typescript\n\nlet title: any = &quot;Hello&quot;;\n\ntitle = 30;\ntitle = { hello: &quot;world&quot; }\ntitle = [&quot;Hello&quot;, &quot;World&quot;];\ntitle = false;\n\nlet arr: any[] = [];\n\narr.push(&quot;Hello&quot;);\narr.push(10);\narr.push({ hello: &quot;world&quot; });\narr.push([]);\n\nfunction sum(value: any): any {\n    return value + value;\n}\n\nsum(10);\nsum(&quot;A&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-8-tubles",
            "title": "Tubles",
            "content": "<h3>Tubles in TypeScript</h3><pre class=\"lecture-pre\"><code>// they are arrays with selected types\n\nconst t1: [string, string, boolean, number] = [&quot;a&quot;, &quot;b&quot;, false, 10];\n\n// named tubles\n\nlet t2: [name: string, age: number] = [&quot;a&quot;, 10];\n\nconsole.log(t2[0]);\nconsole.log(t2[1]);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-9-interfaces",
            "title": "Interfaces",
            "content": "<h3>Interfaces in TypeScript</h3><pre class=\"lecture-pre\"><code>interface Author {\n    name: string;\n    age: number;\n}\n\ntype x = Author\n\nconst mario: Author = {\n    name: &quot;Mario&quot;,\n    age: 10\n}\n\ninterface Post {\n    title?: string;\n    body: string;\n    readonly tags: string[];\n    createdAt: Date;\n    author: Author;\n    print(): void\n}\n\nconst post: Post = {\n    title: &quot;s&quot;,\n    body: &quot;ss&quot;,\n    tags: [&quot;sss&quot;],\n    createdAt: new Date(),\n    author: {\n        name: &quot;ss&quot;,\n        age: 10\n    },\n    print: () =&gt; {\n        console.log(&quot;SS&quot;)\n    }\n}\n\n// 1- NOTE: prop?: type; =&gt; optional property =&gt; this means that the property may or may not be present in the object.\n// 2- NOTE: readonly prop: type; =&gt; readonly property =&gt; this means the property cannot be modified after the object is created.\n// 3- NOTE: prop(): type; =&gt; method as property\n// 4- NOTE: you can create a new interface that extends an existing one. This allows you to build on top of existing structures.\n\ninterface FeaturedPost extends Post {\n    featured: boolean; // New property\n} \n\n// 5- NOTE: you can define interfaces that can be indexed with a specific type. \nThis is useful for objects that have dynamic keys.\n\ninterface StringArray {\n    [index: number]: string; // Index signature\n}\n\nlet myArray: StringArray = [&quot;Hello&quot;, &quot;World&quot;];\n\n// 6- NOTE: you can combine multiple interfaces using intersection types.\ninterface Post {\n    title: string;\n    body: string;\n}\n\ninterface Author {\n    name: string;\n}\n\ntype PostWithAuthor = Post &amp; Author;\n\n// 7- NOTE: classes can implement interfaces, ensuring that they adhere \n// to the defined structure.\n\nconst post1: Post = {\n    title: &quot;post-1&quot;,\n    body: &quot;ffffffffffffffffffffffff&quot;,\n    tags: [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;, &quot;f&quot;],\n    createdAt: new Date(),\n    author: mario\n}\n\nfunction getAuthor(post: Post): Author {\n    return post.author;\n}\n\nconsole.log(getAuthor(post1));\n\nconst posts: Post[] = [];\n\n// Error\nposts.push(&quot;s&quot;);\n\nposts.push(post1);</code></pre>",
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
