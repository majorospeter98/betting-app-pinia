<template>
  <div id="header">
    <router-link  class="uppercase no-underline hover:border-b-2 border-solid border-primary" to="/matches">Matches</router-link>
    <router-link class="uppercase no-underline hover:border-b-2 border-solid border-primary" to="/myBets">My Bets</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#header {
  height: 100px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

</style>
