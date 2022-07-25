<template>
  <div>
    <showcomponent
      title="菜单隐藏方式"
      subtitle="hide-no-show"
      ctname="btn"
      :codes="mycode"
    >
      <template v-slot:showarea>
        <div class="block_show_div">
          <vui-row>
            <h4>hover效果</h4>
            <vui-dropdown hide-no-show>
              <vui-btn type="primary">隐藏效果</vui-btn>
              <vui-dropdown-menu slot="dropdown">
                <vui-dropdown-item icon="icon-chuangzaoli"
                  >食物</vui-dropdown-item
                >
                <vui-dropdown-item icon="icon-lights" disabled
                  >购物</vui-dropdown-item
                >
                <vui-dropdown-item icon="icon-yingwen">生活</vui-dropdown-item>
              </vui-dropdown-menu>
            </vui-dropdown>
          </vui-row>

          <vui-row>
            <h4>click效果</h4>
            <vui-dropdown hide-no-show trigger="click">
              <vui-btn type="primary">隐藏效果</vui-btn>
              <vui-dropdown-menu slot="dropdown">
                <vui-dropdown-item icon="icon-chuangzaoli"
                  >食物</vui-dropdown-item
                >
                <vui-dropdown-item icon="icon-lights" disabled
                  >购物</vui-dropdown-item
                >
                <vui-dropdown-item icon="icon-yingwen">生活</vui-dropdown-item>
              </vui-dropdown-menu>
            </vui-dropdown>
          </vui-row>
        </div>
      </template>
      <template v-slot:desc>
        <div>通过传入<code>hide-no-show</code>属性来修改默认点击消失</div>
      </template>
    </showcomponent>
  </div>
</template>

<script>
export default {

  data() {
    return {
      mycode: `
<div class="block_show_div">
  <vui-row>
  <h4>hover效果</h4>
  <vui-dropdown hide-no-show>
    <vui-btn type="primary">隐藏效果</vui-btn>
    <vui-dropdown-menu slot="dropdown">
    <vui-dropdown-item icon="icon-chuangzaoli">食物</vui-dropdown-item>
    <vui-dropdown-item icon="icon-lights" disabled>购物</vui-dropdown-item>
    <vui-dropdown-item icon="icon-yingwen">生活</vui-dropdown-item>
    </vui-dropdown-menu>
  </vui-dropdown>
</vui-row>

<vui-row>
  <h4>click效果</h4>
  <vui-dropdown hide-no-show trigger="click">
    <vui-btn type="primary">隐藏效果</vui-btn>
      <vui-dropdown-menu slot="dropdown">
      <vui-dropdown-item icon="icon-chuangzaoli">食物</vui-dropdown-item>
      <vui-dropdown-item icon="icon-lights" disabled>购物</vui-dropdown-item>
      <vui-dropdown-item icon="icon-yingwen">生活</vui-dropdown-item>
      </vui-dropdown-menu>
    </vui-dropdown>
</vui-row>
      `,
    };
  },
};
</script>

<style></style>
