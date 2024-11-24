<template>
  <div>
    <section id="flex" class="container">
      <section id="matches">
        <MatchItem
          v-for="matches in getMatches"
          :key="matches.id"
          :match="matches"
          @save-data="betslip"
        ></MatchItem>
      </section>
      <section id="betslip">
        <ul v-if="results.length > 0">
          <li v-for="result in results" :key="result">
            <span v-for="res in result.bets" :key="res">
              <h3>{{ res }}</h3>
              <p>{{ result.match.match }}</p>
              <img
                class="removebtn"
                src="../assets/btn30.png"
                @click="deleteBets(result, res)"
              />
            </span>
          </li>
          <button
            class="button2 end"
            @click="addTheBets"
            v-if="results.length > 0"
          >
            Confirm
          </button>
        </ul>
        <h3 v-else>You don't have bets</h3>
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
  padding-top: 2.5rem;
  min-height: 320px;
  min-width: 350px;
  border: 1px solid rgba(129, 126, 126, 0.041);
  background-color: rgb(247, 246, 246);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 10px;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
}
#flex {
  margin-top: 5rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-evenly;
}

#matches {
  text-align: center;
  display: flex;
  flex-direction: column;

  align-items: center;
}
@media screen and (max-width: 730px) {
  #flex {
    flex-direction: column;
  }
  #betslip {
    margin-top: 5rem;
    min-width: 200px;
  }
}
</style>
