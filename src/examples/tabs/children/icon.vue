<template>
  <showcomponent
    title="带图标的"
    subtitle="带有自定义图标的标签页"
    :attributes="['value, label, name, disabled, icon, type']"
    ctname="Tabs"
    :codes="code3"
  >
    <template #showarea>
      <h4>带图标且图标位置可选的</h4>
      <vui-tabs type="card" @tabClick="handleClick">
        <vui-tab-panel label="左侧" name="left">
          <vui-tabs class="ct-demo-box">
            <vui-tab-panel icon="iconfontapple-l" label="macOs" name="one"
              >标签一的内容</vui-tab-panel
            >
            <vui-tab-panel icon="windows-fill-l" label="Windows" name="tow"
              >标签二的内容</vui-tab-panel
            >
            <vui-tab-panel icon="linux-l" label="Linux" name="three"
              >标签三的内容</vui-tab-panel
            >
          </vui-tabs>
        </vui-tab-panel>
        <vui-tab-panel label="上方" name="top">
          <vui-tabs class="ct-demo-box">
            <vui-tab-panel icon="iconfontapple-t" label="macOs" name="one"
              >标签一的内容</vui-tab-panel
            >
            <vui-tab-panel icon="windows-fill-t" label="Windows" name="tow"
              >标签二的内容</vui-tab-panel
            >
            <vui-tab-panel icon="linux-t" label="Linux" name="three"
              >标签三的内容</vui-tab-panel
            >
          </vui-tabs>
        </vui-tab-panel>
        <vui-tab-panel label="右侧" name="right">
          <vui-tabs class="ct-demo-box">
            <vui-tab-panel icon="iconfontapple-r" label="macOs" name="one"
              >标签一的内容</vui-tab-panel
            >
            <vui-tab-panel icon="windows-fill-r" label="Windows" name="tow"
              >标签二的内容</vui-tab-panel
            >
            <vui-tab-panel icon="linux-r" label="Linux" name="three"
              >标签三的内容</vui-tab-panel
            >
          </vui-tabs>
        </vui-tab-panel>
        <vui-tab-panel label="下方" name="bottom">
          <vui-tabs class="ct-demo-box">
            <vui-tab-panel icon="iconfontapple-b" label="macOs" name="one"
              >标签一的内容</vui-tab-panel
            >
            <vui-tab-panel icon="windows-fill-b" label="Windows" name="tow"
              >标签二的内容</vui-tab-panel
            >
            <vui-tab-panel icon="linux-b" label="Linux" name="three"
              >标签三的内容</vui-tab-panel
            >
          </vui-tabs>
        </vui-tab-panel>
      </vui-tabs>
    </template>
    <template #desc>
      <div>
        <code>icon</code>属性用于设置图标，最后一个" -
        "分隔的两部分前面的是图标名，后面的是图标位置。默认是在左面，即" l
        "，t、r、b分别表示上面、右面、下面。
      </div>
    </template>
  </showcomponent>
</template>

<script>
import showcomponent from "../../../components/showcomponent";

export default {
  components: {
    showcomponent,
  },
  data() {
    return {
      code3: `  <vui-tabs>
    <vui-tab-panel icon="iconfontapple-l" label="macOs" name="one">标签一的内容</vui-tab-panel>
    <vui-tab-panel icon="windows-fill-l" label="Windows" name="tow">标签二的内容</vui-tab-panel>
    <vui-tab-panel icon="linux-l" label="Linux" name="three">标签三的内容</vui-tab-panel>
  </vui-tabs>
        `,
    };
  },
  methods: {
    handleClick(data) {
      this.iconPosition = data.tab.name[0];
      this.code3 = ` <vui-tabs>
    <vui-tab-panel icon="iconfontapple-${this.iconPosition}" label="macOs" name="one">标签一的内容</vui-tab-panel>
    <vui-tab-panel icon="windows-fill-${this.iconPosition}" label="Windows" name="tow">标签二的内容</vui-tab-panel>
    <vui-tab-panel icon="linux-${this.iconPosition}" label="Linux" name="three">标签三的内容</vui-tab-panel>
  </vui-tabs>
        `;
    },
  },
};
</script>

<style scoped>
.ct-demo-box {
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 2rem;
}
</style>

<style lang="less" scoped>
h4 {
  color: #8492a6;
  text-indent: 1rem;
  margin-bottom: 2rem;
}
</style>
