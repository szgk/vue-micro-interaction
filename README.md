<img src="https://github.com/szgk/vue-micro-interaction/blob/master/img/logo.png" alt="logo" width="300"/>

## Vue Micro-Interaction(β)

Micro interaction library with vue.

[Document](https://szgk.github.io/vue-micro-interaction/docs/)

## Instalation

```js
npm i vue-micro-interaction
```

## Usage

- All Components

```js
import Vue from 'vue'
import app from './App.vue'
import vueMicroInteraction from '../src'

Vue.use(vueMicroInteraction)

new Vue({
  el: '#app',
  render: h => h(app)
})
```

```html
<v-micro-hover-sticky>hover<v-micro-hover-sticky>
```

- Per Component

```html
<script>
import {HoverSticky} from 'vue-micro-interaction'

export default {
  name: 'Example',
  components: {
    HoverSticky,
  },
}
</script>
```

### HoverSticky

<img src="https://github.com/szgk/vue-micro-interaction/blob/master/img/vmi_sticky.gif" alt="ripples" width="200"/>

| name | type | default | about |
-- | -- | -- | --
| duration | Number | 0.1 | Transition seccond. |
| strength | Number | 1 | Sticky strength. |
| styles | {[key: String]: String} | {} | Styles passed to the parent element.|

### Ripples

<img src="https://github.com/szgk/vue-micro-interaction/blob/master/img/vmi_riples.gif" alt="ripples" width="200"/>

| name | type | default | about |
-- | -- | -- | --
| size | Number | 50 | Diameter pixcel of ripples. |
| time | Number | 500 | Time when ripples are displayed. |
| color | String | #000 | Color of ripples. |
| zIndex | Number | 999 | zIndex of ripples. |
| duration | Number | 0.1 | Transition seccond. |
| styles | {[key: String]: String} | {} | Styles passed to the parent element.|

### Shake

<img src="https://github.com/szgk/vue-micro-interaction/blob/master/img/vmi_shake.gif" alt="ripples" width="200"/>

| name | type | default | about |
-- | -- | -- | --
| eventType | String | click | String to pass to addEventListener. |
| range | {[key: String]: Number} | {x: 2, y: 0, z: 0} | Width of shaking. |
| iteration | Number | 1 | Number of iterations. |
| perspective | Number | 50 | Perspective when shaking in the Z direction. `transform: perspective(${perspective}px)` |
| duration | Number | 0.1 | Transition seccond. |
| styles | {[key: String]: String} | {} | Styles passed to the parent element.|
