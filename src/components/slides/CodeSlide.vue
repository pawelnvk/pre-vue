<template>
  <slide>
    <div class="code-slide">
      <div class="code-slide__header">
        <div class="h2 underline">Example</div>
      </div>

      <div class="code-slide__main">
        <div class="code-slide__col">
          <code-preview :additional-code="additionalCode" :code="code" />
        </div>
        <div class="code-slide__col">
          <slot></slot>
        </div>
      </div>
    </div>
  </slide>
</template>

<script>
export default {
  name: 'CodeSlide',
  props: {
    additionalCode: {
      default: null,
      type: Object
    },
    code: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="scss">
  .code-slide {
    &__header {
      margin-bottom: 6vh;
      text-align: center;
    }

    &__main {
      display: flex;
      width: 70vw;
    }

    &__col {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50%;
      padding: 0 1vw;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }
</style>
