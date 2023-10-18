<template>
  <div
    class="text-white grid grid-cols-1 grid-rows-4 gap-6 w-[550px] text-right text-5xl fixed top-[50%] translate-y-[-50%] right-[50px]"
  >
    <div
      class="control-option cursor-pointer select-none mr-0"
      @click="this.$emit('control-selected', 'hit')"
    >
      Hit
    </div>
    <div
      class="control-option cursor-pointer select-none mr-0"
      @click="this.$emit('control-selected', 'stand')"
    >
      Stand
    </div>
    <div
      class="control-option cursor-pointer select-none mr-0"
      @click="this.$emit('control-selected', 'split')"
    >
      Split
    </div>
    <div
      class="control-option cursor-pointer select-none mr-0"
      @click="this.$emit('control-selected', 'doubledown')"
    >
      Double Down
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
.control-option {
  padding-right: 0px;
  transition: padding-right 100ms linear, text-shadow 100ms linear;
  &:hover {
    padding-right: 5px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
}
</style>
