<template>
  <div
    :class="`info-panel text-white italic text-lg absolute left-[50%] translate-x-[-50%] w-[75%] p-10 translate-y-[-50%] ${
      showLearnMore ? 'top-[50%]' : 'top-[150%]'
    }`"
  >
    <div class="w-1/2 inline-block align-top">
      <div class="mb-8">
        <DecisionTable
          :grid="aceGrid"
          description="If you have an ace..."
          leftLabel="Other Card"
        />
      </div>
      <div class="mb-8">
        <DecisionTable
          :grid="splitGrid"
          description="If you have two of the same card..."
          leftLabel="Player Card"
        />
      </div>
    </div>
    <div class="w-1/2 inline-block">
      <div class="mb-4">
        <DecisionTable
          :grid="hardGrid"
          description="Otherwise - "
          leftLabel="Card Sum"
        />
      </div>
      <div class="grid grid-cols-2 grid-rows-2">
        <div class="mb-2">
          <div
            class="h-[29px] w-[70px] border inline-block text-center bg-purple-500"
          >
            H
          </div>
          - Hit
        </div>
        <div class="mb-2">
          <div
            class="h-[29px] w-[70px] border inline-block text-center bg-pink-500"
          >
            ST
          </div>
          - Stand
        </div>
        <div class="mb-2">
          <div
            class="h-[29px] w-[70px] border inline-block text-center bg-blue-500"
          >
            SP
          </div>
          - Split
        </div>
        <div class="mb-2">
          <div
            class="h-[29px] w-[70px] border inline-block text-center bg-yellow-500"
          >
            D
          </div>
          - Double Down
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import perfectStrategy from "../assets/perfectStrategy";
import DecisionTable from "./DecisionTable.vue";

export default defineComponent({
  props: {
    showLearnMore: Boolean,
  },
  components: { DecisionTable },
  data() {
    return {
      splitGrid: [] as any,
      aceGrid: [] as any,
      hardGrid: [] as any,
    };
  },
  mounted() {
    this.splitGrid = perfectStrategy.splits;
    this.aceGrid = perfectStrategy.aces;
    this.hardGrid = perfectStrategy.hard;
  },
});
</script>

<style lang="scss">
.info-panel {
  transition: top 200ms ease-in-out;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.decision-grid {
  grid-template-columns: repeat(11, 70px);
}
</style>
