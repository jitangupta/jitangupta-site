---
title: 'Docker Daily Commands - Organized by Workflow'
description: ''
pubDate: '2 Sep 2025'
draft: false
---
# Docker Daily Commands - Organized by Workflow

*Commands organized by real-world scenarios for faster reference*

## 1. Building Docker Images

### Basic Build Commands
```bash
# Build from current directory
docker build -t myapp .

# Build with specific Dockerfile
docker build -f Dockerfile.prod -t myapp:prod .

# Build with build arguments
docker build --build-arg NODE_ENV=production -t myapp .

# Build and tag with version
docker build -t myapp:v1.0 -t myapp:latest .
```

### Essential Dockerfile Structure
```dockerfile
# Simple Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### Multi-Stage Dockerfile (Production)
```dockerfile
# Build stage
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:16-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
USER node
CMD ["npm", "start"]
```

## 2. Managing Images

### Image Operations
```bash
# List all images
docker images

# Remove image
docker rmi myapp:latest

# Remove unused images
docker image prune

# Push to registry
docker tag myapp:latest myregistry.azurecr.io/myapp:v1.0
docker push myregistry.azurecr.io/myapp:v1.0

# Pull from registry
docker pull nginx:alpine
```

## 3. Running Containers

### Basic Run Commands
```bash
# Run with port forwarding
docker run -p 8080:80 nginx

# Run in background with name
docker run -d --name myapp -p 3000:3000 myapp:latest

# Run with environment variables
docker run -e NODE_ENV=production -p 3000:3000 myapp

# Run with volume mount
docker run -v $(pwd):/app -p 3000:3000 myapp

# Run interactively (for testing)
docker run -it --rm ubuntu bash
```

### Advanced Run Options
```bash
# Run with resource limits
docker run --memory=512m --cpus=1 myapp

# Run with restart policy
docker run --restart=unless-stopped myapp

# Run with multiple environment variables
docker run -e NODE_ENV=production -e PORT=3000 -e DB_HOST=localhost myapp
```

## 4. Managing Running Containers

### Container Lifecycle
```bash
# List running containers
docker ps

# List all containers (running + stopped)
docker ps -a

# Stop container
docker stop myapp

# Start stopped container
docker start myapp

# Restart container
docker restart myapp

# Remove container
docker rm myapp

# Force remove running container
docker rm -f myapp
```

## 5. Debugging & Logs

### Log Management
```bash
# View container logs
docker logs myapp

# Follow logs in real-time
docker logs -f myapp

# View last 100 lines
docker logs --tail=100 myapp

# View logs since specific time
docker logs --since=1h myapp

# View logs with timestamps
docker logs -t myapp
```

### Container Access & Debugging
```bash
# Access running container shell
docker exec -it myapp bash

# Run command in container
docker exec myapp ps aux

# Copy files to/from container
docker cp file.txt myapp:/app/
docker cp myapp:/app/logs.txt ./

# Inspect container details
docker inspect myapp

# Check container resource usage
docker stats myapp

# Check all containers resource usage
docker stats
```

## 6. Docker Compose Workflows

### Basic Compose Operations
```bash
# Start all services (foreground)
docker-compose up

# Start all services (background)
docker-compose up -d

# Stop all services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# Rebuild and start
docker-compose up --build

# Start specific service
docker-compose up web
```

### Compose Debugging
```bash
# View logs for all services
docker-compose logs

# Follow logs for all services
docker-compose logs -f

# View logs for specific service
docker-compose logs web

# List running services
docker-compose ps

# Execute command in service
docker-compose exec web bash

# Scale services
docker-compose up --scale web=3
```

### Sample docker-compose.yml
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DB_HOST=db
    depends_on:
      - db
      - redis
    volumes:
      - ./logs:/app/logs

  db:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - db_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

volumes:
  db_data:
```

## 7. System Maintenance

### Cleanup Commands
```bash
# Remove unused containers, networks, images
docker system prune

# Remove unused images
docker image prune

# Remove unused volumes
docker volume prune

# See disk usage
docker system df

# Remove everything (dangerous!)
docker system prune -a
```

### Volume Management
```bash
# Create named volume
docker volume create myvolume

# List volumes
docker volume ls

# Use named volume
docker run -v myvolume:/data myapp

# Remove volume
docker volume rm myvolume
```

## 8. Registry Operations

### Working with Registries
```bash
# Login to registry
docker login myregistry.azurecr.io

# Tag for registry
docker tag myapp:latest myregistry.azurecr.io/myapp:v1.0

# Push to registry
docker push myregistry.azurecr.io/myapp:v1.0

# Pull from registry
docker pull myregistry.azurecr.io/myapp:v1.0
```

---

## Quick Troubleshooting Scenarios

### Container Won't Start
```bash
docker logs container_name    # Check what went wrong
docker ps -a                  # See if container exited
docker inspect container_name # Get detailed info
```

### Port Already in Use
```bash
docker ps | grep 8080        # See what's using the port
netstat -tulpn | grep 8080   # System-wide port check
```

### Container Performance Issues
```bash
docker stats container_name  # Check resource usage
docker exec -it container_name top  # Check processes inside
```

### Docker Compose Issues
```bash
docker-compose logs service_name  # Service-specific logs
docker-compose ps                # Check service status
docker-compose config            # Validate compose file
```

---

*Organized by workflow - find commands faster when you're in a specific scenario.*