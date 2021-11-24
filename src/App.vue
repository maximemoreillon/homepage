<template>
  <div class="app">


    <!-- Would benefit from being a component -->
    <div class="landing">

      <Logo class="logo"/>

      <div class="header">
        <h1 class="first_name">Maxime</h1>
        <h1 class="family_name">Moreillon</h1>
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
          v-bind:key="`link${index}`"
          :link="link"/>
      </div>
    </section>




  </div>
</template>

<script>

import 'vue-material-design-icons/styles.css'

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
      links: [
        {icon: ['fas','newspaper'], label: 'Articles', url: 'https://cms.maximemoreillon.com', category: 'Software development'},
        {icon: ['fas','tools'], label: 'Projects', url: 'https://articles.maximemoreillon.com/articles?tag_id=111', category: 'Software development'},
        {icon: ['fab','medium'], label: 'Medium', url: 'https://moreillon.medium.com/', category: 'Software development'},
        {icon: ['fab','facebook'], label: 'Facebook', url: 'https://www.facebook.com/maxime.moreillon', category: 'Social media'},
        {icon: ['fab','twitter'], label: 'Twitter', url: 'https://twitter.com/m_moreillon', category: 'Social media'},
        {icon: ['fab','instagram'], label: 'Instagram', url: 'https://www.instagram.com/maxime_moreillon/', category: 'Social media'},
        {icon: ['fab','youtube'], label: 'YouTube', url: 'https://www.youtube.com/channel/UCvk0FMjKbin0FGU9LPe-T_g', category: 'Social media'},
        {icon: ['fab','docker'], label: 'Docker Hub', url: 'https://hub.docker.com/u/moreillon', category: 'Software development'},
        {icon: ['fab','github'], label: 'GitHub', url: 'https://github.com/maximemoreillon', category: 'Software development'},
        {icon: ['fab','gitlab'], label: 'GitLab', url: 'https://gitlab.com/moreillon', category: 'Software development'},
        {icon: ['fab','npm'], label: 'NPM', url: 'https://www.npmjs.com/~moreillon', category: 'Software development'},
        {icon: ['fas','graduation-cap'], label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=0gkCupAAAAAJ', category: 'Work'},
        {icon: ['fab','linkedin'], label: 'LinkedIn', url: 'https://www.linkedin.com/in/maxime-moreillon', category: 'Work'},
        {icon: ['fas','award'], label: 'Patents', url: 'https://patents.google.com/?inventor=Maxime+MOREILLON', category: 'Work'},
        {icon: ['fas','tools'], label: 'Projects', url: 'https://articles.maximemoreillon.com/articles?tag_id=111', category: 'Mechatronics'},
        {image: require('@/assets/images/oshwlab.png'), label: 'OSHWLab', url: 'https://oshwlab.com/m.moreillon', category: 'Mechatronics'},
        {image: require('@/assets/images/artifacthub.png'), label: 'Artifact Hub', url: 'https://artifacthub.io/packages/search?user=moreillon', category: 'Software development'},
        {image: require('@/assets/images/thingiverse.svg'), label: 'Thingiverse', url: 'https://www.thingiverse.com/moreillon/designs', category: 'Mechatronics'},
        {icon: ['fab','instagram'], label: 'Instagram', url: 'https://www.instagram.com/maxime_moreillon_modeling', category: 'Modeling'},
        {image: require('@/assets/images/azs.jpg'), label: 'Agency', url: 'https://azs-group.jp/manage_post/990', category: 'Modeling'},
        {image: require('@/assets/images/logo.png'), label: 'Profile', url: 'https://modeling.maximemoreillon.com', category: 'Modeling'},

      ]
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
.first_name { }

.family_name {
  text-transform: uppercase;
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
