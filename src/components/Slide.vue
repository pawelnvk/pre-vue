<template>
  <div
    :class="`slide--${accent}`"
    class="slide"
  >
    <background :accent="accent" />

    <div class="slide__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    accent: {
      default: 'white',
      type: String
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
  @import '../styles/app.scss';

  .slide {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
</style>
