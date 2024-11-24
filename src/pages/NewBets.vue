<template>
  <div class="container">
    <section id="newbets">
      <ul v-if="getBets.length > 0">
        <li v-for="bet in getBets" :key="bet">
          <p>{{ bet.match.match }}</p>

          <span v-for="betres in bet.bets" :key="betres">
            <h3>{{ betres + " " }}</h3>
          </span>
        </li>
      </ul>
      <p v-else class="bg-blue-500">You don't have bets currently.</p>
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
#newbets {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
#newbets span {
  color: red;
}
</style>
