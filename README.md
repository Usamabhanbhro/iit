# ⚛️ IIT WEBSITE 

A modern, responsive React application built with best practices.

---

## 🚀 Features

- ⚡ Fast and lightweight
- 📱 Responsive design
- 🛠️ Built with React & modern JavaScript

---

## 📋 Prerequisites

Make sure you have the following installed on your machine before running the project:

- [Node.js](https://nodejs.org/) (v16.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

---

## 🛠️ Getting Started & Cloning

Follow these steps to get a local copy up and running on your computer.

### 1. Clone the repository
```bash
git clone https://github.com/Usamabhanbhro/iit.git

```
### 2. Navigate into the project folder
```bash
cd your-repo-name

```
### 3. Install dependencies
```bash
npm install

```
### 4. Run the application locally
```bash
npm start

```
*(If your project uses Vite, use npm run dev instead)*
Open http://localhost:3000 (or the port shown in your terminal) to view it in your browser.
## 🚀 How to Deploy to GitHub Pages
You can easily host and deploy this React app online for free using GitHub Pages.
### Step 1: Install the gh-pages package
Run the following command in your terminal:
```bash
npm install gh-pages --save-dev

```
### Step 2: Configure package.json
Open your package.json file and make two quick additions:
 1. Add a homepage property at the top level:
   ```json
   "homepage": "[https://your-username.github.io/your-repo-name](https://your-username.github.io/your-repo-name)",
   
   ```
 2. Add deployment commands under the "scripts" section:
   * **For Create React App:**
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
     
     ```
   * **For Vite:**
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
     
     ```
*(If you are using Vite, also update vite.config.js to set base: '/your-repo-name/')*
### Step 3: Deploy the app
Run the deploy command in your terminal:
```bash
npm run deploy

```
This will automatically build your project and push it to a gh-pages branch on GitHub.
### Step 4: Verify GitHub Settings
 1. Go to your repository on GitHub.
 2. Click **Settings** \rightarrow **Pages**.
 3. Under **Source**, select Deploy from a branch and choose the gh-pages branch.
 4. Your live app will be accessible at https://your-username.github.io/your-repo-name!
## 📂 Project Structure
```text
├── public/          # Static assets
├── src/             # React source code (components, styles, assets)
├── .gitignore       # Files ignored by Git
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation

```
## 📜 License
This project is licensed under the MIT License - see the LICENSE file for details.
```

---

> **Tip:** Replace placeholders like `your-username` and `your-repo-name` with your actual GitHub username and repository name before saving!

For a visual step-by-step walkthrough of deploying a React app built with Vite directly to GitHub Pages, check out this video tutorial: [How to Deploy a React Vite App to GitHub Pages](https://www.youtube.com/watch?v=5gSBLvZ8MH8).
http://googleusercontent.com/youtube_content/1

```
