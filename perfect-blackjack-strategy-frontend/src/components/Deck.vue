<template>
  <div>
    <Card :cardNumber="1" suit="club" />
    <Card :cardNumber="2" suit="heart" />
    <Card :cardNumber="3" suit="diamond" />
    <Card :cardNumber="4" suit="spade" />
    <Card :cardNumber="5" suit="club" />
    <Card :cardNumber="6" suit="diamond" />
    <Card :cardNumber="7" suit="heart" />
    <Card :cardNumber="8" suit="spade" />
    <Card :cardNumber="9" suit="club" />
    <Card :cardNumber="10" suit="diamond" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";

export default defineComponent({
  components: {
    Card,
  },
});
</script>
