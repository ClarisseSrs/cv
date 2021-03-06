import Vue from 'vue'
import App from '@/App.vue'

// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// Font Awesome Vue
import {
  faLinkedin, faGitlab, faFacebook, faInstagram, faJava, faPython, faVuejs, faCss3Alt, faJsSquare, faHtml5, faNodeJs,
  faAngular, faWordpress, faYarn, faUnity, faWindows, faLinux
} from '@fortawesome/free-brands-svg-icons'
import { faTrophy, faCheck, faMinusSquare, faPlusSquare, faAdjust, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as fasLightBulb } from '@fortawesome/free-regular-svg-icons'
import { faLightbulb as farLightBulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom, library } from '@fortawesome/fontawesome-svg-core'

dom.watch()

library.add(faLinkedin, faGitlab, faFacebook, faInstagram, faJava, faPython, faVuejs, faCss3Alt, faJsSquare, faHtml5, faNodeJs, faLanguage, fasLightBulb, farLightBulb,
  faAngular, faWordpress, faYarn, faUnity, faWindows, faLinux, faTrophy, faCheck, faMinusSquare, faPlusSquare, faAdjust)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Main SCSS File
import '@/assets/scss/resume.scss'

Vue.config.productionTip = false;
// set up internationalization
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';
Vue.use(FlagIcon);

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
  i18n,
}).$mount('#app')
