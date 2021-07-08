import Vue from 'vue'
import Router from 'vue-router'

// import Home from 'views/home/Home'
// 懒加载 Home 组件
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const ShopCar = () => import('views/shopcar/ShopCar')
const My = () => import('views/my/My')

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/shopcar',
    name: 'ShopCar',
    component: ShopCar
  },
  {
    path: '/my',
    name: 'My',
    component: My
  }
]

export default new Router({
  routes,
  mode: "history"
})
