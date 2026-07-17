# Krishna - Personal Portfolio

A modern, elegant portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🎨 Design Features

- **Modern Aesthetic**: Clean, minimalist design with smooth animations
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop
- **Dark Theme**: Eye-friendly dark mode with vibrant accent colors
- **Smooth Animations**: Framer Motion animations on scroll
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📋 Sections

1. **Hero** - Eye-catching introduction with CTA buttons
2. **About** - Personal background and highlights
3. **Experience** - Professional work history
4. **Projects** - Featured projects with tech stack
5. **Skills** - Skills organized by category
6. **Contact** - Easy ways to get in touch

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

### Update Portfolio Data

Edit `src/App.jsx` and modify the `portfolioData` object:

```javascript
const portfolioData = {
  name: 'Your Name',
  title: 'Your Title',
  about: 'Your bio...',
  experience: [...],
  projects: [...],
  skills: [...],
  contact: {...}
}
```

### Change Colors

Modify CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #5df0df;
  --secondary-color: #4d7fff;
  --accent-color: #58f2df;
  /* ... more variables */
}
```

### Update Social Links

Edit the `socialLinks` array in `src/App.jsx` to add/remove social profiles.

## 🎯 Key Pages

- **Home**: `https://krishna-lovat.vercel.app`
- **GitHub**: `https://github.com/krishna-1528`
- **LinkedIn**: `https://www.linkedin.com/in/krishna-patel-4257582a1/`

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 480px - 767px
- Small Mobile: < 480px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Reduced motion support

## 🔍 SEO Optimization

- Meta descriptions
- Open Graph tags
- Twitter cards
- Canonical URLs
- Semantic HTML

## 📦 Dependencies

- `react`: ^19.2.7
- `react-dom`: ^19.2.7
- `framer-motion`: ^12.42.2
- `tailwindcss`: ^4.3.3
- `@tailwindcss/postcss`: ^4.3.3

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages

```bash
# Build the project
npm run build

# Push to gh-pages branch
git subtree push --prefix dist origin gh-pages
```

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Inspiration

Designed with inspiration from [Gazi Jarin's Portfolio](https://gazijarin.com) - showcasing excellent UX with clean design principles.

## 👨‍💻 About the Developer

**Krishna Patel**
- 19-year-old Electronics Engineering student at Rashtriya Raksha University
- Specializing in VLSI Design, Full-Stack Web Development, and Hardware Automation
- Passionate about IoT and embedded systems

---

**Built with ❤️ using React, Vite, and Framer Motion**
