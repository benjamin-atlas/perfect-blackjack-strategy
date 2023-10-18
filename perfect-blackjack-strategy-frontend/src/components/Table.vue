<template>
  <div v-if="correctMove">Correct move is to {{correctMove}}</div>
  <div class="grid gap-16 playing-table">
    <div class="relative" v-for="(cardInfo, index) in dealerHand" :key="index">
      <Card
        :cardNumber="cardInfo.cardNumber"
        :suit="cardInfo.suit"
        :faceUp="cardInfo.faceUp"
        ref="dealerHandRef"
      />
    </div>
    <div class="relative" v-for="(cardInfo, index) in playerHand" :key="index">
      <Card
        :cardNumber="cardInfo.cardNumber"
        :suit="cardInfo.suit"
        :faceUp="cardInfo.faceUp"
        ref="playerHandRef"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";
import perfectStrategy from "../assets/perfectStrategy"

export default defineComponent({
  components: {
    Card,
  },
  data() {
    return {
      dealerHand: [] as any[],
      playerHand: [] as any[],
      correctMove: null as string | null
    };
  },
  emits: ['control-state-changed', 'on-correct-move', 'on-incorrect-move'],
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
        this.playerHand.find(
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
        this.playerHand.push(this.getRandomCard());
      }, 900);
      setTimeout(() => {
        this.playerHand.push(this.getRandomCard());
        this.computeCorrectMove();
        this.$emit('control-state-changed', true);
      }, 1050);
    },

    clearCards() {
      (this.$refs.dealerHandRef as any).forEach((cardInstance: any) =>
        cardInstance.clear()
      );
      (this.$refs.playerHandRef as any).forEach((cardInstance: any) =>
        cardInstance.clear()
      );

      setTimeout(() => { 
        this.dealerHand = [];
        this.playerHand = [];
        this.deal();
        }, 400);
    },

    reset() {
      this.$emit('control-state-changed', false);
      this.clearCards();
      this.correctMove = null;
    },

    computeCorrectMove() {
      if (this.playerHand[0].cardNumber === this.playerHand[1].cardNumber) {
        const correctStrategySet: any = perfectStrategy.splits;
        const playerValueArray: string[] = correctStrategySet[this.playerHand[0].cardNumber];
        this.correctMove = playerValueArray[this.dealerHand[0].cardNumber - 1];
      } else if (this.playerHand[0].cardNumber === 11 || this.playerHand[1].cardNumber === 11) {
        const correctStrategySet: any = perfectStrategy.aces;
        const playerValueArray: string[] = correctStrategySet[
          this.playerHand[0].cardNumber === 11 ? this.playerHand[1].cardNumber : this.playerHand[0].cardNumber // Use the one that isn't the ace
        ];
        this.correctMove = playerValueArray[this.dealerHand[0].cardNumber - 1];
      } else {
        const correctStrategySet: any = perfectStrategy.hard;
        const playerValueArray: string[] = correctStrategySet[this.playerHand[0].cardNumber + this.playerHand[1].cardNumber];
        this.correctMove = playerValueArray[this.dealerHand[0].cardNumber - 1];
      }
    },

    validateUserChoice(move: string) {
      if (move === this.correctMove) {
        this.$emit('on-correct-move');
      } else {
        this.$emit('on-incorrect-move', this.correctMove);
      }
    }
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
