import Vue from 'vue'
import App from './App.vue'

import router from './router/index'

//引入字体图标
import "./style/iconfont.css";
//引入全局样式
import "./style/common/base.less";

// 引入全局组件
import showcomponent from "@/components/showcomponent";
import showparameter from "@/components/showparameter";
Vue.component(showcomponent.name,showcomponent)
Vue.component(showparameter.name,showparameter)


// 按需引入组件
// import alert from "../VUI/packages/alert"
// Vue.use(alert)

// 
import vui from "../VUI"
Vue.use(vui)

// npm 引入插件
// import viewUiComponents from 'view-ui-components'
// import 'view-ui-components/lib/vui.css'
// Vue.use(viewUiComponents)

// 引入代码高亮highlight插件
import Highlight from "./plugins/highlight";
Vue.use(Highlight);


Vue.config.productionTip = false



new Vue({
  render: h => h(App),
   //全局事件总线$bus配置
   beforeCreate(){
    Vue.prototype.$bus = this;
  },
  router,
 
}).$mount('#app')
