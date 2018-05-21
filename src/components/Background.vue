<template>
  <div
    :class="`background--${color}`"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
    class="background"
  ></div>
</template>

<script>
import bgBlack from '../assets/bg_black.png'
import bgGreen from '../assets/bg_green.png'
import bgWhite from '../assets/bg_white.png'

export default {
  name: 'Background',
  props: {
    accent: {
      default: 'white',
      type: String
    }
  },
  data: () => ({
    availableBackgrounds: {
      black: bgBlack,
      green: bgGreen,
      white: bgWhite
    }
  }),
  computed: {
    backgroundUrl () {
      const { color, availableBackgrounds } = this

      return availableBackgrounds[color]
    },
    color () {
      const { accent, availableBackgrounds } = this

      return availableBackgrounds[accent] ? accent : 'white'
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/app.scss';

  .background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;

    &--black {
      background-color: $c-black;
    }

    &--green {
      background-color: $c-green;
    }

    &--white {
      background-color: $c-white;
    }
  }
</style>
