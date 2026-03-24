const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "TypeScript & Git",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- TypeScript Info\n2- Data Types\n3- Tubles\n4- Interfaces\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-interfaces",
            "title": "Interfaces",
            "content": "<h3>Interfaces in TypeScript</h3><pre class=\"lecture-pre\"><code>interface Author {\n    name: string;\n    age: number;\n}\n\ntype x = Author\n\nconst mario: Author = {\n    name: &quot;Mario&quot;,\n    age: 10\n}\n\ninterface Post {\n    title?: string;\n    body: string;\n    readonly tags: string[];\n    createdAt: Date;\n    author: Author;\n    print(): void\n}\n\nconst post: Post = {\n    title: &quot;s&quot;,\n    body: &quot;ss&quot;,\n    tags: [&quot;sss&quot;],\n    createdAt: new Date(),\n    author: {\n        name: &quot;ss&quot;,\n        age: 10\n    },\n    print: () =&gt; {\n        console.log(&quot;SS&quot;)\n    }\n}\n\n// 1- NOTE: prop?: type; =&gt; optional property =&gt; this means that the property may or may not be present in the object.\n// 2- NOTE: readonly prop: type; =&gt; readonly property =&gt; this means the property cannot be modified after the object is created.\n// 3- NOTE: prop(): type; =&gt; method as property\n// 4- NOTE: you can create a new interface that extends an existing one. This allows you to build on top of existing structures.\n\ninterface FeaturedPost extends Post {\n    featured: boolean; // New property\n} \n\n// 5- NOTE: you can define interfaces that can be indexed with a specific type. \nThis is useful for objects that have dynamic keys.\n\ninterface StringArray {\n    [index: number]: string; // Index signature\n}\n\nlet myArray: StringArray = [&quot;Hello&quot;, &quot;World&quot;];\n\n// 6- NOTE: you can combine multiple interfaces using intersection types.\ninterface Post {\n    title: string;\n    body: string;\n}\n\ninterface Author {\n    name: string;\n}\n\ntype PostWithAuthor = Post &amp; Author;\n\n// 7- NOTE: classes can implement interfaces, ensuring that they adhere \n// to the defined structure.\n\nconst post1: Post = {\n    title: &quot;post-1&quot;,\n    body: &quot;ffffffffffffffffffffffff&quot;,\n    tags: [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;, &quot;f&quot;],\n    createdAt: new Date(),\n    author: mario\n}\n\nfunction getAuthor(post: Post): Author {\n    return post.author;\n}\n\nconsole.log(getAuthor(post1));\n\nconst posts: Post[] = [];\n\n// Error\nposts.push(&quot;s&quot;);\n\nposts.push(post1);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-type-aliases",
            "title": "Type Aliases",
            "content": "<h3>Type Aliases in TypeScript</h3><pre class=\"lecture-pre\"><code>// NOTE: add letter &quot;T&quot; to each type alias to make it clear\n\ntype Color = string;\n\nconst colorOne: Color = &quot;black&quot;;\n\ntype Post = {\n    title: string,\n    body: string\n}\n\nconst post1: Post = {\n    title: &quot;post-1&quot;,\n    body: &quot;ffff&quot;\n}\n\n// NOTE: Post type does not match Post variable\n\nconst Post: Post = {\n    title: &quot;post-1&quot;,\n    body: &quot;ffff&quot;\n}</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-union-types",
            "title": "Union Types",
            "content": "<h3>Union Types in TypeScript</h3><pre class=\"lecture-pre\"><code>type Email = string | null;\n\nlet adminEmail: Email = null; // inital email\n\n// when admin login\nadminEmail = &quot;admin@admin.com&quot;;\n\n// when admin logout\nadminEmail = null;\n\nfunction getAdminEmail(email: Email): number {\n    /* \n        you can not use string methods here because the value can be null \n        so you will be ensure use somthing fit all types\n\n        error =&gt; return email.length;\n    */\n    return email?.length || 0;\n}</code></pre>",
            "examples": []
        },
        {
            "id": "topic-4-type-guards",
            "title": "Type Guards",
            "content": "<h3>Type Guards in TypeScript</h3><pre class=\"lecture-pre\"><code>type Id = string | number;\n\nfunction swapId(id: Id): Id {\n    // error\n    return parseInt(id);\n\n    // typescript knows everything here\n    if(typeof id === &quot;number&quot;) {\n        return id.toString();\n    } else {\n        return parseInt(id);\n    }\n}</code></pre>",
            "examples": []
        },
        {
            "id": "topic-5-tagged-interfaces",
            "title": "Tagged Interfaces",
            "content": "<h3>Tagged Interfaces in TypeScript</h3><pre class=\"lecture-pre\"><code>interface Post {\n    type: &quot;post&quot;\n    id: number\n    title: string\n    body: string\n}\n\ninterface Author {\n    type: &quot;author&quot;\n    id: number\n    name: string\n    age: number\n}\n\ntype PostOrAuthor = Post | Author;\n\nfunction test(val: PostOrAuthor): void {\n    // you can get the same properties to each interface like val.id\n    console.log(val.id);\n\n    if(val.type === 'author') {\n        console.log(val.name, val.age);\n    } else {\n        console.log(val.title, val.body);\n    }\n}\n\nlet author: PostOrAuthor = {\n    type: &quot;post&quot;,\n    id: 1,\n    title: &quot;ss&quot;,\n    body: &quot;OO&quot;\n}\n\ntest(author);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-6-generics",
            "title": "Generics",
            "content": "<h3>Generics in TypeScript</h3><pre class=\"lecture-pre\"><code>/*\nGenerics provide a way to create reusable \ncomponents that can work with any data type. \nThey allow you to define a type variable that can be \nreplaced with a specific type when the component is used.\n*/\n\nfunction identity&lt;S&gt;(arg: S): void {\n    console.log(arg);\n}\n\nidentity&lt;string&gt;(&quot;s&quot;);\nidentity&lt;number&gt;(10);\n\nidentity&lt;boolean&gt;(true);\nidentity&lt;number&gt;(10);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-7-advanced-topics",
            "title": "Advanced  Topics",
            "content": "<h3>Advanced Topics in TypeScript</h3><pre class=\"lecture-pre\"><code>// 1. Enums\n// 2. Mapping\n// 3. Conditional Types\n// 4. Utility Types\n// 5. Intersection Types\n// 6. Namespaces\n// 7. Abstract Classes</code></pre>",
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
