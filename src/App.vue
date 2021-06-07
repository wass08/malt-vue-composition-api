<template>
  <router-link class="back" v-if="this.$route.name != 'Home'" :to="{name: 'Home'}">⥢ Retour</router-link> 
  <router-view/>
</template>
<script>

import { provide } from 'vue';
import store from '@/store';

export default {
  setup() {
    provide('store', store);
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
}

html, body {
  margin: 0;
  height: 100%;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  overflow-y: auto;
}

body {
  padding: 64px;
}

@media screen and (max-width: 789px) {
  body {
    padding: 24px;
  }
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 680px;
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
}

h1 {
  color: white;
  padding: 16px 0;
}

.back {
  color: white;
  text-decoration: none;
}


.list {
  &__users {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }


  &__empty {
    text-align: center;
    color: white;
  }
}

@media screen and (max-width: 789px) {
  .list {
    &__users {
      grid-template-columns: 1fr;
    }
  }
}

.loader {
  display:flex;
  justify-content: center;
}

.user {
  border-radius: 4px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255, 255, 255, 0.25);

  &__infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    color:black;
  }

  &__nom {
    font-weight: bold;
    font-size: 18px;
    color: white;
  }

  &__image {
    width: 84px;
    height: 84px;
    background-size: cover;
    background-position: center center;
    border-radius: 4px;
  }
}

.searchbar {
  padding: 16px 0;
  
  input {
    height: 32px;
    border-radius: 4px;
    border: none;
    width: 100%;
    padding: 0 8px;
  }
}

.filters {
  background: white;
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 16px;
}

.filter {
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  &__title {
    color: black;
    font-weight: bold;
    margin-bottom: 4px;
  }

  &__options {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__option {
    padding: 4px 0;
    border-bottom: solid 2px transparent;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }

  &__option:hover {
    cursor: pointer;
    border-bottom: solid 2px #ececec;
  }

  &__option--current {
    color: black;
    font-weight: bold;
  }
}
</style>
