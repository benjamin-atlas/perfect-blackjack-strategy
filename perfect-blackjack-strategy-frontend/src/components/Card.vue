<template>
  <div class="card-body">
    <div class="card-id">
      <span class="card-number">7</span>
      <span class="suit-emblem">&lt;&gt;</span>
    </div>
    <div class="card-suit-emblems-body">
      <span class="suit-emblem">&lt;&gt;</span>
      <span class="suit-emblem">&lt;&gt;</span>
      <span class="suit-emblem">&lt;&gt;</span>
      <span class="suit-emblem">&lt;&gt;</span>
      <span class="suit-emblem">&lt;&gt;</span>
      <span class="suit-emblem">&lt;&gt;</span>
      <span class="suit-emblem">&lt;&gt;</span>
    </div>
    <div class="card-id-bottom">
      <span class="card-number">7</span>
      <span class="suit-emblem">&lt;&gt;</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: { }
})
export default class Card extends Vue {}
</script>

<style lang="scss">
</style>
