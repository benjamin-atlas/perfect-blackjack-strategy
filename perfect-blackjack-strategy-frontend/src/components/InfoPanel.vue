<template>
  <div
    :class="`info-panel text-white italic text-lg absolute left-[50%] translate-x-[-50%] w-[75%] p-10 ${
      this.showLearnMore ? 'top-[20px]' : 'top-[100%]'
    }`"
  >
    <div class="mb-3">
      In blackjack, there is a theoretically-optimal decision for every hand
      based on the cards in play.
    </div>
    <div class="mb-3">
      This process of choosing the optimal decision for each hand is known as
      <strong>perfect blackjack strategy</strong>.
    </div>
    <div class="mb-3">
      Perfect strategy reduces the advantage the house has against the player,
      though it should be noted that it does not eliminate it entirely.
    </div>
    <div class="mb-3">
      The following chart describes the perfect blackjack strategy for every
      possible hand in the game.
    </div>
    <div class="text-sm">
      <div class="grid grid-cols-11 gap-2 mb-10">
        <div class="text-right">Split</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>A</div>
        <template
          v-for="(playerHand, index) in Object.keys(this.splitGrid)"
          :key="index"
        >
          <div class="text-right">{{ playerHand }}</div>
          <div
            v-for="(decision, index) in this.splitGrid[playerHand]"
            :key="index"
          >
            {{ getShorthandForDecision(decision) }}
          </div>
        </template>
      </div>

      <div class="grid grid-cols-11 gap-2 mb-10">
        <div class="text-right">Ace</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>A</div>
        <template
          v-for="(playerHand, index) in Object.keys(this.aceGrid)"
          :key="index"
        >
          <div class="text-right">{{ playerHand }}</div>
          <div
            v-for="(decision, index) in this.aceGrid[playerHand]"
            :key="index"
          >
            {{ getShorthandForDecision(decision) }}
          </div>
        </template>
      </div>

      <div class="grid grid-cols-11 gap-2">
        <div class="text-right">Hard</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>A</div>
        <template
          v-for="(playerHand, index) in Object.keys(this.hardGrid)"
          :key="index"
        >
          <div class="text-right">{{ playerHand }}</div>
          <div
            v-for="(decision, index) in this.hardGrid[playerHand]"
            :key="index"
          >
            {{ getShorthandForDecision(decision) }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import perfectStrategy from "../assets/perfectStrategy";

export default defineComponent({
  props: {
    showLearnMore: Boolean,
  },
  data() {
    return {
      splitGrid: [] as any,
      aceGrid: [] as any,
      hardGrid: [] as any,
    };
  },
  methods: {
    getShorthandForDecision(decision: string) {
      switch (decision) {
        case "hit":
          return "H";
        case "stand":
          return "ST";
        case "split":
          return "SL";
        case "double down":
          return "D";
        default:
          return "";
      }
    },
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
  transition: top 250ms ease-in-out;
  background-color: black;
}
</style>
