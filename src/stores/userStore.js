import { defineStore } from "pinia";
import User from "../resources/models/User";

export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: User("Bob", 20, "Human"),
  }),
  actions: {
    incrementAge() {
      this.currentUser.age++;
    },
  },
});
