<template>
  <div>
    <section id="flex" class="container">
      <section id="matches">
        <MatchItem
          v-for="match in getMatches"
          :key="match.id"
          :id="match.id"
          :match="match.match"
          :home="match.home"
          :away="match.away"
          @save-data="betslip"
        ></MatchItem>
      </section>
      <section id="betslip">
        <ul v-if="results.length > 0">
          <li v-for="result in results" :key="result">
            <span v-for="res in result.results" :key="res">
              <h3>{{ res }}</h3>
              <p>{{ result.matchinfo }}</p>
              <img
                class="removebtn"
                src="../assets/btn30.png"
                @click="deleteBets(result, res)"
              />
            </span>
          </li>
        </ul>
        <h3 v-else>You don't have bets</h3>
        <button class="button2" @click="addTheBets" v-if="results.length > 0">
          Confirm
        </button>
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
      dataSaved: false,
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
      for (const key in this.results) {
        const result1 = this.results[key].matchinfo;
        const result2 = this.results[key].results;
        store.bets.push({ info: result1 }, { result: result2 });
      }
      this.results = [];
      this.dataSaved = true;
    },
    deleteBets(matchResult, res) {
      {
        matchResult.results = matchResult.results.filter(
          (deletebets) => deletebets !== res
        );
        if (matchResult.results.length === 0) {
          this.results = this.results.filter(
            (remove) => remove.id !== matchResult.id
          );
        }
      }
    },
    betslip(matchinfo, results, id) {
      this.filterResult = results;
      const checkedArray = this.results.filter((res) => res.id !== id);
      if (results.length !== 0) {
        checkedArray.push({ id: id, matchinfo: matchinfo, results: results });
      }
      this.results = checkedArray;
    },
  },
  beforeRouteLeave(_to, _from, next) {
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
  min-width: 260px;
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
  display: flex;
  justify-content: space-evenly;
}
.removebtn {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#matches {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 700px) {
  #flex {
    flex-direction: column;
  }
  #betslip {
    margin-top: 5rem;
    min-width: 200px;
  }
}
</style>
