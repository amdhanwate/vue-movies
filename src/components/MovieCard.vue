<template>
  <router-link :to="`/details/${imdbID}`">
    <div class="card-wrapper" style="width: min-content">
      <img v-if="poster !== 'N/A'" :src="poster" alt="Movie Poster" />
      <img v-else src="../assets/pna.jpg" alt="Movie Poster" />
      <div class="movie-info">
        <p class="type">{{ movieType }}</p>
        <div class="card">
          <p class="duration">{{ year }}</p>
          <h3 class="title">{{ movieTitle }}</h3>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["poster", "movieTitle", "movieType", "imdbID", "year"],
  methods: {},
  created() {
    console.log(this.$routes);
  },
};
</script>

<style scoped>
.card-wrapper {
  color: #eee;
  border: 1px solid #eee;
  border-radius: 1rem;
  position: relative;
  width: 300px;
  height: 400px;
  margin: 0.3rem;
}

img {
  margin: 0 auto;
  background: #808080;
  width: 300px;
  max-height: 400px;
  cursor: pointer;
  border-radius: 1rem;
}

.movie-info > * {
  position: absolute;
}

.type {
  background: rgb(155, 57, 155);
  bottom: 20%;
  padding: 0.4rem 0.3rem;
  border-radius: 0 0.4rem 0.4rem 0;
  transition: padding 300ms ease-in;
  transition: bottom 400ms ease-out;
}

.type:hover {
  padding-right: 1rem;
}

.card-wrapper:hover .type {
  bottom: 30%;
}

.card {
  margin: 0;
  inset: 80% 0 0 0;
  border-radius: 0 0 1rem 1rem;
  background: #808080aa;
  transition: top 300ms ease;
}

.card-wrapper:hover .card {
  top: 70%;
}

.card-wrapper:hover .title {
  overflow: visible;
  white-space: normal;
  text-overflow: unset;
}

.card > * {
  margin: 0;
  padding: 0.2rem 0.3rem;
}

.title {
  font-size: 1.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: all 300ms ease;
}

.duration {
  padding: 0.2rem 0.3rem 0.1rem;
  font-size: 0.8rem;
}
</style>
