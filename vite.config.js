// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       remotes: {
  
//         music_library: 'http://localhost:3000/assets/remoteEntry.js',
//       },
//       shared: ['react', 'react-dom'],
//     }),
//   ],
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        // Replace with your actual deployed URL on Netlify when you're ready
        music_library: 'https://thunderous-faloodeh-2a1a16.netlify.app//assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',        
    minify: false,           
    cssCodeSplit: false     
  },
});
