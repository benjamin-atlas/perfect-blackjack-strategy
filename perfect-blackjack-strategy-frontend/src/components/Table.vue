<template>
  <div class="grid gap-16 playing-table">
    <div class="relative" v-for="(cardInfo, index) in dealerHand" :key="index">
      <Card
        :cardNumber="cardInfo.cardNumber"
        :suit="cardInfo.suit"
        :faceUp="cardInfo.faceUp"
      />
    </div>
    <div
      class="relative"
      v-for="(cardInfo, index) in playerHands[0]"
      :key="index"
    >
      <Card
        :cardNumber="cardInfo.cardNumber"
        :suit="cardInfo.suit"
        :faceUp="cardInfo.faceUp"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";

export default defineComponent({
  components: {
    Card,
  },
  data() {
    return {
      dealerHand: [] as any[],
      playerHands: [[]] as any[][],
    };
  },
  mounted() {
    this.deal();
  },
  methods: {
    getRandomCard() {
      let newCard: any;

      do {
        newCard = {
          cardNumber: Math.floor(Math.random() * 9) + 2,
          suit: ["club", "spade", "heart", "diamond"][
            Math.floor(Math.random() * 4)
          ],
          faceUp: true,
        };
      } while (
        this.dealerHand.find(
          (card) =>
            newCard.cardNumber === card.cardNumber && newCard.suit === card.suit
        ) ||
        this.playerHands[0].find(
          (card) =>
            newCard.cardNumber === card.cardNumber && newCard.suit === card.suit
        )
      );

      return newCard;
    },

    deal() {
      setTimeout(() => {
        this.dealerHand.push(this.getRandomCard());
      }, 200);

      setTimeout(() => {
        let newCard: any = this.getRandomCard();
        newCard.faceUp = false;
        this.dealerHand.push(newCard);
      }, 350);

      setTimeout(() => {
        this.playerHands[0].push(this.getRandomCard());
      }, 1200);
      setTimeout(() => {
        this.playerHands[0].push(this.getRandomCard());
      }, 1350);
    },
  },
});
</script>

<style lang="scss">
.playing-table {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) rotateX(-58deg) rotateZ(45deg);
  background-color: rgb(64, 176, 124);
  padding: 100px;
  box-shadow: 0 -5px 10px rgba(51, 51, 51, 0.5),
    5px 0 10px rgba(51, 51, 51, 0.5);
  grid-template-rows: repeat(2, 200px);
  grid-template-columns: repeat(2, 150px);
}
</style>
