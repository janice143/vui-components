<template>
  <div>
    <h1>Link 链接</h1>
    <p>不同形式的链接</p>
    <showcomponent
      title="基础用法"
      subtitle="基础的文字链接用法。"
      :attributes="['type，size']"
      ctname="Link"
      :codes="code1"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="link_col">
            <vui-link href="#" target="_blank"
              >默认链接</vui-link
            >
            <vui-link type="primary">主要链接</vui-link>
            <vui-link type="success">成功链接 </vui-link>
            <vui-link type="warning">警告链接 </vui-link>
            <vui-link type="danger">危险链接 </vui-link>
            <vui-link type="info">信息链接 </vui-link>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        设置<code>type</code>属性定义 Link 的展示类型。
      </template>
    </showcomponent>

    <showcomponent
      title="禁用状态"
      subtitle="文字链接不可用状态。"
      :codes="code2"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="link_col">
            <vui-link disabled :underline="false">默认链接</vui-link>
            <vui-link type="primary" disabled :underline="false"
              >主要链接</vui-link
            >
            <vui-link type="success" disabled :underline="false"
              >成功链接</vui-link
            >
            <vui-link type="warning" disabled :underline="false"
              >警告链接</vui-link
            >
            <vui-link type="danger" disabled :underline="false"
              >危险链接</vui-link
            >
            <vui-link type="info" disabled :underline="false">信息链接</vui-link>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        设置<code>disabled</code>、<code>underline</code>属性定义 Link
        的禁用状态。
      </template>
    </showcomponent>
    
    <showcomponent
      title="下划线"
      subtitle="文字链接下划线"
      :codes="code3"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="link_col">
            <vui-link :underline="false">无下划线</vui-link>
            <vui-link>有下划线</vui-link>
          </div>
        </div>
      </template>
      <template v-slot:desc>
        设置<code>underline</code>属性定义 Link 有无下划线状态。
      </template>
    </showcomponent>
    
    <showcomponent
      title="图标"
      subtitle="带图标的文字链接可增强辨识度"
      :attributes="['type']"
      ctname="Link"
      :codes="code4"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <div class="link_col">
            <vui-link icon="iconfont icon-bianji1">编辑</vui-link>
            <vui-link
              >查看<i class="iconfont icon-check-line el-icon--right"></i
            ></vui-link>
          </div>
        </div>
      </template>
    </showcomponent>
    <h2 style="margin: 55px 0 20px; font-size: 22px">Attributes</h2>
    <showparameter :parameter="parameter"></showparameter>
  </div>
</template>

<script>
export default {
  name: "v-link",
  chName: "链接",

  data() {
    return {
      code1: `<vui-link href="#" target="_blank"
  >默认链接</vui-link
>
<vui-link type="primary">主要链接</vui-link>
<vui-link type="success">成功链接 </vui-link>
<vui-link type="warning">警告链接 </vui-link>
<vui-link type="danger">危险链接 </vui-link>
<vui-link type="info">信息链接 </vui-link>`,
      code2: `<vui-link disabled :underline="false">默认链接</vui-link>
<vui-link type="primary" disabled :underline="false"
  >主要链接</vui-link
>
<vui-link type="success" disabled :underline="false"
  >成功链接</vui-link
>
<vui-link type="warning" disabled :underline="false"
  >警告链接</vui-link
>
<vui-link type="danger" disabled :underline="false"
  >危险链接</vui-link
>
<vui-link type="info" disabled :underline="false">信息链接</vui-link>`,
      code3: ` <vui-link :underline="false">无下划线</vui-link>
<vui-link>有下划线</vui-link>`,
      code4: `<vui-link icon="iconfont icon-bianji1">编辑</vui-link>
<vui-link
  >查看<i class="iconfont icon-check-line el-icon--right"></i
></vui-link>`,
      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          [
            "type",
            "类型",
            "string",
            "primary/success/warning/danger/info",
            "default",
          ],
          ["underline", "是否下划线","boolean","-","true"],
          ["disabled", "是否禁用","boolean","-","false"],
          ["href", "原生href属性","string","-","-"],
          ["icon", "图标类名","string","-","-"],
         
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.flex_col {
  height: 80px;
  color: #8492a6;
}
.link_col {
  display: flex;
  flex-direction: row;
}
</style>
