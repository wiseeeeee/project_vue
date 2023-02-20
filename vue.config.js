const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/variables.scss";
          @import "@/assets/sass/mixins.scss";
        `
      }
    }
  }
});
