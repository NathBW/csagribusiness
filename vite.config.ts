import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//import { viteStaticCopy } from 'vite-plugin-static-copy'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
     //viteStaticCopy({
     // targets: [
     //   {
     //     src: 'src/assets/images/**/*', // Origen (todas las imágenes de esa ruta)
     //     dest: 'assets/images'          // Destino en el build final
     //   }
     // ]
    //})
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  
});
