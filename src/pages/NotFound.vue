<template>
  <div class="h-[450px] flex flex-col justify-center items-center">
    <h2 class="text-3xl">
     {{$t("error")}}
    </h2>
      <router-link class="text-red-600" to="/matches">{{$t("MainPage")}}</router-link>
  </div>
</template>

