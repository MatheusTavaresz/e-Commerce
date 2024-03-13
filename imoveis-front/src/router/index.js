import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PropertyList from '../views/PropertyList.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/catalog/:city',
    name: "byCities",
    component: PropertyList,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;