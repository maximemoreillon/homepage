<template>
  <div class="scroll_indicator">

    <transition name="fade">

      <div
        v-if="shown"
        class="transition_wrapper">
        <div
          class="arrow"
          v-for="i in 3"
          :key="i"
          :style="arrow_styles(i)">
          <ChevronDownIcon />
        </div>
      </div>

    </transition>


  </div>
</template>

<script>

import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'




export default {
  name: 'ScrollIndicator',
  components: {
    ChevronDownIcon
  },
  data: () => ({
    shown: true, // visibile by default, hidden after user has scrolled
  }),
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    // Good practice to remove envent listeners on destroy
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    arrow_styles : (i) => ({
      'animation-delay' : `${5 + 0.1 * i}s`,
    }),
    onScroll(){
      // Hide when user has scrolled below threshold, show again when above
      const scroll_threshold = 100
      if(window.scrollY > scroll_threshold && this.shown) this.shown = false
      if(window.scrollY < scroll_threshold && !this.shown) this.shown = true
    }
  }

}
</script>

<style>

.scroll_indicator {
  position: absolute;
  bottom: 0.5em;
  width: 100%;
  padding: 1em;

  font-size: 200%;
}

.transition_wrapper {
  display: flex;
  flex-direction: column;
}

.arrow {
  margin-top: -0.9em; /* Packing arrows together */
  text-align: center;
  animation-name: arrow-flash;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

@keyframes arrow-flash {
  0% {opacity: 0;}
  10% {opacity: 1;}
  20% {opacity: 0;}
  100% {opacity: 0;}
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
