<template>
  <div>
    <h1>{{ match }}</h1>
    <button class="button" @click="setMatch('Home', +id)">Home</button>
    <button class="button" @click="setMatch('Draw', +id)">Draw</button>
    <button class="button" @click="setMatch('away', +id)">Away</button>
  </div>
</template>
<script>
export default {
  emits: ["save-data"],
  props: ["id", "match", "home", "away"],
  data() {
    return {
      results: [],
    };
  },
  methods: {
    setMatch(results, id) {
      this.selectedMatch = this.match;
      if (results === "Home") {
        if (!this.results.includes(this.home)) {
          this.results.push(this.home);
        } else {
          this.results = this.results.filter((result) => result !== this.home);
        }
      }
      if (results === "Draw") {
        if (!this.results.includes("Draw")) {
          this.results.push("Draw");
        } else {
          this.results = this.results.filter((result) => result !== "Draw");
        }
      }
      if (results === "away") {
        if (!this.results.includes(this.away)) {
          this.results.push(this.away);
        } else {
          this.results = this.results.filter((result) => result !== this.away);
        }
      }
      this.$emit("save-data", this.match, this.results, id, results);
    },
  },
};
</script>
