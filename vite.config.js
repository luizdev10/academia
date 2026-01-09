import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react({jsxRuntime: 'automatic'}),
     tailwindcss()],
  base: "/academia/",
  build: {
    outDir: 'docs'
  },
  define: {
    'process.env': {} // Evita erros de variáveis de ambiente não definidas
  }
})
