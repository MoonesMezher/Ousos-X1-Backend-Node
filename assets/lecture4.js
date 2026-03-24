const courseData = {
    "courseInfo": {
        "name": "Focal X V10 - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "Arrays & Advanced JavaScript: Timers, Date",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/* \n1- Strings\n2- Truthy &amp; Falsy values\n3- Loops (while, do while, for (normal - in - of))\n4- Break &amp; Continue keys inside loops\n5- Functions\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-functions",
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
        {
            "id": "topic-4-timers",
            "title": "Timers",
            "content": "<h3>setInterval &amp; setTimeout</h3><pre class=\"lecture-pre\"><code>// setInterval(function, time); =&gt; time in ms\nlet i = 1;\nconst interval = setInterval(() =&gt; {\n    console.log(&quot;Hi from inside setInterval callback function&quot;, i);\n    i++;\n}, 1000); // each 1000 ms == 1 s =&gt; run the callback function\n\n// setTimeout(function, time); =&gt; time in ms\nsetTimeout(() =&gt; {\n    console.log(&quot;Hi from inside setTimeout callback function&quot;);\n}, 1000); // after 1000 ms == 1 s =&gt; run the callback function\n\n// pause set interval\nsetTimeout(() =&gt; {\n    clearInterval(interval);\n}, 3000);\n\n// Timer example:\nlet seconds = 10;\nlet remaining = seconds;\n\n// Create interval\nconst timer = setInterval(() =&gt; {\n    remaining--;\n    \n    const minutes = Math.floor(remaining / 60);\n    const seconds = remaining % 60;\n    const timeString = `${(minutes).toString()}:${String(seconds)}`;\n    \n    process.stdout.write(`\\rTime remaining: ${timeString}`);\n    \n    if (remaining &lt;= 0) {\n        clearInterval(timer);\n        console.log(&quot;\\n\\nTimer complete! 🎉&quot;);\n        process.exit();\n    }\n}, 1000);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-5-date-object",
            "title": "Date Object",
            "content": "<h3>Working with Dates in JavaScript</h3><pre class=\"lecture-pre\"><code>const date = new Date();\n\nconsole.log(typeof date); // object\nconsole.log(date); // current date and time\nconsole.log(date.getTime()); // milliseconds since epoch\nconsole.log(date.getFullYear()); // current year\nconsole.log(date.getMonth() + 1); // current month (0-indexed)\nconsole.log(date.getDay()); // day of the week (0 = Sunday)\n\nconst date2 = new Date(&quot;Mar 8, 2020&quot;);\n\nconsole.log(date2); \nconsole.log(date2.getTime());\nconsole.log(date2.getFullYear());\nconsole.log(date2.getMonth() + 1); \nconsole.log(date2.getDay()); \n\n// Formatting dates\nconst formattedDate = `${date2.getFullYear()}-${(date2.getMonth() + 1).toString().padStart(2, '0')}-${date2.getDate().toString().padStart(2, '0')}`;\nconsole.log(formattedDate); // 2020-03-08</code></pre>",
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
