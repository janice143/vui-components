<template>
  <div class="wrap">
    <div class="about">
      <h2>为什么开发 Vue UI组件库？</h2>
      <p>
        VUE UI 组件库属于学校暑期训练营中自选的项目，由本人及团队协作开发完成。
        本组件库的原型是Element UI,
        即饿了么官方团队开发的一套非常成熟的网站快速成型工具。
        为了深刻理解前端开发中的组件化思想，本团队通过实际还原Element
        UI组件库，来提升自己对组件化开发的理解和动手能力，并从中体会到团队合作的乐趣。
      </p>
    </div>

    <div class="ideology">
      <h2>设计理念</h2>
      <div class="myico">
        <div>
          <span class="iconfont icon-xuexi"></span>
          <h4>学习</h4>
          <p>study</p>
        </div>
        <div>
          <span class="iconfont icon-idea__easyico"></span>
          <h4>创新</h4>
          <p>create</p>
        </div>
        <div>
          <span class="iconfont icon-hezuo"></span>
          <h4>合作</h4>
          <p>cooperation</p>
        </div>
        <div>
          <span class="iconfont icon-yizhixingtongjibiao"></span>
          <h4>一致</h4>
          <p>Consistency</p>
        </div>
      </div>
    </div>

    <div class="contributor">
      <h2>开发人员</h2>
      <div class="blocks">
        <div class="block">
          <div v-for="peo in team1" :key="peo.name" class="line">
            <vui-avatar :src="peo.imgsrc"></vui-avatar>&nbsp;&nbsp;
            <div>
              <p class="name">{{ peo.name }} ({{ peo.nickname }})</p>
              <p>{{ peo.task }}</p>
            </div>
          </div>
        </div>

        <div class="block">
          <div v-for="peo in team2" :key="peo.name" class="line">
            <vui-avatar :src="peo.imgsrc"></vui-avatar>&nbsp;&nbsp;
            <div>
              <p class="name">{{ peo.name }} ({{ peo.nickname }})</p>
              <p>{{ peo.task }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiprojectIndex",

  data() {
    return {
      team1: [
        {
          name: "兰燕平",
          nickname: "iaine",
          task: "总体页面搭建、设计、布局和部分组件开发，协调组员开发合作，进行代码提交合并。",
          imgsrc: "https://s6.jpg.cm/2022/07/14/P5PzNu.png",
        },
        {
          name: "张辰旺",
          nickname: "廿三",
          task: "负责项目文件结构与逻辑优化、色彩的搭配与全局引入、组件开发",
          imgsrc: "https://s6.jpg.cm/2022/07/25/P7rwxk.jpg",
        },
        {
          name: "章雨欣",
          nickname: "芝士玉米粒",
          task: "主页和是色彩页面开发，以及部分组件开发",
          imgsrc: "https://s6.jpg.cm/2022/07/25/P7rBEy.jpg",
        },
      ],
      team2: [
        {
          name: "章柳",
          nickname: "水天一色",
          task: "组件展示界面以及部分组件开发的工作",
          imgsrc: "https://s6.jpg.cm/2022/07/25/P7r46e.jpg",
        },
        {
          name: "张晓松",
          nickname: "韶华易换",
          task: "部分组件开发的工作",
          imgsrc: "https://s6.jpg.cm/2022/07/25/P7rhou.jpg",
        },
        {
          name: "胡杭锦",
          nickname: "Carly",
          task: "部分组件开发的工作",
          imgsrc: "https://s6.jpg.cm/2022/07/25/P7rjDG.jpg",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.wrap {
  text-align: center;

  & > * {
    // border:1px solid red;
    margin-bottom: 80px;
  }
  .about {
    p {
      margin: 20px 0;
    }
  }
  .ideology {
    // border:1px solid red;
    text-align: center;
    .myico {
      display: flex;
      justify-content: space-between;
      div {
        text-align: center;
      }
      p {
        color: #99a9bf;
        margin: 0;
      }
      span {
        display: block;
        margin: 20px 0 20px 0;
        font-size: 4rem;
        color: #21a8f3;
        transition: all 0.5s;
        &:hover {
          color: #65e0ff;
          transform: translate(0, -10%);
        }
      }
    }
  }
  .contributor {
    // border: 1px solid red;
    .blocks {
      margin-top: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: baseline;
         .block {
            width:100%;

          }

      }
      .block {
        // border: 1px solid red;
        flex-basis: 50%;

        .line {
          text-align: center;
          & > * {
            display: inline-block;
            vertical-align: top;
            margin-bottom: 20px;
          }

          div {
            width: 80%;
            text-align: left;
            .name {
              font-weight: 900;
            }
          }
        }
      }
    }
  }
}
</style>