<template>
  <div>
    <h1 class="font-bold text-xl">{{ match.match }}</h1>
    <button class="button" @click="setMatch('Home')">Home</button>
    <button class="button" @click="setMatch('Draw')">Draw</button>
    <button class="button" @click="setMatch('Away')">Away</button>
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
