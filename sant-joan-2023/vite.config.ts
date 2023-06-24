import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        md.use(/* ... */)
      },
    },
    /* options for other plugins */
    plugins:[
        UnoCSS(),
    ],
  },
})