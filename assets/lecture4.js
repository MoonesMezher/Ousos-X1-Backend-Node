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
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/* \n1- Strings\n2- Truthy &amp; Falsy values\n3- Loops (while, do while, for (normal - in - of))\n4- Break &amp; Continue keys inside loops\n5- Functions\n6- Arrays\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-arrays",
            "title": "Arrays",
            "content": "<h3>Arrays in JavaScript</h3><pre class=\"lecture-pre\"><code>// Creating arrays\nconst fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;];\nconst numbers = [1, 2, 3, 4, 5];\nconst mixed = [1, &quot;hello&quot;, true, null];\n\n// Array methods that mutate the original array\nfruits.push(&quot;grape&quot;); // Add to end\nconsole.log(fruits); // [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;, &quot;grape&quot;]\n\nfruits.pop(); // Remove from end\nconsole.log(fruits); // [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;]\n\nfruits.unshift(&quot;strawberry&quot;); // Add to beginning\nconsole.log(fruits); // [&quot;strawberry&quot;, &quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;]\n\nfruits.shift(); // Remove from beginning\nconsole.log(fruits); // [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;]\n\nfruits.splice(1, 1, &quot;kiwi&quot;); // Remove 1 item at index 1, add &quot;kiwi&quot;\nconsole.log(fruits); // [&quot;apple&quot;, &quot;kiwi&quot;, &quot;orange&quot;]\n\n// Array methods that return new array\nconst numbers2 = [1, 2, 3, 4, 5];\nconst doubled = numbers2.map(num =&gt; num * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]\n\nconst evenNumbers = numbers2.filter(num =&gt; num % 2 === 0);\nconsole.log(evenNumbers); // [2, 4]\n\nconst sum = numbers2.reduce((acc, num) =&gt; acc + num, 0);\nconsole.log(sum); // 15\n\n// Searching arrays\nconsole.log(numbers2.indexOf(3)); // 2\nconsole.log(numbers2.includes(5)); // true\nconsole.log(numbers2.find(num =&gt; num &gt; 3)); // 4\n\n// Sorting\nconst unsorted = [3, 1, 4, 1, 5, 9, 2, 6];\nconst sorted = unsorted.sort((a, b) =&gt; a - b);\nconsole.log(sorted); // [1, 1, 2, 3, 4, 5, 6, 9]\n\n// Chaining methods\nconst result = [1, 2, 3, 4, 5]\n    .filter(n =&gt; n &gt; 2)\n    .map(n =&gt; n * 2)\n    .reduce((acc, n) =&gt; acc + n, 0);\n    \nconsole.log(result); // 24 ( (3+4+5) * 2 )</code></pre>",
            "examples": []
        },
                {
            "id": "topic-2-objects",
            "title": "Objects",
            "content": "<h3>JavaScript Objects</h3><pre class=\"lecture-pre\"><code>// Objects group related properties/behaviors\nconst person = {\n    name: &quot;Alice&quot;,\n    age: 30,\n    isStudent: true,\n    subjects: [&quot;Math&quot;, &quot;Programming&quot;],\n    address: {\n        city: &quot;Paris&quot;,\n        country: &quot;France&quot;\n    },\n    greet: function() {\n        return `Hello, my name is ${this.name}`;\n    }\n};\n\n// Accessing data (two ways)\nconsole.log(person.name); // Alice\nconsole.log(person[&quot;name&quot;]); // Alice\n\nconst prop = &quot;age&quot;;\nconsole.log(person[prop]); // 30\n\nconsole.log(person.address.city); // Paris\nconsole.log(person.greet()); // Hello, my name is Alice\n\n// Object Operations:\n// Add Property\nperson.job = &quot;Developer&quot;;\n\n// Delete Property\ndelete person.isStudent;\n\n// Modify Property\nperson.age = 31;\n\n// Check if Property Exists\nconsole.log(&quot;name&quot; in person); // true\n\n// Object Methods:\nconsole.log(Object.keys(person)); // [&quot;name&quot;, &quot;age&quot;, &quot;subjects&quot;, &quot;address&quot;, &quot;greet&quot;, &quot;job&quot;]\nconsole.log(Object.values(person)); // [&quot;Alice&quot;, 31, Array(2), {…}, ƒ, &quot;Developer&quot;]\nconsole.log(Object.entries(person)); // Array of [key, value] pairs\n\n// Object.assign() (merge)\nconst car = { brand: &quot;Toyota&quot; };\nconst updatedCar = Object.assign({}, car, { model: &quot;Camry&quot;, year: 2023 });\nconsole.log(updatedCar); // { brand: &quot;Toyota&quot;, model: &quot;Camry&quot;, year: 2023 }\n\n// Object.freeze()\nObject.freeze(car);\ncar.brand = &quot;Honda&quot;; // Fails silently in non-strict mode\nconsole.log(car.brand); // &quot;Toyota&quot;\n\n// Iterating Over Objects:\n// for...in loop\nfor (const key in person) {\n    console.log(`${key}: ${person[key]}`);\n}\n\n// Object.entries() + forEach\nObject.entries(person).forEach(([key, value]) =&gt; {\n    console.log(`${key} -&gt; ${value}`);\n});\n\n// Transforming Objects:\n// Spread operator\nconst updatedPerson = { ...person, age: 31 };\n\n// Destructuring\nconst { name: personName, address: { city } } = person;\nconsole.log(personName, city); // &quot;Alice Paris&quot;\n\n// Deep copy\nconst personClone = JSON.parse(JSON.stringify(person));\n\n// Dynamic property names\nconst propName = &quot;email&quot;;\nconst user = {\n    [propName]: &quot;alice@example.com&quot;,\n    [`${propName}-verified`]: true\n};\n\n// Optional chaining (ES2020)\nconsole.log(person?.address?.zipCode ?? &quot;Unknown&quot;); // &quot;Unknown&quot;</code></pre>",
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
