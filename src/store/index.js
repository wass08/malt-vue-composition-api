import { reactive } from 'vue';

const state = reactive({
  counter: 42,
});


const methods = {
  increaseCounter() {
    state.counter++;
  },
  decreaseCounter(){
    state.counter--;
  }
};

export default {
  state,
  methods
}