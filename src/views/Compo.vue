<template>
  <div class="container">
    <div class="nav-drawer is-bg-show">
      <Drawer></Drawer>
    </div>

    <div class="nav-drawer nav-pos" :class="{ 'drawer-hide': hide }" @click="hide =! hide">
      <Drawer></Drawer>
    </div>

    <div class="main" ref="main">
      <transition :name="transitionName">
        <router-view> </router-view>
      </transition>

      <BacktoTop parent="main"></BacktoTop>
    </div>
  </div>
</template>

<script>
import Drawer from "../components/Drawer";
import BacktoTop from "../components/BacktoTop";

export default {
  components: {
    Drawer,
    BacktoTop
  },
  data() {
    return {
      hide: true,
      transitionName: "",
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        console.log(1);
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
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
      // 去掉hidden属性
      // console.log(this.$refs.drawer.classList.remove('hidden'))
    },
  },
};
</script>

<style scoped lang="less">
.drawer-hide {
  transform: translateX(-480px);
}

.nav-pos {
  position: absolute;
  box-shadow: 200px 0px #88888880;
  z-index: 999;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background: white;
  transition: transform 400ms, opacity 400ms;
}

.container {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  margin-bottom: 100px;
}

.nav-drawer {
  overflow: scroll;
  height: calc(100vh - 80px);
  width: 240px;
  height: 90vh;
  border-right: solid 1px gainsboro;
}
.main {
  // border: 1px solid red;
  // padding: 40px 20px 60px 40px;
   // border: 1px solid red;
  .mx(40px,40px);
 
  flex: 1;
  overflow: auto;
  height: calc(100vh - 80px);
}

.showsmlicon {
  display: none;
}

/**动画 */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
}
.slide-right-enter {
  opacity: 0;
}
.slide-right-leave-active {
  opacity: 0;
}
.slide-left-enter {
  opacity: 0;
}
.slide-left-leave-active {
  opacity: 0;
}

@media screen and (max-width: 900px) {
  .is-bg-show {
    display: none !important;
  }
}
</style>
