<template>
  <div>
    <showcomponent title="禁用" subtitle="选项的禁用" :codes="mycode">
      <template v-slot:showarea>
        <div class="block_show_div">
          <vui-row>
            <h4>禁用状态</h4>
            <vui-dropdown hide-on-show>
              <vui-btn type="primary">禁用</vui-btn>
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
        <div>通过<code>disabled</code>来禁用这个选项</div>
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
      mycode: `  <div class="block_show_div">
    <vui-row>
      <h4>禁用状态</h4>
      <vui-dropdown hide-on-show>
      <vui-btn type="primary">禁用</vui-btn>
        <vui-dropdown-menu slot="dropdown">
          <vui-dropdown-item icon="icon-chuangzaoli">食物</vui-dropdown-item>
          <vui-dropdown-item icon="icon-lights" disabled>购物</vui-dropdown-item>
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
