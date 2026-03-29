const courseData = {
    "courseInfo": {
        "name": "Focal X V10 - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "JavaScript Fundamentals: Functions, Loops",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Concepts</h3><pre class=\"lecture-pre\"><code>/* \n1- intro to javascript\n2- setup vsc &amp; nodejs\n3- varaibels declaration (const, var, let) \n4- scopes\n5- data types \n6- dealing with numbers\n7- Math library\n8- Comments\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-strings",
            "title": "Strings",
            "content": "<h3>String Methods</h3><pre class=\"lecture-pre\"><code>const str = &quot; Moones Mezher &quot;;\nconsole.log(str);\nconsole.log(str.length);\nconsole.log(str[0]);\n// another way: console.log(str.charAt(0));\nconsole.log(str.indexOf(&quot;e&quot;));\nconsole.log(str.trim());\nconsole.log(str.split(&quot; &quot;));\nconsole.log(str.toUpperCase());\nconsole.log(str.toLowerCase());\nconsole.log(str.includes(&quot;oo&quot;));\nconsole.log(str.trimStart().repeat(5));\nconsole.log(str.startsWith(&quot; M&quot;));\nconsole.log(str.trim().slice(0, 4)); // select number of characters in title\n// EX:\nconst title = &quot;BMW model 2024 XJ LLLLLLLLLLLLLL&quot;\nconsole.log(\n    (title.length &gt; 10)\n    ? (title.slice(0, 10) + &quot;...&quot;)\n    : (title)\n);\n\n// EX: moones MEZHER\nconsole.log(str.trim().split(&quot; &quot;)[0].toLowerCase(), str.trim().split(&quot; &quot;)[1].toUpperCase());</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-camelcase",
            "title": "CamelCase",
            "content": "<h3>CamelCase Naming Convention</h3><pre class=\"lecture-pre\"><code>// camelCase is the convention for naming variables and functions in JavaScript\n// Start with lowercase, then capitalize each subsequent word\n\n// Good examples:\nconst firstName = &quot;Moones&quot;;\nlet numberOfStudents = 30;\nconst isActive = true;\n\nfunction calculateTotalPrice() {\n    // function logic\n}\n\nfunction getUserById(id) {\n    // function logic\n}\n\n// Bad examples (not following camelCase):\nconst firstname = &quot;Moones&quot;;\nlet number_of_students = 30;\nconst IsActive = true;\n\nfunction calculatetotalprice() {\n    // hard to read\n}\n\nfunction getuserbyid(id) {\n    // hard to read\n}\n\n// Constructor functions (less common with ES6 classes) use PascalCase\nfunction Person(name, age) {\n    this.name = name;\n    this.age = age;\n}\n\n// Constants that don't change often use UPPER_SNAKE_CASE\nconst MAX_USERS = 100;\nconst API_BASE_URL = &quot;https://api.example.com&quot;;\n\nconsole.log(&quot;Use camelCase for variables and functions in JavaScript!&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-truthy-falsy",
            "title": "Truthy/Falsy",
            "content": "<h3>Truthy and Falsy Values</h3><pre class=\"lecture-pre\"><code>// Falsy values in JavaScript:\n// false, 0, &quot;&quot; (empty string), null, undefined, NaN\n\n// Everything else is truthy\n\n// Examples of falsy values:\nconsole.log(Boolean(false));     // false\nconsole.log(Boolean(0));         // false\nconsole.log(Boolean(&quot;&quot;));        // false\nconsole.log(Boolean(null));      // false\nconsole.log(Boolean(undefined)); // false\nconsole.log(Boolean(NaN));       // false\n\n// Examples of truthy values:\nconsole.log(Boolean(true));          // true\nconsole.log(Boolean(1));             // true\nconsole.log(Boolean(&quot;hello&quot;));       // true\nconsole.log(Boolean([]));            // true (empty array)\nconsole.log(Boolean({}));            // true (empty object)\nconsole.log(Boolean(function() {})); // true (function)\n\n// Practical examples:\nconst name = &quot;&quot;;\nif (name) {\n    console.log(&quot;Hello, &quot; + name);\n} else {\n    console.log(&quot;Please enter your name&quot;); // This will execute\n}\n\nconst count = 0;\nif (count) {\n    console.log(&quot;We have items&quot;); // This won't execute\n} else {\n    console.log(&quot;No items found&quot;); // This will execute\n}\n\n// Using double negation to check truthiness:\nconsole.log(!!&quot;hello&quot;); // true\nconsole.log(!!0);       // false\n\n// Be careful with arrays and objects:\nconsole.log(Boolean([])); // true, even if empty\nconsole.log(Boolean({})); // true, even if empty\n\n// Check array length for empty arrays:\nconst arr = [];\nif (arr.length) {\n    console.log(&quot;Array has items&quot;);\n} else {\n    console.log(&quot;Array is empty&quot;); // This will execute\n}\n\n// Check object keys for empty objects:\nconst obj = {};\nif (Object.keys(obj).length) {\n    console.log(&quot;Object has properties&quot;);\n} else {\n    console.log(&quot;Object is empty&quot;); // This will execute\n}</code></pre>",
            "examples": []
        },
        {
            "id": "topic-4-chaining-in-js",
            "title": "Chaining in JS",
            "content": "<h3>Chaining in JS</h3><pre class=\"lecture-pre\"><code>// Chaining concept:\nconst title = &quot;bow&quot;;\nconst t1 = title.toUpperCase();\nconst t2 = t1.replace(&quot;O&quot;, &quot;W&quot;);\nconsole.log(t2); // BWW\n\n// Method chaining:\nconsole.log(title.toUpperCase().replace(&quot;O&quot;, &quot;W&quot;)); // BWW</code></pre>",
            "examples": []
        },
        {
            "id": "topic-5-conditions-in-js",
            "title": "Conditions in JS",
            "content": "<h3>Conditional Statements in JavaScript</h3><pre class=\"lecture-pre\"><code>// if statement\nconst age = 18;\nif (age &gt;= 18) {\n    console.log(&quot;You are an adult&quot;);\n}\n\n// if-else statement\nconst temperature = 25;\nif (temperature &gt; 30) {\n    console.log(&quot;It's hot outside&quot;);\n} else {\n    console.log(&quot;It's not too hot&quot;);\n}\n\n// else-if statement\nconst score = 85;\nif (score &gt;= 90) {\n    console.log(&quot;Grade: A&quot;);\n} else if (score &gt;= 80) {\n    console.log(&quot;Grade: B&quot;); // This will execute\n} else if (score &gt;= 70) {\n    console.log(&quot;Grade: C&quot;);\n} else {\n    console.log(&quot;Grade: F&quot;);\n}\n\n// Ternary operator\nconst isMember = true;\nconst discount = isMember ? 0.1 : 0;\nconsole.log(`Discount: ${discount * 100}%`); // Discount: 10%\n\n// Switch statement\nconst day = 3;\nlet dayName;\nswitch (day) {\n    case 1:\n        dayName = &quot;Monday&quot;;\n        break;\n    case 2:\n        dayName = &quot;Tuesday&quot;;\n        break;\n    case 3:\n        dayName = &quot;Wednesday&quot;; // This will execute\n        break;\n    case 4:\n        dayName = &quot;Thursday&quot;;\n        break;\n    case 5:\n        dayName = &quot;Friday&quot;;\n        break;\n    default:\n        dayName = &quot;Weekend&quot;;\n}\nconsole.log(dayName); // Wednesday\n\n// Logical operators with conditions\nconst isLoggedIn = true;\nconst hasPermission = false;\n\nif (isLoggedIn &amp;&amp; hasPermission) {\n    console.log(&quot;Access granted&quot;);\n} else {\n    console.log(&quot;Access denied&quot;); // This will execute\n}\n\nif (isLoggedIn || hasPermission) {\n    console.log(&quot;Partial access&quot;); // This will execute\n}\n\n// Using &amp;&amp; for conditional execution\nconst user = { name: &quot;John&quot; };\nuser &amp;&amp; console.log(`User: ${user.name}`); // User: John\n\n// Nullish coalescing operator (??)\nconst input = null;\nconst value = input ?? &quot;default&quot;;\nconsole.log(value); // default\n\n// Optional chaining (?.)\nconst person = { address: { city: &quot;New York&quot; } };\nconsole.log(person?.address?.city); // New York\nconsole.log(person?.contact?.phone); // undefined (no error)</code></pre>",
            "examples": []
        },
        {
            "id": "topic-6-loops",
            "title": "Loops",
            "content": "<h3>Loops in JavaScript</h3><pre class=\"lecture-pre\"><code>// While loop\nlet i = 0;\nwhile(i &lt; 5) {\n    console.log(i);\n    i++;\n}\n\n// Do-while loop (executes at least once)\nlet x = 1;\ndo {\n    console.log(x);\n    x++;\n} while(x &lt; 5)\n\n// For loop\nfor (let i = 0; i &lt; 5; i++) {\n    console.log(i);\n}\n\n// Break and continue\nfor (let i = 0; i &lt; 10; i++) {\n    if (i === 5) break; // Exit loop when i is 5\n    if (i % 2 === 0) continue; // Skip even numbers\n    console.log(i); // Will print: 1, 3\n}\n\n// For...of loop (for arrays)\nconst colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;];\nfor (const color of colors) {\n    console.log(color);\n}\n\n// For...in loop (for object properties)\nconst person = {name: &quot;Moones&quot;, age: 30, job: &quot;Developer&quot;};\nfor (const key in person) {\n    console.log(key + &quot;: &quot; + person[key]);\n}</code></pre>",
            "examples": []
        },
        {
            "id": "topic-7-functions",
            "title": "Functions",
            "content": "<h3>Functions in JavaScript</h3><pre class=\"lecture-pre\"><code>// Function Declaration (hoisted)\nconsole.log(greet(&quot;Moones&quot;)); // Works (hoisting)\nfunction greet(name) {\n    return &quot;Hello, &quot; + name + &quot;!&quot;;\n}\n\n// Function Expression (not hoisted)\n// console.log(greetExpr(&quot;Moones&quot;)); // Error (not hoisted)\nconst greetExpr = function(name) {\n    return &quot;Hello, &quot; + name + &quot;!&quot;;\n};\nconsole.log(greetExpr(&quot;Moones&quot;)); // Works\n\n// Arrow Function (not hoisted, lexical this)\n// console.log(greetArrow(&quot;Moones&quot;)); // Error (not hoisted)\nconst greetArrow = (name) =&gt; {\n    return &quot;Hello, &quot; + name + &quot;!&quot;;\n};\nconsole.log(greetArrow(&quot;Moones&quot;)); // Works\n\n// Arrow function with implicit return\nconst add = (a, b) =&gt; a + b;\nconsole.log(add(5, 3)); // 8\n\n// Callback function example\nfunction processUserInput(callback) {\n    const name = &quot;Moones&quot;;\n    callback(name);\n}\n\nprocessUserInput(function(name) {\n    console.log(&quot;Hello, &quot; + name);\n});\n\n// IIFE (Immediately Invoked Function Expression)\n(function() {\n    console.log(&quot;This runs immediately!&quot;);\n})();\n\n// Higher-order function\nfunction multiplyBy(factor) {\n    return function(number) {\n        return number * factor;\n    };\n}\n\nconst double = multiplyBy(2);\nconsole.log(double(5)); // 10\n\n// Recursive function\nfunction factorial(n) {\n    if (n === 0) return 1;\n    return n * factorial(n - 1);\n}\n\nconsole.log(factorial(5)); // 120</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-arrays",
            "title": "Arrays",
            "content": "<h3>Arrays in JavaScript</h3><pre class=\"lecture-pre\"><code>// Creating arrays\nconst fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;];\nconst numbers = [1, 2, 3, 4, 5];\nconst mixed = [1, &quot;hello&quot;, true, null];\n\n// Array methods that mutate the original array\nfruits.push(&quot;grape&quot;); // Add to end\nconsole.log(fruits); // [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;, &quot;grape&quot;]\n\nfruits.pop(); // Remove from end\nconsole.log(fruits); // [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;]\n\nfruits.unshift(&quot;strawberry&quot;); // Add to beginning\nconsole.log(fruits); // [&quot;strawberry&quot;, &quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;]\n\nfruits.shift(); // Remove from beginning\nconsole.log(fruits); // [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;]\n\nfruits.splice(1, 1, &quot;kiwi&quot;); // Remove 1 item at index 1, add &quot;kiwi&quot;\nconsole.log(fruits); // [&quot;apple&quot;, &quot;kiwi&quot;, &quot;orange&quot;]\n\n// Array methods that return new array\nconst numbers2 = [1, 2, 3, 4, 5];\nconst doubled = numbers2.map(num =&gt; num * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]\n\nconst evenNumbers = numbers2.filter(num =&gt; num % 2 === 0);\nconsole.log(evenNumbers); // [2, 4]\n\nconst sum = numbers2.reduce((acc, num) =&gt; acc + num, 0);\nconsole.log(sum); // 15\n\n// Searching arrays\nconsole.log(numbers2.indexOf(3)); // 2\nconsole.log(numbers2.includes(5)); // true\nconsole.log(numbers2.find(num =&gt; num &gt; 3)); // 4\n\n// Sorting\nconst unsorted = [3, 1, 4, 1, 5, 9, 2, 6];\nconst sorted = unsorted.sort((a, b) =&gt; a - b);\nconsole.log(sorted); // [1, 1, 2, 3, 4, 5, 6, 9]\n\n// Chaining methods\nconst result = [1, 2, 3, 4, 5]\n    .filter(n =&gt; n &gt; 2)\n    .map(n =&gt; n * 2)\n    .reduce((acc, n) =&gt; acc + n, 0);\n    \nconsole.log(result); // 24 ( (3+4+5) * 2 )</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-mutate-vs-not-mutate",
            "title": "Mutate vs Not Mutate",
            "content": "<h3>Mutating vs Non-Mutating Operations in JavaScript</h3><pre class=\"lecture-pre\"><code>// MUTATING METHODS (change the original array)\n\n// push() - adds to end\nconst arr1 = [1, 2, 3];\narr1.push(4);\nconsole.log(arr1); // [1, 2, 3, 4]\n\n// pop() - removes from end\nconst arr2 = [1, 2, 3];\narr2.pop();\nconsole.log(arr2); // [1, 2]\n\n// shift() - removes from start\nconst arr3 = [1, 2, 3];\narr3.shift();\nconsole.log(arr3); // [2, 3]\n\n// unshift() - adds to start\nconst arr4 = [1, 2, 3];\narr4.unshift(0);\nconsole.log(arr4); // [0, 1, 2, 3]\n\n// splice() - adds/removes elements\nconst arr5 = [1, 2, 3, 4];\narr5.splice(1, 2, 'a', 'b');\nconsole.log(arr5); // [1, 'a', 'b', 4]\n\n// sort() - sorts the array (with a compare function)\nconst arr6 = [3, 1, 2];\narr6.sort();\nconsole.log(arr6); // [1, 2, 3]\n\n// reverse() - reverses the array\nconst arr7 = [1, 2, 3];\narr7.reverse();\nconsole.log(arr7); // [3, 2, 1]\n\n// NON-MUTATING METHODS (return a new array)\n\n// concat() - combines arrays\nconst arr8 = [1, 2];\nconst newArr1 = arr8.concat([3, 4]);\nconsole.log(arr8); // [1, 2] (unchanged)\nconsole.log(newArr1); // [1, 2, 3, 4]\n\n// slice() - extracts portion of array\nconst arr9 = [1, 2, 3, 4];\nconst newArr2 = arr9.slice(1, 3);\nconsole.log(arr9); // [1, 2, 3, 4] (unchanged)\nconsole.log(newArr2); // [2, 3]\n\n// map() - creates new array with transformed elements\nconst arr10 = [1, 2, 3];\nconst newArr3 = arr10.map(x =&gt; x * 2);\nconsole.log(arr10); // [1, 2, 3] (unchanged)\nconsole.log(newArr3); // [2, 4, 6]\n\n// filter() - creates new array with filtered elements\nconst arr11 = [1, 2, 3, 4];\nconst newArr4 = arr11.filter(x =&gt; x % 2 === 0);\nconsole.log(arr11); // [1, 2, 3, 4] (unchanged)\nconsole.log(newArr4); // [2, 4]\n\n// Object mutation\nconst obj1 = { a: 1, b: 2 };\n// This mutates the original object\nobj1.c = 3;\nconsole.log(obj1); // { a: 1, b: 2, c: 3 }\n\n// Object non-mutation (using spread operator)\nconst obj2 = { a: 1, b: 2 };\nconst newObj = { ...obj2, c: 3 };\nconsole.log(obj2); // { a: 1, b: 2 } (unchanged)\nconsole.log(newObj); // { a: 1, b: 2, c: 3 }</code></pre>",
            "examples": []
        },
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
