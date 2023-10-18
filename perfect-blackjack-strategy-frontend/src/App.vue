<template>
  <div class="bg-gradient-to-br from-pink-500 via-purple-500 to-purple-600 w-screen h-screen overflow-hidden relative">
    <Table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Table from './components/Table.vue'

export default defineComponent({
  components: {
    Table
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
