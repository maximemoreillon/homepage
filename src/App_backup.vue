<template>
  <div class="main_wrapper">

    <Logo class="logo"/>

    <div class="right">
      <div class="name">Maxime Moreillon</div>

      <div class="subtitle">IoT & Web solutions</div>

      <div class="links_wrapper">

        <Link
          v-for="(link, index) in links"
          v-bind:key="`link${index}`"
          :icon="link.icon"
          :label="link.label"
          :url="link.url"/>

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
      links: [
        {icon: ['fas','newspaper'], label: 'Articles', url: 'https://cms.maximemoreillon.com'},
        {icon: ['fas','tools'], label: 'Projects', url: 'https://articles.maximemoreillon.com/articles?tag_id=111'},
        {icon: ['fab','linkedin'], label: 'LinkedIn', url: 'https://www.linkedin.com/in/maxime-moreillon'},
        {icon: ['fab','facebook'], label: 'Facebook', url: 'https://www.facebook.com/maxime.moreillon/'},
        {icon: ['fab','instagram'], label: 'Instagram', url: 'https://www.instagram.com/maxime_moreillon/'},
        {icon: ['fab','youtube'], label: 'YouTube', url: 'https://www.youtube.com/channel/UCvk0FMjKbin0FGU9LPe-T_g'},
        {icon: ['fab','docker'], label: 'Docker Hub', url: 'https://hub.docker.com/u/moreillon'},
        {icon: ['fab','github'], label: 'GitHub', url: 'https://github.com/maximemoreillon'},
        {icon: ['fab','gitlab'], label: 'GitLab', url: 'https://gitlab.com/moreillon'},
        {icon: ['fab','npm'], label: 'NPM', url: 'https://www.npmjs.com/~moreillon'},
        {icon: ['fas','graduation-cap'], label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=0gkCupAAAAAJ'},
        {icon: ['fab','medium'], label: 'Medium', url: 'https://medium.com/@m.moreillon'},
      ]
    }

  },
  mounted(){
    window.onload = () => {
      document.body.classList.add("loaded")
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

/*
@font-face {
  font-family: BankGothic;
  src: url(./assets/fonts/BankGothic Regular.ttf);
} */

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;



}

.main_wrapper {

  height: 100vh;

  /* side by side layout */
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
}

.links_wrapper {
  margin-top: 0.5vw;
  //outline: 1px solid red;

  display: grid;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  grid-template-columns: auto auto auto;

  max-height: 15vw;
}

.logo {
  grid-area: logo;
}


.links_column {
  /* grow horizontally */
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}



.main_wrapper > * {
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
  animation-delay: 1s;
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

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}



</style>
