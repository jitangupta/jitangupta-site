---
title: 'How to Install Claude Code on Windows: Complete WSL Setup Guide 2025'
titleTag: 'A Complete Guide'
description: 'Learn how to install Claude Code on Windows using WSL. Complete step-by-step guide covering prerequisites, Node.js setup, authentication, IDE integration, and troubleshooting common Windows issues.'
pubDate: '26 June 2025'
heroImage: '/articles/claude-article-banner.jpg'
articleTag: 'AI coding assistant'
previousArticle: ''
nextArticle: '/article/building-auth-service'
---

**Claude Code requires Windows Subsystem for Linux (WSL) to function on Windows machines** - it cannot run natively in Windows terminals. This comprehensive guide walks through the complete setup process, from enabling WSL through final configuration and troubleshooting.

Claude Code is Anthropic's agentic coding assistant that operates as a command-line interface tool, providing AI-powered coding help directly in your terminal. Unlike traditional IDE extensions, it understands your entire codebase, can edit files directly, handle git workflows, and execute terminal commands with full context awareness.

## System requirements and limitations

**Windows 10 (Build 20262+) or Windows 11** is required, along with **WSL 2** (WSL 1 is not supported). You'll need **Node.js 18+** installed within the WSL environment, not on Windows itself. An active Anthropic account with either billing enabled at console.anthropic.com or a Claude Pro/Max subscription is mandatory.

The **critical limitation** is that Claude Code has no native Windows support whatsoever. All installation and execution must occur within WSL, making this essentially a Linux installation process running on Windows.

## Installing WSL 2 foundation

Open PowerShell as Administrator and run `wsl --install` to install WSL with the default Ubuntu distribution. If you encounter execution policy errors, first run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`.

Ensure WSL 2 is your default version by running `wsl --set-default-version 2`, then **restart your computer completely** - this restart is mandatory for initial WSL setup. After restarting, verify installation with `wsl --list --verbose` to confirm WSL 2 is active.

Launch Ubuntu through the Start menu or by running `wsl` in PowerShell. Create your user credentials when prompted (these don't need to match your Windows credentials), then update the system with `sudo apt update && sudo apt upgrade -y`.

## Node.js installation within WSL

**Install Node.js using Node Version Manager (NVM)** for best results. Run these commands in your Ubuntu terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

Alternatively, use the apt package manager with `sudo apt install nodejs npm`, though NVM provides better version control and fewer permission issues.

## Critical npm configuration

**Configure a user-level npm global directory** to avoid permission problems that plague Windows users:

```bash
mkdir -p ~/.npm-global
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

This configuration prevents the need for sudo permissions and eliminates common installation failures. **Never use `sudo npm install`** when installing Claude Code globally.

## Installing and authenticating Claude Code

Install Claude Code globally within your WSL environment: `npm install -g @anthropic-ai/claude-code`. Navigate to your project directory and launch Claude Code with the `claude` command.

The first launch triggers an OAuth authentication process in your browser. Choose between Anthropic Console authentication (requires active billing) or Claude App authentication (for Pro/Max subscribers). Enterprise users can authenticate through Bedrock or Vertex AI platforms.

## IDE integration setup

**For Visual Studio Code**: Install the VS Code CLI command through the Command Palette (Ctrl+Shift+P > "Shell Command: Install 'code' command in PATH"). Run Claude Code from VS Code's integrated terminal using the `claude` command. The integration supports Ctrl+Esc shortcuts, automatic file context sharing, and diff viewing.

**For JetBrains IDEs**: Ensure your IDE's CLI tools are installed, then run `claude` from the built-in terminal. The integration plugin auto-installs when first running Claude Code. **Restart your IDE completely** - multiple restarts may be necessary for proper integration.

## Windows-specific file system considerations

Windows drives are accessible within WSL at `/mnt/c/`, `/mnt/d/`, etc. Navigate to Windows projects using paths like `/mnt/c/Users/YourUsername/Documents/YourProject`.

**For optimal performance**, consider copying projects to WSL's native filesystem: `cp -r /mnt/c/path/to/project ~/project && cd ~/project`. Cross-filesystem operations between WSL and Windows can significantly impact performance.

Create a `.wslconfig` file in your Windows user directory to optimize WSL performance:

```ini
[wsl2]
memory=8GB
processors=4
swap=2GB
```

## Common Windows troubleshooting

**"Claude Code is not supported on Windows"** occurs when attempting installation in Windows terminals instead of WSL. **Solution**: Only install and run within the WSL environment.

**Permission errors during installation** happen when npm tries to install in system directories. **Solution**: Use the user-level npm configuration outlined above.

**"exec: node: not found"** indicates WSL is attempting to use Windows Node.js. **Solution**: Reinstall Node.js using Linux package managers within WSL.

**Slow performance** typically results from cross-filesystem operations. **Solution**: Work within WSL's native filesystem or ensure you're using WSL 2.

**IDE integration failures** often stem from path mismatches between Windows and WSL environments. **Solution**: Run Claude Code from your IDE's built-in terminal and verify CLI commands are properly installed.

## Cost and security considerations

Monitor your usage carefully as **token consumption can be significant** for large projects. Claude Opus pricing runs $75 per million output tokens and $15 per million input tokens. Use the permission system to approve commands individually for sensitive projects, and always review code changes before accepting suggestions.

Configuration files are stored at `~/.claude/settings.json` for user settings, `.claude/settings.json` for committed project settings, and `.claude/settings.local.json` for local project settings that won't be committed to version control.

## Verification and testing

After installation, verify everything works by checking the Claude Code version: `claude --version`. Create a test project (`mkdir test-project && cd test-project && git init && claude`) to ensure basic functionality.

Test IDE integration by opening VS Code in your project, launching the integrated terminal, running `claude`, and using the `/ide` command to establish the connection.

## Conclusion

While Claude Code installation on Windows requires navigating the WSL requirement and multiple configuration steps, the resulting AI coding assistant provides substantial productivity benefits. **The key to success is understanding that this is essentially a Linux installation process** - all components must be installed within WSL, not Windows itself. The performance implications of working across filesystem boundaries and the complexity of mixed Windows/Linux environments require careful attention, but proper setup yields a powerful development tool that can understand entire codebases and provide sophisticated coding assistance.