<template>
  <div id="app">

    <div class="">
      <Logo/>
    </div>

    <div class="right">
      <div class="name">
        Maxime Moreillon
      </div>

      <div class="subtitle">
        IoT / AI / WEB solutions
      </div>

      <div class="links">
        <Link :icon="['fab','github']" label="Github" url="https://github.com/maximemoreillon"/>
        <Link :icon="['fab','facebook']" label="Facebook" url="https://github.com/maximemoreillon"/>
        <Link :icon="['fab','linkedin']" label="Linkedin" url="https://github.com/maximemoreillon"/>
      </div>
    </div>





  </div>
</template>

<script>

import Logo from '@/components/Logo.vue'
import Link from '@/components/Link.vue'




export default {
  name: 'App',
  components: {
    Logo,
    Link
  },
  data(){
    return {
    }

  },
  mounted(){
    window.onload = function() {
      document.body.classList.add("loaded");
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Roboto';


  height: 100vh;
  width: 100%;
}

#app{
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
}

.links {
  display: flex;
  flex-direction: column;
}

.links > * {
}

#app > * {
  margin: 25px;
}

.right {
  display: flex;
  flex-direction: column;
}
.name {
  font-size: 200%;
}

</style>
