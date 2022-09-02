<template>
  <v-container class="wrapper text-center mt-12">
    <v-row class="text-center">
      <v-col>
        <h1>Hi!</h1>
        <h4>
          This is a
          <strong>Vue 2</strong>
          template that uses the following stack:
        </h4>
      </v-col>
    </v-row>
    <v-row class="align-self-center">
      <v-col>
        <a href="https://vitejs.dev/">
          <h2>Vite</h2>
        </a>
        <v-img :src="require('@/assets/vite_logo.svg')" width="100" />
        <div class="mt-5">
          <span>Makes building, compiling and developing so much faster!</span>
        </div>
      </v-col>
      <v-col>
        <a href="https://vuetifyjs.com/en/">
          <h2>Vuetify</h2>
        </a>
        <v-img :src="require('@/assets/vuetify_logo.png')" width="100" />
        <div class="mt-5">
          <span>An amazing an complete UI library for Vue.</span>
        </div>
      </v-col>
      <v-col>
        <a href="https://pinia.vuejs.org/">
          <h2>Pinia</h2>
        </a>
        <v-img :src="require('@/assets/pinia_logo.svg')" width="80" />
        <div class="mt-5">
          <span>Vuex' succesor! The best library for state management.</span>
          <v-btn @click="userStore.incrementAge" class="mt-5">Increase Age</v-btn>
          <pre>{{ userStore.currentUser }}</pre>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useUserStore } from "@/stores/userStore";
export default {
  name: "Home",

  components: {},

  computed: {},

  data() {
    return {
      userStore: null,
    };
  },

  methods: {},

  created() {
    this.userStore = useUserStore();
  },
};
</script>

<style lang="less" scoped>
@import (less) "@/styles/views/home.less";
</style>
