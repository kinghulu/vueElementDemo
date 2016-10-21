import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

Vue.use(VueRouter)
/* eslint-disable no-new */

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
	const Foo = { template: '<transition name="bounce"><div>aaa</div></transition>' }

import adminLogin from './admin/login'
const Bar = { data () {
    return {
      transitionName: 'bounce'
    }
  },
  template: `
    <div class="parent">
      <h2>Parent</h2>
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
    </div>
  `}

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点在讨论嵌套路由。
const routes = [
  { path: '/bar/:id', component: Bar,name:"bars",
      children: [
        { path: 'foo', component: Foo }
      ]},
  { path: '/admin/login', components: {
        default: adminLogin,
        a: Foo
      }}
]


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
	//mode: 'history',  //需后端配置：http://router.vuejs.org/zh-cn/essentials/history-mode.html
     routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
