<template>
  <transition name="alert-fade">
    <div
      v-if="visible"
      class="alert"
      :class="[`alert--${type}`, `alert--${effect}`]"
    >
      <i v-if="showIcon" :class="`iconfont icon-${type} `"></i>
      <div :class="[{ 'is-center': center }, 'text' ]">
        <span class="alert-title">{{ title }}</span>
        <span class="alert-description">{{ description }}</span>
      </div>
      
      <span v-if="closable" class="alert-close" @click="handleClick">{{
        closeText
      }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "vui-alert",
  data() {
    return {
      visible: false,
    };
  },
  //对props进行校验，值接收string类型的type的值
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      //设置默认值：如果不传值，那么使用default
      default: "info",
    },
    description: {
      type: String,
      default: "",
    },
    closable: {
      type: Boolean,
      default: true,
    },
    center: {
      type: Boolean,
      default: false,
    },
    closeText: {
      type: String,
      default: "×",
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    effect: {
      type: String,
      default: "light",
    },
  },

  computed: {},
  methods: {
    // 父组件执行完自定义函数后，会返回子组件
    async handleClick(evt) {
    const res = await this.$emit('close', evt);
    // console.log(res)
    if(res){
        this.visible = false;
        this.$el.parentNode.removeChild(this.$el); // 从DOM里将这个组件移除
        this.$destroy(true);
    }
 
    
    },
  },
  mounted() {
    this.visible = true;
  },
};
</script>

<style lang="less">
@import "./style.less";
</style>