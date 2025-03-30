# Text and Tools (TNT) Lab Website

Welcome to the open-source repository for the **TNT Lab Website**, developed using [Eleventy (11ty)](https://www.11ty.dev/) and hosted on GitHub Pages. This site supports our lab's public presence and course offerings while serving as a real-world project for student contributors studying computer science and web development.

---

## 📚 Project Purpose

- Showcase the **TNT Lab**: profile, publications, presentations, projects, and grants
- Host interactive **course content**: for university-wide and lab-specific courses
- Use a **static site generator** for flexibility, speed, and version control
- Provide a structured, collaborative learning environment for student developers

---

## 🚀 Features

- Built with [Eleventy](https://www.11ty.dev/): a fast, modern static site generator
- Styled with [W3.CSS](https://www.w3schools.com/w3css/) and custom CSS (currently)
- Fully responsive: works on mobile and desktop
- Supports audio, video, and interactive JavaScript elements
- Organized content: TNT Lab section + University-wide and Lab courses

---

## 📚 For Contributors

### How to Get Started:

1. **Fork or clone** the repository
2. Run locally:
   ```bash
   npm install
   npx eleventy --serve
   ```
3. Create or select an [issue](../../issues) to work on
4. Create a new branch: `feature/my-task`
5. Make your changes, commit, and push
6. Open a pull request referencing the issue

### Workflow & Guide:
See [Contributor Guide](./tnt_github_workflow_guide.md) for full details on branching, issues, pull requests, and coding tips.

---

## 📒 Directory Structure
```
/
├── _includes/        # Layouts and reusable components
├── _data/            # Shared data (navigation, metadata, etc.)
├── assets/           # CSS, JS, images, media
├── tnt-lab/          # Pages about the lab
├── courses/          # University-wide and lab-specific course units
├── index.md          # Homepage
├── .eleventy.js      # Eleventy configuration
├── package.json      # Project metadata and dependencies
```

---

## 📅 Project Status

The site is currently live at:
**[https://john6938.github.io/tnt_website/](https://john6938.github.io/tnt_website/)**

We are actively adding:
- New course content and interactive features
- Rubric shortcodes for repeatable instructional blocks
- A reusable layout system for units and lab pages

---

## ✨ Want to Contribute?

We welcome contributors of all experience levels! Check out the [issues tab](../../issues) or open a new issue if you'd like to:
- Add or fix content
- Improve layout, design, or responsiveness
- Suggest features or tools for student use
- Refactor or optimize code

---

## 🚜 Deployment

This site is automatically deployed via **GitHub Actions** to the `gh-pages` branch. All edits should be made in `main` via pull requests. The build process uses:

- `npx eleventy` to generate static files
- `peaceiris/actions-gh-pages@v3` to publish to GitHub Pages

---

## 💼 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

## 🤝 Acknowledgements

This project is developed and maintained by [John Blake](https://u-aizu.ac.jp/~jblake/) and contributors from the University of Aizu.

