<template v-if="response.length != 0">
  <div v-for="(movie, index) in response" :key="index">
    <MovieCard
      :poster="movie.Poster"
      :movieTitle="movie.Title"
      :year="movie.Year"
      :movieType="movie.Type"
      :imdbID="movie.imdbID"
    />
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    MovieCard,
  },
  props: ["response"],
};
</script>

<style scoped></style>
