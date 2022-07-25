<template>
  <div>
    <h1>Button 按钮</h1>
    <p>常用的操作按钮。</p>
    <!--1基本使用'-->
    <showcomponent title="基础用法" subtitle="基础的按钮用法。" :codes="code1">
      <template v-slot:showarea>
        <vui-row class="vui-row">
          <vui-btn>默认按钮</vui-btn>
          <vui-btn type="main">主要按钮</vui-btn>
          <vui-btn type="success">成功按钮</vui-btn>
          <vui-btn type="info">信息按钮</vui-btn>
          <vui-btn type="warning">警告按钮</vui-btn>
          <vui-btn type="error">危险按钮</vui-btn>
        </vui-row>

        <vui-row class="vui-row">
          <vui-btn plain>朴素按钮</vui-btn>
          <vui-btn type="main" plain>主要按钮</vui-btn>
          <vui-btn type="success" plain>成功按钮</vui-btn>
          <vui-btn type="info" plain>信息按钮</vui-btn>
          <vui-btn type="warning" plain>警告按钮</vui-btn>
          <vui-btn type="error" plain>危险按钮</vui-btn>
        </vui-row>

        <vui-row class="vui-row">
          <vui-btn round>圆角按钮</vui-btn>
          <vui-btn type="main" round>主要按钮</vui-btn>
          <vui-btn type="success" round>成功按钮</vui-btn>
          <vui-btn type="info" round>信息按钮</vui-btn>
          <vui-btn type="warning" round>警告按钮</vui-btn>
          <vui-btn type="error" round>危险按钮</vui-btn>
        </vui-row>

        <vui-row class="vui-row">
          <vui-btn icon="edit" circle></vui-btn>
          <vui-btn type="main" icon="collect" circle></vui-btn>
          <vui-btn type="success" icon="share" circle></vui-btn>
          <vui-btn type="info" icon="look" circle></vui-btn>
          <vui-btn type="warning" icon="correct" circle></vui-btn>
          <vui-btn type="error" icon="delete" circle></vui-btn>
        </vui-row>
      </template>

      <template v-slot:desc>
        使用<code>type</code>、<code>plain</code>、<code>round</code>、<code>circle</code>和<code>icon</code>属性来定义
        Button 的样式。
      </template>
    </showcomponent>

    <!-- 2禁用按钮 -->
    <showcomponent title="禁用状态" subtitle="按钮不可用状态。" :codes="code2">
      <template v-slot:showarea>
        <vui-row class="vui-row">
          <vui-btn disabled>默认按钮</vui-btn>
          <vui-btn type="main" disabled>主要按钮</vui-btn>
          <vui-btn type="success" disabled>成功按钮</vui-btn>
          <vui-btn type="info" disabled>信息按钮</vui-btn>
          <vui-btn type="warning" disabled>警告按钮</vui-btn>
          <vui-btn type="error" disabled>危险按钮</vui-btn>
        </vui-row>

        <vui-row class="vui-row">
          <vui-btn plain disabled>朴素按钮</vui-btn>
          <vui-btn type="main" plain disabled>主要按钮</vui-btn>
          <vui-btn type="success" plain disabled>成功按钮</vui-btn>
          <vui-btn type="info" plain disabled>信息按钮</vui-btn>
          <vui-btn type="warning" plain disabled>警告按钮</vui-btn>
          <vui-btn type="error" plain disabled>危险按钮</vui-btn>
        </vui-row>
      </template>

      <template v-slot:desc>
        你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。
      </template>
    </showcomponent>

    <!-- 3文字按钮 -->
    <showcomponent
      title="文字状态"
      subtitle="没有边框和背景色的按钮。"
      :codes="code3"
    >
      <template v-slot:showarea>
        <vui-row class="vui-row">
          <vui-btn type="text">文字按钮</vui-btn>
          <vui-btn type="text" disabled>文字禁用按钮</vui-btn>
        </vui-row>
      </template>

      <template v-slot:desc>
        将<code>type</code>属性设置为<code>text</code>。
      </template>
    </showcomponent>

    <!-- 4图标按钮 -->
    <showcomponent
      title="图标按钮"
      subtitle="带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。"
      :codes="code4"
    >
      <template v-slot:showarea>
        <vui-row class="vui-row">
          <vui-btn type="main" icon="edit"></vui-btn>
          <vui-btn type="main" icon="share"></vui-btn>
          <vui-btn type="main" icon="delete"></vui-btn>
          <vui-btn type="main" icon="search">搜索</vui-btn>
        </vui-row>
      </template>

      <template v-slot:desc> 设置<code>icon</code>属性即可。 </template>
    </showcomponent>

    <!-- 5加载中 -->
    <showcomponent
      title="加载中按钮"
      subtitle="在按钮上显示加载状态。"
      :codes="code5"
    >
      <template v-slot:showarea>
        <vui-row class="vui-row">
          <vui-btn type="main" loading></vui-btn>
        </vui-row>
      </template>

      <template v-slot:desc>
        要设置为
        <code>loading</code>
        状态，只要设置<code>loading</code>属性为<code>true</code>即可。
      </template>
    </showcomponent>

    <!-- 6不同尺寸 -->
    <showcomponent
      title="不同尺寸"
      subtitle="提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"
      :codes="code6"
    >
      <template v-slot:showarea>
        <vui-row class="vui-row">
          <vui-btn>默认按钮</vui-btn>
          <vui-btn size="medium">中等按钮</vui-btn>
          <vui-btn size="small">小型按钮</vui-btn>
          <vui-btn size="mini">超小按钮</vui-btn>
        </vui-row>

        <vui-row class="vui-row">
          <vui-btn round>默认按钮</vui-btn>
          <vui-btn size="medium" round>中等按钮</vui-btn>
          <vui-btn size="small" round>小型按钮</vui-btn>
          <vui-btn size="mini" round>超小按钮</vui-btn>
        </vui-row>
      </template>

      <template v-slot:desc>
        要设置为
        <code>loading</code>
        状态，只要设置<code>loading</code>属性为<code>true</code>即可。
      </template>
    </showcomponent>

    <showpara title="Attribute" :parameter="parameter"></showpara>
  </div>
</template>


<script>
import showcomponent from "../../components/showcomponent";
import showpara from "../../components/showparameter";
export default {
  name: "vui-button",
  chName: "按钮",
  components: {
    showcomponent,
    showpara,
  },
  data() {
    return {
      code1: `      <vui-row>
        <vui-btn>默认按钮</vui-btn>
        <vui-btn type="main">主要按钮</vui-btn>
        <vui-btn type="success">成功按钮</vui-btn>
        <vui-btn type="info">信息按钮</vui-btn>
        <vui-btn type="warning">警告按钮</vui-btn>
        <vui-btn type="error">危险按钮</vui-btn>
      </vui-row>

      <vui-row>
        <vui-btn plain>朴素按钮</vui-btn>
        <vui-btn type="main" plain>主要按钮</vui-btn>
        <vui-btn type="success" plain>成功按钮</vui-btn>
        <vui-btn type="info" plain>信息按钮</vui-btn>
        <vui-btn type="warning" plain>警告按钮</vui-btn>
        <vui-btn type="error" plain>危险按钮</vui-btn>
      </vui-row>

      <vui-row>
        <vui-btn round>圆角按钮</vui-btn>
        <vui-btn type="main" round>主要按钮</vui-btn>
        <vui-btn type="success" round>成功按钮</vui-btn>
        <vui-btn type="info" round>信息按钮</vui-btn>
        <vui-btn type="warning" round>警告按钮</vui-btn>
        <vui-btn type="error" round>危险按钮</vui-btn>
      </vui-row>

      <vui-row>
        <vui-btn icon="edit" circle></vui-btn>
        <vui-btn type="main" icon="collect" circle></vui-btn>
        <vui-btn type="success" icon="share" circle></vui-btn>
        <vui-btn type="info" icon="look" circle></vui-btn>
        <vui-btn type="warning" icon="correct" circle></vui-btn>
        <vui-btn type="error" icon="delete" circle></vui-btn>
      </vui-row>`,
      code2: `<template>
  <vui-row>
    <vui-btn disabled>默认按钮</vui-btn>
    <vui-btn type="main" disabled>主要按钮</vui-btn>
    <vui-btn type="success" disabled>成功按钮</vui-btn>
    <vui-btn type="info" disabled>信息按钮</vui-btn>
    <vui-btn type="warning" disabled>警告按钮</vui-btn>
    <vui-btn type="error" disabled>危险按钮</vui-btn>
  </vui-row>

  <vui-row>
    <vui-btn plain disabled>朴素按钮</vui-btn>
    <vui-btn type="main" plain disabled>主要按钮</vui-btn>
    <vui-btn type="success" plain disabled>成功按钮</vui-btn>
    <vui-btn type="info" plain disabled>信息按钮</vui-btn>
    <vui-btn type="warning" plain disabled>警告按钮</vui-btn>
    <vui-btn type="error" plain disabled>危险按钮</vui-btn>
  </vui-row>
</template>`,
      code3: ` <template>
  <vui-row>
    <vui-btn type="text">文字按钮</vui-btn>
    <vui-btn type="text" disabled>文字禁用按钮</vui-btn>
  </vui-row>
</template>`,
      code4: `<template>
  <vui-row>
    <vui-btn type="main" icon="edit"></vui-btn>
    <vui-btn type="main" icon="share"></vui-btn>
    <vui-btn type="main" icon="delete"></vui-btn>
    <vui-btn type="main" icon="search">搜索</vui-btn>
  </vui-row>
</template>`,
      code5: `<vui-row>
  <vui-btn type="main" loading></vui-btn>
</vui-row>`,
      code6: `<vui-row>
  <vui-btn>默认按钮</vui-btn>
  <vui-btn size="medium">中等按钮</vui-btn>
  <vui-btn size="small">小型按钮</vui-btn>
  <vui-btn size="mini">超小按钮</vui-btn>
</vui-row>

<vui-row>
  <vui-btn round>默认按钮</vui-btn>
  <vui-btn size="medium" round>中等按钮</vui-btn>
  <vui-btn size="small" round>小型按钮</vui-btn>
  <vui-btn size="mini" round>超小按钮</vui-btn>
</vui-row>`,
      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          [
            "type",
            "类型",
            "String",
            "default/main/success/info/warning/error/text ",
            "default",
          ],
          ["disabled", "禁用模式", "Boolean", "true/false", "false"],
          ["plain", "朴素样式", "Boolean", "true/false", "false"],
          ["round", "圆角样式", "Boolean", "true/false", "false"],
          ["circle", "圆形样式", "Boolean", "true/false", "false"],
          ["size", "大小", "String", "large/medium/small/mini", "large"],
          ["icon", "图标", "String", "edit/share/delete/...", ""],
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.vui-row > * {
  .ma(10px,10px);
}
</style>
