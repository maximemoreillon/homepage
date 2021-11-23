<template>
  <div class="subtitle">
    IoT / Web / DevOps




  </div>
</template>

<script>





export default {
  name: 'SubtitleCarousel',
  components: {

  },
  data(){
    return {
      index: 0,
      items: [
        'Web development',
        'IoT',
        'DevOps',
        '3D printing',
      ]
    }
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {

  }

}
</script>

<style>
.subtitle {
  margin-top: 0.5em;
  font-size: 4vmin;
  color: #666666;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
