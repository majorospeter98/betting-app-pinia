<template>
  <section class="container flex items-center justify-center text-center">
    <ul v-if="getBets.length > 0">
     <div v-for="(bet, index) in getBets" :key="index">
        <h1 class="font-bold text-2xl">
          {{ bet.match.teams.home.name + " - " + bet.match.teams.away.name }}
        </h1>
        <span v-for="betresult in bet.bets" :key="betresult">
          <h3>{{$t(betresult)}}</h3>
        </span>
      </div>
    </ul>
    <p v-else> {{$t("YouDontHave")}}</p>
  </section>
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
