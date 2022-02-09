<template>
  <div
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    ref="hoverSticky"
    :style="{
      display: 'inline-block',
      transform: 'translate(0px, 0px)',
      transition: `transform ${duration}s`,
      ...styles,
    }"
    >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VueMicroInteractionHoverSticky',
  props: {
    duration: {
      type: Number,
      default: 0.1,
    },
    strength: {
      type: Number,
      default: 1,
    },
    styles: {
      type: Object,
      default: () => ({})
    },
  },
  methods: {
    getCursorPositionOnElement(cursorXY, elSizeXY) {
      return cursorXY - elSizeXY/2
    },
    onMouseMove(e) {
      const rect = e.target.getBoundingClientRect()
      const cursorPointX = e.clientX - rect.x
      const cursorPointY = e.clientY - rect.y

      const cursorXFromCenter = this.getCursorPositionOnElement(cursorPointX, rect.width)
      const cursorYFromCenter = this.getCursorPositionOnElement(cursorPointY, rect.height)
      this.$refs.hoverSticky.style.transform = `translate(${cursorXFromCenter/10*this.strength}px, ${cursorYFromCenter/10*this.strength}px)`
    },
    onMouseLeave(e) {
      this.$refs.hoverSticky.style.transform = this.styles.transform || 'translate(0px, 0px)'
    }
  },
}
</script>
