<template>
  <div>
    <h1>badge 标记</h1>
    <p>出现在按钮、图标旁的数字或状态标记。</p>
    <showcomponent title="基础用法" subtitle="展示新消息数量。" :codes="code1">
      <template v-slot:showarea>
        <vui-row type="flex" align="middle" justify="space-around">
          <vui-badge :value="99">
            <vui-btn size="small">评论</vui-btn>
          </vui-badge>
          <vui-badge :value="1" type="success">
            <vui-btn size="small">回复</vui-btn>
          </vui-badge>
          <vui-badge :value="2" type="primary">
            <vui-btn size="small">评论</vui-btn>
          </vui-badge>
          <vui-badge :value="3" type="warning">
            <vui-btn size="small">回复</vui-btn>
          </vui-badge>
        </vui-row>
      </template>
      <template v-slot:desc>
        <div>
          定义<code>value</code>属性，它接受<code>Number</code>或者<code>String</code>。
        </div>
      </template>
    </showcomponent>

    <showcomponent title="最大值" subtitle="可自定义最大值。" :codes="code2">
      <template v-slot:showarea>
        <vui-row type="flex" align="middle" justify="space-around">
          <vui-badge :value="100" :max="99">
            <vui-btn size="small">评论</vui-btn>
          </vui-badge>
          <vui-badge :value="11" type="success" :max="10">
            <vui-btn size="small">回复</vui-btn>
          </vui-badge>
        </vui-row>
      </template>
      <template v-slot:desc>
         <div>
            由<code>max</code>属性定义，它接受一个<code>Number</code>，需要注意的是，只有当<code>value</code>为<code>Number</code>时，它才会生效。
        </div>
      </template>
    </showcomponent>

    <showcomponent title="自定义内容" subtitle="可以显示数字以外的文本内容。" :codes="code3">
      <template v-slot:showarea>
        <vui-row type="flex" align="middle" justify="space-around">
          <vui-badge value="new">
            <vui-btn size="small">评论</vui-btn>
          </vui-badge>
          <vui-badge value="hot">
            <vui-btn size="small">回复</vui-btn>
          </vui-badge>
        </vui-row>
      </template>
      <template v-slot:desc>
         <div>
            定义<code>value</code>为<code>String</code>类型是时可以用于显示自定义文本。
        </div>
      </template>
    </showcomponent>

    <showcomponent title="小红点" subtitle="以红点的形式标注需要关注的内容。" :codes="code4">
      <template v-slot:showarea>
        <vui-row type="flex" align="middle" justify="space-around">
          <vui-badge is-dot>
                <a href="#">一个连接</a>
           </vui-badge>
           <vui-badge is-dot>
                <vui-btn size="small" class="iconfont icon-lights"></vui-btn>
           </vui-badge>
        </vui-row>
      </template>
      <template v-slot:desc>
         <div>
            除了数字外，设置<code>is-dot</code>属性，它接受一个<code>Boolean</code>。
        </div>
      </template>
    </showcomponent>

     <showparameter title="Attributes" :parameter="parameter"></showparameter>
  
  </div>
</template>

<script>
export default {
  name: "badge",
  chName: "标记",
  data() {
    return {
      code1: `<template v-slot:showarea>
        <vui-row type="flex" align="middle" justify="space-around">
          <vui-badge :value="99">
            <vui-btn size="small">评论</vui-btn>
          </vui-badge>
          <vui-badge :value="1" type="success">
            <vui-btn size="small">回复</vui-btn>
          </vui-badge>
          <vui-badge :value="2" type="primary">
            <vui-btn size="small">评论</vui-btn>
          </vui-badge>
          <vui-badge :value="3" type="warning">
            <vui-btn size="small">回复</vui-btn>
          </vui-badge>
        </vui-row>
      </template>`,
      code2: `<template v-slot:showarea>
  <vui-row type="flex" align="middle" justify="space-around">
    <vui-badge :value="100" :max="99">
      <vui-btn size="small">评论</vui-btn>
    </vui-badge>
    <vui-badge :value="11" type="success" :max="10">
      <vui-btn size="small">回复</vui-btn>
    </vui-badge>
  </vui-row>
</template>`,
      code3: `<template>
  <vui-row type="flex" align="middle" justify="space-around">
    <vui-badge value="new">
      <vui-btn size="small">评论</vui-btn>
    </vui-badge>
    <vui-badge value="hot">
      <vui-btn size="small">回复</vui-btn>
    </vui-badge>
  </vui-row>
</template>`,
      code4: `<template>
  <vui-row type="flex" align="middle" justify="space-around">
    <vui-badge is-dot>
          <a href="#">一个连接</a>
      </vui-badge>
      <vui-badge is-dot>
          <vui-btn size="small" class="iconfont icon-lights"></vui-btn>
      </vui-badge>
  </vui-row>
</template>`,
      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["value", "显示值", "String,Number", "—", "—"],
          [
            "max",
            "最大值，超过最大值会显示 {max}+，要求 value 是 Number 类型",
            "Number",
            "—",
            "—",
          ],
          ["is-dot", "小圆点", "Boolean", "—", "false"],
          ["hidden", "隐藏 badge", "Boolean", "—", "false"],
          [
            "type",
            "类型",
            "String",
            "primary / success / warning / danger / info	",
            "—",
          ],
        ],
      },
    };
  },
};
</script>

<style>

</style>