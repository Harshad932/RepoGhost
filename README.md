# RepoGhost — Frontend Application

React frontend for **RepoGhost**, an AI-powered GitHub repository assistant.

## Features

- **Public Homepage**: Introduces RepoGhost, showcasing natural language repository chat, core capabilities, and privacy assurances.
- **GitHub Authentication**: Streamlined sign-in flow requesting read-only access to repositories.
- **Theme Support**: Seamless Light, Dark, and System appearance modes.
- **Authenticated Dashboard**: Protected minimal dashboard displaying "Hello World" and user profile upon login.

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Configure the API URL in `.env`:
```env
VITE_API_BASE_URL=http://localhost:8080
```

### 3. Run Development Server
```bash
npm run dev
```
The application will launch on **`http://localhost:3000`**.

### 4. Build for Production
```bash
npm run build
```
