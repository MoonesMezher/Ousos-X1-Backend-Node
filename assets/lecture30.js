const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "File Managment & Production Deployment",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson</h3><pre class=\"lecture-pre\"><code>1- Solve Task 7</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-file-handling",
            "title": "File Handling",
            "content": "<h3>File Uploads with Multer &amp; Cloud Storage</h3><pre class=\"lecture-pre\"><code>/*\nFile Upload Best Practices:\n• Multer for file handling\n• Local storage with static file serving\n• Cloudinary for cloud storage\n• File validation &amp; security\n*/\n\n// ===== MULTER WITH LOCAL STORAGE =====\n// src/middleware/uploadMiddleware.js\nconst multer = require('multer');\nconst path = require('path');\nconst fs = require('fs');\n\n// Ensure upload directory exists\nconst uploadDir = path.join(__dirname, '../uploads');\nif (!fs.existsSync(uploadDir)) {\n    fs.mkdirSync(uploadDir, { recursive: true });\n}\n\n// Configure local storage with Multer\nconst storage = multer.diskStorage({\n    destination: (req, file, cb) =&gt; {\n        // Organize files by type\n        let folder = 'uploads/';\n        if (file.mimetype.startsWith('image/')) {\n            folder += 'images/';\n        } else if (file.mimetype.startsWith('application/')) {\n            folder += 'documents/';\n        } else {\n            folder += 'others/';\n        }\n        \n        // Create folder if it doesn't exist\n        if (!fs.existsSync(folder)) {\n            fs.mkdirSync(folder, { recursive: true });\n        }\n        cb(null, folder);\n    },\n    filename: (req, file, cb) =&gt; {\n        // Generate unique filename with original extension\n        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);\n        const fileExtension = path.extname(file.originalname);\n        const baseName = path.basename(file.originalname, fileExtension);\n        const safeFileName = baseName.replace(/[^a-zA-Z0-9]/g, '_');\n        cb(null, safeFileName + '-' + uniqueSuffix + fileExtension);\n    }\n});\n\n// File filter for security\nconst fileFilter = (req, file, cb) =&gt; {\n    // Check file types\n    if (file.mimetype.startsWith('image/')) {\n        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];\n        if (allowedTypes.includes(file.mimetype)) {\n            cb(null, true);\n        } else {\n            cb(new Error('Only JPEG, PNG, GIF, and WebP images are allowed'), false);\n        }\n    } else if (file.mimetype.startsWith('application/')) {\n        const allowedDocs = ['application/pdf', 'application/msword'];\n        if (allowedDocs.includes(file.mimetype)) {\n            cb(null, true);\n        } else {\n            cb(new Error('Only PDF and DOC files are allowed'), false);\n        }\n    } else {\n        cb(new Error('Unsupported file type'), false);\n    }\n};\n\n// Multer configuration for local storage\nconst uploadLocal = multer({\n    storage: storage,\n    fileFilter: fileFilter,\n    limits: {\n        fileSize: 5 * 1024 * 1024, // 5MB limit\n        files: 5 // Maximum 5 files\n    }\n});\n\n// Serve static files from uploads directory\napp.use('/uploads', express.static(path.join(__dirname, 'uploads')));\n\n// File upload controller for local storage\nconst uploadFileLocal = async (req, res) =&gt; {\n    try {\n        if (!req.file) {\n            return res.status(400).json({\n                success: false,\n                message: 'No file uploaded'\n            });\n        }\n\n        // Construct public URL\n        const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.path.replace('uploads/', '')}`;\n\n        res.status(200).json({\n            success: true,\n            message: 'File uploaded successfully',\n            data: {\n                filename: req.file.filename,\n                originalname: req.file.originalname,\n                size: req.file.size,\n                path: req.file.path,\n                url: fileUrl,\n                mimetype: req.file.mimetype\n            }\n        });\n    } catch (error) {\n        res.status(500).json({\n            success: false,\n            message: 'File upload failed',\n            error: error.message\n        });\n    }\n};\n\n// ===== CLOUDINARY CLOUD STORAGE =====\nconst { CloudinaryStorage } = require('multer-storage-cloudinary');\nconst cloudinary = require('cloudinary').v2;\n\n// Configure Cloudinary (free tier available)\ncloudinary.config({\n    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,\n    api_key: process.env.CLOUDINARY_API_KEY,\n    api_secret: process.env.CLOUDINARY_API_SECRET,\n});\n\n// Cloudinary storage configuration\nconst cloudStorage = new CloudinaryStorage({\n    cloudinary: cloudinary,\n    params: {\n        folder: 'nodejs-app',\n        format: async (req, file) =&gt; {\n            if (file.mimetype.startsWith('image/')) return 'webp';\n            return file.originalname.split('.').pop();\n        },\n        transformation: [\n            { width: 800, height: 600, crop: 'limit' },\n            { quality: 'auto' },\n            { format: 'webp' }\n        ],\n        public_id: (req, file) =&gt; {\n            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);\n            return file.fieldname + '-' + uniqueSuffix;\n        }\n    },\n});\n\n// Multer configuration for Cloudinary\nconst uploadCloud = multer({\n    storage: cloudStorage,\n    fileFilter: fileFilter,\n    limits: {\n        fileSize: 5 * 1024 * 1024,\n        files: 5\n    }\n});\n\n// File upload controller for Cloudinary\nconst uploadFileCloud = async (req, res) =&gt; {\n    try {\n        if (!req.file) {\n            return res.status(400).json({\n                success: false,\n                message: 'No file uploaded'\n            });\n        }\n\n        res.status(200).json({\n            success: true,\n            message: 'File uploaded to cloud successfully',\n            data: {\n                filename: req.file.filename,\n                originalname: req.file.originalname,\n                size: req.file.size,\n                url: req.file.path, // Cloudinary URL\n                format: req.file.format,\n                public_id: req.file.filename\n            }\n        });\n    } catch (error) {\n        res.status(500).json({\n            success: false,\n            message: 'Cloud file upload failed',\n            error: error.message\n        });\n    }\n};\n\n// File deletion function for Cloudinary\nconst deleteCloudFile = async (publicId) =&gt; {\n    try {\n        const result = await cloudinary.uploader.destroy(publicId);\n        return result;\n    } catch (error) {\n        throw new Error('Cloud file deletion failed');\n    }\n};\n\n// Usage in routes - Choose one method based on your needs\nrouter.post('/upload-local', uploadLocal.single('file'), uploadFileLocal);\nrouter.post('/upload-cloud', uploadCloud.single('file'), uploadFileCloud);\nrouter.delete('/cloud-files/:publicId', fileController.deleteCloudFile);\n\n// ===== COMPARISON: LOCAL VS CLOUD STORAGE =====\n/*\nLocal Storage (Multer):\n✅ Pros:\n   - No additional costs\n   - Full control over files\n   - No internet dependency for uploads\n   - Easy to implement\n\n❌ Cons:\n   - Limited scalability\n   - Manual backup required\n   - Storage space limitations\n   - Slower delivery for users\n\nCloud Storage (Cloudinary):\n✅ Pros:\n   - Automatic scaling\n   - Global CDN for fast delivery\n   - Built-in image optimization\n   - Automatic backups\n   - Advanced features (transformations, etc.)\n\n❌ Cons:\n   - Additional cost for high usage\n   - Internet dependency\n   - Third-party service reliance\n*/</code></pre>",
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
