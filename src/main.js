import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import carousel from './component/carousel.vue'
import github from './component/github.vue'
import table from './component/table.vue'
import selectPage from './component/selectPage.vue'




Vue.use(VueRouter)

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/table', component: table },
  { path: '/github', component: github },
  { path: '/select', component: selectPage }
]

const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
})

const app = new Vue({
  router: router,
  base: __dirname,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
