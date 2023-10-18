<template>
  <div
    class="bg-gradient-to-br from-pink-500 via-purple-500 to-purple-600 w-screen h-screen overflow-hidden relative font-ibm-plex-sans"
  >
    <Table
      ref="tableRef"
      @control-state-changed="
        (controlsEnabled) => (this.controlsEnabled = controlsEnabled)
      "
      @on-correct-move="onCorrectMove"
      @on-incorrect-move="onIncorrectMove"
    />
    <Scores ref="scoreRef" />
    <Controls
      @control-selected="onControlSelected"
      :enabled="controlsEnabled"
    />
    <Result ref="resultRef" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Controls from "./components/Controls.vue";
import Result from "./components/Result.vue";
import Scores from "./components/Scores.vue";
import Table from "./components/Table.vue";

export default defineComponent({
  components: {
    Controls,
    Result,
    Scores,
    Table,
  },
  data() {
    return {
      controlsEnabled: false as boolean,
    };
  },
  methods: {
    onControlSelected(move: string) {
      (this.$refs.tableRef as any).validateUserChoice(move);
    },
    onCorrectMove() {
      (this.$refs.resultRef as any).success();
      (this.$refs.scoreRef as any).increaseCurrentScore();
      (this.$refs.tableRef as any).reset();
    },
    onIncorrectMove(move: string) {
      (this.$refs.resultRef as any).error(move);
      (this.$refs.scoreRef as any).clearCurrentScore();
      (this.$refs.tableRef as any).reset();
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
