<template>
  <div class="home">
    <div class="presentation">
      <router-link class="presentation__link" :to="{name: 'Composition'}">Composition</router-link> 
      <div class="presentation__vs">vs</div>
      <router-link class="presentation__link" :to="{name: 'Options'}">Options</router-link>
    </div>
    <router-link :to="{name: 'Counter'}" class="store">Store w/o vuex</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
<style lang="scss">
  .home {
    display:grid;
    place-items: center;
    height:100%;
  }

  .presentation {
    text-align: center;
    &__link {
      font-size: 64px;
      color:white;
      text-decoration: none;
      font-weight: bold;
      transition: all .2s;
    }

    &__link:hover {
      opacity: 0.5;
    }

    &__vs {
      font-size: 42px;
      color:#ececec;
      font-style: italic;
    }
  }

  .store {
    position: fixed;
    right: 8px;
    bottom: 8px;
    color: white;
  }
</style>
