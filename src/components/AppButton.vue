<template>
  <button class="app-button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton'
}
</script>

<style lang="scss">
  @import '../styles/app.scss';

  .app-button {
    appearance: none;
    border: 0;
    outline: 0;
    padding: 2vh 3vw;
    background-color: $c-green;
    color: $c-white;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.1em;
    cursor: pointer;

    &:hover {
      background-color: mix($c-black, $c-green, 10%);
    }
  }
</style>
