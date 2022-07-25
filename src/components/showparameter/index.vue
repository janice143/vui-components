<template>
  <div class="content">
    <h1 v-if="title">{{ title }}</h1>
    <table>
      <thead>
        <tr>
          <td v-for="(item, index) in parameter.title" v-bind:key="index">
            {{ item }}
          </td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(content, index) in parameter.contents" :key="index">
          <td v-for="(item, index) in content" :key="index">{{ item }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "showparameter",
  props: {
    parameter: Object,
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="less">
.content {
  padding-top: 30px;
}
table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}
thead td {
  color: #909399;
}
tr {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #dcdfe6;
}
td {
  // border:1px solid red;
  color: #606266;
  font-size: 14px;
  font-weight: 400;

  text-align: center;
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap; //溢出不换行
}
</style>
