import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: '/controle',
  },
  {
    path: '/controle',
    name: 'controle',
    component: () => import('@/components/control/ControlStruct')
  },
  {
    path: '/parcial',
    name: 'parcial',
    component: () => import('@/components/partial/PartialStruct')
  },
  {
    path: '/historico',
    name: 'historico',
    component: () => import('@/components/history/HistoryStruct')
  },
]

const router = new VueRouter({
  routes
})

export default router
