<template>
  <div class="tool-bar">
    <div class="tool-bar-title">
      <!-- <img src="@/assets/logo.png" alt=""> -->
      <h2>&nbsp;<span class="text--green">VUE</span>UI</h2>

      <span class="iconfont icon-hanbaoanniu" @click="showCompoMenu"></span>
    </div>
    <ul>
      <li v-for="(item, index) in mylist" :key="index">
        <router-link
          :to="item.to"
          active-class="is-active"
          :class="['base_link']"
          >{{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      mylist: [
        {
          to: "/home",
          name: "主页",
        },
        {
          to: "/components",
          name: "UI 组件",
        },

      ],
    };
  },
  methods: {
    showCompoMenu(){
      this.$bus.$emit('showMenu')
    },
    toggleMode() {
      if (this.mode === "light") {
        document.body.style.backgroundColor = "#272727";
        document.body.style.color = "white";
        this.mode = "dark";
      } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        this.mode = "light";
      }
    },

  },
};
</script>

<style scoped lang="less">
.tool-bar {
  //   border: 1px solid red;
  width: 90%;
  margin: 0 auto;
  height: 80px;
  line-height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .tool-bar-title {
    
    .iconfont {
      display: none;
    }
    color: @primary-color;
    .text--green {
      color: rgb(66, 184, 132);
    }
    cursor: pointer;
    h2 {
      display: inline-block;
    }
    @media screen and (max-width: 900px) {
      h2 {
        display: none;
      }
      .iconfont {
        display: inline-block;
        font-size: 28px;
        color:@primary-color;
      }
    }
  }
  ul {
    // margin-left: auto;
    display: flex;
    flex-direction: row;

    li {
      .base_link {
        color: @info-color;
        position: relative;
        display: block;

        &:hover {
          color: @info-color;
          //   border-bottom: 1px solid red;
          &:after {
            content: "";
            display: inline-block;
            position: absolute;
            bottom: 0;
            left: calc(50% - 24px);
            width: 50px;
            height: 1px;
            background: @info-color;
          }
        }
      }
      .is-active {
        color: @info-color;
        &::after {
          content: "";
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: calc(50% - 24px);
          width: 50px;
          height: 1px;
          background: @info-color;
        }
      }
    }
    & > * {
      .mx(30px,30px);
      @media screen and (max-width: 900px) {
      .mx(14px,14px);
    }

    }
  }
}
</style>
