<template>
<div>

  <div class="firstView">
    <header class="header">
      <img class="logo" src="./img/vue-micro-interaction.svg" alt="vue-micro-interaction"/>
      <h1 class="title">Vue Micro-Interaction(β)</h1>
      <p class="description">Micro-Interaction library with vue.</p>
    </header>
  </div>

  <div class="conttainer">
    <section class="component">
      <h2 class="sectionTitle" id="HoverSticky"># Hover Sticky</h2>
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
          <input class="range" type="range" min="1" max="10" value="1" @input="onChangeStickyStrength"/>
        </div>
        <div>
          <p>duration{{stickyDurasion}}</p>
          <input class="range" type="range" min="1" max="10" value="1" @input="onChangeStickyDuration"/>
        </div>
      </div>
    </section>
    <section class="component">
      <h2 class="sectionTitle" id="Ripples"># Ripples</h2>
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
          <input class="range" type="range" min="10" max="1000" value="100" @input="onChangeRipplesSize"/>
        </div>
        <div>
          <p>duration{{ripplesDuration}}</p>
          <input class="range" type="range" min="1" max="20" value="1" @input="onChangeRipplesDuration"/>
        </div>
      </div>
    </section>
    <section class="component">
      <h2 class="sectionTitle" id="Shake"># Shake</h2>
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
          <input class="range" type="range" min="1" max="5" value="2" @input="onChangeShakeIteration"/>
        </div>
        <div>
          <p>range{{shakeRange}}</p>
          <input class="range" type="range" min="2" max="100" value="2" @input="onChangeShakeRange"/>
        </div>
        <div>
          <p>duration{{shakeDurasion}}</p>
          <input class="range" type="range" min="1" max="5" value="1" @input="onChangeShakeDuration"/>
        </div>
      </div>
    </section>
  </div>

  <nav :class="['menu', isMenuOpen ? 'open' : undefined]"  ref="menu">
    <button class="menuButton" @click="onClickMenu"/>
    <ul class="menuList">
      <li data-id="#HoverSticky" @click="onClickMenuLink">Hover Sticky</li>
      <li data-id="#Ripples" @click="onClickMenuLink">Ripples</li>
      <li data-id="#Shake" @click="onClickMenuLink">Shake</li>
    </ul>
  </nav>
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
    isMenuOpen: false,
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
    onClickMenu(e) {
      this.isMenuOpen = !this.isMenuOpen
    },
    onClickMenuLink(e) {
      const target = document.querySelector(e.target.dataset.id)
      const targetRect = target.getBoundingClientRect()
      this.onClickMenu()
      setTimeout(() => {
        window.scrollTo({
          top: window.pageYOffset + targetRect.top - this.$refs.menu.clientHeight - 20,
          behavior: 'smooth'
        })
      }, 200)
    },
  }
}
</script>
<style lang="stylus">
.firstView
  display flex
  justify-content center
  align-items center
  height 100vh

.header
  display flex
  height 40px
  line-height 40px
  margin-bottom 20px
  justify-content center
  flex-wrap wrap

.title
  font-size 20px
  font-weight thin
  margin-left 10px

.menu
  position fixed
  width 100%
  top 0
  left 0
  background #fff
  box-shadow 0px 10px 10px rgba(200, 200, 200, .5)

  .menuButton
    position relative
    z-index 9999
    display inline-block
    width 30px
    height 30px
    margin-left 20px
    cursor pointer

    &:after
    &:before
      position absolute
      content ''
      width 100%
      height 2px
      top 10px
      left 0
      background #888
      transition transform .2s, top .2s
    &:before
      top 20px

  .menuList
    padding-left 20px
    overflow hidden
    height 0
    transition height .2s
    li
      &:first-child
        margin-top 20px
      padding 5px 0
      color #888
      cursor pointer
  
  &.open
    .menuList
      height 140px
    .menuButton
      &:after
        top 20px
        transform rotate(45deg)
      &:before
        top 20px
        transform rotate(-45deg)

.description
  width 100%
  text-align center
  color #888
  font-size 14px
  line-height 20px

.logo
  width 40px

.sectionTitle
  font-weight thin
  font-size 20px
  color #888
  margin-bottom 20px

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

.component
  margin-bottom 60px

.range
  -webkit-appearance: none;
  appearance: none;
  background-color: #eaeaea;
  height: 10px;
  width: 100%;
  border-radius: 6px;

  &:focus,
  &:active {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    position: relative;
    width: 16px;
    height: 16px;
    display: block;
    background-color: #41B883;
    border-radius: 50%;
    -webkit-border-radius: 50%;
  }

</style>