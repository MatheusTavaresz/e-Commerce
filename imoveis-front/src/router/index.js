import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/client/Home.vue'
import PropertyList from '../views/client/PropertyList.vue'
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
    children: [
      {
        path: ':bairro', 
        name: 'byCitiesAndBairro',
        component: PropertyList
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;