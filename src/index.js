import "@babel/polyfill"

import _HoverSticky from './components/HoverSticky.vue'
import _Ripples from './components/Ripples.vue'
import _Shake from './components/Shake.vue'

export const HoverSticky = _HoverSticky
export const Ripples = _Ripples
export const Shake = _Shake

export default {
  install (Vue) {
    Vue.component('v-micro-hover-sticky', _HoverSticky)
    Vue.component('v-micro-ripples', _Ripples)
    Vue.component('v-micro-shake', _Shake)
    Vue.component('MicroHoverSticky', _HoverSticky)
    Vue.component('MicroRipples', _Ripples)
    Vue.component('MicroShake', _Shake)
  }
}
