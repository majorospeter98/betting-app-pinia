<template>
  <section
    id="betslip"
    class="flex flex-col items-center min-h-[420px] w-[350px] bg-betslip border-solid border-1 border-border justify-between text-center rounded-2xl shadow-3xl"
  >
    <ul class="mt-5" v-if="results.length > 0">
      <li v-for="result in results" :key="result">
        <span
          v-for="teamNames in result.match.teams"
          :key="teamNames"
          class="flex flex-col gap-1"
        >
          <h1 class="text-2xl font-bold">{{ teamNames.name }}</h1>
        </span>
        <span v-for="matchresult in result.bets" :key="matchresult">
          <h3>{{ $t(matchresult) }}</h3>
          <div>
            <img
              class="removebtn m-auto text-blue"
              src="../../assets/btn30.png"
              @click="deleteBet(result, matchresult)"
            />
          </div>
        </span>
      </li>
    </ul>
    <button
      class="button min-w-36"
      @click="addTheBets"
      v-if="results.length > 0"
    >
      {{ $t("Confirm") }}
    </button>
    <p class="mt-6 font-bold" v-else>{{ $t("YouDontHave") }}</p>
  </section>
</template>
<script>
export default {
  props: ["results"],
  emits: ["delete", "add", "toast"],
   methods: {
    deleteBet(result, matchresult) {
      this.$emit("delete", result, matchresult);
    },
    addTheBets() {
      this.$emit("add");
      this.$emit("toast");
    },
  },
};
</script>
>
