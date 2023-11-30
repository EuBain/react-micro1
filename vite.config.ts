import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
// import presetAttributify from '@unocss/preset-attributify'
// import presetIcons from '@unocss/preset-icons'
// import presetUno from '@unocss/preset-uno'
import react from '@vitejs/plugin-react'
import path from 'path'
import {  presetAttributify, presetUno, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  // base:'https://www.tayrsi.cn/react-micro1/',
  //envDir:'env', //环境变量加载文件路径
  envPrefix:['BASE_','MR_'], //vite自定义环境变量默认识别VITE_前缀，在此修改，不能为''
  plugins: [
    unocss({
      presets: [
        presetUno(),
        presetAttributify({
            // 属性化前缀
            prefix: 'u-',
            // 强制使用前缀
            prefixedOnly: false,
            // 忽略的属性
            ignoreAttributes: [
              'text'
            ]
          }),
        presetIcons(),
       ]
    }),
    react()
  ],
  server: {
    port: 8889, //开发服务器端口
    open: true, //自动打开页面
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  }
})


