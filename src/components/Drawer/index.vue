<template>
  <div class="LeftBlock">
    <vuescroll>
      <ul>
        <h3>开发指南</h3>
        <li>
          <router-link
            to="/components/Start"
            tag="li"
            active-class="ct-aside-active"
            >Start 起步</router-link
          >
        </li>
      </ul>
      <ul>
        <h3>基础组件</h3>
        <li v-for="(item, index) in basicNav" :key="index">
          <router-link
            :to="'/components/' + item.eName"
            tag="li"
            active-class="ct-aside-active"
            >{{ `${item.eName} ${item.name}` }}</router-link
          >
        </li>
      </ul>

       <ul>
        <h3>展示组件</h3>
        <li v-for="(item, index) in showNav" :key="index">
          <router-link
            :to="'/components/' + item.eName"
            tag="li"
            active-class="ct-aside-active"
            >{{ `${item.eName} ${item.name}` }}</router-link
          >
        </li>
      </ul>

       <ul>
        <h3>反馈组件</h3>
        <li v-for="(item, index) in feedbackNav" :key="index">
          <router-link
            :to="'/components/' + item.eName"
            tag="li"
            active-class="ct-aside-active"
            >{{ `${item.eName} ${item.name}` }}</router-link
          >
        </li>
      </ul>
    </vuescroll>
  </div>
</template>

<script>
import vuescroll from "vuescroll";

export default {
  components: {
    vuescroll,
  },
  data() {
    return {
      basicNav: require("./basic.json"),
      showNav: require("./show.json"),
      feedbackNav: require("./feedback.json"),
    };
  },
};
</script>

<style scoped lang="less">
.ct-aside-active {
  color: @primary-color;
}
ul {
  width: 100%;
  margin: 10px auto;
  cursor: pointer;
}
ul li {
  height: 40px;
  line-height: 40px;
}
ul li + li {
  margin-top: 4px;
}
ul li:hover {
  background-color: #f4f7f8;
}
ul li > li {
  padding-left: 50px;
}
ul h3 {
  height: 40px;
  line-height: 40px;
  padding-left: 50px;
}
@media screen and (max-width: 900px) {
}
</style>
