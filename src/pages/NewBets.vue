<template>
  <div class="container">
    <section class="flex items-center justify-center text-center">
      <ul v-if="getBets.length > 0">
        <li v-for="bet in getBets" :key="bet">
          <p class="font-bold text-2xl">{{ bet.match.match }}</p>

          <span v-for="betres in bet.bets" :key="betres">
            <h3>{{ betres + " " }}</h3>
          </span>
        </li>
      </ul>
      <p v-else>You don't have bets currently.</p>
    </section>
  </div>
</template>
<script>
import { useBet } from "../store/bet";

export default {
  computed: {
    getBets() {
      const store = useBet();
      return store.bets;
    },
  },
};
</script>

<style scoped>



</style>
