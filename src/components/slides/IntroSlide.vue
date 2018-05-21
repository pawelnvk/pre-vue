<template>
  <slide accent="green">
    <div class="intro-slide">
      <avatar v-if="imageUrl" :url="imageUrl" />

      <div v-if="hasAnyTexts" class="intro-slide__wrapper">
        <div class="intro-slide__heading h1" v-text="title"></div>
        <div class="h2" v-text="fullName"></div>
        <div class="h3" v-text="position"></div>
      </div>
    </div>
  </slide>
</template>

<script>
export default {
  name: 'IntroSlide',
  computed: {
    hasAnyTexts() {
      return this.fullName || this.position || this.title
    }
  },
  props: {
    fullName: {
      default: '',
      type: String
    },
    imageUrl: {
      default: '',
      type: String
    },
    position: {
      default: '',
      type: String
    },
    title: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="scss">
  .intro-slide {
    display: flex;

    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 4vh;

      &:first-child {
        margin-left: 0;
      }
    }

    &__heading {
      margin-bottom: 3.5vh;
    }
  }
</style>
