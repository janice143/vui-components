<template>
  <div>
    <h1>Avatar 头像</h1>
    <p>用图标、图片或者字符的形式展示用户或事物信息。</p>

    <!--1 基本用法  -->
    <showcomponent
      title="基础用法"
      subtitle="头像的基础用法"
      :codes="code1"
    >
      <template v-slot:showarea>
        <vui-row class="vui-row" type="flex" align="middle" justify="space-between">
          <vui-avatar v-for="size in sizeList" :key="`${size}1`" :size="size"></vui-avatar>
          <span class="divider"></span>
          <vui-avatar v-for="size in sizeList" :key="`${size}2`" :size="size" shape="square"></vui-avatar>
        </vui-row>
      </template>
      <template v-slot:desc>
        使用<code>size</code>、<code>shape</code>属性定义 <code>Avatar </code>的大小形状。
      </template>
    </showcomponent>
    
    <!-- 2 展示类型 -->
    <showcomponent
      title="展示类型"
      subtitle="头像的展示类型"
      :codes="code2"
    >
      <template v-slot:showarea>
        <vui-row class="vui-row" type="flex" align="middle" justify="space-between">
          <vui-avatar v-for="size in sizeList" :key="`${size}3`" :size="size" icon="icon-avatartest"></vui-avatar>
          <span class="divider"></span>
          <vui-avatar v-for="size in sizeList" :key="`${size}4`" :size="size" shape="square" :src="imgsrc"></vui-avatar>
        </vui-row>
        
      </template>
      <template v-slot:desc>
        使用<code>icon</code>、<code>src</code>属性定义 Avatar 的展示类型。
      </template>
    </showcomponent>

    <!-- 图片适应容器框 -->
    <showcomponent
      title="图片如何适应容器框"
      subtitle="头像的适应容器"
      :codes="code3"
    >
      <template v-slot:showarea>
        <vui-row class="vui-row" type="flex" align="middle" justify="space-between">
          <vui-avatar v-for="fit in fits" :key="fit" :size="100" shape="square" :src="url" :fit="fit"></vui-avatar>
        </vui-row>
      </template>

      <template v-slot:desc>
        使用<code>fit</code>属性定义 Avatar
        如何适应容器，同原生object-fit一样。
      </template>
    </showcomponent>

    <h2>Attribute</h2>
    <showparameter :parameter="parameter"></showparameter>

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
      sizeList: [60, "large", "medium", "mini"],
      imgsrc:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      code1:`<template>
  <vui-row class="vui-row" type="flex" align="middle" justify="space-between">
    <vui-avatar v-for="size in sizeList" :key="size" :size="size"></vui-avatar>
    <span class="divider"></span>
    <vui-avatar v-for="size in sizeList" :key="size" :size="size" shape="square"></vui-avatar>
  </vui-row>
</template>`,     
      code2:`<template>
  <vui-row class="vui-row" type="flex" align="middle" justify="space-between">
    <vui-avatar v-for="size in sizeList" :key="size" :size="size" icon="icon-avatartest"></vui-avatar>
    <span class="divider"></span>
    <vui-avatar v-for="size in sizeList" :key="size" :size="size" shape="square" :src="imgsrc"></vui-avatar>
  </vui-row>
</template>`,
      code3: `<template>
  <vui-row class="vui-row" type="flex" align="middle" justify="space-between">
    <vui-avatar v-for="fit in fits" :key="fit" :size="100" shape="square" :src="url" :fit="fit"></vui-avatar>
  </vui-row>
</template>`,
        
      parameter: {
        title: ["参数", "说明", "类型", "可选值", "默认值"],
        contents: [
          ["icon", "设置头像的图标类型，参考 Icon 组件", "string", "", ""],
          [
            "size",
            "设置头像的大小",
            "number/string",
            "number/large/medium/mini",
            "large",
          ],
          ["src", "图片头像的资源地址", "string", "", ""],
          ["shape", "头像的形状", "string", "circle/square", "circle"],
          ["fit", "设置图片如何适应容器框", "string", "fill / contain / cover / none / scale-down", "cover"],
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>

</style>
