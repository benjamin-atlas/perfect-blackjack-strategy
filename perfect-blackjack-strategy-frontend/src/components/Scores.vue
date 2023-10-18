<template>
  <div class="fixed bottom-0 text-white w-full grid grid-cols-3 pb-4">
    <div class="col-start-2 text-center">
      <p class="text-8xl">{{currentScore}}</p>
      <p class="text-2xl">Streak</p>
    </div>
    <div class="text-right pr-8">
      <p class="text-8xl">{{highScore}}</p>
      <p class="text-2xl">Record</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      currentScore: 0,
      highScore: 0,
    };
  },
  methods: {
    increaseCurrentScore() {
      this.currentScore++;

      if (this.currentScore > this.highScore) {
        this.recordHighScore();
      }
    },
    clearCurrentScore() {
      this.currentScore = 0;
    },
    recordHighScore() {
      this.highScore = this.currentScore;
      localStorage.setItem("highScore", this.highScore.toString());
    },
  },
  mounted() {
    const storedValue: string | null = localStorage.getItem("highScore");

    if (storedValue) {
      const numericValue: number = parseInt(storedValue);

      if (!isNaN(numericValue)) {
        this.highScore = numericValue;
      } else {
        console.log("Stored high score is non-numeric.");
      }
    }
  },
});
</script>

<style></style>
