import Vue from 'vue'
import app from './App.vue'
import './styles/reset.css'

const init = async () => {
  let vueMicroInteraction = null

  if(WEBPACK_MODE === 'development') {
    vueMicroInteraction = await import('../src').then((_vueMicroInteraction) => {
      return _vueMicroInteraction.default
    })
  } else {
    vueMicroInteraction =  await import('..').then((_vueMicroInteraction) => {
      return _vueMicroInteraction.default
    })
  }

  Vue.use(vueMicroInteraction)
  new Vue({
    el: '#app',
    render: h => h(app)
  })
}

window.onload = init