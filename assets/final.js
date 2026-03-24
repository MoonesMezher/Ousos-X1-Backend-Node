const courseData = {
    courseInfo: {
        name: "Node.js Bootcamp - Ousos",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "whats-next-node",
            title: "What is Next? Your Path After This Bootcamp",
            content: `
                <h3>You have covered the core backend track</h3>
                <p>You have worked through JavaScript, Node.js, Express, MongoDB/Mongoose, authentication, security, file uploads, email, and deployment concepts. That is a strong foundation for backend and API work.</p>

                <h3>Go deeper on the server</h3>
                <ul>
                    <li><strong>Architecture</strong>: Layered folders, services, repositories, and clear separation of routes vs business logic.</li>
                    <li><strong>Testing</strong>: Jest or Vitest for units; Supertest for HTTP APIs.</li>
                    <li><strong>SQL</strong>: PostgreSQL with an ORM (Prisma, TypeORM, Sequelize) alongside or instead of MongoDB.</li>
                    <li><strong>Queues &amp; jobs</strong>: BullMQ, Redis, background workers for emails and heavy tasks.</li>
                    <li><strong>Observability</strong>: Structured logging, metrics, and health checks for production APIs.</li>
                </ul>

                <h3>If you want full-stack</h3>
                <ul>
                    <li>Pick one frontend (React, Vue, or similar) and consume the same REST APIs you already design.</li>
                    <li>Or learn <strong>Next.js</strong> if you want file-based routing and API routes in one project.</li>
                </ul>

                <h3>Portfolio and experience</h3>
                <ul>
                    <li>Ship <strong>3–5 complete projects</strong> with README, env samples, and live deploy (Render, Railway, Fly.io, etc.).</li>
                    <li>Keep code on <strong>GitHub</strong> with clear commits and a short demo video or GIF.</li>
                    <li>Contribute to open source or fix small issues in libraries you use.</li>
                </ul>

                <h3>Job search</h3>
                <ul>
                    <li>Target roles like Junior Backend Developer, Node.js Developer, or API Engineer.</li>
                    <li>Practice explaining <strong>auth flows</strong>, <strong>REST design</strong>, and <strong>one system you built end-to-end</strong>.</li>
                    <li>Pair consistent practice with networking (local meetups, Discord, LinkedIn).</li>
                </ul>

                <p style="margin-top:1.5rem;"><strong>Consistent building matters more than chasing every new tool.</strong> Pick the next step that supports a project you care about, and ship it.</p>
            `,
            examples: [
                {
                    title: "Project ideas to build next",
                    content: `
                        <ol>
                            <li><strong>API with roles</strong>: Admin vs user routes, JWT or session cookies, audit log.</li>
                            <li><strong>Multi-tenant SaaS sketch</strong>: Organizations, invites, scoped data.</li>
                            <li><strong>Integration service</strong>: Webhooks in, signed payloads, retry and idempotency.</li>
                            <li><strong>File pipeline</strong>: Upload, virus scan hook (or queue), resize, CDN URL.</li>
                            <li><strong>Read-heavy API</strong>: Caching layer (Redis), pagination, and ETag/Cache-Control.</li>
                        </ol>
                    `
                }
            ]
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
