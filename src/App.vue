<template>
  <div id="app">

    <div class="">
      <Logo/>
    </div>

    <div class="right">
      <div class="name">Maxime Moreillon</div>

      <div class="subtitle">IoT, AI & Web solutions</div>

      <div class="links_wrapper">
        <div class="links_column">
          <Link :icon="['fas','newspaper']" label="Articles" url="https://cms.maximemoreillon.com"/>
          <Link :icon="['fas','tools']" label="Projects" url="https://cms.maximemoreillon.com/?tag_id=111"/>

        </div>
        <div class="links_column">
          <Link :icon="['fab','facebook']" label="Facebook" url="https://www.facebook.com/maxime.moreillon"/>
          <Link :icon="['fab','linkedin']" label="Linkedin" url="https://www.linkedin.com/in/maxime-moreillon/"/>
        </div>
        <div class="links_column">
          <Link :icon="['fab','github']" label="Github" url="https://github.com/maximemoreillon"/>
          <Link :icon="['fas','graduation-cap']" label="Google scholar" url="https://scholar.google.com/citations?user=0gkCupAAAAAJ&hl=en"/>
        </div>

        <!--<Link :icon="['fab','npm']" label="npm" url="https://www.npmjs.com/~moreillon"/>-->
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

  /* side by side layout */
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
}

.links_wrapper {
  margin-top: 0.5vw;
  display: flex;
}

.links_column {
  /* grow horizontally */
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}



#app > * {
  /* margin between logo and text */
  margin: 2vw;
}


.right {
  /* contains name, subtitle and links */
  display: flex;
  flex-direction: column;


  opacity: 0; /* needs to be transparent until loading complete */

}

.name {
  font-size: 6vw;
}

.subtitle {
  font-size: 2.5vw;
}

body.loaded .right  {
  animation-name: fade;
  animation-delay: 1;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

@keyframes fade {
  0%   {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
