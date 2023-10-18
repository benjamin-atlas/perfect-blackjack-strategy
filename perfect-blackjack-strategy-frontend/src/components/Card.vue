<template>
  <div :class="`card-wrapper absolute top-[-1000%] ${dealt ? 'dealt' : ''}`">
    <div
      :class="`cursor-pointer card-body bg-white w-[150px] h-[200px] rounded-xl relative text-center select-none ${
        suit === 'heart' || suit === 'diamond' ? ' text-red-500' : ''
      }`"
      @click="faceUp = !faceUp"
    >
      <template v-if="faceUp">
        <div class="card-id absolute top-[5px] left-[5px] grid grid-cols-1">
          <span class="card-number text-2xl">{{ cardNumber }}</span>
          <img
            :src="require(`../assets/${suit}.svg`)"
            class="w-[25px] h-[25px] max-w-[25px] max-h-[25px] object-contain object-center"
          />
        </div>
        <div
          class="card-suit-emblems-body w-[80%] h-[80%] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
        >
          <div
            v-bind:class="`suit-emblem-grid w-full h-full items-center justify-items-center card-${cardNumber}`"
          >
            <div
              v-for="(_, index) in new Array(cardNumber)"
              :key="index"
              class="suit-emblem overflow-hidden"
            >
              <img
                class="w-[30px] h-[30px] max-w-[30px] max-h-[30px] object-contain object-center"
                :src="require(`../assets/${suit}.svg`)"
              />
            </div>
          </div>
        </div>
        <div
          class="card-id-bottom absolute bottom-[5px] right-[5px] grid grid-cols-1 rotate-180"
        >
          <span class="card-number text-2xl">{{ cardNumber }}</span>
          <img
            :src="require(`../assets/${suit}.svg`)"
            class="w-[25px] h-[25px] max-w-[25px] max-h-[25px] object-contain object-center"
          />
        </div>
      </template>
      <template v-if="!faceUp">
        <div
          class="w-[90%] h-[95%] face-down absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    cardNumber: Number,
    suit: String,
    faceUp: Boolean,
  },
  data() {
    return {
      dealt: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.dealt = true;
    }, 100);
  },
});
</script>

<style lang="scss">
.card-body {
  box-shadow: 0 -5px 10px rgba(51, 51, 51, 0.5),
    5px 0 10px rgba(51, 51, 51, 0.5);
}

.suit-emblem-grid {
  display: grid;
  padding: 0px 20px;
}

.card-wrapper {
  transition: top 400ms cubic-bezier(0, 0, 0, 0.99);
}

.face-down {
  border: solid red 1px;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 5px,
    #ffffff 5px,
    #ffffff 10px
  );
  background-color: #ff0000;
}

.dealt {
  top: 0% !important;
}

.card-1 {
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
}

.card-2 {
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);

  .suit-emblem {
    &:nth-child(2) {
      transform: rotate(180deg);
    }
  }
}

.card-3 {
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);

  .suit-emblem {
    &:nth-child(3) {
      transform: rotate(180deg);
    }
  }
}

.card-4 {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  .suit-emblem {
    &:nth-child(3),
    &:nth-child(4) {
      transform: rotate(180deg);
    }
  }
}

.card-5 {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  .suit-emblem {
    &:nth-child(1) {
      grid-row: 1;
      grid-column: 1;
    }
    &:nth-child(2) {
      grid-row: 1;
      grid-column: 3;
    }
    &:nth-child(3) {
      grid-row: 3;
      grid-column: 1;
      transform: rotate(180deg);
    }
    &:nth-child(4) {
      grid-row: 3;
      grid-column: 3;
      transform: rotate(180deg);
    }
    &:nth-child(5) {
      grid-row: 2;
      grid-column: 2;
    }
  }
}

.card-6 {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);

  .suit-emblem {
    &:nth-child(5),
    &:nth-child(6) {
      transform: rotate(180deg);
    }
  }
}

.card-7 {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);

  .suit-emblem {
    &:nth-child(1) {
      grid-row: 1;
      grid-column: 1;
    }
    &:nth-child(2) {
      grid-row: 1;
      grid-column: 3;
    }
    &:nth-child(3) {
      grid-row: 3;
      grid-column: 1;
    }
    &:nth-child(4) {
      grid-row: 3;
      grid-column: 3;
    }
    &:nth-child(5) {
      grid-row: 5;
      grid-column: 1;
      transform: rotate(180deg);
    }
    &:nth-child(6) {
      grid-row: 5;
      grid-column: 3;
      transform: rotate(180deg);
    }
    &:nth-child(7) {
      grid-row: 2;
      grid-column: 2;
    }
  }
}

.card-8 {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);

  .suit-emblem {
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8) {
      transform: rotate(180deg);
    }
  }
}

.card-9 {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 1fr);
  .suit-emblem {
    &:nth-child(1) {
      grid-row: 1;
      grid-column: 1;
    }
    &:nth-child(2) {
      grid-row: 1;
      grid-column: 3;
    }
    &:nth-child(3) {
      grid-row: 3;
      grid-column: 1;
    }
    &:nth-child(4) {
      grid-row: 3;
      grid-column: 3;
    }
    &:nth-child(5) {
      grid-row: 5;
      grid-column: 1;
      transform: rotate(180deg);
    }
    &:nth-child(6) {
      grid-row: 5;
      grid-column: 3;
      transform: rotate(180deg);
    }
    &:nth-child(7) {
      grid-row: 7;
      grid-column: 1;
      transform: rotate(180deg);
    }
    &:nth-child(8) {
      grid-row: 7;
      grid-column: 3;
      transform: rotate(180deg);
    }
    &:nth-child(9) {
      grid-row: 2;
      grid-column: 2;
    }
  }
}

.card-10 {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 1fr);
  .suit-emblem {
    &:nth-child(1) {
      grid-row: 1;
      grid-column: 1;
    }
    &:nth-child(2) {
      grid-row: 1;
      grid-column: 3;
    }
    &:nth-child(3) {
      grid-row: 3;
      grid-column: 1;
    }
    &:nth-child(4) {
      grid-row: 3;
      grid-column: 3;
    }
    &:nth-child(5) {
      grid-row: 5;
      grid-column: 1;
      transform: rotate(180deg);
    }
    &:nth-child(6) {
      grid-row: 5;
      grid-column: 3;
      transform: rotate(180deg);
    }
    &:nth-child(7) {
      grid-row: 7;
      grid-column: 1;
      transform: rotate(180deg);
    }
    &:nth-child(8) {
      grid-row: 7;
      grid-column: 3;
      transform: rotate(180deg);
    }
    &:nth-child(9) {
      grid-row: 2;
      grid-column: 2;
    }
    &:nth-child(10) {
      grid-row: 6;
      grid-column: 2;
      transform: rotate(180deg);
    }
  }
}

.card-j {
}

.card-q {
}

.card-k {
}

.card-a {
}
</style>
