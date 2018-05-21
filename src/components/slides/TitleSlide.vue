<template>
  <slide accent="green">
    <div class="h2 underline" v-text="title"></div>
  </slide>
</template>

<script>
export default {
  name: 'TitleSlide',
  props: {
    title: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="scss"></style>
