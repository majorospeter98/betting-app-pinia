<template>
  <div id="header">
    <router-link to="/matches">Matches</router-link>
    <router-link to="/myBets">My Bets</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#header {
  height: 50px;
  background-color: #d2122e;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
a {
  color: white;
  padding: 0.3rem;
}
</style>
