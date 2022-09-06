const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");


// const buildConfig = require("./config.build");

// module.exports = buildConfig;
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭ESLINT校验工具
  lintOnSave: false,

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/style/common/mixin.less")],
    },
  },
  // chainWebpack: (config) => {
  //   config
  //     .plugin("webpack-bundle-analyzer")
  //     .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
  // },
  configureWebpack: {
    // 开启分离 js
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
    plugins: [new CompressionPlugin()],
  },
  // 强制内联
  // css: { extract: false }
});
