<template>
  <div
    ref="shake"
    :style="{
      transform: `perspective(500px) translate3d(0px, 0px, 0px);`,
      display: 'inline-block',
      transition: `transform ${duration}s`,
      ...styles,
    }"
  >
    <slot />
  </div>
</template>
<script>
export default {
  name: 'VueMicroInteractionShake',
  mounted() {
    this.css = document.createElement('style')
    this.$refs.shake.addEventListener(this.eventType, this.shake)
  },
  unmounted() {
    this.css?.remove()
    this.$refs.shake.removeEventListener(this.eventType, this.shake)
  },
  data() {
    return {
      css: null,
    }
  },
  props: {
    eventType: {
      type: String,
      default: 'click'
    },
    range: {
      type: Object,
      default: () => ({
        x: 2,
        y: 0,
        z: 0,
      }),
    },
    iteration: {
      type: Number,
      default: 1,
    },
    duration: {
      type: Number,
      default: 0.1,
    },
    perspective: {
      type: Number,
      default: 50,
    },
    styles: {
      type: Object,
      default: () => {}
    },
  },
  methods: {
    async shake() {
      const {animation, range: {x, y, z}, iteration, duration, perspective} = this
      for(let i = 0; i < iteration*2; i++) {
        this.$refs.shake.style.transform = `perspective(${perspective}px) translate3d(${(i%2 ? 1 : -1)*x}px, ${(i%2 ? 1 : -1)*y}px, ${(i%2 ? 1 : -1)*z}px)`
        await new Promise(res => setTimeout(res, duration*1000+1))
        this.$refs.shake.style.transform = `perspective(${perspective}px) translate3d(0, 0, 0)`
      }
    }
  }
}
</script>
