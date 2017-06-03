//Vue
import Vue from 'vue'

//http
import VueResource from 'vue-resource'
Vue.use(VueResource);

//Vuex
import store from './store.js'

//components
import App from './components/App.vue'
import ProductView from './components/ProductView.vue'
import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'
import Order from './components/Order.vue'

//router
import Router from 'vue-router'
Vue.use(Router)

//router definition
export const router = new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'ProductList',
        component: ProductList
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/product/:name',
        name: 'product',
        component: ProductView
    },
    {
        path: '/order/:id',
        name: 'order',
        component: Order
    }
  ]  
})

//sync router and vuex
import {sync} from 'vuex-router-sync'
sync(store,router)

//Vuetify
import Vuetify from 'vuetify'
Vue.use(Vuetify)

//veevalidate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

//init app
const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})