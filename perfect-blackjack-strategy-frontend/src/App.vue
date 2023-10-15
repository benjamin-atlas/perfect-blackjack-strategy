<template>
  <div class="bg-gradient-to-br from-pink-500 via-purple-500 to-purple-600 h-screen">
    <Deck />
  </div>

  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Deck from './components/Deck.vue'

@Options({
  components: {
    Deck
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
