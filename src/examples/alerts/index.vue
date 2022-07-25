<template>
  <div>
    <h1>Alert 警告</h1>
    <p>用于页面中展示重要的提示信息。</p>
    <!--1基本使用'-->
    <showcomponent title="基础用法" subtitle="基础的按钮用法。" :codes="code1">
      <template v-slot:showarea>
        <vui-alert title="成功提示的文案" type="success"  class="my-2"> </vui-alert>
        <vui-alert title="消息提示的文案" type="info"  class="my-2"> </vui-alert>
        <vui-alert title="警告提示的文案" type="warning" class="my-2"> </vui-alert>
        <vui-alert title="错误提示的文案" type="error" class="my-2"></vui-alert>
      </template>

      <template v-slot:desc>
        Alert 组件提供四种主题，由<code>type</code>属性指定，默认值为<code>info</code>。
      </template>
    </showcomponent>

    <!-- 2 暗亮背景 -->
     <showcomponent title="主题" subtitle="提供两个不同主题：light 和 dark。" :codes="code2">
      <template v-slot:showarea>
        <vui-alert title="成功提示的文案" type="success"  class="my-2" effect="dark"> </vui-alert>
        <vui-alert title="消息提示的文案" type="info"  class="my-2" effect="dark"> </vui-alert>
        <vui-alert title="警告提示的文案" type="warning" class="my-2" effect="dark"> </vui-alert>
        <vui-alert title="错误提示的文案" type="error" class="my-2" effect="dark"></vui-alert>
      </template>

      <template v-slot:desc>
       通过设置<code>effect</code>属性来改变主题，默认为<code>light</code>。
      </template>
    </showcomponent>

    <!-- 3 自定义关闭按钮 -->
    <showcomponent title="自定义关闭按钮" subtitle="自定义关闭按钮为文字或其他符号。" :codes="code3">
      <template v-slot:showarea>
        <vui-alert title="不可关闭的 alert" type="success"  class="my-2" :closable="false"> </vui-alert>
        <vui-alert title="自定义 close-text" type="info"  class="my-2" close-text="知道了"> </vui-alert>
        <vui-alert title="设置了回调的 alert" type="warning" class="my-2" @close="hello"> </vui-alert>
      </template>

      <template v-slot:desc>
       在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。<code>closable</code>属性决定是否可关闭，接受<code>boolean</code>，默认为<code>true</code>。你可以设置<code>close-text</code>属性来代替右侧的关闭图标，注意：<code>close-text</code>必须为文本。设置<code>close</code>事件来设置关闭时的回调。
      </template>
    </showcomponent>

    <!-- 4 文字居中 -->
     <showcomponent title="文字居中" subtitle="使用 center 属性让文字水平居中。" :codes="code4">
      <template v-slot:showarea>
        <vui-alert title="成功提示的文案" type="success"  class="my-2" center> </vui-alert>
        <vui-alert title="消息提示的文案" type="info"  class="my-2" center> </vui-alert>
        <vui-alert title="警告提示的文案" type="warning" class="my-2" center> </vui-alert>
        <vui-alert title="错误提示的文案" type="error" class="my-2" center></vui-alert>
      </template>

      <template v-slot:desc>
       使用 <code>center</code> 属性让文字水平居中。
       </template>
    </showcomponent>

    <!-- 5 辅助性文字介绍 -->
    <showcomponent title="辅助性文字介绍" subtitle="包含标题和内容，解释更详细的警告。" :codes="code5">
      <template v-slot:showarea>
        <vui-alert title="带辅助性文字介绍" type="success"  class="my-2" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化"> </vui-alert>
      </template>

      <template v-slot:desc>
       除了必填的title属性外，你可以设置description属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。
       </template>
    </showcomponent>

    <!-- 6 带有Icon -->
    <showcomponent title="带有 icon 和辅助性文字介绍" subtitle="" :codes="code6">
      <template v-slot:showarea>
        <vui-alert show-icon title="带辅助性文字介绍" type="success"  class="my-2" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化"> </vui-alert>
        <vui-alert show-icon title="带辅助性文字介绍" type="info"  class="my-2" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化"> </vui-alert>
        <vui-alert show-icon title="带辅助性文字介绍" type="warning"  class="my-2" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化"> </vui-alert>
        <vui-alert show-icon title="带辅助性文字介绍" type="error"  class="my-2" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化"> </vui-alert>
      </template>

      <template v-slot:desc>
       最后，这是一个同时具有 icon 和辅助性文字的样例。
       </template>
    </showcomponent>

      <!-- <h2>Attribute</h2> -->
      <showparameter title="Attribute" :parameter="parameter"></showparameter>
  </div>
</template>

<script>

export default {
  name: "avatar",
  chName: "头像",
  components: {
  },
  data() {
    return {
      code1:` <template>
  <vui-alert title="成功提示的文案" type="success"  > </vui-alert>
  <vui-alert title="消息提示的文案" type="info"  > </vui-alert>
  <vui-alert title="警告提示的文案" type="warning" > </vui-alert>
  <vui-alert title="错误提示的文案" type="error" ></vui-alert>
</template>`,
      code2: `<template>
  <vui-alert title="成功提示的文案" type="success"   effect="dark"> </vui-alert>
  <vui-alert title="消息提示的文案" type="info"   effect="dark"> </vui-alert>
  <vui-alert title="警告提示的文案" type="warning"  effect="dark"> </vui-alert>
  <vui-alert title="错误提示的文案" type="error"  effect="dark"></vui-alert>
</template>`,
      code3: `<template>
  <vui-alert title="不可关闭的 alert" type="success"   :closable="false"> </vui-alert>
  <vui-alert title="自定义 close-text" type="info"   close-text="知道了"> </vui-alert>
  <vui-alert title="设置了回调的 alert" type="warning"  @close="hello"> </vui-alert>
</template>`,
      code4: `<template>
  <vui-alert title="成功提示的文案" type="success"   center> </vui-alert>
  <vui-alert title="消息提示的文案" type="info"   center> </vui-alert>
  <vui-alert title="警告提示的文案" type="warning"  center> </vui-alert>
  <vui-alert title="错误提示的文案" type="error"  center></vui-alert>
</template>`,
      code5: `<template>
  <vui-alert title="带辅助性文字介绍" type="success"   description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化"> </vui-alert>
</template>`,
      code6: `<template>
  <vui-alert show-icon title="带辅助性文字介绍" type="success"   description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化"> </vui-alert>
  <vui-alert show-icon title="带辅助性文字介绍" type="info"   description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化"> </vui-alert>
  <vui-alert show-icon title="带辅助性文字介绍" type="warning"   description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化"> </vui-alert>
  <vui-alert show-icon title="带辅助性文字介绍" type="error"   description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化"> </vui-alert>
</template>`,

      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["title", "标题", "string", "-", "-"],
          ["type", "类型", "string", "success/warning/info/error", "info"],
          ["description", "辅助型文字", "string", "-", "-"],
          ["closable", "是否可关闭", "boolean", "-", "true"],
          ["center", "文字是否居中", "boolean", "-", "false"],
          ["close-text", "关闭按钮自定义文本", "string", "-", "-"],
          ["show-icon", "是否显示图标", "boolean", "-", "false"],
          ["effect", "主题", "string", "light/dark", "light"],
          
        ],
      },
    };
  },
  methods:{
    hello(){
      alert('hello world!')
    }
  }
};
</script>

<style lang="less" scoped>
.my-2{
  margin-top:10px;
  margin-bottom:10px;
}
</style>
