# Prajwal Nikam — Developer Portfolio 🚀

[![Live Website](https://img.shields.io/badge/Live%20Demo-prajwalnikam.dev-2563eb?style=for-the-badge&logo=googlechrome&logoColor=white)](https://prajwalnikam.dev/)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-22c55e?style=for-the-badge&logo=github&logoColor=white)](https://github.com/prajwalnikam)
[![License: MIT](https://img.shields.io/badge/License-MIT-f59e0b?style=for-the-badge)](LICENSE)

A high-performance, modern, and fully responsive personal portfolio website crafted for **Prajwal Nikam** — Full Stack Web Developer & Software QA Engineer specializing in PHP Laravel, React, Java, Spring Boot, MySQL, and automated testing regimes.

---

## 🌐 Live Demo & Domain

- **Primary Custom Domain**: [https://prajwalnikam.dev/](https://prajwalnikam.dev/)
- **GitHub Repository**: [https://github.com/prajwalnikam/Portfolio](https://github.com/prajwalnikam)

---

## ✨ Features & Highlights

- **🌓 Dynamic Dark & Light Theme System**:
  - Seamless toggle with persistent user preference stored in `localStorage`.
  - Automatic detection of system preference (`prefers-color-scheme`).
  - Ultra-clean CSS variable architecture for instantaneous transitions without flash of unstyled content.

- **📱 100% Fully Responsive Design**:
  - Optimized across mobile, tablet, laptop, and ultra-wide viewports.
  - Adaptive collapsible sidebar navigation with backdrop blur and touch-friendly controls.

- **⚡ Zero Heavy Dependencies & Blazing Fast Load Times**:
  - Completely free of bloated third-party JavaScript bundles (eliminated heavy Swiper and MixItUp libraries).
  - Custom native JavaScript implementation for interactive portfolio project filtering and smooth scrolling.
  - Zero console errors and zero missing production source map 404 warnings.

- **🔍 Comprehensive Technical SEO & Structured Data**:
  - Single semantic `<h1>` hierarchy on every page.
  - Complete JSON-LD Structured Data Schema (`@graph` containing `Person`, `WebSite`, `ProfessionalService`, and `BreadcrumbList`).
  - Open Graph (OG) and Twitter Card tags configured for rich link previews across social platforms.
  - Search engine directives: `sitemap.xml` and `robots.txt`.
  - AI crawler manifest: `llms.txt` for next-generation LLM web search indexing.
  - Custom branded `404.html` error page with instant return navigation.

- **💬 Interactive Quick Connect & Smart Feedback**:
  - One-click email copying with floating toast notification confirmation.
  - Direct WhatsApp API deep-linking with pre-filled message context.
  - Interactive browser tab visibility detection (displays a friendly return prompt when the visitor switches tabs).

---

## 🛠️ Tech Stack & Tools

| Area | Technologies / Tools |
| :--- | :--- |
| **Frontend Core** | HTML5 (Semantic), CSS3 (Modern Flexbox & Grid), Vanilla JavaScript (ES6+) |
| **Styling & Design** | Custom CSS Variables, Glassmorphism, Responsive Media Queries |
| **Typography & Icons** | Google Fonts (Inter), Unicons, Devicon |
| **SEO & Discoverability** | JSON-LD Schema.org, Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt`, `llms.txt` |
| **Hosting & CI/CD** | GitHub Pages, Custom Domain DNS (`CNAME`) |

---

## 📂 Project Structure

```plaintext
Portfolio/
├── .github/                      # GitHub configurations & issue templates
├── assets/
│   ├── hero-portrait.png         # High-resolution hero portrait
│   ├── og-share.png              # 1200x630 Social share card image
│   ├── favicon.png               # Custom site favicon
│   ├── Prajwal_Nikam_Resume.pdf  # Downloadable professional resume
│   └── work*.png                 # Project showcase preview thumbnails
├── index.html                    # Main portfolio landing page (Single Page Application)
├── 404.html                      # Standalone custom 404 Not Found error page
├── style.css                     # Complete design system, themes, and responsive rules
├── script.js                     # Native interactivity, filtering, theme toggle, and toast logic
├── CNAME                         # Custom domain mapping (prajwalnikam.dev)
├── robots.txt                    # Search crawler indexing rules
├── sitemap.xml                   # XML sitemap for search engines
├── llms.txt                      # LLM-readable developer profile and documentation
└── README.md                     # Repository documentation & guide
```

---

## 🚀 Getting Started Locally

You can preview and develop this portfolio locally using any standard static file server.

### Option 1: Using VS Code Live Server
1. Clone the repository:
   ```bash
   git clone https://github.com/prajwalnikam/Portfolio.git
   cd Portfolio
   ```
2. Open the directory in **Visual Studio Code**.
3. Install the **Live Server** extension (`ritwickdey.LiveServer`).
4. Right-click [`index.html`](index.html) and select **"Open with Live Server"**.

### Option 2: Using Node.js (`npx serve`)
```bash
# Start a local static HTTP server
npx serve .
```

### Option 3: Using Python 3 Built-in Server
```bash
# Run server on port 8000
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## ⚙️ Deployment & Custom Domain Setup

This website is pre-configured for automated hosting with **GitHub Pages**:

1. **GitHub Pages Settings**:
   - Navigate to your repository on GitHub: `Settings` → `Pages`.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select `main` (or `master`) branch and root `/` folder, then click **Save**.

2. **Custom Domain (`CNAME`)**:
   - The repository includes a [`CNAME`](CNAME) file pointing to `prajwalnikam.dev`.
   - In GitHub Pages settings under **Custom domain**, enter `prajwalnikam.dev` and click **Save**.
   - Check **Enforce HTTPS** once the SSL certificate finishes provisioning.

3. **DNS Records (at your Domain Registrar / DNS Provider)**:
   - **Apex Domain (`@`)**: Add 4 `A` records pointing to GitHub Pages IP addresses:
     ```plaintext
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **Subdomain (`www`)**: Add a `CNAME` record:
     ```plaintext
     Host: www
     Target: <your-username>.github.io
     ```

---

## 📬 Contact & Socials

- **Website**: [prajwalnikam.dev](https://prajwalnikam.dev/)
- **LinkedIn**: [linkedin.com/in/prajwal-nikam-pn2181](https://www.linkedin.com/in/prajwal-nikam-pn2181/)
- **GitHub**: [github.com/prajwalnikam](https://github.com/prajwalnikam)
- **Email**: [prajwalnikam4@gmail.com](mailto:prajwalnikam4@gmail.com)
- **WhatsApp**: [+91 9158546345](https://api.whatsapp.com/send?phone=919158546345&text=Hello%20Prajwal!)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
Feel free to star ⭐ the repository if you found this template helpful!
