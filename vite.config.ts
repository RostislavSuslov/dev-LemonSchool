import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import postcss from 'postcss'
import { resolve } from "path";
import handlebars from 'vite-plugin-handlebars';
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/main.js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'assets/css/style.css';
          }
          if (name && name.includes('img')) {
            return 'assets/img/[name][extname]';
          }
          return 'assets/[name][extname]';
        }
      }
    }
  },
  
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials")
    }),
    FullReload(["src/partials/**/*"])
  ],
  
})

// project/
// ├─ node_modules/
// ├─ public/
// │  └─ assets/
// │     └─ img/
// │         ├─ project-1.png
// │         ├─ project-2.png
// │         └─ project-3.png
// ├─ src/
// │  ├─ css/
// │  │  └─ style.css
// │  ├─ js/
// │  │   └─ main.js
// │  └─ partials/
// │     ├─ header.html
// │     ├─ banner.html
// │     ├─ about.html
// │     ├─ projects.html
// │     └─ footer.html
// ├─ .gitignore
// ├─ index.html              
// ├─ package-lock.json
// ├─ package.json
// └─ vite.config.ts                



// dist/
// ├─ assets/
// │     ├─ img/
// │     │    ├─ project-1.png
// │     │    ├─ project-2.png
// │     │    └─ project-3.png
// │     ├─ css/
// │     │    └─ index.css
// │     └─ js/
// │         └─ index.js
// │
// └─ index.html              
   


// added pictures
// google page speed
// Cross-browser compatibility
// pixel perfect

