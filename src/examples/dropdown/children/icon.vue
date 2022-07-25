<template>
  <div>
    <showcomponent title="图标使用" subtitle="下拉框的基础用法" :codes="mycode">
      <template v-slot:showarea>
        <div class="block_show_div">
          <vui-row>
            <h4>icon图标</h4>
            <vui-dropdown trigger="click">
              <vui-btn type="primary">下拉菜单</vui-btn>
              <vui-dropdown-menu slot="dropdown">
                <vui-dropdown-item icon="icon-chuangzaoli"
                  >食物</vui-dropdown-item
                >
                <vui-dropdown-item icon="icon-lights">购物</vui-dropdown-item>
                <vui-dropdown-item icon="icon-yingwen">生活</vui-dropdown-item>
              </vui-dropdown-menu>
            </vui-dropdown>
          </vui-row>
        </div>
      </template>

      <template v-slot:desc>
        <div>通过<code>icon</code>来设置每项的字体图标</div>
      </template>
    </showcomponent>
  </div>
</template>

<script>
import showcomponent from "../../../components/showcomponent";
export default {
  components: {
    showcomponent,
  },
  data() {
    return {
      mycode: ` <div class="block_show_div">
    <vui-row>
      <h4>icon图标</h4>
      <vui-dropdown trigger="click">
        <vui-btn type="primary">下拉菜单</vui-btn>
        <vui-dropdown-menu slot="dropdown">
          <vui-dropdown-item icon="icon-chuangzaoli">食物</vui-dropdown-item>
          <vui-dropdown-item icon="icon-lights">购物</vui-dropdown-item>
          <vui-dropdown-item icon="icon-yingwen">生活</vui-dropdown-item>
        </vui-dropdown-menu>
      </vui-dropdown>
</vui-row>
  </div>`,
    };
  },
};
</script>

<style></style>
