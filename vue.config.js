const { defineConfig } = require('@vue/cli-service');
const ElementPlus = require('unplugin-element-plus/webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ElementPlus({
        useSource: true // 启用按需导入样式
      })
    ]
  }
});