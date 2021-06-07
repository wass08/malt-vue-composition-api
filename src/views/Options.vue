<template>
  <div>
    <h1>
      Options API
    </h1>
    <div class="container">
      <div class="searchbar">
        <input type="text" placeholder="Rechercher un nom, prénom..." v-model="search">
      </div>
      <div class="filters">
        <div class="filter">
          <div class="filter__title">📍 Lieu</div>
          <div class="filter__options">
            <div class="filter__option" :class="{'filter__option--current' : filters.lieu == ''}"  @click="setLieu('')">Tous</div>
            <div class="filter__option" :class="{'filter__option--current' : lieu == filters.lieu}" v-for="(lieu, idx) in filterOptions.lieu" v-bind:key="idx" @click="setLieu(lieu)">{{lieu}}</div>
          </div>
        </div>
        <div class="filter">
          <div class="filter__title">🕴️ Rôle</div>
          <div class="filter__options">
            <div class="filter__option" :class="{'filter__option--current' : filters.role == ''}"  @click="setRole('')">Tous</div>
            <div class="filter__option" :class="{'filter__option--current' : role == filters.role}"  v-for="(role, idx) in filterOptions.role" v-bind:key="idx" @click="setRole(role)">{{role}}</div>
          </div>
        </div>
      </div>
      <div v-if="!loaded" class="loader">
        <spinner></spinner>
      </div>
      <div class="list" v-else>
        <div class="list__users" v-if="filteredUsers.length">
          <div class="user" v-for="user in filteredUsers" v-bind:key="user.id">
              <div class="user__image" :style="{'background-image' : 'url(\'https://i.pravatar.cc/150?img='+Math.round(user.id % 60)+'\')'}"></div>
              <div class="user__infos">
                <div class="user__nom">{{ user.nom }} {{ user.prenom }}</div>
                <div class="user__details">
                  <div class="user__lieu">📍 {{ user.lieu }}</div>
                  <div class="user__role">🕴️ {{ user.role }}</div>
                </div>
              </div>
          </div>
        </div>
        <div class="list__empty" v-else>
          Aucun utilisateur ne correspond à ces filtres
        </div>
      </div>
    </div>
  </div>
</template>
<script>

const axios = require('axios');
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'Composition',
  components: {
    Spinner,
  },
  data() {
    return {
      loaded: false,
      users: [],
      search: '',
      filters: {
        lieu: '',
        role: '',
      },
      filterOptions: {
        lieu: ['Paris', 'New York', 'Milan', 'Beijing', 'Tokyo'],
        role: ['Dev', 'Sales', 'Designer', 'Manager'],
      }
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) => {
        return (this.search == '' || (user.nom.toLowerCase() + ' ' + user.prenom.toLowerCase()).includes(this.search))
        && (this.filters.lieu == '' || user.lieu == this.filters.lieu)
        && (this.filters.role == '' || user.role == this.filters.role)
      });
    }
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      let users = (await axios.get('https://www.wawasensei.dev/api/users/list')).data;
      this.users = users;
      this.loaded = true;
    },
    setLieu(lieu) {
      this.filters.lieu = lieu;
    },
    setRole(role) {
      this.filters.role = role;
    },
  }
}
</script>
