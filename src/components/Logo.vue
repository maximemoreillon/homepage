<template>
  <!-- Logo wrapper for global rotation -->
  <div class="logo_wrapper" ref="logoWrapper">

    <!-- The full logo that overlays with the parts once animation is done
     This is used to hide seams between logo parts -->
    <div class="logo_layer logo_layer_full">
      <img
        class="logo_part logo_full"
        src="logo/logo.svg"
        alt="Maxime Moreillon Logo">
    </div>

    <!-- Logo layers that can rotate independantly -->
    <div
      v-for="layer in [1,2,3]"
      :key="`layer_${layer}`"
      :class="`logo_layer logo_layer_${layer}`"
      >

      <div
        v-for="part in [1,2,3]"
        :key="`layer_${layer}_part_${part}`"
        :class="`layer_${layer}_part_${part}`"
        >

        <img
          :class="`logo_part logo_part_${(layer-1) * 3 + part}`"
          :src="`/logo/parts/${(layer-1) * 3 + part}.svg`"
          :alt="`logo_part_${(layer-1) * 3 + part}`">

      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'Logo',
  data(){
    return {
    }
  },
  mounted(){
    window.onload = () => {
      this.$refs.logoWrapper.classList.add("loaded")
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logo_wrapper{
  /* This is a rotating frame for all logo elements */

  /* sizing */
  /*
  width: 20vw;
  height: 20vw;
  */

  /* IE compatibility */
  position: relative;

  /* centering */
  display: flex;
  justify-content: center;
  align-items: center;

  /* overall rotation of the logo */
  animation-name: rotation;
  animation-duration: 100s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}


/* Layouting */
.logo_layer {

  /* positioning and sizing */
  position: absolute;
  width: 100%;
  height: 100%;

  /* Needed for IE */
  top: 0;
  left: 0;

  /* centering content*/
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0; /* needs to be transparent until loading complete */

  /* animations */
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

.logo_part {

  /* positioning and sizing */
  position: absolute;
  width: 100%;
  height: 100%;

  /* Needed for IE */
  top: 0;
  left: 0;

}

.logo_layer_full {
  z-index: 10;
}



body.loaded .logo_layer_1  {
  animation-name: layer_1_apparition;
  animation-delay: 0;
  animation-duration: 2.5s;
}

body.loaded .logo_layer_2 {
  animation-name: layer_2_apparition;
  animation-delay: 0.25s;
  animation-duration: 2.25s;
}

body.loaded .logo_layer_3{
  animation-name: layer_3_apparition;
  animation-delay: 0.5s;
  animation-duration: 2s;
}

body.loaded .logo_layer_full{
  animation-name: fade;
  animation-duration: 0.5s;
  animation-delay: 2.5s;
}


/* ANIMATIONS */
@keyframes rotation {
  0%   {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes layer_1_apparition {
  0%   {
    opacity: 0;
    transform: scale(1.3) rotate(540deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes layer_2_apparition {
  0%   {
    opacity: 0;
    transform: scale(1.3) rotate(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(360deg);
  }
}

@keyframes layer_3_apparition {
  0%   {
    opacity: 0;
    transform: scale(1.3) rotate(180deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

</style>
