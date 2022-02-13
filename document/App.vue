<template>
<div class="conttainer">
  <header class="header">
    <img class="logo" src="./img/vue-micro-interaction.svg" alt="vue-micro-interaction"/>
    <h1>Vue Micro Interaction(β)</h1>
  </header>
  <section>
    <h2>Hover Sticky</h2>
    <div class="sticky-container">
      <v-micro-hover-sticky
        class="sticky-wrapper"
        :duration="stickyDurasion"
        :strength="stickyStrength"
      >
        <div class="v-micro-hover-sticky">hover</div>
      </v-micro-hover-sticky>
    </div>
    <div class="flexRange">
      <div>
        <p>strength{{stickyStrength}}</p>
        <input type="range" min="1" max="10" value="1" @input="onChangeStickyStrength"/>
      </div>
      <div>
        <p>duration{{stickyDurasion}}</p>
        <input type="range" min="1" max="10" value="1" @input="onChangeStickyDuration"/>
      </div>
    </div>
  </section>
  <section>
    <h2>Ripples</h2>
    <div class="flex">
      <Ripples class="v-micro-ripples"
        :size="ripplesSize"
        :duration="ripplesDuration"
      >click !</Ripples>
      <v-micro-ripples
        class="v-micro-ripples"
        :size="ripplesSize"
        :duration="ripplesDuration"
        :color="'rgba(255, 255, 255, 0.5)'"
        >click !</v-micro-ripples>
    </div>
    <div class="flexRange">
      <div>
        <p>size{{ripplesSize}}</p>
        <input type="range" min="10" max="1000" value="100" @input="onChangeRipplesSize"/>
      </div>
      <div>
        <p>duration{{ripplesDuration}}</p>
        <input type="range" min="1" max="20" value="1" @input="onChangeRipplesDuration"/>
      </div>
    </div>
  </section>
  <section>
  <h2>Shake</h2>
    <div class="flex">
      <Shake
        class="v-micro-shake"
        :iteration="shakeIteration"
        :range="{x: shakeRange, y: 0, z: 0}"
        :duration="shakeDurasion"
      >X</Shake>
      <v-micro-shake
        class="v-micro-shake"
        :iteration="shakeIteration"
        :range="{x: 0, y: shakeRange, z: 0}"
        :duration="shakeDurasion"
      >Y</v-micro-shake>
      <v-micro-shake
        class="v-micro-shake"
        :iteration="shakeIteration"
        :range="{x: 0, y: 0, z: shakeRange}"
        :duration="shakeDurasion"
      >Z</v-micro-shake>
    </div>
    <div class="flexRange">
      <div>
        <p>iteration{{shakeIteration}}</p>
        <input type="range" min="1" max="5" value="2" @input="onChangeShakeIteration"/>
      </div>
      <div>
        <p>range{{shakeRange}}</p>
        <input type="range" min="2" max="100" value="2" @input="onChangeShakeRange"/>
      </div>
      <div>
        <p>duration{{shakeDurasion}}</p>
        <input type="range" min="1" max="5" value="1" @input="onChangeShakeDuration"/>
      </div>
    </div>
  </section>
</div>
</template>
<script>
import {HoverSticky, Ripples, Shake} from '..'
export default {
  name: 'document',
  data(){return {
    stickyStrength: 1,
    stickyDurasion: 0.1,
    ripplesSize: 100,
    ripplesDuration: 0.5,
    shakeRange: 2,
    shakeDurasion: 0.1,
    shakeIteration: 2,
  }},
  components: {
    HoverSticky,
    Ripples,
    Shake,
  },
  methods: {
    onChangeStickyStrength(e) {
      this.stickyStrength = parseFloat(e.target.value)
    },
    onChangeStickyDuration(e) {
      this.stickyDurasion = parseFloat(e.target.value)/10
    },
    onChangeRipplesSize(e) {
      this.ripplesSize = parseFloat(e.target.value)
    },
    onChangeRipplesDuration(e) {
      this.ripplesDuration = parseFloat(e.target.value)/10
    },
    onChangeShakeRange(e) {
      this.shakeRange = parseFloat(e.target.value)
    },
    onChangeShakeDuration(e) {
      this.shakeDurasion = parseFloat(e.target.value)/10
    },
    onChangeShakeIteration(e) {
      this.shakeIteration = parseFloat(e.target.value)
    },
  }
}
</script>
<style lang="stylus">
.header
  display flex

.logo
  width 40px

h2
  font-weight 100

.conttainer
  padding 0 20px 20px 20px

.sticky-container
  display inline-block
  border dashed 1px #000
  margin-bottom 20px

.sticky-wrapper
  padding 40px

.v-micro-hover-sticky
  display inline-block
  padding 10px
  background #88f
  border-radius 20px
  color #fff
  text-align center
  cursor pointer

.v-micro-ripples
  width 200px
  height 200px
  line-height 200px
  background #888
  color #fff
  text-align center
  cursor pointer

  & + &
    margin-left 20px
    background #f80

.v-micro-shake
  display inline-block
  padding 0 10px
  width 40px
  height 40px
  line-height 40px
  border-radius 50%
  background #f88
  border-radius 20px
  color #fff
  text-align center
  cursor pointer

  & + &
    margin-left 20px
    background #f56

.flex
  display flex
  margin-bottom 20px

.flexRange
  display flex
  margin-bottom 20px

.flexRange div
  margin-right 20px

section
  margin-bottom 30px

p
  margin 0

</style>