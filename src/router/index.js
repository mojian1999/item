import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	children:[
			{
				"path":"/",
				redirect:'Discover-1',
		},
			{
				"path":'Discover-1',
				name:"Discover-1",
				component:()=>import(/* webpackChunkName: "Discover-1" */ '../views/Discover-1.vue')
		},	
			{
				"path":'Discover-2',
				name:"Discover-2",
				component:()=>import(/* webpackChunkName: "discover-2" */ '../views/Discover-2.vue')
		},
			{
				"path":'Discover-3',
				name:"Discover-3",
				component:()=>import(/* webpackChunkName: "discover-3" */ '../views/Discover-3.vue')
		},
	]
  },
  {
    path: '/Mine',
    name: 'Mine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Mine" */ '../views/Mine.vue')
  },
  {
    path: '/Me',
    name: 'Me',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Me" */ '../views/Me.vue')
  },
  {
    path: '/Itemsss/:itemid',
    name: 'Itemsss',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Itemsss" */ '../views/Itemsss.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
