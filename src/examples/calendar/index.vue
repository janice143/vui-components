<template>
  <div>
    <h1>Calendar 日历</h1>
    <p>按照日历形式展示数据的容器。</p>
    <!--1基本使用'-->
    <showcomponent title="基础用法" subtitle="基础的按钮用法。" :codes="code1">
      <template v-slot:showarea>
        <vui-calendar>
          <template v-slot="{date, data}">
            <p v-if="data.day === '2019-10-31'" style="color:green">生日</p>
            <p v-if="date === 15" style="color:red">月中旬</p>
          </template>
        </vui-calendar>
      </template>

      <template v-slot:desc>       
       <code>value / v-model</code> 选择日历的日期，如果不设置，默认显示当前日期
      </template>
    </showcomponent>

    

      <!-- <h2>Attribute</h2> -->
      <showparameter title="Attribute" :parameter="parameter"></showparameter>
  </div>
</template>

<script>

export default {
  name: "calendar",
  chName: "日历",
  components: {
  },
  data() {
    return {
      code1:` <vui-calendar>
          <template v-slot="{date, data}">
            <p v-if="data.day === '2019-10-31'" style="color:green">生日</p>
            <p v-if="date === 15" style="color:red">月中旬</p>
          </template>
        </vui-calendar>`,

      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["value / v-model", "绑定值", "string", "-", "-"],
          ["date", "单元格代表的日期类型", "string", "-", "-"],
          ["data", "day日期, holiday节日, lunar农历 ,week所属的星期", "object", "-", "-"],
        ],
      },
    };
  },
  methods:{
  }
};
</script>

<style lang="less" scoped>
.my-2{
  margin-top:10px;
  margin-bottom:10px;
}
</style>
