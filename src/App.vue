<template>
  <div class="bg-linear-bg">
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
  font-family: "Poppins", sans-serif;
  scrollbar-color: #35b8f0 white;
 scrollbar-width:thin;

  scroll-behavior: smooth;
  font-size:1.1rem
}
ul {
  list-style: none;
}


.router-link-active {
 border-bottom:2px solid #35b8f0;
}
.container {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}
.button {
  background: #35b8f0;
  border: 2px solid #35b8f0;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
   color: white;
  cursor: pointer;
  min-width:95px;
 height: 60px;
  margin: 0.5rem;
  padding: 12px 14px;
  text-align: center;
}
.button:hover,
.button:active {
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.20) 5px 5px 5px;
  color: #35b8f0;
}

@media screen and (max-width: 400px) {
 
  .button {
    min-height: 20px;
    padding: 8px 10px;
  }

}
</style>
