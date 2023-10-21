<template>
  <div
    :class="`grid grid-cols-1 grid-rows-4 gap-6 w-[550px] text-right text-5xl fixed top-[50%] translate-y-[-50%] right-[50px] ${enabled ? 'text-white' : 'text-gray-300'}`"
  >
    <div
      :class="`control-option cursor-pointer select-none mr-0 ${
        hitSelected ? 'selected' : ''
      }`"
      @click="enabled ? $emit('control-selected', 'hit') : null"
    >
      <div class="inline-block">Hit</div>
      <div class="text-lg inline-block ml-2">1</div>
    </div>
    <div
      :class="`control-option cursor-pointer select-none mr-0 ${
        standSelected ? 'selected' : ''
      }`"
      @click="enabled ? $emit('control-selected', 'stand') : null"
    >
      <div class="inline-block">Stand</div>
      <div class="text-lg inline-block ml-2">2</div>
    </div>
    <div
      :class="`control-option cursor-pointer select-none mr-0 ${
        splitSelected ? 'selected' : ''
      }`"
      @click="enabled ? $emit('control-selected', 'split') : null"
    >
      <div class="inline-block">Split</div>
      <div class="text-lg inline-block ml-2">3</div>
    </div>
    <div
      :class="`control-option cursor-pointer select-none mr-0 ${
        doubleDownSelected ? 'selected' : ''
      }`"
      @click="enabled ? $emit('control-selected', 'double down') : null"
    >
      <div class="inline-block">Double Down</div>
      <div class="text-lg inline-block ml-2">4</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    enabled: Boolean,
  },
  data() {
    return {
      hitSelected: false as boolean,
      standSelected: false as boolean,
      splitSelected: false as boolean,
      doubleDownSelected: false as boolean,
    };
  },
  mounted() {
    document.addEventListener("keydown", (event) => {
      if (this.enabled) {
        switch (event.key) {
          case "1":
            this.hitSelected = true;
            this.$emit("control-selected", "hit");
            setTimeout(() => {
              this.hitSelected = false;
            }, 800);
            break;
          case "2":
            this.standSelected = true;
            this.$emit("control-selected", "stand");
            setTimeout(() => {
              this.standSelected = false;
            }, 800);
            break;
          case "3":
            this.splitSelected = true;
            this.$emit("control-selected", "split");
            setTimeout(() => {
              this.splitSelected = false;
            }, 800);
            break;
          case "4":
            this.doubleDownSelected = true;
            this.$emit("control-selected", "double down");
            setTimeout(() => {
              this.doubleDownSelected = false;
            }, 800);
            break;
        }
      }
    });
  },
});
</script>

<style lang="scss">
.control-option {
  padding-right: 0px;
  transition: padding-right 100ms linear, text-shadow 100ms linear, color 100ms linear;
  &:hover {
    padding-right: 5px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
}

.selected {
  padding-right: 5px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
</style>
