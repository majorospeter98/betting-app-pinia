<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  line-height: 1.6;
  box-sizing: border-box;
  font-family: "Atkinson Hyperlegible", sans-serif;
  scrollbar-color: #d2122e white;
  scroll-behavior: smooth;
  font-size:1.2rem
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.router-link-active {
  border:2px solid white;
}
.container {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}
.button {
  background: #d2122e;
  border: 1px solid #ff4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  min-height: 30px;
  margin: 0.5rem;
  padding: 12px 14px;
  text-align: center;
}
.button:hover,
.button:active {
  background-color: initial;
  background-position: 0 0;
  color: #ff4742;
}
.button2 {
  margin: 2rem 0;
  background-image: linear-gradient(
    92.88deg,
    #455eb5 9.16%,
    #5643cc 43.89%,
    #673fd7 64.72%
  );
  border-radius: 8px;
  border-style: none;
  color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  height: 3.2rem;
  padding: 0.4rem 1.3rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
}
.button2:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 10px;
  transition-duration: 0.1s;
}
@media screen and (max-width: 400px) {
 
  .button {
    min-height: 20px;
    padding: 8px 10px;
  }
  .button2 {
    height: 2.2rem;
    padding: 0.3rem 1rem;
  }
}
</style>
