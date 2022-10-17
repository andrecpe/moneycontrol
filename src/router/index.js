import Vue from 'vue'
import VueRouter from 'vue-router'
import control from '@/components/control/ControlStruct'
import partial from '@/components/partial/PartialStruct'
import history from '@/components/history/HistoryStruct'


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
    component: control,
  },
  {
    path: '/parcial',
    name: 'parcial',
    component: partial,
  },
  {
    path: '/historico',
    name: 'historico',
    component: history,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
