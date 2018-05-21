<template>
  <div class="code-preview">
    <div class="code-preview__header">
      <button
        v-for="tab in availableTabs"
        :class="{ 'is-active': activeTab === tab }"
        :key="tab"
        class="code-preview__tab"
        @click="setActiveTab(tab)"
        v-text="tab"
      >
      </button>
    </div>
    <pre
      v-highlightjs="content"
      class="code-preview__main"
    ><code :class="language"></code></pre>
  </div>
</template>

<script>
import { CODE_LANGUAGE, SCRIPT_TYPE, STYLE_TYPE, TEMPLATE_TYPE } from '../constants/index'

export default {
  name: 'CodePreview',
  props: {
    additionalCode: {
      default: null,
      type: Object
    },
    code: {
      default: '',
      type: String
    }
  },
  data: () => ({
    activeTab: TEMPLATE_TYPE
  }),
  computed: {
    availableTabs () {
      const baseTypes = [TEMPLATE_TYPE, SCRIPT_TYPE, STYLE_TYPE]

      if (this.additionalCode) {
        return [...baseTypes, this.additionalCode.name]
      }

      return baseTypes
    },
    content () {
      const { activeTab, additionalCode, isAdditionalCodeSelected, markup } = this

      if (isAdditionalCodeSelected) {
        return additionalCode.code
      }

      const stringifiedCode = markup.querySelector(activeTab).innerHTML
      const trimedTabs = activeTab === SCRIPT_TYPE
        ? stringifiedCode
        : stringifiedCode.replace(/\n {2}/g, '\n')

      return trimedTabs.replace('\n', '')
    },
    isAdditionalCodeSelected () {
      const { activeTab, additionalCode } = this

      return additionalCode && additionalCode.name === activeTab
    },
    language () {
      const { activeTab, additionalCode, isAdditionalCodeSelected } = this

      if (isAdditionalCodeSelected) {
        return additionalCode.language
      }

      return CODE_LANGUAGE[activeTab]
    },
    markup () {
      const html = document.createElement('div')

      html.innerHTML = this.code

      return html
    }
  },
  methods: {
    setActiveTab (tab) {
      this.activeTab = tab
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/app.scss';

  .code-preview {
    width: 100%;

    &__header {
      display: flex;
      background-color: #002b36;
      border-bottom: 1px solid rgba(#2aa198, 0.5);
    }

    &__tab {
      padding: 0.5vh 0;
      flex-grow: 1;
      appearance: none;
      border: 0;
      outline: 0;
      color: rgba(#2aa198, 0.5);
      background-color: transparent;
      cursor: pointer;

      &:hover,
      &.is-active {
        color: #2aa198;
        background-color: rgba(#2aa198, 0.15);
      }
    }

    &__main {
      height: 50vh;
      margin: 0;
      white-space: pre-wrap;

      code {
        height: 100%;
      }
    }
  }
</style>
