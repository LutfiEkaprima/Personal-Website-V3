# Modern Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio features smooth animations, mobile responsiveness, and a contact form powered by Netlify Forms.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ✨ Smooth scroll and animations
- 📝 Contact form with Netlify Forms integration
- 🎯 Sections for About, Career, Projects, and Contact
- 🔍 SEO optimized
- 🚀 Fast performance

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:
```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

## Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:
```bash
npm run preview
```

## Deployment

This project is configured for deployment on Netlify. To deploy:

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

The contact form will automatically work with Netlify Forms after deployment.

## Project Structure

```
src/
├── components/
│   ├── layout/       # Layout components
│   ├── sections/     # Page sections
│   ├── ui/           # Reusable UI components
│   └── utils/        # Utility functions and hooks
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## Customization

1. Update personal information:
   - Edit text in section components under `src/components/sections/`
   - Modify social links in `Footer.tsx`
   - Update projects in `ProjectsSection.tsx`

2. Styling:
   - Customize colors and styles in `tailwind.config.js`
   - Modify component-specific styles in their respective files

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Images from [Pexels](https://www.pexels.com/)
