<template class="con">
  <main>
    <div v-if="isDataFetched" class="movie-info">
      <img
        v-if="movieDetails.Poster !== 'N/A'"
        :src="movieDetails.Poster"
        alt="Movie Poster"
      />
      <img v-else src="../assets/pna.jpg" alt="Movie Poster" />
      <div class="info">
        <p class="released">{{ movieDetails.Year }}</p>
        <p class="title">
          Title: <span>{{ movieDetails.Title }}</span>
        </p>
        <p class="genre">
          Genre: <span>{{ movieDetails.Genre }}</span>
        </p>
        <p class="directors">
          Director: <span>{{ movieDetails.Director }}</span>
        </p>
        <p class="actors">
          Actors: <span>{{ movieDetails.Actors }}</span>
        </p>
        <p class="runtime">
          Runtime: <span>{{ movieDetails.Runtime }}</span>
        </p>
        <p class="rating">
          imdbRating: <span>{{ movieDetails.imdbRating }}</span>
        </p>
        <p class="awards">
          Awards: <span>{{ movieDetails.Awards }}</span>
        </p>
        <p class="rating">
          imdbRating: <span>{{ movieDetails.imdbRating }}</span>
        </p>
      </div>
    </div>
    <div class="plot">{{ movieDetails.Plot }}</div>
  </main>
</template>

<script>
import Search from "@/components/Search.vue";

export default {
  name: "MoviePage",
  components: [Search],
  data() {
    return {
      movieDetails: "",
      isDataFetched: false,
    };
  },

  created() {
    fetch(
      `http://www.omdbapi.com/?apikey=817080ef&plot=full&i=${this.$route.params.movieID}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.movieDetails = data;
        this.isDataFetched = true;
        console.log(this.movieDetails);
      });
  },
};
</script>

<style scoped>
.movie-info {
  border: 1px solid #eee;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: #eee;

  display: flex;
  width: fit-content;
  margin: auto;
  justify-content: center;
}

img {
  border-radius: 0.5rem;
  /* align-self: start; */
}

.info {
  margin: 1rem;
  padding: 0.2rem 1rem;
}

p {
  color: violet;
  text-overflow: ellipsis;
}

p > span {
  color: #eee;
}

.released {
  padding-bottom: 1rem;
  margin-top: -1rem;
  color: #eeea;
}

.plot {
  margin-top: 2rem;
  padding: 1rem;
  color: #eee;
  line-height: 1.6;
  font-size: 1.2rem;
  font-weight: 500;
  max-width: 800px;
  margin: auto;
  text-align: justify;
}

@media (max-width: 768px) {
  img {
    width: 250px;
  }

  .movie-info {
    margin: auto 0.4rem;
  }

  .plot {
    width: fit-content;
    margin: 0.4rem;
  }
}

@media (max-width: 500px) {
  .movie-info {
    flex-direction: column;
    align-items: center;
  }

  .info {
    align-items: center;
  }
}
</style>
