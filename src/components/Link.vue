<template>
  <!-- Logo wrapper for global rotation -->
  <a class="link" v-bind:href="url">
    <font-awesome-icon :icon="icon" />
    <span class="label">{{label}}</span>
  </a>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faGithub, faFacebook, faLinkedin)


export default {
  name: 'Link',
  components: {
    FontAwesomeIcon
  },
  props: {
    label: String,
    icon: Array,
    url: String,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  text-decoration: none;
  color: black;
  padding: 10px;
}

a:hover{
  color: #c00000;
}

.label {
  margin-left: 2px;
}

</style>
