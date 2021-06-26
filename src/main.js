import Vue from 'vue'
import App from './App.vue'
import store from '../src/assets/store.js'

Vue.config.productionTip = false

import './assets/base.css'
import './assets/index.css'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

import axios from 'axios';
axios.get('/myapi').then(res => {
  console.log(res);
}).catch(e => {
  console.log(e);
})





