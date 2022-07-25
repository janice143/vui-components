<template>
  <div>
    <h1>Skeleton 骨架屏</h1>
    <p>用于在加载实际页面数据之前显示内容的占位符预览。</p>
     <Showcomponent title="基础用法" subtitle="基础的骨架效果" :codes="code1">
      <template v-slot:desc>
        <div>
           默认为类型为text,宽度默认会充满父盒子
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <vui-skeleton></vui-skeleton>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="动画效果" subtitle="显示动画效果" :codes="code2">
      <template v-slot:desc>
        <div>
           通过<code>animated</code>属性来定义是否显示动画效果
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <vui-skeleton animated></vui-skeleton>
            <vui-skeleton animated></vui-skeleton>
            <vui-skeleton animated></vui-skeleton>
            <vui-skeleton animated></vui-skeleton>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="预定义类型" subtitle="包含一些基本类型" :codes="code3">
      <template v-slot:desc>
        <div>
            Skeleton 组件准备了六种基本类型：<code>text</code>、<code>circle</code>、<code>btn</code>、<code>badge</code>、<code>chip</code> 。通过<code>type</code>字段来设置，除此以外的值将被忽略。
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <div><p>"text"</p><vui-skeleton type="text"></vui-skeleton></div>
            <div><p>"circle"</p><vui-skeleton type="circle"></vui-skeleton></div>
            <div><p>"rect"</p><vui-skeleton type="rect"></vui-skeleton></div>
            <div><p>"btn"</p><vui-skeleton type="btn"></vui-skeleton></div>
            <div><p>"badge"</p><vui-skeleton type="badge"></vui-skeleton></div>
            <div><p>"chip"</p><vui-skeleton type="chip"></vui-skeleton></div>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="大小" subtitle="定义元素大小" :codes="code4">
      <template v-slot:desc>
        <div>
           通过<code>size</code>、<code>height</code>、<code>width</code>属性来设置Skeleton 组件的大小
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <div style="display:flex;margin-bottom:10px">
                <vui-skeleton animated type="circle" size="80px"></vui-skeleton>
                <div style="margin:auto 20px;width:100%">
                    <vui-skeleton animated width="90%"></vui-skeleton>
                    <vui-skeleton animated width="90%"></vui-skeleton>
                </div>
            </div>
            <vui-skeleton animated type="rect" height="200px"></vui-skeleton>
            <div style="display:flex;justify-content:space-between;margin-top:10px;">
                <vui-skeleton animated type="chip" width="100px"></vui-skeleton>
                <vui-skeleton animated type="btn"></vui-skeleton>
            </div>
        </div>
      </template>
    </Showcomponent>
     <Showcomponent title="颜色" subtitle="自定义背景色" :codes="code5">
      <template v-slot:desc>
        <div>
           通过<code>color</code>属性来为Skeleton 组件设置合适的颜色。
        </div>
      </template>
      <template v-slot:showarea>
        <div>
            <vui-skeleton type="badge" color="#ed437d"></vui-skeleton>
            <vui-skeleton color="#6CBFEA"></vui-skeleton>
            <vui-skeleton color="#E59BB4"></vui-skeleton>
            <vui-skeleton color="#FBB47B"></vui-skeleton>
            <vui-skeleton color="#A098E5"></vui-skeleton>
        </div>
      </template>
    </Showcomponent>
    <Showparameter title="Attributes" :parameter="parameter" style="margin-top:150px;"></Showparameter> 
  </div>
</template>

<script>
import Showcomponent from "../../components/showcomponent/index.vue";
import Showparameter from "../../components/showparameter/index.vue";
export default {
  name: "skeleton",
  chName: "骨架屏",
  components: { Showcomponent,Showparameter},
  data() {
      return {
          code1:`<vui-skeleton></vui-skeleton>`,
          code2:`<vui-skeleton animated></vui-skeleton>
<vui-skeleton animated></vui-skeleton>
<vui-skeleton animated></vui-skeleton>
<vui-skeleton animated></vui-skeleton>`,
          code3:`<div><p>"text"</p><vui-skeleton type="text"></vui-skeleton></div>
<div><p>"circle"</p><vui-skeleton type="circle"></vui-skeleton></div>
<div><p>"rect"</p><vui-skeleton type="rect"></vui-skeleton></div>
<div><p>"btn"</p><vui-skeleton type="btn"></vui-skeleton></div>
<div><p>"badge"</p><vui-skeleton type="badge"></vui-skeleton></div>
<div><p>"chip"</p><vui-skeleton type="chip"></vui-skeleton></div>`,
          code4:`<div style="display:flex;margin-bottom:10px">
    <vui-skeleton animated type="circle" size="80px"></vui-skeleton>
    <div style="margin:auto 20px;width:100%">
        <vui-skeleton animated width="90%"></vui-skeleton>
        <vui-skeleton animated width="90%"></vui-skeleton>
    </div>
</div>
<vui-skeleton animated type="rect" height="200px"></vui-skeleton>
<div style="display:flex;justify-content:space-between;margin-top:10px;">
    <vui-skeleton animated type="chip" width="100px"></vui-skeleton>
    <vui-skeleton animated type="btn"></vui-skeleton>
</div>`,
        code5:`<vui-skeleton type="badge" color="#ed437d"></vui-skeleton>
<vui-skeleton color="#6CBFEA"></vui-skeleton>
<vui-skeleton color="#E59BB4"></vui-skeleton>
<vui-skeleton color="#FBB47B"></vui-skeleton>
<vui-skeleton color="#A098E5"></vui-skeleton>`,
      parameter:{
        title:['参数','说明','类型','可选值','默认值'],
        contents:[
          ['animated','是否使用动画','Boolean','true / false','false'],
          ['type','当前显示的占位元素的类型','String','text / rect / circle / btn / badge / chip','text'],
          ['size','设置当前元素的大小,主要用于圆','String','—','—'],
          ['height','设置当前元素的高度','String','—','—'],
          ['width','设置当前元素的宽度','String','—','—'],
          ['color','设置当前元素的背景色','String','—','#efefef'],
        ]
      }
      }
  },
}
</script>

<style>

</style>