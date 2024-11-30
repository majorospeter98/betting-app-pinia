<template>
  <div>
    <section class="container mt-10 mb-6 flex justify-evenly  max-md:flex-col max-md:items-center max-md:gap-8">
      <section id="matches" class="text-center flex flex-col justify-start items-center">
        <MatchItem
          v-for="matches in getMatches"
          :key="matches.id"
          :match="matches"
          @save-data="betslip"
        ></MatchItem>
      </section>
      <section id="betslip" class="flex flex-col items-center justify-between  text-center rounded-b-2xl" >
        <ul class="mt-5" v-if="results.length > 0">
          <li v-for="result in results" :key="result">
            <span v-for="res in result.bets" :key="res">
              
              <h1 class="text-2xl">{{ result.match.match }}</h1>
              <h3>{{ res }}</h3>
              <div>
              <img
                class="removebtn m-auto text-blue"
                src="../assets/btn30.png"
                @click="deleteBets(result, res)"
              />
              </div>
            </span>
          </li>
       
        </ul>
           <button
            class="button"
            @click="addTheBets"
            v-if="results.length > 0"
          >
            Confirm
          </button>
        <h3 class="mt-6 font-bold" v-else>You don't have bets</h3>
      </section>
    </section>
  </div>
</template>
<script>
import MatchItem from "@/components/matches/MatchItem.vue";
import { useBet } from "../store/bet";
export default {
  name: "BetApp",
  components: {
    MatchItem,
  },
  data() {
    return {
      results: [],
    };
  },
  computed: {
    getMatches() {
      const store = useBet();

      return store.match;
    },
  },
  methods: {
    addTheBets() {
      const store = useBet();

      store.bets.push(...this.results);

      this.results = [];
    },
    deleteBets(matchResult, res) {
      console.log(matchResult, res);

      matchResult.bets = matchResult.bets.filter((delbet) => delbet !== res);
           this.results = this.results.filter((result) => result.bets.length !== 0);
    },
    betslip(match, result) {
      const currentMatch = this.results.filter(
        (result) => result.match === match
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
      let answer = confirm("You have unsaved data, you wanna still leave?");
      next(answer);
    }
  },
};
</script>
<style scoped>
#betslip {

min-height:420px;
 width: 350px;
  border: 1px solid rgba(129, 126, 126, 0.041);
  background-color: rgb(247, 246, 246);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 10px;


}


</style>
