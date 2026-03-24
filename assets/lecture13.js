const courseData = {
    "courseInfo": {
        "name": "Focal X - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "Git & Github",
    "topics": [
        {
            "id": "topic-0-last-lesson",
            "title": "Last Lesson",
            "content": "<h3>Last Lesson Recap</h3><pre class=\"lecture-pre\"><code>/*\n1- Solve Task 3 (Very Important)\n*/</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-git-basics",
            "title": "Git Basics",
            "content": "<h3>What is Git?</h3><pre class=\"lecture-pre\"><code>- Git is distributed version control system =&gt; versions\n- Git is free &amp; open source\n- You can use git as GUI or CLI =&gt; (CLI recommended)\n\nDeveloper life without git:\n- You can not track the edits and errors\n- Team work becomes very hard and takes long time\n- Imagine sending edits to the leader by emails</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-github",
            "title": "GitHub",
            "content": "<h3>What is GitHub?</h3><pre class=\"lecture-pre\"><code>- GitHub is a source (website) for dealing with projects\n- GitHub is a store managed by git\n- There are other tools like GitLab, BitBucket\n- GitHub simplifies using git\n- You can use git without GitHub\n- GitHub can serve as a central server for the project</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-terminal-basics",
            "title": "Terminal Basics",
            "content": "<h3>Terminals &amp; Shells Fundamentals</h3><pre class=\"lecture-pre\"><code>Understanding Your Development Environment\n\n- Terminal: The window we type commands into\n- Shell: Runs inside the terminal to execute commands\n- CLI vs GUI: Command Line Interface vs Graphical User Interface</code></pre><table class=\"comparison-table\"><thead><tr><th>System</th><th>Terminal</th><th>Shell</th></tr></thead><tbody><tr><td>Windows 11</td><td>Windows Terminal</td><td>PowerShell</td></tr><tr><td>Mac/Linux</td><td>Terminal</td><td>ZSH/BASH</td></tr><tr><td>Git Bash</td><td>MinTTY</td><td>BASH</td></tr><tr><td>WSL</td><td>Windows Terminal</td><td>BASH</td></tr></tbody></table>",
            "examples": []
        },
        {
            "id": "topic-4-cli-commands",
            "title": "CLI Commands",
            "content": "<h3>Command Line Essentials</h3><pre class=\"lecture-pre\"><code>Mastering the Command Line Interface\n\n- Flags: Start with - or --, change command behavior\n- Arguments: Additional information for commands\n- Paths: Absolute (full path) vs Relative (from current directory)</code></pre><table class=\"comparison-table\"><thead><tr><th>Command</th><th>Meaning</th><th>Examples &amp; Notes</th></tr></thead><tbody><tr><td>pwd</td><td>Print working directory</td><td>Shows current full path</td></tr><tr><td>ls</td><td>List directory contents</td><td>ls -a (show hidden), ls -l (detailed)</td></tr><tr><td>cd [path]</td><td>Change directory</td><td>cd .. (up), cd ~ (home), cd / (root)</td></tr><tr><td>mkdir</td><td>Create directory</td><td>mkdir project-folder</td></tr><tr><td>touch</td><td>Create file</td><td>touch index.html</td></tr><tr><td>cp</td><td>Copy files/dirs</td><td>cp file1 file2, cp -r dir1 dir2</td></tr><tr><td>mv</td><td>Move/rename</td><td>mv old.txt new.txt</td></tr><tr><td>rm</td><td>Remove files</td><td>rm file.txt, rm -r folder/</td></tr><tr><td>cat</td><td>View file content</td><td>cat README.md</td></tr><tr><td>notepad</td><td>View file content in notepad</td><td>notepad README.md</td></tr><tr><td>echo</td><td>Print text</td><td>echo 'Hello' &gt; file.txt</td></tr><tr><td>grep</td><td>Search text</td><td>grep 'error' log.txt</td></tr><tr><td>find</td><td>Find files</td><td>find . -name '*.js'</td></tr><tr><td>clear</td><td>Clear terminal</td><td>Clears screen, history remains</td></tr></tbody></table>",
            "examples": []
        },
        {
            "id": "topic-5-git-fundamentals",
            "title": "Git Fundamentals",
            "content": "<h3>What is Git?</h3><pre class=\"lecture-pre\"><code>Understanding Version Control\n\n- Git: Distributed Version Control System (DVCS)\n- Free &amp; Open Source (Created by Linus Torvalds)\n- Available as GUI or CLI (Command Line Recommended)\n\nWhy Git is Essential:\n- Track all changes and history\n- Collaborate efficiently with teams\n- Revert to previous versions when needed\n- Maintain multiple features simultaneously\n- Backup and restore code easily\n\nWithout Git:\n- No proper change tracking\n- Team collaboration becomes chaotic\n- Manual file sharing (email, USB, cloud)\n- No reliable backup system\n- Difficulty in identifying when bugs were introduced</code></pre>",
            "examples": []
        },
        {
            "id": "topic-6-git-vs-github",
            "title": "Git vs GitHub",
            "content": "<h3>GitHub &amp; Alternatives</h3><pre class=\"lecture-pre\"><code>Git Hosting Platforms\n\nGitHub:\n- Cloud-based Git repository hosting\n- Web-based graphical interface\n- Collaboration tools (issues, PRs, projects)\n- Free for public repositories\n\nOther Platforms:\n- GitLab: Self-hosted alternative with CI/CD\n- Bitbucket: Good for small teams, free private repos\n- Azure DevOps: Microsoft's enterprise solution\n- SourceForge: Older platform for open source\n\nKey Differences:\n- Git: The version control tool itself\n- GitHub: A service that hosts Git repositories\n- You can use Git without GitHub\n- GitHub enhances Git with collaboration features</code></pre>",
            "examples": []
        },
        {
            "id": "topic-7-core-concepts",
            "title": "Core Concepts",
            "content": "<h3>Git Core Concepts</h3><pre class=\"lecture-pre\"><code>Fundamental Git Building Blocks\n\nRepository (Repo):\n- Container for your project and its history\n- Can be local (your machine) or remote (server)\n\nBranch:\n- Independent line of development\n- Enables parallel work without conflicts\n- Default branch: main/master\n\nCommit:\n- Snapshot of changes with descriptive message\n- Unique SHA-1 hash identifier\n- Checkpoint in project history\n\nCommon Operations:\n- Clone: Copy repository from remote\n- Push: Upload local changes to remote\n- Pull: Download remote changes to local\n- Fork: Copy someone else's repository\n- Pull Request: Request to merge changes\n\nBest Practices:\n- One repository per project\n- One branch per feature/task\n- Meaningful commit messages\n- Regular pushing to remote</code></pre>",
            "examples": []
        },
        {
            "id": "topic-8-setup-config",
            "title": "Setup & Config",
            "content": "<h3>Git Setup &amp; Configuration</h3><pre class=\"lecture-pre\"><code>Getting Started with Git\n\nInstallation Steps:\n1. Create GitHub account (github.com)\n2. Install Git:\n   - Windows: git-scm.com/downloads\n   - macOS: brew.sh OR git-scm.com/downloads\n   - Linux: sudo apt-get install git\n\nVerification:\n```bash\ngit --version\ngit config --global --list\n```\n\nEssential Configuration:\n```bash\ngit config --global user.name &quot;Your Name&quot;\ngit config --global user.email &quot;your.email@example.com&quot;\ngit config --global init.defaultBranch main\ngit config --global core.editor &quot;code --wait&quot;  # VS Code\n```\n\nCommon Configurations:\n- core.autocrlf: Handle line endings (true for Windows)\n- merge.tool: Configure merge tool\n- alias: Create command shortcuts</code></pre>",
            "examples": []
        },
        {
            "id": "topic-9-basic-commands",
            "title": "Basic Commands",
            "content": "<h3>Essential Git Commands</h3><pre class=\"lecture-pre\"><code>Daily Git Command Toolkit\n\nRepository Operations:\n```bash\ngit init                    # Initialize new repo\ngit clone [url]            # Clone existing repo\ngit status                 # Check repository status\n```\n\nBasic Workflow:\n```bash\ngit add [files]            # Stage changes\ngit add .                  # Stage all changes\ngit reset [files]          # Unstage changes\ngit commit -m &quot;message&quot;    # Commit staged changes\n```\n\nHistory &amp; Inspection:\n```bash\ngit log                    # Show commit history\ngit log --oneline          # Compact history\ngit show [commit]          # Show commit details\ngit diff                   # Show unstaged changes\n```\n\nRemote Operations:\n```bash\ngit push origin main       # Push to remote\ngit pull origin main       # Pull from remote\ngit fetch                  # Download remote updates\ngit remote -v              # Show remote repositories\n``` </code></pre>",
            "examples": []
        },
        {
            "id": "topic-10-branching",
            "title": "Branching",
            "content": "<h3>Git Branching &amp; Merging</h3><pre class=\"lecture-pre\"><code>Working with Branches\n\nBranch Operations:\n```bash\ngit branch                 # List branches\ngit branch [name]         # Create new branch\ngit checkout [branch]     # Switch branch\ngit checkout -b [branch]  # Create and switch\ngit merge [branch]        # Merge branches\ngit branch -d [branch]    # Delete branch\n```\n\nBranch Strategies:\n- Feature Branches: One branch per feature\n- Release Branches: Prepare for releases\n- Hotfix Branches: Emergency fixes\n- Development Branch: Integration branch\n\nMerging Types:\n- Fast-forward: Linear history\n- 3-way Merge: Creates merge commit\n- Rebase: Linear history, rewrites commits\n\nBest Practices:\n- Create descriptive branch names\n- Keep branches focused and small\n- Regular merging with main\n- Delete merged branches</code></pre>",
            "examples": []
        },
        {
            "id": "topic-11-readme-markdown",
            "title": "README & Markdown",
            "content": "<h3>README Files &amp; Markdown</h3><pre class=\"lecture-pre\"><code>Project Documentation Essentials\n\nWhat is README.md?\n- Primary documentation file for projects\n- First thing users see in your repository\n- Written in Markdown (.md extension)\n- Auto-rendered by GitHub/GitLab\n\nWhy README is Crucial:\n- Project overview and purpose\n- Installation instructions\n- Usage examples\n- Contribution guidelines\n- License information\n\nMarkdown Basics:\n```markdown\n# Heading 1\n## Heading 2\n### Heading 3\n\n**Bold Text**\n*Italic Text*\n~~Strikethrough~~\n\n- List item 1\n- List item 2\n\n1. Numbered item 1\n2. Numbered item 2\n\n[Link Text](https://example.com)\n![Image Alt](image.jpg)\n\n`Inline Code`\n\n```\nCode Block\n```\n\n&gt; Blockquote\n```\n\nAdvanced Markdown:\n- Tables with | syntax\n- Task lists with - [ ] \n- Emoji with :emoji_name:\n- Mathematical formulas\n- Mermaid diagrams\n\nREADME Structure:\n1. Project Title &amp; Badges\n2. Project Description\n3. Installation\n4. Usage\n5. Features\n6. Contributing\n7. License\n8. Contact\n\nBest Practices:\n- Write clear, concise documentation\n- Include code examples\n- Use screenshots/GIFs\n- Keep it updated\n- Multiple languages if needed</code></pre>",
            "examples": []
        },
        {
            "id": "topic-12-gitignore",
            "title": "Gitignore",
            "content": "<h3>Gitignore Files</h3><pre class=\"lecture-pre\"><code>Ignoring Files in Git\n\nPurpose:\n- Exclude files from version control\n- Prevent committing sensitive data\n- Avoid unnecessary binary files\n- Keep repository clean and focused\n\nCommon Ignored Files:\n```\n# Dependencies\nnode_modules/\nvendor/\n*.jar\n\n# Environment variables\n.env\n.config\n\n# OS files\n.DS_Store\nThumbs.db\n\n# IDE files\n.vscode/\n.idea/\n*.swp\n\n# Build outputs\n/dist\n/build\n*.exe\n```\n\nUsage:\n- Create .gitignore in root directory\n- One pattern per line\n- Supports wildcards (*) and directories (/)\n- Can have global .gitignore for all projects\n\nBest Practices:\n- Ignore OS-specific files\n- Exclude dependencies\n- Never commit secrets\n- Use templates from gitignore.io</code></pre>",
            "examples": []
        },
        {
            "id": "topic-13-git-workflow",
            "title": "Git Workflow",
            "content": "<h3>Git Workflow &amp; Areas</h3><pre class=\"lecture-pre\"><code>Understanding Git's Architecture\n\nFour Main Areas:\n\n1. Working Directory\n- Your actual project files\n- Where you make changes\n- Untracked by Git initially\n\n2. Staging Area (Index)\n- Prepares changes for commit\n- Selective inclusion of changes\n- Intermediate between working directory and repository\n\n3. Local Repository\n- Complete project history\n- All commits and branches\n- Stores metadata in .git folder\n\n4. Remote Repository\n- Shared repository (GitHub, etc.)\n- Collaboration point for teams\n- Backup and distribution center\n\nTypical Workflow:\n1. Modify files in Working Directory\n2. Stage changes with git add\n3. Commit changes with git commit\n4. Push changes with git push</code></pre>",
            "examples": []
        },
        {
            "id": "topic-14-advanced-git",
            "title": "Advanced Git",
            "content": "<h3>Advanced Git Techniques</h3><pre class=\"lecture-pre\"><code>Beyond the Basics\n\nStashing Changes:\n```bash\ngit stash                  # Temporarily save changes\ngit stash list            # List stashes\ngit stash pop             # Restore latest stash\ngit stash apply           # Apply without removing\n```\n\nUndoing Changes:\n```bash\ngit reset --soft [commit]  # Keep changes staged\ngit reset --mixed [commit] # Keep changes unstaged\ngit reset --hard [commit]  # Discard all changes\ngit revert [commit]        # Create undo commit\n```\n\nRebasing:\n```bash\ngit rebase main           # Reapply commits on main\ngit rebase -i [commit]    # Interactive rebase\n```\n\nTagging:\n```bash\ngit tag v1.0.0           # Create lightweight tag\ngit tag -a v1.0.0 -m &quot;Release&quot;  # Annotated tag\ngit push --tags          # Push tags to remote\n```\n\nAdvanced Tools:\n- git bisect: Binary search for bugs\n- git cherry-pick: Apply specific commits\n- git reflog: Recovery tool\n- git worktree: Multiple working directories</code></pre>",
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
