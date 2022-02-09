import Vue from 'vue'
import app from './App.vue'
import vueMicroInteraction from '..'

window.onload = function() {
  Vue.use(vueMicroInteraction)
  new Vue({
    el: '#app',
    render: h => h(app)
  })
}