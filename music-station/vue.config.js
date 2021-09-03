module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin 不需要一个一个导入
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
}