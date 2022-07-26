<template>
  <div class="content">
    <div class="main">
      <div class="title">
        <h2>Vue UI组件库</h2>
        <p>
          Vue UI组件库是一套基于 Vue.js 的开源 UI
          组件库，内部含有一些精美实用的常用组件。
        </p>
      </div>
      <div class="row">
        <div v-for="(item, index) in mylist" :key="index">
          <router-link :to="item.to" :class="item.classname"
            >{{ item.name }}
          </router-link>
        </div>
        <div><span class="btn btn-github" @click="togithub"> GITHUB</span></div>
      </div>
    </div>

    <div id="aboutvui">
      <Aboutvui></Aboutvui>
    </div>
    
   
  </div>
</template>

<script>
import Aboutvui from '@/components/AboutVUI'
export default {
  components:{
    Aboutvui,
  },
  data() {
    return {
      mylist: [
        {
          to: "/components/start",
          name: "起步",
          classname: ["btn"],
        },
        {
          to: '/aboutvui#aboutvui',
          name: "关于VUI",
          classname: ["btn", "btn-outlined"],
          
        }
      ],
    };
  },
  methods:{
    togithub() {
      window.open("https://github.com/janice143/vui-components", "_blank");
    },
  }
};
</script>

<style scoped lang="less">
.content {
  width: 70%;
  margin: 0 auto;
  padding-top: 40px;

  .main {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // border: 1px solid red;
    text-align: center;
    .title {
      p {
        margin: 20px 0;
      }
    }
    .row {
      width: 100%;
      max-width: 600px;
      min-height: 180px;
      // border: 1px solid red;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
       @media screen and (max-width: 900px) {
      flex-direction: column;
      
      }
      .btn {
        display: inline-block;
        .pa(2em,1em);
        
        background: @primary-color;
        border-radius: 6px;
        color: white;
        font-weight: 900;
        cursor: pointer;
      }
      .btn-outlined {
        background: transparent;
        border: 1px solid @primary-color;
        color: @primary-color;
      }
      .btn-github {
        background: @icon-github;
      }
    }
  }
  #aboutvui{
    // height: 90vh;
    padding-top: 30px;
    // width:100%;
    // border:1px solid red;
  }

  
}
</style>