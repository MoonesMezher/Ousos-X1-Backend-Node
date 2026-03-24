const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "Advanced JavaScript: Objects, Promises, Error Handling",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- Arrays \n2- Mutate &amp; Not-Mutate methods\n3- SetTimeout &amp; SetInterval\n4- Date in JavaScript \n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-map-set",
            "title": "Map & Set",
            "content": "<h3>Map and Set Data Structures</h3><pre class=\"lecture-pre\"><code>// A Map stores key-value pairs and preserves insertion order\nconst map = new Map();\n\n// - Add\nmap.set(0, &quot;A&quot;);\nmap.set(1, &quot;B&quot;);\n\n// - Get\nconst item1 = map.get(0);\nconsole.log(item1); // A\n\n// - Length\nconsole.log(map.size); // 2\n\n// - Has\nconst isExist = map.has(1); // by key\nconsole.log(isExist); // true\n\n// - Delete\nmap.delete(0);\nconsole.log(map); // Map(1) { 1 =&gt; &quot;B&quot; }\n\n// - Get keys as array\nconsole.log([...map.keys()]); // [1]\n\n// - Get values as array\nconsole.log([...map.values()]); // [&quot;B&quot;]\n\n// - Get keys and values as array\nconsole.log([...map.entries()]); // [[1, &quot;B&quot;]]\n\n// - Foreach\nmap.forEach((val, key) =&gt; {\n    console.log(key, val); // 1 &quot;B&quot;\n});\n\n// - Clear\nmap.clear();\nconsole.log(map); // Map(0) {}\n\n// A Set stores unique values (no duplicates)\nconst set = new Set();\n\n// - Add\nset.add(&quot;AA&quot;);\nset.add(&quot;BB&quot;);\nset.add(&quot;AA&quot;); // Won't be added (duplicate)\n\n// - Get (no direct get method, convert to array)\nconst item1InSet = [...set][0];\nconsole.log(item1InSet); // AA\n\n// - Length\nconsole.log(set.size); // 2\n\n// - Has\nconst isExistInSet = set.has(&quot;AA&quot;); // by value\nconsole.log(isExistInSet); // true\n\n// - Delete\nset.delete(&quot;AA&quot;);\nconsole.log(set); // Set(1) { &quot;BB&quot; }\n\n// - Get values as array\nconsole.log([...set.values()]); // [&quot;BB&quot;]\n\n// - Foreach\nset.forEach((val) =&gt; {\n    console.log(val); // BB\n});\n\n// - Clear\nset.clear();\nconsole.log(set); // Set(0) {}</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-objects",
            "title": "Objects",
            "content": "<h3>JavaScript Objects</h3><pre class=\"lecture-pre\"><code>// Objects group related properties/behaviors\nconst person = {\n    name: &quot;Alice&quot;,\n    age: 30,\n    isStudent: true,\n    subjects: [&quot;Math&quot;, &quot;Programming&quot;],\n    address: {\n        city: &quot;Paris&quot;,\n        country: &quot;France&quot;\n    },\n    greet: function() {\n        return `Hello, my name is ${this.name}`;\n    }\n};\n\n// Accessing data (two ways)\nconsole.log(person.name); // Alice\nconsole.log(person[&quot;name&quot;]); // Alice\n\nconst prop = &quot;age&quot;;\nconsole.log(person[prop]); // 30\n\nconsole.log(person.address.city); // Paris\nconsole.log(person.greet()); // Hello, my name is Alice\n\n// Object Operations:\n// Add Property\nperson.job = &quot;Developer&quot;;\n\n// Delete Property\ndelete person.isStudent;\n\n// Modify Property\nperson.age = 31;\n\n// Check if Property Exists\nconsole.log(&quot;name&quot; in person); // true\n\n// Object Methods:\nconsole.log(Object.keys(person)); // [&quot;name&quot;, &quot;age&quot;, &quot;subjects&quot;, &quot;address&quot;, &quot;greet&quot;, &quot;job&quot;]\nconsole.log(Object.values(person)); // [&quot;Alice&quot;, 31, Array(2), {…}, ƒ, &quot;Developer&quot;]\nconsole.log(Object.entries(person)); // Array of [key, value] pairs\n\n// Object.assign() (merge)\nconst car = { brand: &quot;Toyota&quot; };\nconst updatedCar = Object.assign({}, car, { model: &quot;Camry&quot;, year: 2023 });\nconsole.log(updatedCar); // { brand: &quot;Toyota&quot;, model: &quot;Camry&quot;, year: 2023 }\n\n// Object.freeze()\nObject.freeze(car);\ncar.brand = &quot;Honda&quot;; // Fails silently in non-strict mode\nconsole.log(car.brand); // &quot;Toyota&quot;\n\n// Iterating Over Objects:\n// for...in loop\nfor (const key in person) {\n    console.log(`${key}: ${person[key]}`);\n}\n\n// Object.entries() + forEach\nObject.entries(person).forEach(([key, value]) =&gt; {\n    console.log(`${key} -&gt; ${value}`);\n});\n\n// Transforming Objects:\n// Spread operator\nconst updatedPerson = { ...person, age: 31 };\n\n// Destructuring\nconst { name: personName, address: { city } } = person;\nconsole.log(personName, city); // &quot;Alice Paris&quot;\n\n// Deep copy\nconst personClone = JSON.parse(JSON.stringify(person));\n\n// Dynamic property names\nconst propName = &quot;email&quot;;\nconst user = {\n    [propName]: &quot;alice@example.com&quot;,\n    [`${propName}-verified`]: true\n};\n\n// Optional chaining (ES2020)\nconsole.log(person?.address?.zipCode ?? &quot;Unknown&quot;); // &quot;Unknown&quot;</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-error-handling",
            "title": "Error Handling",
            "content": "<h3>try...catch for Error Handling</h3><pre class=\"lecture-pre\"><code>// Use try...catch to handle errors gracefully\n// Most commonly used with promises and async methods\n\n/*\nForm:\ntry {\n    // code that might throw an error\n} catch (err) {\n    // handle the error\n} finally { \n    // code that runs regardless of try/catch outcome\n}\n=&gt; finally is optional\n*/\n\ntry {\n    // Example 1: Assignment to constant\n    // const x = 1;\n    // x = 2; // This would throw an error\n    \n    // Example 2: Calling function before declaration (with const)\n    // console.log(hello());\n    // const hello = () =&gt; &quot;hello&quot;; // This would throw an error\n    \n    // Example 3: Accessing undefined variable\n    // console.log(title); // This would throw an error\n    \n    // Example 4: Calling non-function property\n    // const obj = { age: 10 };\n    // console.log(obj.age()); // This would throw an error\n    \n    console.log(&quot;success =&gt;&quot;, 1);\n} catch (error) {\n    console.log(&quot;error =&gt;&quot;, error.message);    \n} finally {\n    console.log(&quot;Completed&quot;);\n}\n\n// Custom error throwing\nfunction divide(a, b) {\n    if (b === 0) {\n        throw new Error(&quot;Division by zero is not allowed&quot;);\n    }\n    return a / b;\n}\n\ntry {\n    const result = divide(10, 0);\n    console.log(result);\n} catch (error) {\n    console.log(&quot;Caught an error:&quot;, error.message);\n}</code></pre>",
            "examples": []
        },
        {
            "id": "topic-4-operators",
            "title": "Operators",
            "content": "<h3>Important JavaScript Operators</h3><pre class=\"lecture-pre\"><code>// Logical Operators:\n\n// 1. &amp;&amp; (Logical AND): Returns the first falsy value or the last truthy value\nconst user = { isAdmin: true };\nuser.isAdmin &amp;&amp; console.log(&quot;Access granted&quot;); // &quot;Access granted&quot;\n\nconsole.log(0 &amp;&amp; &quot;hello&quot;); // 0 (first falsy value)\nconsole.log(1 &amp;&amp; &quot;hello&quot;); // &quot;hello&quot; (both truthy, returns last)\n\n// 2. || (Logical OR): Returns the first truthy value or the last falsy value\nconst username = &quot;&quot;;\nconsole.log(username || &quot;Guest&quot;); // &quot;Guest&quot;\n\nconsole.log(0 || &quot;&quot;); // &quot;&quot; (both falsy, returns last)\nconsole.log(0 || &quot;hello&quot;); // &quot;hello&quot; (first truthy value)\n\n// 3. ?? (Nullish Coalescing): Returns right-hand value only if left is null or undefined\nconst quantity = 0;\nconsole.log(quantity ?? 5); // 0 (0 is not null/undefined)\nconsole.log(null ?? 5); // 5\n\n// Compare with ||:\nconsole.log(quantity || 5); // 5 (0 is falsy)\n\n// 4. ?. (Optional Chaining): Safely access nested properties\nconst user2 = { address: null };\nconsole.log(user2?.address?.city); // undefined (no error)\n\n// Works with functions:\nconst fetchData = null;\nconsole.log(fetchData?.()); // undefined\n\n// 5. ? : (Ternary Operator): Conditional value assignment\nconst isValid = true;\nconst message = isValid ? &quot;Yes&quot; : &quot;No&quot;;\nconsole.log(message); // &quot;Yes&quot;\n\n// Comparison Table:\n// | Operator | Name                | Returns                           | Example                    |  \n// |----------|---------------------|-----------------------------------|----------------------------|  \n// | &amp;&amp;       | Logical AND         | First falsy value or last truthy  | 0 &amp;&amp; &quot;hi&quot; → 0              |  \n// | ||       | Logical OR          | First truthy value or last falsy  | &quot;&quot; || &quot;hi&quot; → &quot;hi&quot;          |  \n// | ??       | Nullish Coalescing  | Right-hand if left is null/undefined | 0 ?? 5 → 0             |  \n// | ?.       | Optional Chaining   | undefined if path is nullish      | user?.address?.city → safe |  \n// | ? :      | Ternary             | Value based on condition          | isValid ? &quot;Yes&quot; : &quot;No&quot;     |</code></pre>",
            "examples": []
        },
        {
            "id": "topic-5-promises",
            "title": "Promises",
            "content": "<h3>JavaScript Promises</h3><pre class=\"lecture-pre\"><code>// Promises represent the eventual completion of an asynchronous operation\n\n// Creating a promise\nconst promise = new Promise((resolve, reject) =&gt; {\n    // Simulate complex code\n    for(let i = 0; i &lt; 1_000_000_000; i++) {}\n    \n    const data = Math.random();\n    \n    if(data &lt; 0.5) {\n        resolve(data); // Success\n    } else {\n        reject(&quot;Error&quot;); // Failure\n    }\n});\n\n// Using .then() and .catch()\npromise\n    .then((data) =&gt; {\n        console.log(data);\n    })\n    .catch((err) =&gt; {\n        console.log(err);\n    })\n    .finally(() =&gt; {\n        console.log(&quot;Completed&quot;);\n    });\n\n// Converting to async/await\nconst app = async () =&gt; {\n    try {\n        const data = await promise;\n        console.log(&quot;Success:&quot;, data);\n    } catch (error) {\n        console.log(&quot;Error:&quot;, error);\n    }\n};\napp();\n\n// Real-world example: API call simulation\nfunction fetchUserData() {\n    return new Promise((resolve, reject) =&gt; {\n        setTimeout(() =&gt; {\n            const success = Math.random() &gt; 0.3;\n            if (success) {\n                resolve({ name: &quot;Alice&quot;, age: 30 });\n            } else {\n                reject(&quot;Failed to fetch user data&quot;);\n            }\n        }, 2000);\n    });\n}\n\n// Using the promise\nfetchUserData()\n    .then(user =&gt; console.log(&quot;User:&quot;, user))\n    .catch(error =&gt; console.error(&quot;Error:&quot;, error));\n\n// Using Promise.all() with arrays\nconst promise1 = Promise.resolve(3);\nconst promise2 = new Promise((resolve) =&gt; setTimeout(resolve, 100, 'foo'));\nconst promise3 = fetchUserData();\n\nPromise.all([promise1, promise2, promise3])\n    .then(values =&gt; console.log(values))\n    .catch(error =&gt; console.error(error));</code></pre>",
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
