<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style lang="less">

#app {
  width: 100%;
  min-height: 100vh;

  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;



}

</style>
