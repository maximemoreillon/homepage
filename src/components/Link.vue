<template>
  <a
    class="link"
    :href="link.url">

    <font-awesome-icon
      v-if="link.icon"
      class="icon"
      :icon="link.icon" />

    <img
      v-if="link.image"
      :src="link.image"
      alt="">

    <span
      class="label">
      {{link.label}}
    </span>
  </a>
</template>

<script>





export default {
  name: 'Link',
  components: {

  },
  props: {
    link: Object,
  },
  computed: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  /* font-size: 3vmin; */
  text-decoration: none;
  color: black;
  padding: 1vmin;
  margin: 1vmin;

  transition: color 0.25s;

  /* display: flex;
  flex-direction: column;
  align-items: center; */


  display: inline-flex;
  align-items: center;
  justify-content: flex-start;

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

img {
  width: 1.1em;
  height: 1.1em;
  object-fit: contain;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.label {
  /* margin between icon and label */
  margin: 0.25em;
}

</style>
