<template>
  <section
    class="container mt-10 mb-6 flex justify-evenly max-md:flex-col max-md:items-center max-md:gap-8"
  >
    <section
      id="matches"
      class="text-center flex flex-col justify-start items-center"
    >
      <MatchItem
        v-for="matches in apiMatches"
        :key="matches.fixture.id"
        :match="matches"
        @save-data="betslip"
      ></MatchItem>
    </section>
    <BetSlip
      :results="results"
      @delete="deleteBetsFromSlip"
      @add="addTheBetsToTheStore"
    ></BetSlip>
  </section>
</template>
<script>
import MatchItem from "@/components/matches/MatchItem.vue";
import { useBet } from "../store/bet";
import axios from "axios";
import BetSlip from "@/components/matches/BetSlip.vue";
export default {
  name: "BetApp",
  components: {
    MatchItem,  BetSlip,
     },
  async created() {
    try {
      const response = await axios.get(
        "https://v3.football.api-sports.io/fixtures?live=all",
        {
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "d7934c5d1bf99178e703f84667df7432",
          },
        }
      );
      this.apiMatches = response.data.response;
      if (this.apiMatches.length < 2) {
    
        this.apiMatches = this.getBets;     // if Not enough api data, static data fallback.
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  data() {
    return {
      results: [],
      apiMatches: [],
    };
  },
  computed: {
    getBets() {
      const store = useBet();
      return store.matches; // Here the static fallback loaded
    },
  },
  methods: {
    addTheBetsToTheStore() {
      const store = useBet();
      store.bets.push(...this.results);
      this.results = [];
    },
    deleteBetsFromSlip(matchResult, res) {
      matchResult.bets = matchResult.bets.filter((delbet) => delbet !== res);
      this.results = this.results.filter((result) => result.bets.length !== 0);
    },
    betslip(match, result) {
      const currentMatch = this.results.filter(
        (result) => result.match?.fixture?.id === match.fixture.id
      );
      if (currentMatch.length === 0) {
        this.results.push({ match: match, bets: [result] });
      } else {
        const currentBets = currentMatch[0].bets;
        if (currentBets.includes(result)) {
          currentMatch[0].bets = currentBets.filter(
            (current) => current !== result
          );
          if (currentMatch[0].bets.length === 0) {
            this.results = this.results.filter((r) => r !== currentMatch[0]);
          }
        } else {
          currentMatch[0].bets.push(result);
        }
      }
    },
  },
  beforeRouteLeave(_1, _2, next) {
    if (this.results.length === 0) {
      next();
    } else {
      let answer = confirm(this.$t("Unsaved"));
      next(answer);
    }
  },
};
</script>
