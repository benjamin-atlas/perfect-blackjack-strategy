<template>
  
  <div class="relative inline-block">
    <div class="text-base absolute top-[-20px] left-0 font-bold">{{ description }}</div>
    <div class="text-sm absolute top-[-20px] left-[50%] translate-x-[-50%]">Dealer Card</div>
    <div
      class="absolute top-[50%] translate-y-[-50%] left-[-50px] rotate-[270deg] text-sm"
    >
      {{ leftLabel }}
    </div>
    <div class="decision-grid grid mt-2 mb-4 text-center text-xl">
      <div class="border"></div>
      <div class="border-b border-r border-t bg-green-400">2</div>
      <div class="border-b border-r border-t bg-green-400">3</div>
      <div class="border-b border-r border-t bg-green-400">4</div>
      <div class="border-b border-r border-t bg-green-400">5</div>
      <div class="border-b border-r border-t bg-green-400">6</div>
      <div class="border-b border-r border-t bg-green-400">7</div>
      <div class="border-b border-r border-t bg-green-400">8</div>
      <div class="border-b border-r border-t bg-green-400">9</div>
      <div class="border-b border-r border-t bg-green-400">10</div>
      <div class="border-b border-r border-t bg-green-400">A</div>
      <template
        v-for="(playerHand, rowIndex) in Object.keys(grid)"
        :key="rowIndex"
      >
        <div class="text border-b border-r border-l bg-green-400">{{ playerHand }}</div>
        <div
          v-for="(decision, columnIndex) in grid[playerHand]"
          :key="columnIndex"
          :class="`border-r border-b ${getColorForDecision(decision)}`"
        >
          {{ getShorthandForDecision(decision) }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    grid: {
      type: Object,
      required: true,
    },
    description: String,
    leftLabel: String,
  },
  methods: {
    getColorForDecision(decision: string) {
      switch (decision) {
        case "hit":
          return "bg-purple-500";
        case "stand":
          return "bg-pink-500";
        case "split":
          return "bg-blue-500";
        case "double down":
          return "bg-yellow-500";
      }
    },
    getShorthandForDecision(decision: string) {
      switch (decision) {
        case "hit":
          return "H";
        case "stand":
          return "ST";
        case "split":
          return "SP";
        case "double down":
          return "D";
        default:
          return "";
      }
    },
  },
});
</script>

<style lang="scss"></style>
