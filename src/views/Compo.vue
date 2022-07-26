<template>
  <div class="container">
    <div class="nav-drawer is-bg-show">
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
import BacktoTop from "../components/BacktoTop";
import Drawer from "@/components/Drawer";
export default {
  components: {
    BacktoTop,
    Drawer
  },
  data() {
    return {
      // hide: true,
      transitionName: "",
    };
  },
  computed: {},
  methods: {
  },
};
</script>

<style scoped lang="less">

.container {
  // position: relative;
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
