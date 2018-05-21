# prevue
Library helpful when creating slideshow with predefined theme.

## Components
Library provides following components:

### `Slide`
```vue
<template>
  <slide accent="green">
    <p>This is content of slide</p>
  </slide>
</template>

<script>
export default {
  name: 'SlideExample',
}
</script>
```

###`CodeSlide`
```vue
<template>
  <code-slide :code="code">
    <p>This is aside content.</p>
  </code-slide>
</template>

<script>
import Component from '!raw-loader!@/components/Component';

export default {
  name: 'CodeSlideExample',
  data() {
    return {
      code: Component,
    }
  },
}
</script>
```

###`IntroSlide`
```vue
<template>
  <IntroSlide 
    fullName="John Smith"
    imageUrl="http://thecatapi.com/api/images/get?format=src&type=jpg"  
    position="Front-end developer"
    title="How to do?"
  ></IntroSlide>
</template>

<script>
export default {
  name: 'IntroSlideExample',
}
</script>
```

###`TitleSlide`
```vue
<template>
  <title-slide title="Some title"/>
</template>

<script>
export default {
  name: 'TitleSlideExample',
}
</script>
```

###`CodePreview`
```vue
<template>
  <div>
    <code-preview :additional-code="additionalCode" :code="code" />
  </div>
</template>

<script>
import Component from '!raw-loader!@/components/Component';

export default {
  name: 'CodeSlideExample',
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
  data() {
    return {
      code: Component,
    };
  },
}
</script>
```

###`Background`
```vue
<template>
  <background accent="green" />
</template>

<script>
export default {
  name: 'Slide',
}
</script>
```

###`Avatar`
```vue
<template>
  <avatar url="http://thecatapi.com/api/images/get?format=src&type=jpg" />
</template>

<script>
export default {
  name: 'IntroSlide',
}
</script>
```

###`AppButton`
```vue
<template>
  <app-button @click="toggle">Toggle</app-button>
</template>

<script>

export default {
  name: 'Slide2',
  data () {
    return {
      isModalOpen: false
    };
  },
  methods: {
    toggle () {
      this.isModalOpen = !this.isModalOpen;
    },
  },
}
</script>
```
