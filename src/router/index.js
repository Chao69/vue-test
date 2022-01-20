import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Test from '../views/Test.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
