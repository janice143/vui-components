<template>
  <div>
    <h1>DatePicer 日期选择器</h1>
    <p>用于选择一个日期</p>
    <!--1基本使用'-->
    <showcomponent title="基础用法" subtitle="基础的按钮用法。" :codes="code1">
      <template v-slot:showarea>
        <vui-datepicker placeholder="选择日期" v-model="value" />
      </template>

      <template v-slot:desc>
        <code>value / v-model</code>绑定选择的值
      </template>
    </showcomponent>

    <!-- <h2>Attribute</h2> -->
    <!-- <showparameter title="Attribute" :parameter="parameter"></showparameter> -->
  </div>
</template>

<script>
export default {
  name: "datepicker",
  chName: "日期选择器",
  components: {},
  data() {
    return {
      value: "",
      code1: ` <vui-datepicker placeholder='选择日期' v-model="value"/>`,

     
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.my-2 {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
