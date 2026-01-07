import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react({jsxRuntime: 'automatic'})],
  base: "/academia/",
  build: {
    outDir: 'docs'
  },
  define: {
    'process.env': {} // Evita erros de variáveis de ambiente não definidas
  }
})
