import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        // Replace the URL with the actual one if deployed or being served
        music_library: 'http://localhost:3000/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
