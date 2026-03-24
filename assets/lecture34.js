const courseData = {
    "courseInfo": {
        "name": "Focal X V10 - Node.js Bootcamp",
        "coach": "Moones Mezher",
        "center": "Ousos"
    },
    "lectureSubtitle": "Docker for Backend Developers",
    "topics": [
        {
            "id": "topic-0-why-docker",
            "title": "Why Docker?",
            "content": "<h3>Why Docker? Containerization Benefits</h3><pre class=\"lecture-pre\"><code>// The Problem: &quot;It works on my machine!&quot;\n// Developers face environment inconsistencies:\n// - Different operating systems\n// - Different software versions\n// - Different dependencies\n// - Different configurations\n\n// What is Docker?\n// Docker is a platform for developing, shipping, and running applications\n// in containers.\n\n// Key Benefits of Docker:\n// 1. Consistency Across Environments\n//    - Same environment on dev, test, production\n//    - No more &quot;works on my machine&quot; problems\n\n// 2. Isolation\n//    - Each app runs in its own container\n//    - No conflicts between dependencies\n//    - Secure isolation\n\n// 3. Portability\n//    - Build once, run anywhere\n//    - Run on Linux, Windows, Mac, Cloud\n\n// 4. Efficiency\n//    - Containers are lightweight\n//    - Fast startup times (seconds vs minutes for VMs)\n//    - Low overhead\n\n// 5. Scalability\n//    - Easy to scale applications\n//    - Orchestration with Docker Swarm/Kubernetes\n\n// Real-World Example:\n// Without Docker:\n// Developer: &quot;My Node.js 16 app works!&quot;\n// Server: &quot;We have Node.js 14... app crashes!&quot;\n\n// With Docker:\n// Developer: &quot;Here's the Docker container with Node.js 16&quot;\n// Server: &quot;Running the container... app works!&quot;\n\n// Docker Components:\n// - Docker Engine (The core)\n// - Docker Image (Blueprint)\n// - Docker Container (Running instance)\n// - Dockerfile (Instructions to build image)\n// - Docker Compose (Multi-container apps)\n\nconsole.log(&quot;Docker: Solve 'works on my machine' problems!&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-1-docker-vs-vms",
            "title": "Docker vs VMs",
            "content": "<h3>Docker vs Virtual Machines</h3><pre class=\"lecture-pre\"><code>// Traditional Virtual Machines (VMs) vs Docker Containers\n\n// Virtual Machine:\n// +-------------------------------+\n// |           App A               |\n// |         Bins/Libs             |\n// +-------------------------------+\n// |        Guest OS               |\n// +-------------------------------+\n// |       Hypervisor              |\n// +-------------------------------+\n// |        Host OS                |\n// +-------------------------------+\n// |       Infrastructure          |\n// +-------------------------------+\n\n// Docker Container:\n// +-------------------------------+\n// |           App A               |\n// |         Bins/Libs             |\n// +-------------------------------+\n// |        Docker Engine          |\n// +-------------------------------+\n// |        Host OS                |\n// +-------------------------------+\n// |       Infrastructure          |\n// +-------------------------------+\n\n// Comparison Table:\n// | Aspect           | Virtual Machines   | Docker Containers     |\n// |------------------|--------------------|-----------------------|\n// | Startup Time     | Minutes            | Seconds               |\n// | Size             | GBs                | MBs                   |\n// | Performance      | Lower              | Near-native           |\n// | Isolation        | Full OS isolation  | Process isolation     |\n// | Portability      | Heavy              | Lightweight           |\n// | Overhead         | High               | Low                   |\n\n// When to use VMs:\n// - Need full OS isolation\n// - Running multiple different OSes\n// - Legacy applications\n// - Strong security boundaries needed\n\n// When to use Docker:\n// - Microservices architecture\n// - CI/CD pipelines\n// - Development environments\n// - Scalable web applications\n// - Cloud deployments\n\n// Docker Advantages:\n// 1. Resource Efficiency\n//    - Multiple containers on one host\n//    - Less memory, CPU overhead\n\n// 2. Speed\n//    - Start in seconds\n//    - Deploy faster\n\n// 3. Developer Productivity\n//    - Same environment everywhere\n//    - Easy to share and collaborate\n\n// 4. Version Control\n//    - Docker images can be versioned\n//    - Rollback to previous versions\n\n// Example:\n// VM: Like bringing your own house (heavy, isolated)\n// Docker: Like renting a room in a shared house (lightweight, efficient)\n\nconsole.log(&quot;Containers: Lightweight, fast, and efficient!&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-2-basic-commands",
            "title": "Basic Commands",
            "content": "<h3>Basic Docker Commands</h3><pre class=\"lecture-pre\"><code>// Docker CLI Cheat Sheet\n\n// 1. Version &amp; Info\ndocker --version                   # Check Docker version\ndocker info                        # Display system-wide information\n\n// 2. Working with Images\ndocker images                      # List all local images\ndocker pull node:16                # Download Node.js 16 image\ndocker rmi node:16                 # Remove an image\ndocker image prune                 # Remove unused images\n\n// 3. Working with Containers\ndocker ps                          # List running containers\ndocker ps -a                       # List all containers (including stopped)\ndocker run node:16                 # Run a container from image\ndocker start my-container          # Start a stopped container\ndocker stop my-container           # Stop a running container\ndocker restart my-container        # Restart a container\ndocker rm my-container             # Remove a container\n\n// 4. Running Containers with Options\ndocker run -d node:16              # Run in detached mode (background)\ndocker run -p 3000:3000 node:16    # Map port 3000 host to container\ndocker run -v $(pwd):/app node:16  # Mount current directory to /app\ndocker run -e NODE_ENV=prod node:16 # Set environment variable\ndocker run --name myapp node:16    # Name the container\n\n// 5. Container Inspection\ndocker logs my-container           # View container logs\ndocker exec -it my-container bash  # Enter container shell\ndocker inspect my-container        # Detailed container info\ndocker stats                       # Live container resource usage\n\n// 6. Building Images\ndocker build -t myapp:1.0 .        # Build image from Dockerfile\ndocker build -t myapp:latest .     # Tag as latest\n\n// 7. Docker Compose\ndocker-compose up                  # Start services defined in docker-compose.yml\ndocker-compose down                # Stop and remove containers\ndocker-compose ps                  # List compose services\ndocker-compose logs                # View logs of all services\n\n// 8. Cleanup\ndocker system prune                # Remove all unused data\ndocker container prune             # Remove stopped containers\ndocker volume prune                # Remove unused volumes\n\n// Common Patterns:\n// Run Node.js app interactively:\n// docker run -it -p 3000:3000 -v $(pwd):/app node:16 bash\n\n// Run MongoDB container:\n// docker run -d -p 27017:27017 --name mongodb mongo\n\n// Run with environment file:\n// docker run --env-file .env node:16\n\n// Example Workflow:\n// 1. docker pull node:16\n// 2. docker run -d -p 3000:3000 --name myapp node:16\n// 3. docker ps\n// 4. docker logs myapp\n// 5. docker stop myapp\n// 6. docker rm myapp\n\nconsole.log(&quot;Master Docker commands for efficient development!&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-3-dockerizing-node-js",
            "title": "Dockerizing Node.js",
            "content": "<h3>Dockerizing a Node.js/Express Application</h3><pre class=\"lecture-pre\"><code>// Step-by-Step: Dockerize Node.js Application\n\n// 1. Create a Simple Express App\n// package.json\n{\n  &quot;name&quot;: &quot;docker-node-app&quot;,\n  &quot;version&quot;: &quot;1.0.0&quot;,\n  &quot;main&quot;: &quot;server.js&quot;,\n  &quot;scripts&quot;: {\n    &quot;start&quot;: &quot;node server.js&quot;,\n    &quot;dev&quot;: &quot;nodemon server.js&quot;\n  },\n  &quot;dependencies&quot;: {\n    &quot;express&quot;: &quot;^4.18.2&quot;\n  }\n}\n\n// server.js\nconst express = require('express');\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\napp.get('/', (req, res) =&gt; {\n  res.json({ message: 'Hello Docker! 🐳' });\n});\n\napp.listen(PORT, () =&gt; {\n  console.log(`Server running on port ${PORT}`);\n});\n\n// 2. Create Dockerfile\n# Dockerfile\nFROM node:16-alpine                 # Base image (Node.js 16 on Alpine Linux)\n\nWORKDIR /app                        # Set working directory\n\nCOPY package*.json ./               # Copy package files\n\nRUN npm install                     # Install dependencies\n\nCOPY . .                            # Copy all files\n\nEXPOSE 3000                         # Expose port 3000\n\nCMD [&quot;npm&quot;, &quot;start&quot;]                # Run the application\n\n// 3. Build Docker Image\n// docker build -t my-node-app .\n\n// 4. Run Docker Container\n// docker run -d -p 3000:3000 --name node-app my-node-app\n\n// 5. Test the Application\n// Open browser: http://localhost:3000\n\n// Optimizations:\n\n// a) Use .dockerignore (like .gitignore for Docker)\nnode_modules\nnpm-debug.log\n.git\n.env\nDockerfile*\ndocker-compose*\nREADME.md\n\n// b) Multi-stage Build (Production Optimization)\n# Stage 1: Build\nFROM node:16 AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\n\n# Stage 2: Run\nFROM node:16-alpine\nWORKDIR /app\nCOPY --from=builder /app/node_modules ./node_modules\nCOPY . .\nEXPOSE 3000\nCMD [&quot;npm&quot;, &quot;start&quot;]\n\n// c) Health Check\nHEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\\n  CMD node -e &quot;require('http').get('http://localhost:3000/health', (r) =&gt; { \\\n    if (r.statusCode === 200) process.exit(0); \\\n    process.exit(1); \\\n  })&quot;\n\n// Common Issues &amp; Solutions:\n// 1. Hot reload in development:\n//    Use volume mounting: -v $(pwd):/app\n//    Use nodemon instead of node\n\n// 2. Environment variables:\n//    Pass with -e or use .env file\n\n// 3. Permission issues:\n//    Create non-root user in Dockerfile\n\nconsole.log(&quot;Node.js app successfully dockerized! 🎉&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-4-docker-compose",
            "title": "Docker Compose",
            "content": "<h3>Docker Compose for Multi-Container Apps</h3><pre class=\"lecture-pre\"><code>// Docker Compose: Manage Multi-Container Applications\n\n// Why Docker Compose?\n// - Define and run multi-container Docker apps\n// - Single YAML file configuration\n// - Easy to manage dependencies\n// - Simplified networking between containers\n\n// Example: Node.js + MongoDB Application\n\n// docker-compose.yml\nversion: '3.8'\n\nservices:\n  # Node.js Application\n  app:\n    build: .\n    container_name: node-app\n    ports:\n      - &quot;3000:3000&quot;\n    environment:\n      - NODE_ENV=development\n      - MONGODB_URL=mongodb://mongodb:27017/mydb\n    volumes:\n      - .:/app\n      - /app/node_modules  # Prevents overwriting\n    depends_on:\n      - mongodb\n    restart: unless-stopped\n\n  # MongoDB Database\n  mongodb:\n    image: mongo:6\n    container_name: mongodb\n    ports:\n      - &quot;27017:27017&quot;\n    environment:\n      - MONGO_INITDB_ROOT_USERNAME=admin\n      - MONGO_INITDB_ROOT_PASSWORD=secret\n    volumes:\n      - mongo-data:/data/db\n    restart: unless-stopped\n\n  # Redis Cache (Optional)\n  redis:\n    image: redis:alpine\n    container_name: redis\n    ports:\n      - &quot;6379:6379&quot;\n    restart: unless-stopped\n\nvolumes:\n  mongo-data:\n\n// Key Docker Compose Commands:\n// docker-compose up              # Start all services\n// docker-compose up -d           # Start in background\n// docker-compose down           # Stop and remove containers\n// docker-compose ps             # List services\n// docker-compose logs           # View logs\n// docker-compose logs -f app    # Follow app logs\n// docker-compose exec app bash  # Enter app container\n// docker-compose build          # Rebuild images\n// docker-compose restart        # Restart services\n\n// Development vs Production Compose Files:\n\n// docker-compose.yml (Development)\nversion: '3.8'\nservices:\n  app:\n    build: .\n    volumes:\n      - .:/app  # Mount code for live reload\n    environment:\n      - NODE_ENV=development\n\n// docker-compose.prod.yml (Production)\nversion: '3.8'\nservices:\n  app:\n    image: myapp:production  # Use pre-built image\n    environment:\n      - NODE_ENV=production\n      - DATABASE_URL=${DATABASE_URL}\n    secrets:\n      - db_password\n\n// Networking:\n// - Services can communicate using service names\n// - Example: In Node.js app, connect to mongodb://mongodb:27017\n// - Internal network created automatically\n\n// Environment Variables in Compose:\n// 1. Direct in YAML:\n//    environment:\n//      - KEY=value\n\n// 2. Using .env file:\n//    Create .env file:\n//    DB_PASSWORD=secret123\n//    \n//    In docker-compose.yml:\n//    environment:\n//      - DB_PASSWORD=${DB_PASSWORD}\n\n// 3. Environment file:\n//    env_file:\n//      - .env\n\n// Volume Management:\n// docker volume ls              # List volumes\n// docker volume prune           # Remove unused volumes\n// docker volume inspect mongo-data  # Volume details\n\nconsole.log(&quot;Docker Compose: Simplify multi-container apps!&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-5-environment-mgmt",
            "title": "Environment Mgmt",
            "content": "<h3>Environment Management with Docker</h3><pre class=\"lecture-pre\"><code>// Best Practices for Environment Management\n\n// 1. Environment Variables\n// Pass sensitive data via environment variables, not in code\n\n// Docker Run:\ndocker run -e DATABASE_URL=postgres://user:pass@db:5432/myapp myapp\n\n// Docker Compose:\nservices:\n  app:\n    environment:\n      - NODE_ENV=production\n      - API_KEY=${API_KEY}\n      - DATABASE_URL=postgres://${DB_USER}:${DB_PASS}@db:5432/myapp\n\n// 2. Using .env Files\n// Create .env file:\nDATABASE_URL=postgres://user:pass@localhost:5432/myapp\nAPI_KEY=your-api-key-here\nNODE_ENV=development\n\n// Use with Docker Compose:\nversion: '3.8'\nservices:\n  app:\n    env_file:\n      - .env  # Load all variables from .env\n\n// 3. Docker Secrets (For Production)\n// For sensitive data like passwords, API keys\n\n// docker-compose.yml with secrets:\nversion: '3.8'\nservices:\n  app:\n    image: myapp:prod\n    secrets:\n      - db_password\n      - api_key\n\nsecrets:\n  db_password:\n    file: ./secrets/db_password.txt\n  api_key:\n    external: true  # Use external Docker secret\n\n// Create secrets:\necho &quot;mysecretpassword&quot; | docker secret create db_password -\n\n// 4. Configuration Files\n// Use config files mounted as volumes\n\n// Create config directory structure:\n// config/\n//   ├── development.json\n//   ├── production.json\n//   └── default.json\n\n// Mount config in Docker Compose:\nservices:\n  app:\n    volumes:\n      - ./config:/app/config:ro  # Read-only mount\n\n// 5. Multi-Stage Builds for Different Environments\n# Development Dockerfile\nFROM node:16-alpine AS development\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nCMD [&quot;npm&quot;, &quot;run&quot;, &quot;dev&quot;]\n\n# Production Dockerfile\nFROM node:16-alpine AS production\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nCMD [&quot;npm&quot;, &quot;start&quot;]\n\n// Build different stages:\ndocker build --target development -t myapp:dev .\ndocker build --target production -t myapp:prod .\n\n// 6. Using Docker Configs (Swarm Mode)\n// For distributing configuration files\ndocker config create my_config ./config.json\n\n// In docker-compose.yml:\nconfigs:\n  my_config:\n    external: true\n\nservices:\n  app:\n    image: myapp\n    configs:\n      - source: my_config\n        target: /app/config.json\n\n// 7. Health Checks with Environment Variables\nservices:\n  app:\n    healthcheck:\n      test: [&quot;CMD&quot;, &quot;node&quot;, &quot;healthcheck.js&quot;]\n      interval: 30s\n      timeout: 10s\n      retries: 3\n      start_period: 40s\n\n// healthcheck.js\nconst http = require('http');\nconst options = {\n  hostname: 'localhost',\n  port: process.env.PORT || 3000,\n  path: '/health',\n  timeout: 5000\n};\n\nconst req = http.request(options, (res) =&gt; {\n  if (res.statusCode === 200) {\n    process.exit(0);\n  } else {\n    process.exit(1);\n  }\n});\n\n// Best Practices:\n// 1. Never commit .env files to git\n// 2. Use different .env files for different environments\n// 3. Use Docker secrets for production secrets\n// 4. Validate environment variables on app startup\n// 5. Provide default values for non-critical variables\n\nconsole.log(&quot;Secure and flexible environment management!&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-6-dockerfile-best-practices",
            "title": "Dockerfile Best Practices",
            "content": "<h3>Dockerfile Best Practices for Node.js</h3><pre class=\"lecture-pre\"><code>// Dockerfile Best Practices for Node.js Applications\n\n// 1. Use Official Base Images\n// Good:\nFROM node:16-alpine  # Alpine is lightweight (5MB vs 300MB)\n\n// Bad:\nFROM ubuntu:latest   # Too heavy, manual Node.js installation needed\n\n// 2. Use Specific Version Tags\n// Good:\nFROM node:16.20.1-alpine3.18  # Specific version for reproducibility\n\n// Bad:\nFROM node:latest              # Version can change unexpectedly\n\n// 3. Optimize Build Cache with Layer Ordering\n// Order from least to most frequently changing:\n\n# 1. Install dependencies (cache this layer)\nCOPY package*.json ./\nRUN npm ci --only=production\n\n# 2. Copy application code (changes frequently)\nCOPY . .\n\n// 4. Use .dockerignore\n// Create .dockerignore file:\nnode_modules\nnpm-debug.log\n.git\n.env\nDockerfile*\ndocker-compose*\nREADME.md\n*.md\n.gitignore\n\n// 5. Run as Non-Root User\n# Create non-root user\nRUN addgroup -g 1001 -S nodejs\nRUN adduser -S nodejs -u 1001\n\n# Set user\nUSER nodejs\n\n// 6. Use Multi-Stage Builds (Production)\n# Stage 1: Builder\nFROM node:16 AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\n# Stage 2: Production\nFROM node:16-alpine\nWORKDIR /app\nCOPY --from=builder /app/dist ./dist\nCOPY package*.json ./\nRUN npm ci --only=production\nUSER nodejs\nEXPOSE 3000\nCMD [&quot;npm&quot;, &quot;start&quot;]\n\n// 7. Clean Up After Installation\nRUN npm ci --only=production &amp;&amp; \\\n    npm cache clean --force\n\n// 8. Set Working Directory\nWORKDIR /app  # Always set explicit working directory\n\n// 9. Use Health Checks\nHEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\\n  CMD node healthcheck.js\n\n// 10. Use Labels for Metadata\nLABEL maintainer=&quot;Moones Mezher &lt;moones@example.com&gt;&quot;\nLABEL version=&quot;1.0&quot;\nLABEL description=&quot;Node.js API with Express&quot;\n\n// 11. Combine RUN Commands\n# Good (one layer):\nRUN apt-get update &amp;&amp; \\\n    apt-get install -y curl &amp;&amp; \\\n    rm -rf /var/lib/apt/lists/*\n\n# Bad (multiple layers):\nRUN apt-get update\nRUN apt-get install -y curl\nRUN rm -rf /var/lib/apt/lists/*\n\n// 12. Use ARG for Build-Time Variables\nARG NODE_ENV=production\nENV NODE_ENV=${NODE_ENV}\n\n// Build with:\n// docker build --build-arg NODE_ENV=development -t myapp:dev .\n\n// 13. Copy Only Necessary Files\n# Copy package files first\nCOPY package*.json ./\n\n# Install dependencies\nRUN npm install\n\n# Then copy rest of files\nCOPY . .\n\n// 14. Use VOLUME for Persistent Data\nVOLUME [&quot;/app/data&quot;, &quot;/app/logs&quot;]\n\n// 15. Add Security Scanning\n# Scan image for vulnerabilities:\ndocker scan myapp:latest\n\n// Complete Best Practice Dockerfile:\nFROM node:16.20.1-alpine3.18 AS builder\n\nWORKDIR /app\n\n# Install dependencies\nCOPY package*.json ./\nRUN npm ci\n\n# Build application\nCOPY . .\nRUN npm run build\n\n# Production stage\nFROM node:16.20.1-alpine3.18\n\nWORKDIR /app\n\n# Create non-root user\nRUN addgroup -g 1001 -S nodejs &amp;&amp; \\\n    adduser -S nodejs -u 1001\n\n# Copy built application\nCOPY --from=builder /app/dist ./dist\nCOPY package*.json ./\n\n# Install production dependencies only\nRUN npm ci --only=production &amp;&amp; \\\n    npm cache clean --force\n\n# Set user\nUSER nodejs\n\n# Expose port\nEXPOSE 3000\n\n# Health check\nHEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\\n  CMD node healthcheck.js\n\n# Run application\nCMD [&quot;npm&quot;, &quot;start&quot;]\n\n// Image Size Comparison:\n// Bad practices: ~1.2GB\n// Good practices: ~150MB\n// Best practices: ~80MB\n\nconsole.log(&quot;Follow best practices for efficient, secure Docker images!&quot;);</code></pre>",
            "examples": []
        },
        {
            "id": "topic-7-ci-cd-pipeline",
            "title": "CI/CD Pipeline",
            "content": "<h3>Docker in CI/CD Pipeline</h3><pre class=\"lecture-pre\"><code>// Docker in Continuous Integration/Continuous Deployment\n\n// Basic CI/CD Pipeline with Docker:\n\n// 1. Developer pushes code to GitHub\n// 2. GitHub Actions triggers CI pipeline\n// 3. Build Docker image\n// 4. Run tests inside container\n// 5. Push image to Docker Hub/Registry\n// 6. Deploy to server\n\n// Example: GitHub Actions Workflow\n// .github/workflows/docker.yml\n\nname: Docker CI/CD Pipeline\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    \n    steps:\n    - name: Checkout code\n      uses: actions/checkout@v3\n    \n    - name: Set up Docker Buildx\n      uses: docker/setup-buildx-action@v2\n    \n    - name: Log in to Docker Hub\n      uses: docker/login-action@v2\n      with:\n        username: ${{ secrets.DOCKER_USERNAME }}\n        password: ${{ secrets.DOCKER_PASSWORD }}\n    \n    - name: Build Docker image\n      run: |\n        docker build -t myapp:${{ github.sha }} .\n        docker build -t myapp:latest .\n    \n    - name: Run tests in container\n      run: |\n        docker run myapp:${{ github.sha }} npm test\n    \n    - name: Push Docker image\n      run: |\n        docker push myapp:${{ github.sha }}\n        docker push myapp:latest\n    \n  deploy:\n    needs: build-and-test\n    runs-on: ubuntu-latest\n    if: github.ref == 'refs/heads/main'\n    \n    steps:\n    - name: Deploy to server\n      uses: appleboy/ssh-action@v0.1.5\n      with:\n        host: ${{ secrets.SERVER_HOST }}\n        username: ${{ secrets.SERVER_USER }}\n        key: ${{ secrets.SSH_PRIVATE_KEY }}\n        script: |\n          docker pull myapp:latest\n          docker stop myapp || true\n          docker rm myapp || true\n          docker run -d \\\n            --name myapp \\\n            -p 3000:3000 \\\n            --env-file .env \\\n            myapp:latest\n\n// Docker Registry Options:\n// - Docker Hub (hub.docker.com) - Free/public\n// - GitHub Container Registry (ghcr.io) - Integrated with GitHub\n// - Amazon ECR - AWS\n// - Google Container Registry - GCP\n// - Azure Container Registry - Azure\n\n// Multi-Architecture Builds:\n# Build for multiple platforms\ndocker buildx build \\\n  --platform linux/amd64,linux/arm64 \\\n  -t myapp:multi-arch .\n\n// Using Docker Compose in CI:\n# docker-compose.ci.yml\nversion: '3.8'\nservices:\n  app:\n    build: .\n    environment:\n      - NODE_ENV=test\n  postgres:\n    image: postgres:14\n    environment:\n      - POSTGRES_PASSWORD=test\n\n# Run tests with:\n# docker-compose -f docker-compose.ci.yml run app npm test\n\n// Security Scanning:\n# Scan for vulnerabilities\ndocker scan myapp:latest\n\n# Use Trivy for vulnerability scanning\ndocker run --rm \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  aquasec/trivy image myapp:latest\n\n// Production Deployment Best Practices:\n// 1. Use orchestration (Docker Swarm, Kubernetes)\n// 2. Implement rolling updates\n// 3. Set resource limits\n// 4. Use secrets management\n// 5. Implement monitoring and logging\n\n// Docker Swarm Example:\n# Initialize swarm\ndocker swarm init\n\n# Deploy stack\ndocker stack deploy -c docker-compose.yml myapp\n\n# Update service\ndocker service update --image myapp:new-version myapp_app\n\n// Monitoring:\n# View container metrics\ndocker stats\n\n# Use Prometheus and Grafana\n# Add Prometheus to docker-compose.yml\nprometheus:\n  image: prom/prometheus\n  volumes:\n    - ./prometheus.yml:/etc/prometheus/prometheus.yml\n\n// Log Management:\n# View logs\ndocker logs myapp\n\n# Send logs to external service\n# Use logging drivers\ndocker run --log-driver=syslog myapp\n\nconsole.log(&quot;Docker: The foundation of modern CI/CD pipelines!&quot;);</code></pre>",
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
