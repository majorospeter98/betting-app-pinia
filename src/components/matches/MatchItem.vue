<template>
  <div>
  <h1 class="font-bold text-xl">
  {{ match.teams.home.name + ' ' + match.teams.away.name }}
</h1>
    <button class="button" @click="setMatch('Home')">{{$t("Home")}}</button>
    <button class="button" @click="setMatch('Draw')">{{$t("Draw")}}</button>
    <button class="button" @click="setMatch('Away')">{{$t("Away")}}</button>
  </div>
</template>
<script>
export default {
  emits: ["save-data"],
  props: ["match"],
  data() {
    return {
      results: [],
    };
  },
  methods: {
    setMatch(result) {
      this.$emit("save-data", this.match, result);
    },
    
  },
  
};
</script>
