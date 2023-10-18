<template>
  <div class="fixed top-0 left-[50%] translate-x-[-50%] pt-20 grid grid-cols-1 grid-rows-1">
    <div
      id="success-message"
      :class="`width-full text-center result-message ${
        showSuccess ? 'opacity-100' : 'opacity-0'
      }`"
    >
      <font-awesome-icon
        icon="check"
        class="text-white bg-green-500 rounded-full h-[100px] w-[100px] p-10"
      />
      <div class="text-white text-3xl mt-10">
        <i><strong>Correct!</strong></i>
      </div>
    </div>
    <div
      id="error-message"
      :class="`width-full text-center result-message ${
        showError ? 'opacity-100' : 'opacity-0'
      }`"
    >
      <font-awesome-icon
        icon="times"
        class="text-white bg-red-500 rounded-full h-[100px] w-[100px] p-10"
      />
      <div class="text-white text-3xl mt-10">
        Correct choice:
        <i
          ><strong>{{ this.correctMove }}</strong></i
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      showSuccess: false,
      showError: false,
      correctMove: "",
    };
  },
  methods: {
    success() {
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
      }, 2250);
    },

    error(correctMove: string) {
      this.correctMove = correctMove;
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 2250);
    },
  },
});
</script>

<style lang="scss">
.result-message {
  transition: opacity 75ms linear;
}

#success-message,
#error-message {
  grid-row: 1;
  grid-column: 1;
}
</style>
