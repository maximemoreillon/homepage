import Vue from 'vue'
import App from './App.vue'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faGithub,
  faFacebook,
  faLinkedin,
  faNpm,
  faDocker,
  faYoutube,
  faMedium,
  faInstagram,
  faGitlab,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import {
  faGraduationCap, // Google scholar
  faNewspaper,
  faTools,
  faAward
} from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(
  faTwitter,
  faGithub,
  faFacebook,
  faLinkedin,
  faGraduationCap, // Google scholar
  faNpm,
  faDocker,
  faNewspaper,
  faYoutube,
  faMedium,
  faTools, // Projects
  faInstagram,
  faGitlab,
  faAward

)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
