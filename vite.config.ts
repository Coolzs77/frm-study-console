import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function copyAssetsPlugin(): Plugin {
  return {
    name: 'copy-assets-plugin',
    closeBundle() {
      const srcImages = path.resolve(__dirname, 'public/images');
      const destImages = path.resolve(__dirname, 'dist/images');
      if (fs.existsSync(srcImages)) {
        fs.mkdirSync(destImages, { recursive: true });
        fs.cpSync(srcImages, destImages, { recursive: true });
        console.log('✓ Copied images/ to dist/images/');
      }

      const srcSlides = path.resolve(__dirname, 'public/slides');
      const destSlides = path.resolve(__dirname, 'dist/slides');
      if (fs.existsSync(srcSlides)) {
        fs.mkdirSync(destSlides, { recursive: true });
        fs.cpSync(srcSlides, destSlides, { recursive: true });
        console.log('✓ Copied slides/ to dist/slides/');
      }

      const srcCourseware = path.resolve(__dirname, 'public/courseware');
      const destCourseware = path.resolve(__dirname, 'dist/courseware');
      if (fs.existsSync(srcCourseware)) {
        fs.mkdirSync(destCourseware, { recursive: true });
        fs.cpSync(srcCourseware, destCourseware, { recursive: true });
        console.log('✓ Copied courseware/ to dist/courseware/');
      }

      // Ensure .nojekyll for GitHub Pages
      fs.writeFileSync(path.resolve(__dirname, 'dist/.nojekyll'), '');
      console.log('✓ Created dist/.nojekyll for GitHub Pages');
    }
  };
}

export default defineConfig({
  plugins: [react(), copyAssetsPlugin()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
