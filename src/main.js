import VueHighlightJS from 'vue-highlightjs';

import AppButton from './components/AppButton.vue';
import Avatar from './components/Avatar.vue';
import Background from './components/Background.vue';
import CodePreview from './components/CodePreview.vue';
import CodeSlide from './components/Slides/CodeSlide.vue';
import IntroSlide from './components/Slides/IntroSlide.vue';
import Slide from './components/Slide.vue';
import TitleSlide from './components/Slides/TitleSlide.vue';

class Prevue {
  static addFont() {
    const link = document.createElement('link');

    link.href = 'https://fonts.googleapis.com/css?family=Montserrat';
    link.rel = 'stylesheet';

    document.head.appendChild(link);
  }

  static install(Vue) {
    Prevue.registerPlugins(Vue);

    Prevue.registerComponents(Vue);

    Prevue.addFont();
  }

  static registerComponents(Vue) {
    Vue.component(AppButton.name, AppButton);
    Vue.component(Avatar.name, Avatar);
    Vue.component(Background.name, Background);
    Vue.component(CodePreview.name, CodePreview);
    Vue.component(CodeSlide.name, CodeSlide);
    Vue.component(IntroSlide.name, IntroSlide);
    Vue.component(Slide.name, Slide);
    Vue.component(TitleSlide.name, TitleSlide);
  }

  static registerPlugins(Vue) {
    Vue.use(VueHighlightJS);
  }
}

export default Prevue;
