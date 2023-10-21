<template>
  <div
    class="bg-gradient-to-br from-pink-500 via-purple-500 to-purple-600 w-screen h-screen overflow-hidden relative font-ibm-plex-sans"
  >
    <div class="text-white ml-5 text-8xl">Perfect Blackjack Strategy</div>
    <div class="text-white ml-12 text-3xl">by Benjamin Atlas</div>
    <div class="text-white italic ml-12 mb-5 mt-10">
      In blackjack, there is a theoretically-optimal decision for every hand
      based on the cards in play.
    </div>
    <div class="text-white italic ml-12 mb-5">
      This process of choosing the optimal decision for each hand is known as
      <strong>perfect blackjack strategy</strong>.
    </div>
    <div class="text-white italic ml-12 mb-5">
      Perfect strategy reduces the advantage the house has against the player,
      though it should be noted that it does not eliminate it entirely.
    </div>
    <div
      class="text-white text-2xl learn-more fixed bottom-5 left-5 cursor-pointer select-none"
      @click="showChart = !showChart"
    >
      {{ showChart ? "Hide" : "Show" }} Chart
      <div class="text-sm inline">[space]</div>
    </div>
    <Table
      ref="tableRef"
      @control-state-changed="
        (enabled) => (controlsEnabled = enabled)
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
    <InfoPanel :showChart="showChart" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Controls from "./components/Controls.vue";
import InfoPanel from "./components/InfoPanel.vue";
import Result from "./components/Result.vue";
import Scores from "./components/Scores.vue";
import Table from "./components/Table.vue";

export default defineComponent({
  components: {
    Controls,
    InfoPanel,
    Result,
    Scores,
    Table,
  },
  data() {
    return {
      controlsEnabled: false as boolean,
      showChart: false as boolean,
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
  mounted() {
    document.title = "Perfect Blackjack Strategy";
    document.addEventListener("keydown", (event) => {
      if (event.key === " ") {
        this.showChart = !this.showChart;
      }
    });
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.learn-more {
  z-index: 2;
}
</style>
