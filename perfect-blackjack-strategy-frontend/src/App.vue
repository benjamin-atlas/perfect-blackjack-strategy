<template>
  <div class="bg-gradient-to-br from-pink-500 via-purple-500 to-purple-600 h-screen">
    <Deck />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Deck from './components/Deck.vue'

export default defineComponent({
  components: {
    Deck
  }
});
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
