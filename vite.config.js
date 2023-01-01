import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import requireTransform from 'vite-plugin-require-transform'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// const path = require('path');
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置支持require
    requireTransform.default({
       fileRegex:/.js$|.jsx$|.vue$/
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  server: {
    proxy: {
      '/api': { //用于转发以http://localhost:5173/api开头的所有请求
        target: 'https://xuexiluxian.cn/', //根路径替换项目根路径
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 对/api重写
      }
    }
  },
  define: {
    'process.env': {}
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})