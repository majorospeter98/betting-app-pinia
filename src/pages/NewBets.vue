<template>
  <div class="container">
    <section id="newbets">
      <ul>
        <li v-for="bet in getBets" :key="bet">
          <p>{{ bet.info }}</p>
          <span v-for="betres in bet.result" :key="betres">
            <h3>{{ betres }}</h3>
          </span>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import { useBet } from "../store/bet";
export default {
  created() {},
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
#newbets p {
  font-weight: 800;
}
</style>
