<template>
  <div class="bg-gradient-to-br from-pink-500 via-purple-500 to-purple-600 w-screen h-screen overflow-hidden relative font-ibm-plex-sans">
    <Table />
    <Scores ref="scoreRef" />
    <Controls @control-selected="this.$refs.scoreRef.increaseCurrentScore()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Controls from './components/Controls.vue'
import Scores from './components/Scores.vue'
import Table from './components/Table.vue'

export default defineComponent({
  components: {
    Controls,
    Scores,
    Table
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
