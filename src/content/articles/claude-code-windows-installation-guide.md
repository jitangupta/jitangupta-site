---
title: 'How to Install Claude Code on Windows: Complete WSL Setup Guide 2025'
titleTag: 'A Complete Guide'
description: 'Learn how to install Claude Code on Windows using WSL. Complete step-by-step guide covering prerequisites, Node.js setup, authentication, IDE integration, and troubleshooting common Windows issues.'
pubDate: '26 June 2025'
heroImage: '/articles/cluade-code-installation/claude-article-banner.jpg'
articleTag: 'AI coding assistant'
previousArticle: ''
nextArticle: '/article/building-auth-service'
---

> **🚨 CRITICAL**: Claude Code does **NOT** run natively on Windows. This guide shows you how to install it properly using Windows Subsystem for Linux (WSL).

## Prerequisites & System Requirements

### Required System Specifications
- **Windows 10** (Build 19041 or higher) or **Windows 11**
- **4GB RAM minimum** (16GB recommended for optimal performance)
- **WSL 2** support (WSL 1 is not compatible)
- **Active internet connection** for downloads and authentication

### Required Accounts
- **Anthropic Console account** with billing enabled, OR
- **Claude Pro/Max subscription** for authentication

### Critical Platform Warning
⚠️ **Claude Code explicitly blocks Windows installation** with `"os":"!win32"` in its package configuration. Attempting to install directly on Windows will fail with an "Unsupported OS" error.


## Installing WSL 2

### Step 1: Enable WSL
Open **PowerShell as Administrator** and run:

```powershell
wsl --install
```

If you encounter execution policy errors, first run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Step 2: Set WSL 2 as Default
```powershell
wsl --set-default-version 2
```

### Step 3: Restart Your Computer
**⚠️ MANDATORY**: A complete system restart is required for WSL to function properly.

### Step 4: Verify Installation
After restart, open PowerShell and run:
```powershell
wsl --list --verbose
```

You should see output similar to this:

![WSL Installation Verification](/articles/cluade-code-installation/article-1.png)

✅ **Success indicator**: All distributions should show "VERSION 2"

## Setting up Node.js in WSL

### Step 1: Launch Ubuntu
From Start menu, search for "Ubuntu" or run `wsl` in PowerShell.

### Step 2: Update System Packages
```bash
sudo apt update && sudo apt upgrade -y
```

### Step 3: Install Node.js using NVM (Recommended)

**Why NVM?** Node Version Manager provides better version control and avoids permission issues common with direct installations.

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Reload bash configuration
source ~/.bashrc

# Install Node.js 18+ (Required for Claude Code)
nvm install 18
nvm use 18
```

### Alternative: Direct Installation via apt
```bash
sudo apt install nodejs npm
```

### Step 4: Verify Node.js Installation
```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show 9.x.x or higher
```

---

## Configuring npm Safely

### 🚨 CRITICAL: Avoid sudo with npm

**NEVER use `sudo npm install -g`** as this creates security risks and permission issues that Anthropic explicitly warns against.

### Step 1: Create User-Level Global Directory
```bash
mkdir -p ~/.npm-global
npm config set prefix ~/.npm-global
```

### Step 2: Update PATH Environment
```bash
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Step 3: Verify Configuration
```bash
npm config get prefix
# Should output: /home/yourusername/.npm-global
```

## Installing Claude Code

### Step 1: Install via npm
```bash
npm install -g @anthropic-ai/claude-code
```

**Expected output**: Package installation without sudo prompts or permission errors.

### Step 2: Verify Installation
```bash
claude --version
```

### Step 3: Navigate to Your Project Directory
```bash
# For Windows projects (slower due to cross-filesystem operations)
cd /mnt/c/Users/YourUsername/Documents/YourProject

# For optimal performance, use WSL native filesystem
mkdir -p ~/projects/your-project
cd ~/projects/your-project
```


## Authentication Setup

### Step 1: Initialize Claude Code
```bash
claude
```

You'll see the welcome screen:

![Claude Code Welcome Screen](/articles/cluade-code-installation/article-2.png)

### Step 2: Browser Authentication
Claude Code will provide a URL for authentication. Copy and paste it into your browser.

**Two authentication options:**
- **Anthropic Console**: Requires active billing at console.anthropic.com
- **Claude App**: For Claude Pro/Max subscribers

![Claude Code Authentication Flow](/articles/cluade-code-installation/article-3.png)

### Step 3: Complete Authentication
After successful browser authentication, return to your terminal and press Enter to continue.

✅ **Success indicator**: "Login successful. Press Enter to continue..."


## IDE Integration

### Visual Studio Code Setup

**Step 1: Install VS Code WSL Extension**
```bash
code --install-extension ms-vscode-remote.remote-wsl
```

**Step 2: Open Project in VS Code**
```bash
cd your-project-directory
code .
```

**Step 3: Use Integrated Terminal**
- Open VS Code's integrated terminal (Ctrl + `)
- Run `claude` from within VS Code
- Use Ctrl+Esc for Claude Code shortcuts

## Verification & Testing

### Step 1: Version Check
```bash
claude --version
```

### Step 2: Create Test Project
```bash
mkdir test-claude-project
cd test-claude-project
git init
claude
```

### Step 3: Test Basic Commands
```bash
# Within Claude Code interface
/help          # Show available commands
/init          # Initialize project settings
/ide           # Test IDE integration
```

### Step 4: Verify IDE Connection
- Open VS Code in your test project
- Launch integrated terminal
- Run `claude`
- Use `/ide` command to establish connection

## Troubleshooting Common Issues

### "Claude Code is not supported on Windows"
**Problem**: Attempting installation in Windows PowerShell/CMD

**Solution**: Only install and run within WSL environment

### Permission Errors During Installation
**Problem**: npm tries to install in system directories
**Solution**: Use the user-level npm configuration outlined above
```bash
# Reset npm configuration if needed
npm config delete prefix
npm config set prefix ~/.npm-global
```

### "exec: node: not found"
**Problem**: WSL attempting to use Windows Node.js

**Solution**: Reinstall Node.js within WSL using Linux package managers

### Slow Performance
**Problem**: Cross-filesystem operations between WSL and Windows

**Solutions**: 
- Work within WSL's native filesystem (`~/projects/`)
- Or optimize with .wslconfig:

Create `C:\Users\YourUsername\.wslconfig`:
```ini
[wsl2]
memory=8GB
processors=4
swap=2GB
```

## Conclusion

Installing Claude Code on Windows requires understanding that it's fundamentally a Linux application running through WSL. The key to success is:

1. **Proper WSL 2 setup** with complete system restart
2. **Correct npm configuration** to avoid permission issues
3. **WSL-native development** for optimal performance
4. **Proper authentication** with active billing or subscription
