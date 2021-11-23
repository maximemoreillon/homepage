<template>
  <a class="link" v-bind:href="url">
    <font-awesome-icon
      class="icon"
      v-bind:icon="icon" />
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

  /*
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  */
}

a:hover{
  color: #c00000;
}

.icon {
  /*
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 2em;
  */
  width: 2em;

}

.label {
  /* margin between icon and lavel */
  //margin-left: 0.5vw;
}

</style>
