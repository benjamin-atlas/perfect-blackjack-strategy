<template>
  <div class="bg-gradient-to-br from-pink-500 via-purple-500 to-purple-600 w-screen h-screen overflow-hidden relative font-ibm-plex-sans">
    <Table ref="tableRef"/>
    <Scores ref="scoreRef" />
    <Controls @control-selected="onControlSelected" />
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
  },
  methods: {
    onControlSelected() {
      (this.$refs.scoreRef as any).increaseCurrentScore();
      (this.$refs.tableRef as any).reset();
    }
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
