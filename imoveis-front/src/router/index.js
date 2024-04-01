import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '../views/client/Catalog.vue'
import PropertyList from '../views/client/PropertyList.vue'
import IntroBanner from '../views/client/IntroBanner.vue'

const routes = [
  {
    path: '/',
    name: 'intro',
    component: IntroBanner
  },
  {
    path: '/apartment/:nomeDoCondominio/:andar',
    name: 'apartment'
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
  },
  {
    path: '/intro',
    name: 'introcution',
    component: IntroBanner,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;