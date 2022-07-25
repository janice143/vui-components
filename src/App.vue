<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <div
        class="nav-drawer nav-pos"
        :class="{ 'drawer-hide': hide }"
        @click="hide = !hide"
      >
        <Drawer></Drawer>
      </div>
    </div>
    
    <div @click="hide === false ? hide = true : ''">
      <router-view ></router-view>
    </div>
    
  </div>
</template>

<script>
import Header from "./components/Header";
import Drawer from "@/components/Drawer";
export default {
  name: "App",
  components: {
    Header,
    Drawer,
  },
  data() {
    return {
      hide: true,
    };
  },
  mounted() {
    this.$bus.$on("showMenu", this.showMenu);
  },
  beforeDestroy() {
    this.$bus.$off("showMenu", this.showMenu);
  },
  computed: {},
  methods: {
    showMenu() {
      // console.log("点击了");
      this.hide = !this.hide;
    },
  },
};
</script>

<style lang="less">
#app {
  width: 100%;
  min-height: 100vh;

  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .container {
    position: relative;
  }

  .drawer-hide {
    transform: translateX(-480px);
  }

  .nav-pos {
    // border: 1px solid red;
    position: absolute;
    box-shadow: 200px 0px #88888880;
    z-index: 999;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background: white;
    transition: transform 400ms, opacity 400ms;
  }

  .nav-drawer {
    overflow: scroll;
    height: calc(100vh - 80px);
    width: 240px;
    height: 90vh;
    border-right: solid 1px gainsboro;
  }
}
</style>
