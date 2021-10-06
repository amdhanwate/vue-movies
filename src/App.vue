<template>
  <h1>Vue <span>Movies</span></h1>
  <router-view />
</template>

<script>
// import Search from "@/components/Search.vue";
// import Movie from "@/views/Movie.vue";

export default {
  // components: [Search],
};
</script>

<style>
body {
  background: rgb(30, 30, 30);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

h1 {
  color: #eee;
  text-align: center;
}

h1 > span {
  color: violet;
}
</style>
