const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "Mongoose (Advanced)",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- Solve Task 6\n2- Recap (Mongoose)\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-chaining-pagination",
            "title": "Chaining & Pagination",
            "content": "<h3>Query Chaining, Pagination &amp; Projection</h3><pre class=\"lecture-pre\"><code>// ## Mongoose Query Chaining &amp; Pagination\n\n// Basic Chaining Examples\nconst users = await User.find()\n  .where('age').gte(18)\n  .where('isActive').equals(true)\n  .select('name email age')  // Projection - include only these fields\n  .sort({ createdAt: -1 })   // Sort by newest first\n  .skip(10)                  // Pagination - skip first 10\n  .limit(5);                 // Pagination - get 5 documents\n\n// Projection - Include/Exclude fields\nUser.find().select('name email -_id');        // Include name, email, exclude _id\nUser.find().select('-password -__v');         // Exclude sensitive fields\n\n// Counting documents\nconst count = await User.countDocuments({ age: { $gt: 18 } });\nconst activeCount = await User.countDocuments({ isActive: true });\n\n// Complete Pagination Function\nconst getPaginatedUsers = async (page = 1, limit = 10, filters = {}) =&gt; {\n    const skip = (page - 1) * limit;\n    \n    const [data, total] = await Promise.all([\n        User.find(filters)\n            .select('-password')\n            .sort({ createdAt: -1 })\n            .skip(skip)\n            .limit(limit),\n        User.countDocuments(filters)\n    ]);\n    \n    return {\n        data,\n        pagination: {\n            page,\n            limit,\n            total,\n            pages: Math.ceil(total / limit)\n        }\n    };\n};\n\n// Usage\nconst result = await getPaginatedUsers(1, 10, { role: 'user' });\nconsole.log(result.pagination); // { page: 1, limit: 10, total: 100, pages: 10 }</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-relationships",
            "title": "Relationships",
            "content": "<h3>MongoDB Relationships &amp; Population</h3><pre class=\"lecture-pre\"><code>// ## MongoDB Relationships\n\n// 1. One-to-Many (Reference)\nconst userSchema = new Schema({\n    name: String,\n    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }] // Array of references\n});\n\nconst postSchema = new Schema({\n    title: String,\n    author: { type: Schema.Types.ObjectId, ref: 'User' }, // Single reference\n    content: String\n});\n\n// 2. Embedding (One-to-Few)\nconst userWithAddressSchema = new Schema({\n    name: String,\n    addresses: [{  // Embedded array\n        street: String,\n        city: String,\n        country: String,\n        isPrimary: Boolean\n    }]\n});\n\n// 3. Junction Model (Many-to-Many)\nconst orderSchema = new Schema({\n    user: { type: Schema.Types.ObjectId, ref: 'User' },\n    products: [{\n        product: { type: Schema.Types.ObjectId, ref: 'Product' },\n        quantity: Number,\n        price: Number\n    }]\n});\n\n// ## Population Examples\n\n// Basic population\nconst user = await User.findById(userId).populate('posts');\n\n// Selective population\nconst userWithPosts = await User.findById(userId)\n    .populate('posts', 'title createdAt')  // Only get title and createdAt\n    .populate('department', 'name');\n\n// Nested population\nconst postWithAuthor = await Post.findById(postId)\n    .populate({\n        path: 'author',\n        select: 'name email',\n        populate: {\n            path: 'department',\n            select: 'name'\n        }\n    });\n\n// Multiple populations\nconst populatedUser = await User.findById(userId)\n    .populate('posts')\n    .populate('comments')\n    .populate('likes');</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-advanced-mongoose",
            "title": "Advanced Mongoose",
            "content": "<h3>Advanced Mongoose Features &amp; Best Practices</h3><pre class=\"lecture-pre\"><code>// ## Advanced Mongoose Patterns\n\n// ## 1. Database Transactions\n\nconst transferOwnership = async (fromUserId, toUserId, assetId) =&gt; {\n    const session = await mongoose.startSession();\n    \n    try {\n        session.startTransaction();\n        \n        // Remove asset from current owner\n        const fromUser = await User.findByIdAndUpdate(\n            fromUserId,\n            { $pull: { assets: assetId } },\n            { session, new: true }\n        );\n        \n        // Add asset to new owner\n        const toUser = await User.findByIdAndUpdate(\n            toUserId,\n            { $push: { assets: assetId } },\n            { session, new: true }\n        );\n        \n        // Update asset ownership\n        const asset = await Asset.findByIdAndUpdate(\n            assetId,\n            { owner: toUserId },\n            { session, new: true }\n        );\n        \n        await session.commitTransaction();\n        \n        return { fromUser, toUser, asset };\n    } catch (error) {\n        await session.abortTransaction();\n        throw error;\n    } finally {\n        session.endSession();\n    }\n};\n\n// ## 2. Advanced Middleware Patterns\n\nconst advancedUserSchema = new Schema({\n    // ... schema fields\n}, {\n    timestamps: true\n});\n\n// Conditional middleware\nadvancedUserSchema.pre('save', function(next) {\n    if (this.isModified('email')) {\n        this.emailVerified = false;\n        this.verificationToken = generateToken();\n    }\n    next();\n});\n\n// Async middleware\nadvancedUserSchema.pre('save', async function(next) {\n    if (this.isModified('password')) {\n        this.password = await bcrypt.hash(this.password, 12);\n    }\n    next();\n});\n\n// Error handling in middleware\nadvancedUserSchema.post('save', function(error, doc, next) {\n    if (error.name === 'MongoError' &amp;&amp; error.code === 11000) {\n        next(new Error('Duplicate key error'));\n    } else {\n        next(error);\n    }\n});\n\n// ## 3. Plugins System\n\n// Reusable plugin for soft delete\nfunction softDeletePlugin(schema) {\n    schema.add({\n        isDeleted: {\n            type: Boolean,\n            default: false,\n            select: false\n        },\n        deletedAt: Date\n    });\n    \n    // Exclude deleted documents by default\n    schema.pre(/^find/, function(next) {\n        if (!this.getOptions().includeDeleted) {\n            this.where({ isDeleted: { $ne: true } });\n        }\n        next();\n    });\n    \n    // Soft delete method\n    schema.methods.softDelete = function() {\n        this.isDeleted = true;\n        this.deletedAt = new Date();\n        return this.save();\n    };\n    \n    // Restore method\n    schema.methods.restore = function() {\n        this.isDeleted = false;\n        this.deletedAt = undefined;\n        return this.save();\n    };\n    \n    // Static method to find including deleted\n    schema.statics.findIncludingDeleted = function(conditions) {\n        return this.find(conditions).setOptions({ includeDeleted: true });\n    };\n}\n\n// Apply plugin to schema\nadvancedUserSchema.plugin(softDeletePlugin);\n\n// ## 4. Advanced Validation\n\nconst advancedValidationSchema = new Schema({\n    username: {\n        type: String,\n        required: true,\n        validate: {\n            validator: async function(username) {\n                // Async validation - check if username is unique\n                const user = await this.constructor.findOne({ username });\n                return !user || this._id.equals(user._id);\n            },\n            message: 'Username already exists'\n        }\n    },\n    password: {\n        type: String,\n        validate: {\n            validator: function(password) {\n                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/.test(password);\n            },\n            message: 'Password must contain uppercase, lowercase, number, and be at least 8 characters'\n        }\n    },\n    birthDate: {\n        type: Date,\n        validate: {\n            validator: function(date) {\n                return date &lt; new Date();\n            },\n            message: 'Birth date cannot be in the future'\n        }\n    }\n});\n\n// ## 5. Discriminators (Schema Inheritance)\n\nconst optionsSchema = new Schema({\n    settings: Schema.Types.Mixed,\n    preferences: Schema.Types.Mixed\n}, { discriminatorKey: 'userType' });\n\nconst BaseUser = mongoose.model('BaseUser', optionsSchema);\n\n// Admin user discriminator\nconst AdminUser = BaseUser.discriminator('AdminUser', new Schema({\n    permissions: [String],\n    adminLevel: {\n        type: String,\n        enum: ['super', 'normal', 'limited']\n    }\n}));\n\n// Customer user discriminator\nconst CustomerUser = BaseUser.discriminator('CustomerUser', new Schema({\n    subscription: String,\n    loyaltyPoints: Number\n}));\n\n// ## 6. Advanced Query Building\n\nclass UserQueryBuilder {\n    constructor() {\n        this.query = User.find();\n    }\n    \n    active() {\n        this.query = this.query.where('isActive').equals(true);\n        return this;\n    }\n    \n    withRole(role) {\n        this.query = this.query.where('role').equals(role);\n        return this;\n    }\n    \n    createdAfter(date) {\n        this.query = this.query.where('createdAt').gte(date);\n        return this;\n    }\n    \n    withTags(tags) {\n        this.query = this.query.where('tags').in(tags);\n        return this;\n    }\n    \n    paginate(page = 1, limit = 10) {\n        const skip = (page - 1) * limit;\n        this.query = this.query.skip(skip).limit(limit);\n        return this;\n    }\n    \n    sort(field, direction = 'asc') {\n        const sortOrder = direction === 'desc' ? -1 : 1;\n        this.query = this.query.sort({ [field]: sortOrder });\n        return this;\n    }\n    \n    async execute() {\n        return await this.query.exec();\n    }\n}\n\n// Usage\nconst users = await new UserQueryBuilder()\n    .active()\n    .withRole('admin')\n    .createdAfter(new Date('2023-01-01'))\n    .paginate(1, 20)\n    .sort('createdAt', 'desc')\n    .execute();\n\n// ## 7. Performance Optimization\n\nconst performanceOptimizedSchema = new Schema({\n    // Schema with performance considerations\n    email: { type: String, index: true },\n    role: { type: String, index: true },\n    createdAt: { type: Date, index: true }\n});\n\n// Compound indexes for common query patterns\nperformanceOptimizedSchema.index({ role: 1, createdAt: -1 });\nperformanceOptimizedSchema.index({ isActive: 1, lastLogin: -1 });\n\n// Partial indexes\nperformanceOptimizedSchema.index(\n    { email: 1 },\n    { \n        partialFilterExpression: { \n            email: { $exists: true } \n        } \n    }\n);\n\n// ## 8. Advanced Aggregation\n\nconst getUserStatistics = async () =&gt; {\n    return await User.aggregate([\n        {\n            $facet: {\n                // Total statistics\n                totalStats: [\n                    {\n                        $group: {\n                            _id: null,\n                            totalUsers: { $sum: 1 },\n                            averageAge: { $avg: '$age' },\n                            activeUsers: {\n                                $sum: { $cond: ['$isActive', 1, 0] }\n                            }\n                        }\n                    }\n                ],\n                \n                // Role distribution\n                roleDistribution: [\n                    {\n                        $group: {\n                            _id: '$role',\n                            count: { $sum: 1 },\n                            averageAge: { $avg: '$age' }\n                        }\n                    },\n                    { $sort: { count: -1 } }\n                ],\n                \n                // Monthly signups\n                monthlySignups: [\n                    {\n                        $group: {\n                            _id: {\n                                year: { $year: '$createdAt' },\n                                month: { $month: '$createdAt' }\n                            },\n                            signups: { $sum: 1 }\n                        }\n                    },\n                    { $sort: { '_id.year': 1, '_id.month': 1 } }\n                ],\n                \n                // Age groups\n                ageGroups: [\n                    {\n                        $bucket: {\n                            groupBy: '$age',\n                            boundaries: [18, 25, 35, 45, 55, 65, 120],\n                            default: 'Other',\n                            output: {\n                                count: { $sum: 1 },\n                                users: { $push: '$name' }\n                            }\n                        }\n                    }\n                ]\n            }\n        }\n    ]);\n};\n\n// ## 9. Change Streams (Real-time updates)\n\nconst setupUserChangeStream = () =&gt; {\n    const changeStream = User.watch();\n    \n    changeStream.on('change', (change) =&gt; {\n        console.log('Change detected:', change);\n        \n        // Handle different operation types\n        switch (change.operationType) {\n            case 'insert':\n                console.log('New user created:', change.fullDocument);\n                break;\n            case 'update':\n                console.log('User updated:', change.documentKey);\n                break;\n            case 'delete':\n                console.log('User deleted:', change.documentKey);\n                break;\n        }\n    });\n    \n    changeStream.on('error', (error) =&gt; {\n        console.error('Change stream error:', error);\n    });\n    \n    return changeStream;\n};\n\n// ## 10. Best Practices Summary\n\n/*\nProduction Best Practices:\n1. Always use connection pooling\n2. Implement proper error handling\n3. Use transactions for multiple operations\n4. Create indexes for frequent queries\n5. Monitor query performance\n6. Use lean() for read-only operations\n7. Implement proper validation\n8. Use middleware for cross-cutting concerns\n9. Monitor memory usage with large datasets\n10. Implement proper logging and monitoring\n*/\n\nmodule.exports = {\n    transferOwnership,\n    UserQueryBuilder,\n    getUserStatistics,\n    setupUserChangeStream,\n    AdminUser,\n    CustomerUser\n};</code></pre>",
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
