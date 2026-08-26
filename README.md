# 🎮 Junior Unity Game Developer & Gameplay Programmer Portfolio

A high-performance, futuristic game-launcher and HUD-themed portfolio website engineered for **Md. Nurul Mashraque Maruf**, Junior Unity Game Developer & Software Engineer.

![Portfolio Preview](./public/assets/images/profile.png)

---

## ⚡ Tech Stack & Architecture

- **Core Framework**: React 18 + Vite 6 + TypeScript
- **Styling & HUD Aesthetics**: Tailwind CSS with custom Sci-Fi / Cyber theme, HUD panels, and glassmorphism
- **Iconography**: Lucide React
- **Audio Engine**: Custom Web Audio API synthesizer generating real-time retro/sci-fi SFX (with mute toggle)
- **Interactive Sandbox**: HTML5 Canvas 2D Turret Defense and physics mechanics simulator right in the browser
- **Data Layer**: Fully decoupled data files (`src/data/portfolioData.ts` and `src/data/projectsData.ts`) for easy maintenance

---

## 📂 Project Structure

```
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── profile.png (Candidate Portrait Photo)
│   │   │   └── projects/ (Mariya's Mayhem, Romantic Quest, Shadow Ninja, Neon Drift, Last Signal, Puzzle Core)
│   │   └── resume/
│   │       └── Md_Nurul_Mashraque_Maruf_Resume.pdf (Verified Candidate PDF Resume)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/ (LoadingScreen, Navbar, Footer)
│   │   ├── hero/ (Hero, UnityInspectorHUD, ParticleCanvas)
│   │   ├── about/ (AboutMe, QuickStats)
│   │   ├── skills/ (SkillsMatrix)
│   │   ├── projects/ (ProjectsSection, ProjectCard, ProjectDetailModal)
│   │   ├── playground/ (MiniGameSandbox)
│   │   ├── pipeline/ (DevProcessTimeline)
│   │   ├── experience/ (ExperienceSection)
│   │   ├── education/ (EducationSection)
│   │   ├── stats/ (StatsDashboard)
│   │   └── contact/ (ContactSection)
│   ├── data/
│   │   ├── portfolioData.ts (Single source of truth for candidate info, skills & history)
│   │   └── projectsData.ts (Projects catalog, case studies, C# snippets & challenges)
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── audio.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── vite.config.ts
```

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized static build will be generated in `dist/`.

---

## 🛠️ How to Customize & Update Data

### 1. Updating Personal Information & Resume Data
Open `src/data/portfolioData.ts` to update:
- Name, Title, and Bio paragraphs
- Contact details (Email, Phone, Location, GitHub, LinkedIn)
- Skills Matrix items and proficiency levels
- Work Experience & Education timelines

### 2. Updating or Adding Game Projects
Open `src/data/projectsData.ts` to edit:
- Project title, tagline, and category
- Unity version, platforms, and development status
- Key gameplay features and technical challenges/solutions
- C# code snippets shown in the case study modal
- GitHub repository, WebGL demo, and build download links

### 3. Replacing Profile Picture or Project Banners
- Replace `public/assets/images/profile.png` with your preferred portrait.
- Add your project screenshots or gameplay videos in `public/assets/images/projects/`.

### 4. Updating the Resume PDF
- Replace `public/assets/resume/Md_Nurul_Mashraque_Maruf_Resume.pdf` with any updated PDF resume. The "Download Resume" buttons across the site will automatically link to it.

---

## 🌐 Deployment Instructions

### Deploying to GitHub Pages
1. In `vite.config.ts`, verify that `base: './'` is set.
2. Run `npm run build`.
3. Push the repo to GitHub.
4. Go to **Settings > Pages** in your GitHub repository and set source to GitHub Actions or the `gh-pages` branch.

### Deploying to Vercel or Netlify
1. Connect your GitHub repository `Mashraque/Portfolio` to Vercel or Netlify.
2. Set Build Command to `npm run build` and Output Directory to `dist`.
3. Deploy!

---

## 📄 License & Credits

- Designed & engineered for **Md. Nurul Mashraque Maruf**
- Repository: [https://github.com/Mashraque/Portfolio](https://github.com/Mashraque/Portfolio)