<template>
  <a class="link" v-bind:href="url">
    <font-awesome-icon v-bind:icon="icon" />
    <span class="label">{{label}}</span>
  </a>
</template>

<script>





export default {
  name: 'Link',
  components: {

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
  font-size: 1.75vw;
  text-decoration: none;
  color: black;
  padding: 0.5vw 0;

  transition: color 0.25s;
}

a:hover{
  color: #c00000;
}

.label {
  /* margin between icon and lavel */
  margin-left: 0.5vw;
}

</style>
