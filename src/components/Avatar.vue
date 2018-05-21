<template>
  <div class="avatar">
    <div class="avatar__wrapper">
      <div
        :style="{ backgroundImage: url ? `url(${url})` : undefined }"
        class="avatar__image"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    url: {
      default: null,
      type: String
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/app.scss';

  .avatar {
    height: 40vh;
    width: 40vh;
    border: 1px solid rgba($c-white, 0.5);
    border-radius: 50%;
    padding: 0.6666vh;

    &__wrapper {
      height: 100%;
      width: 100%;
      border: 1px solid rgba($c-white, 0.3);
      border-radius: 50%;
      padding: 1vh;
    }

    &__image {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-size: cover;
      background-color: $c-white;
    }
  }
</style>
