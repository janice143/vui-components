<template>
 <li class="ct_dropdow_item"
 @click="handleclick"
 :class="{
      'ct_dropdown_disabled':disabled
 }">
    <i class="iconfont ct_dropdown_icon" :class="icon"></i>
    <slot></slot>
  </li>
</template>

<script>
export default {
    name:'vui-dropdown-item',
    props:{
      icon:String,
      disabled:Boolean,
    },
    inject:['dropdown'],
    methods:{
      handleclick(e){
          if(this.dropdown.trigger=='hover'&&!this.dropdown.HideNoShow){
            this.dropdown.isshowlist=false
          }if(this.dropdown.HideNoShow){
            e.stopPropagation();
            
          }
      }     
    }
}
</script>

<style lang='less'>
.ct_dropdown_icon{
  margin-right: 5px;
}
.ct_dropdow_item{
  white-space: nowrap;
  line-height: 40px;
  padding:0 20px;
  cursor:pointer;
}
.ct_dropdow_item:hover{
  color: @primary-color;
  background-color: @primary-plain-color;
}
.ct_dropdown_disabled{
    cursor: default;
    color: #bbb;
    pointer-events: none;
}
</style>