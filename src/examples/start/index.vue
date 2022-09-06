<template>
  <div class="container1">
    <h2>安装</h2>
    <div class="step">
      <h3>🎯 下载项目文件</h3>
      <p>npm install view-ui-components</p>
    </div>

    <div class="step">
      <h3>🎯 引入VUI组件</h3>

      <p>import viewUiComponents from 'view-ui-components' //引入库</p>
      <p>import 'view-ui-components/lib/vui.css' // 引入样式</p>
      <p>Vue.use(viewUiComponents)</p>
    </div>

    <div class="step">
      <h3>🎯 编译项目</h3>
      <p>npm run serve</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiprojectIndex",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.container1 {
  .step {
    .my(30px,30px);

    p {
      font-size: 14px;
      margin-top: 20px;
      font-family: Consolas;
      background: rgb(246, 248, 250);
      .pa(10px,20px);
      border-radius: 4px;
    }
  }
}
</style>
