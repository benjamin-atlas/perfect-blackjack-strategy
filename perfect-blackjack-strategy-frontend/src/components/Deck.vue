<template>
  <div>
    <Card />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from './Card.vue'

@Options({
  components: {
    Card
  }
})
export default class Deck extends Vue {}
</script>

<style lang="scss">
</style>
