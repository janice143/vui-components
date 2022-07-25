<template>
  <div class="LeftBlock">
    <vuescroll>
      <ul>
        <li v-for="(item, index) in sideNav" :key="index">
          <router-link
            :to="'/components/' + item.eName"
            tag="li"
            active-class="ct-aside-active"
            >{{ `${item.eName} ${item.name}` }}</router-link>
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
      sideNav: require("./navDrawerList.json"),
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

@media screen and (max-width: 900px) {
}
</style>
