<template>
  <div class="app">


    <!-- Would benefit from being a component -->
    <div class="landing">

      <Logo class="logo"/>

      <div class="header">
        <h1>Maxime<br>MOREILLON</h1>
        <SubtitleCarousel />
      </div>

      <ScrollIndicator />

    </div>


    <section
      v-for="category in categories"
      :key="category">
      <div class="section_title">{{category}}</div>
      <div class="links_wrappper">
        <Link
          v-for="(link, index) in links.filter(l => l.category === category)"
          v-bind:key="`link_${index}`"
          :link="link"/>
      </div>
    </section>




  </div>
</template>

<script>

import 'vue-material-design-icons/styles.css'
import links from '@/links.js'
import SubtitleCarousel from '@/components/SubtitleCarousel.vue'

import ScrollIndicator from '@/components/ScrollIndicator.vue'
import Logo from '@/components/Logo.vue'
import Link from '@/components/Link.vue'


export default {
  name: 'App',
  components: {
    ScrollIndicator,
    SubtitleCarousel,
    Logo,
    Link,
  },
  mounted() {
    // Add loaded class to body so as to trigger css animations
    window.addEventListener("load", () => { document.body.classList.add("loaded") })
  },
  data(){
    return {
      links
    }

  },
  computed: {
    categories(){
      return this.links.reduce( (acc,{category}) => {
        if(!acc.includes(category)) acc.push(category)
        return acc
      },[])
    }
  },

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
  font-size: 140%;
}

.app {

}

.landing {
  height: 100vh;
  position: relative; /* For ScrollIndicator */
  display: grid;
  grid-template-areas:
    '. . . .'
    '. logo header .'
    '. . . .';

  grid-template-columns: 1fr auto auto 1fr;
  grid-template-rows: 2fr auto 3fr;
  align-items: center;
  grid-gap: 5vmin;
}

.logo{
  grid-area: logo;
  width: 27vmin;
  height: 27vmin;


}

.header {
  grid-area: header;
  /* Default to invisible */
  opacity: 0;
}

body.loaded .header  {
  animation-name: header_fade;
  animation-delay:0s;
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

h1 {
  /* Name */
  margin: 0;
  font-size: 8vmin;
}


.links_wrappper {


  margin-top: 1em;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}



section {
  text-align: center;
  padding: 1em 1em;
  margin-bottom: 3em;
}



.section_title {
  margin-top: 0;
  font-size: 4vmin;
}

@keyframes header_fade {
  0% {
    /* transform: translateX(-2%); */
    opacity: 0;
  }
  100% {
    /* transform: translateX(0); */
    opacity: 1;
  }
}



@media only screen and (max-width: 600px) {
  body {
    /* Nothing for now */
  }
}



</style>
