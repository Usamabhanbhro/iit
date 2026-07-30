# ⚛️ IIT Website

A modern, responsive React application built for the IIT project using web development best practices.

---

## 🚀 Features

- ⚡ Fast and lightweight
- 📱 Fully responsive across all devices
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
git clone [https://github.com/Usamabhanbhro/iit.git](https://github.com/Usamabhanbhro/iit.git)

```
### 2. Navigate into the project folder
```bash
cd iit

```
### 3. Install dependencies
```bash
npm install

```
### 4. Run the application locally
```bash
npm start

```
*(If the project uses Vite, run npm run dev instead)*
Open http://localhost:3000 (or the port shown in your terminal) to view it in your browser.
## 🚀 How to Deploy to GitHub Pages
Host and deploy this React app online for free using GitHub Pages.
### Step 1: Install the gh-pages package
Run the following command in your terminal:
```bash
npm install gh-pages --save-dev

```
### Step 2: Configure package.json
Open your package.json file and make the following additions:
 1. Add the homepage property at the top level:
   ```json
   "homepage": "[https://Usamabhanbhro.github.io/iit](https://Usamabhanbhro.github.io/iit)",
   
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
*(Note: If using Vite, also ensure vite.config.js sets base: '/iit/')*
### Step 3: Deploy the app
Run the deploy command in your terminal:
```bash
npm run deploy

```
This automatically builds your project and pushes it to the gh-pages branch on GitHub.
### Step 4: Verify GitHub Settings
 1. Go to **github.com/Usamabhanbhro/iit** on GitHub.
 2. Click **Settings** \rightarrow **Pages**.
 3. Under **Source**, select Deploy from a branch and choose the gh-pages branch.
 4. Your live site will be accessible at: **https://Usamabhanbhro.github.io/iit**
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
<p align="center">
Made with ❤️ by <b>Usama Bhanbhro</b> for the 🌍
</p>
```

```
