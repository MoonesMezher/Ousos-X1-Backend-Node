const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "Advanced JavaScript: Regex, ES6, OOP",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- Asynchronous (Callbacks, Promises, Async/Await)\n2- Event Loop (Call Stack, Queue, Web API, Micro Task Queue)\n3- Regex\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-es6",
            "title": "ES6",
            "content": "<h3>ES6 Features &amp; Syntactic Sugar</h3><pre class=\"lecture-pre\"><code>// ES6 introduced syntax that makes JavaScript more expressive while maintaining its core prototype-based nature.</code></pre><table class=\"comparison-table\"><thead><tr><th>Feature</th><th>ES5 Way</th><th>ES6 Syntactic Sugar</th></tr></thead><tbody><tr><td>Classes</td><td>Constructor functions + prototypes</td><td>`class` keyword</td></tr><tr><td>Arrow Functions</td><td>`function() { ... }.bind(this)`</td><td>`() =&gt; { ... }`</td></tr><tr><td>Template Strings</td><td>String concatenation</td><td>`Hello ${name}`</td></tr><tr><td>Destructuring</td><td>Manual property assignment</td><td>`const { prop } = obj`</td></tr></tbody></table>",
            "examples": []
        },
        {
            "id": "topic-3-destructuring",
            "title": "Destructuring",
            "content": "<h3>Destructuring in JavaScript</h3><pre class=\"lecture-pre\"><code>// - Array: \nconst arr = [1, 2, 3];\nconst [a, b, c] = arr;\nconst [first, ...rest] = arr;\n\nconsole.log(a, arr[0]); // 1\nconsole.log(b, arr[1]); // 2\nconsole.log(c, arr[2]); // 3\nconsole.log(rest); // [2, 3] (when first is 1)\n\n// - Object:\nconst obj = { x: 1, y: 2 };\nconst { x, y, z = 3 } = obj;\nconst { x: a1, y: b1, z: o = 3 } = obj;\nconst { x: xVal, ...restObj } = obj;\n\nconsole.log(x, a1); // 1\nconsole.log(y, b1); // 2\nconsole.log(z, o); // 3\nconsole.log(restObj); // { y: 2 } (when x is extracted)</code></pre>",
            "examples": []
        },
        {
            "id": "topic-4-oop",
            "title": "OOP",
            "content": "<h3>Object-Oriented Programming in JavaScript</h3><pre class=\"lecture-pre\"><code>// What is OOP? (The Big Picture)\n// OOP (Object-Oriented Programming) is a programming paradigm, or a style of programming, \n// that is based on the concept of &quot;objects&quot;.\n\n// Think of it this way: Instead of writing a program as a long series of steps (like a recipe), \n// you create a set of objects that interact with each other. Each object is a self-contained unit that contains its own data (properties) and behaviors (methods).\n\n// The Core Idea: Model your program after the real world. The real world is made up of objects—like cars,\n// dogs, bank accounts, and people—that have characteristics and can perform actions.\n\n// =&gt; Look around you. Everything is an object. Your phone is an object. \n// It has properties (color: black, model: Pixel 8, isOn: false) and \n// methods (powerOn(), takePhoto(), call()). OOP is just about creating digital versions of these objects.\n\n// -1. Objects &amp; Prototypes:\n// JavaScript uses prototype-based inheritance (not classical inheritance like Java/C++).  \n// Every object has a prototype (a template object it inherits from).\n\n// -2. Constructor Function (old-school)\nfunction Person(name) {\n    this.name = name;\n    this.greet = function() {\n        console.log(`Hi, I'm ${this.name}`);\n    };\n}\nconst john = new Person(&quot;John&quot;);\njohn.greet();\n\n// -3. Class Syntax (ES6, syntactic sugar)\nclass Person {\n    constructor(name) {\n        this.name = name;\n    }\n    greet() {\n        console.log(`Hi, I'm ${this.name}`);\n    }\n}\n\nconst jane = new Person(&quot;Jane&quot;);\nconsole.log(jane);\n\n// -4. Inheritance (ES6 Class Syntax):\nclass Student extends Person {\n    constructor(name, grade) {\n        super(name); // Call parent constructor\n        this.grade = grade;\n    }\n\n    study() {\n        console.log(`${this.name} is studying`);\n    }\n}\n\nconst student = new Student(&quot;Alice&quot;, &quot;A&quot;);\nstudent.greet();\nstudent.study();\n\n// -5. Encapsulation &amp; Access Control:\nclass BankAccount {\n    #balance = 0; // Private field\n\n    deposit(amount) {\n        this.#balance += amount;\n    }\n\n    get balance() { // Getter\n        return this.#balance;\n    }\n\n    set balance(val) {\n        this.#balance = val;\n    }\n}\n\nconst account = new BankAccount();\naccount.deposit(100);\naccount.balance = 200;\nconsole.log(account.balance); \n// account.#balance → Error (private field)\n\n// -6. Method Overriding:\nclass Animal {\n    makeSound() {\n        console.log(&quot;Generic animal sound&quot;);\n    }\n}\n\nclass Dog extends Animal {\n    makeSound() { // Override parent method\n        console.log(&quot;Woof!&quot;);\n    }\n}\n\nconst dog = new Dog();\ndog.makeSound(); // &quot;Woof!&quot;\n\n// -7. Static Methods/Properties:\nclass MathUtils {\n    static PI = 3.14159; // Static property\n\n    static square(x) { // Static method\n        return x * x;\n    }\n}\n\nconsole.log(MathUtils.square(5)); // 25\n\n// -8. `this` Keyword Behavior:\nlet obj = {\n    name: &quot;Alice&quot;,\n    regularFunc: function() {\n        console.log(this.name); // &quot;Alice&quot;\n    },\n    arrowFunc: () =&gt; {\n        console.log(this.name); // undefined (inherits global/window)\n    }\n};\n\nobj.regularFunc();\nobj.arrowFunc();\n\n// -9. Factory Functions &amp; Composition:\nconst createUser = (name, role) =&gt; {\n    return {\n        name,\n        role,\n        logInfo() {\n            console.log(`${name} is a ${role}`);\n        }\n    }\n};\n\nconst admin = createUser(&quot;Bob&quot;, &quot;admin&quot;);\nadmin.logInfo();</code></pre><table class=\"comparison-table\"><thead><tr><th>Concept</th><th>Real-World Meaning</th><th>Code Meaning</th></tr></thead><tbody><tr><td>Class</td><td>Blueprint, Recipe</td><td>A template for creating objects</td></tr><tr><td>Object</td><td>The actual thing</td><td>An instance of a class</td></tr><tr><td>Property</td><td>Adjective (What it is)</td><td>Data / Variables</td></tr><tr><td>Method</td><td>Verb (What it does)</td><td>Functions / Behavior</td></tr><tr><td>new</td><td>Build it!</td><td>Creates a new object from the class</td></tr></tbody></table>",
            "examples": []
        },
        {
            "id": "topic-5-multiple-inheritance",
            "title": "Multiple Inheritance",
            "content": "<h3>Multiple Inheritance in JavaScript</h3><pre class=\"lecture-pre\"><code>JavaScript does not support true multiple inheritance (inheriting from multiple parent classes):\n\n// -A. The Limitation:\n// class A { methodA() {} }\n// class B { methodB() {} }\n// class C extends A, B {} // ❌ Syntax Error\n\n\n// -B. Why It’s Not Allowed:\n\n// - Diamond Problem: Ambiguity in method resolution (common in languages like C++).\n// - Prototype Chain: JavaScript’s single prototype chain can’t point to multiple parents.\n\n// -C Modern JavaScript Improvements:\n// While multiple inheritance isn’t supported, newer features enable similar patterns:\n\n// #1. Mixins (Object Composition):\n// const Mixin1 = {\n//     method1() { console.log(&quot;From Mixin1&quot;); }\n// };\n\n// const Mixin2 = {\n//     method2() { console.log(&quot;From Mixin2&quot;); }\n// };\n\n// class MyClass {\n//     constructor() {\n//         Object.assign(this, Mixin1, Mixin2);\n//     }\n// }\n\n// #2. Object Composition: Use `Object.assign()` or spread syntax:\n// class Dog {\n//     constructor() {\n//         this = { ...animalTraits, ...dogTraits };\n//     }\n// }</code></pre>",
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
