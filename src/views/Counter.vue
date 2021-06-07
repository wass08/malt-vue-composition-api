<template>
  <div class="counter">
    <div class="counter__number">{{store.state.counter}}</div>
    <div class="actions">
      <div class="actions__button" @click="store.methods.decreaseCounter">-</div>
      <div class="actions__button" @click="store.methods.increaseCounter">+</div>
    </div>
  </div>
</template>
<script>
import { inject } from 'vue';

export default {
  setup() {
    const store = inject('store', store);
    return {
      store,
    }
  },
}
</script>
<style lang="scss" scoped>
  .counter {
    margin-top: 84px;
    text-align: center;
    color:white;
    font-weight: bold;

    &__number {
      font-size: 128px;
    }
  }

  .actions {
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    gap: 2px;

    &__button {
      padding: 16px 24px;
      background: black;
      font-size: 24px;
      opacity: 0.64;
      transition: opacity .2s;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
    }

    &__button:first-of-type {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &__button:last-of-type {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &__button:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
</style>