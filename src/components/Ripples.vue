<template>
  <div
    ref="ripples"
    :style="{
      position: 'relative',
      overflow: 'hidden',
      ...styles,
    }"
  >
    <slot />
  </div>
</template>
<script>
export default {
  name: 'VueMicroInteractionRipples',
  mounted() {
    this.$refs.ripples.addEventListener('click', this.ripples)
  },
  unmounted() {
    this.$refs.ripples.removeEventListener('click', this.ripples)
  },
  props: {
    size: {
      type: Number,
      default: 50,
    },
    time: {
      type: Number,
      default: 500,
    },
    duration: {
      type: Number,
      default: 0.5,
    },
    color: {
      type: String,
      default: '#000',
    },
    zIndex: {
      type: Number,
      default: 999,
    },
    styles: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ripples(e) {
      const el = document.createElement('div')
      const rect = this.$refs.ripples.getBoundingClientRect()
      const cursorPointX = e.clientX - rect.left
      const cursorPointY = e.clientY - rect.top
      const {size, duration, color, zIndex} = this
      el.style.top = `${cursorPointY}px`
      el.style.left = `${cursorPointX}px`
      el.style.position = 'absolute'
      el.style.zIndex = zIndex
      el.style.width = '0px'
      el.style.height = '0px'
      el.style.borderRadius = '50%'
      el.style.backgroundColor = color
      this.$refs.ripples.appendChild(el)
      setTimeout(() => {
        el.animate([
          {
            opacity: 1,
            width: 0,
            height: 0,
            top: el.style.top,
            left: el.style.left,
          },
          {
            opacity: 0,
            top: `calc(${el.style.top} - ${size/2}px)`,
            left: `calc(${el.style.left} - ${size/2}px)`,
            width: `${size}px`,
            height: `${size}px`
          },
        ], duration*1000)
      }, 1)

      setTimeout(() => {
        el.remove()
      }, duration*1000 + 1)
    }
  }
}
</script>