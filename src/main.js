//////////////////////////////////////////////////////////////////////////////////////
//
//      ┏┛ ┻━━━━━┛ ┻┓
//      ┃　　　　　　 ┃
//      ┃　　　━　　　┃
//      ┃　┳┛　  ┗┳　┃
//      ┃　　　　　　 ┃
//      ┃　　　┻　　　┃
//      ┃　　　　　　 ┃
//      ┗━┓　　　┏━━━┛
//        ┃　　　┃   author:yaohuitao@100tal.com
//        ┃　　　┃   摩比学堂专培考核系统  2016-10-17
//        ┃　　　┗━━━━━━━━━┓
//        ┃　　　　　　　    ┣┓
//        ┃　　　　         ┏┛
//        ┗━┓ ┓ ┏━━━┳ ┓ ┏━┛
//          ┃ ┫ ┫   ┃ ┫ ┫
//          ┗━┻━┛   ┗━┻━┛
//////////////////////////////////////////////////////////////////////////////////////

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'  //vue路由
import Vuex from 'vuex'             //状态管理
import Element from 'element-ui'    //element前端框架
import 'src/assets/css/main.css'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Element)

/* 配置路由 */

// 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
const routes = require('./router')

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
	//mode: 'history',  //需后端配置：http://router.vuejs.org/zh-cn/essentials/history-mode.html
     routes // （缩写）相当于 routes: routes
})
const store = new Vuex.Store({
    state: {
        count: 0,
        adminleftnavnum:"1"  //管理后台左侧导航
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

// 创建和挂载根实例。
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

store.commit('increment')
