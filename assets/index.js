const lectures = [
    {
        id: "node-1",
        number: 1,
        title: "Backend Concepts & API Theory",
        description: "What is Backend Development?, Client-Server Architecture, HTTP Protocol, APIs, REST, JSON, Middlewares",
        image: "./assets/images/logos/API.webp",
        status: "completed",
        content: "Node"
    },
    {
        id: "node-2",
        number: 2,
        title: "JavaScript Fundamentals 1",
        description: "Variables, Data Types, Scopes",
        image: "./assets/images/logos/JS.webp",
        status: "completed",
        content: "Node"
    },
    {
        id: "node-3",
        number: 3,
        title: "JavaScript Fundamentals 2",
        description: "Functions, Loops, Arrays, Mutate & Non-Mutate",
        image: "./assets/images/logos/JS.webp",
        status: "completed",
        content: "Node"
    },
    {
        id: "node-4",
        number: 4,
        title: "Advanced JavaScript 1",
        description: "Arrays, Objects",
        image: "./assets/images/logos/JS.webp",
        status: "completed",
        content: "Node"
    },
    {
        id: "node-5",
        number: 5,
        title: "Advanced JavaScript 2",
        description: "Timers, Date, Error Handling",
        image: "./assets/images/logos/JS.webp",
        status: "completed",
        content: "Node"
    },
    {
        id: "node-7",
        number: 6,
        title: "Advanced JavaScript 3",
        description: "Promises, Async/Await, Event Loop, Regex",
        image: "./assets/images/logos/JS.webp",
        status: "completed",
        content: "Node"
    },
    {
        id: "node-7",
        number: 7,
        title: "Advanced JavaScript 4",
        description: "ES6, Destructuring, OOP",
        image: "./assets/images/logos/JS.webp",
        status: "in-progress",
        content: "Node"
    },
    {
        id: "node-13",
        number: 13,
        title: "Git & Github",
        description: "Git & Github",
        image: "./assets/images/logos/github.webp",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-14",
        number: 14,
        title: "NodeJS",
        description: "Modules, File System, APIs",
        image: "./assets/images/logos/node.webp",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-16",
        number: 16,
        title: "ExpressJS 1",
        description: "HTTP Module, ExpressJS",
        image: "./assets/images/logos/node.webp",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-17",
        number: 17,
        title: "ExpressJS 2",
        description: "NPM, Middlewares, Folder Structure",
        image: "./assets/images/logos/node.webp",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-19",
        number: 19,
        title: "Postman & Databases",
        description: "Postman, PLop, Databases, Intro to MongoDB",
        image: "./assets/images/logos/mongodb.webp",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-20",
        number: 20,
        title: "MongoDB & Intro to Mongoose",
        description: "MongoDB, Mongoose",
        image: "./assets/images/logos/mongodb.webp",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-21",
        number: 21,
        title: "Mongoose 1",
        description: "Mongoose (Schema, Chaining, Populate)",
        image: "./assets/images/logos/mongodb.webp",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-23",
        number: 23,
        title: "Mongoose 2",
        description: "Mongoose (Relationships, Advanced Features)",
        image: "./assets/images/logos/mongodb.webp",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-24",
        number: 24,
        title: "Auth 1",
        description: "Authentication & Authorization, JWT, Cookies",
        image: "./assets/images/logos/auth.jpeg",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-25",
        number: 25,
        title: "Auth 2",
        description: "Password Security, Auth Endpoints",
        image: "./assets/images/logos/auth.jpeg",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-26",
        number: 26,
        title: "Auth 3",
        description: "Auth Endpoints, Auth Middleware",
        image: "./assets/images/logos/auth.jpeg",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-27",
        number: 27,
        title: "Security Practices",
        description: "Seeds, Security Practices",
        image: "./assets/images/logos/auth.jpeg",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-28",
        number: 28,
        title: "Advanced Security & Express Validation",
        description: "Argon2, XSS, Express Validator, Async Handler",
        image: "./assets/images/logos/auth.jpeg",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-30",
        number: 30,
        title: "File Management",
        description: "Multer & Cloudinary",
        image: "./assets/images/logos/files.jpeg",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-32",
        number: 32,
        title: "Email & Deployment",
        description: "Email & Deployment",
        image: "./assets/images/logos/hosting.webp",
        status: "not-started",
        content: "Node"
    },
    {
        id: "node-33",
        number: 33,
        title: "Full-Stack Application Demo",
        description: "Complete real-world application with frontend-backend integration",
        image: "./assets/images/logos/Project.webp",
        status: "not-started",
        content: "Node"
    }
];

// DOM Elements
const lecturesTableBody = document.getElementById('lectures-table-body');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const statusFilter = document.getElementById('status-filter');
const sortBy = document.getElementById('sort-by');
const totalLecturesEl = document.getElementById('total-lectures');
const completedLecturesEl = document.getElementById('completed-lectures');
const inProgressLecturesEl = document.getElementById('in-progress-lectures');
const totalDurationEl = document.getElementById('total-duration');

// Initialize the portal
function initPortal() {
    renderLecturesTable(lectures);
    updateStatistics();
    setupEventListeners();
}

// Render the lectures table
function renderLecturesTable(lecturesToRender) {
    lecturesTableBody.innerHTML = '';
    
    lecturesToRender.forEach((lecture, rowIndex) => {
        const row = document.createElement('tr');
        const displayNumber = rowIndex + 1;

        // Determine status badge class
        let statusClass = '';
        let statusText = '';
        
        switch(lecture.status) {
            case 'completed':
                statusClass = 'status-completed';
                statusText = 'Completed';
                break;
            case 'in-progress':
                statusClass = 'status-in-progress';
                statusText = 'In Progress';
                break;
            default:
                statusClass = 'status-not-started';
                statusText = 'Not Started';
        }
        
        row.innerHTML = `
            <td class="lecture-number">${displayNumber}</td>
            <td class="lecture-img">
                <img src="${lecture.image}" alt="image-${displayNumber}">
            </td>
            <td>
                <div class="lecture-title">${lecture.title}</div>
            </td>
            <td class="lecture-description">${lecture.description}</td>
            <td class="lecture-status">
                <span class="status-badge ${statusClass}">${statusText}</span>
            </td>
            <td>
                ${lecture.hidden? "":`<button class='action-btn' data-lecture-id="${lecture.number}">View</button>`}
            </td>
        `;
        
        lecturesTableBody.appendChild(row);
    });
    
    // Add event listeners to view buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lectureId = this.getAttribute('data-lecture-id');
            viewLecture(lectureId);
        });
    });
}

// Update statistics
function updateStatistics() {
    const total = lectures.length;
    const completed = lectures.filter(l => l.status === 'completed').length;
    const inProgress = lectures.filter(l => l.status === 'in-progress').length;
    
    // Calculate total duration    
    const totalHours = Math.round(lectures.length * 2);
    
    totalLecturesEl.textContent = total;
    completedLecturesEl.textContent = completed;
    inProgressLecturesEl.textContent = inProgress;
    totalDurationEl.textContent = `${totalHours}h`;
}

// Filter and search lectures
function filterLectures() {
    const searchTerm = searchInput.value.toLowerCase();
    const statusValue = statusFilter.value;
    const sortValue = sortBy.value;
    
    let filteredLectures = lectures.filter(lecture => {
        const matchesSearch = lecture.title.toLowerCase().includes(searchTerm) || 
                                lecture.description.toLowerCase().includes(searchTerm);
        
        const matchesStatus = statusValue === 'all' || lecture.status === statusValue;
        
        return matchesSearch && matchesStatus;
    });
    
    // Sort lectures (by number = curriculum order in master list, not raw file id)
    filteredLectures.sort((a, b) => {
        if (sortValue === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortValue === 'duration') {
            const aDuration = parseFloat(a.duration);
            const bDuration = parseFloat(b.duration);
            return bDuration - aDuration;
        } else {
            return lectures.indexOf(a) - lectures.indexOf(b);
        }
    });
    
    renderLecturesTable(filteredLectures);
}

// View lecture details
function viewLecture(lectureId) {        
    if(!lectureId) {
        alert(`Invalid Lecture Id`);
        return;
    }

    const lecture = lectures.find(e => e.number === +lectureId);    

    if(!lecture) {
        alert("Invalid Lecture Id");
        return;
    }

    if(lecture.status === "not-started") {
        alert("You can not visit not-completed lecture");
        return;
    }
    // For demonstration, we'll highlight the selected lecture
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.textContent = 'View';
        btn.style.backgroundColor = '';
    });
    
    const selectedBtn = document.querySelector(`.action-btn[data-lecture-id="${lectureId}"]`);

    if (selectedBtn) {
        window.location.assign(`lecture${lectureId}.html`)
    }
}

// Set up event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', filterLectures);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            filterLectures();
        }
    });
    statusFilter.addEventListener('change', filterLectures);
    sortBy.addEventListener('change', filterLectures);
}

// Initialize the portal when the DOM is loaded
document.addEventListener('DOMContentLoaded', initPortal);
