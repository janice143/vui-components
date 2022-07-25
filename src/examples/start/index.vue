<template>
    <div class="container1">
        <h2>安装</h2>
        <div class="step">
            <h3>🎯 1 下载项目文件 </h3>
            <p>npm git@github.com:janice143/vui-components.git</p>
        </div>
        <div class="step">
            <h3>🎯 找到VUI文件夹，拷贝至你的项目中使用</h3>
        </div>

        <div class="step">
            <h3>🎯 引入VUI组件</h3>
            <p>import vui from $ "../VUI";</p>
            <p>Vue.use(vui);</p>
        </div>

        <div class="step">
            <h3>🎯 编译项目</h3>
            <p>npm run serve</p>
        </div>

    <vui-alert title="⚠️⚠️⚠️ 注意：本项目是个人和团队瞎搞的，只用来学习，还严谨到可以npm发布，所以使用的时候，直接下载项目源文件中的VUI文件" type="warning" ></vui-alert>
        
    </div>
</template>

<script>
export default {
    name: 'UiprojectIndex',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
.container1{
    .step{
        .my(30px,30px);

        p{
            font-size: 14px;
            margin-top: 20px;
            font-family: Consolas;
            background: rgb(246,248,250);
            .pa(10px,20px);
            border-radius: 4px;
        }
    }
    

}
</style>