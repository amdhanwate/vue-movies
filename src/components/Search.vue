<template>
  <div class="search-wrapper">
    <input
      type="search"
      name="searchMovie"
      id="searchMovie"
      placeholder="Search your favourite movie.."
      aria-label="search movie"
      v-model="searchTerm"
    />
    <button type="submit" aria-label="movie" @click="searchMovies()">
      Search
    </button>
  </div>
  <div id="movies" v-if="searchResults.length !== 0">
    <Movie :response="searchResults" />
  </div>
  <div id="movies" v-else>
    <NoMoviesFound />
  </div>
</template>

<script>
import Movie from "@/views/Movie.vue";
import NoMoviesFound from "@/components/NoMoviesFound.vue";

export default {
  name: "Search",
  components: {
    Movie,
    NoMoviesFound,
  },
  data() {
    return {
      searchTerm: "",
      searchResults: [],
    };
  },

  methods: {
    searchMovies() {
      if (this.searchTerm !== "") {
        return fetch(
          `http://www.omdbapi.com/?apikey=817080ef&s=${this.searchTerm}`
        )
          .then((response) => response.json())
          .then((data) => {
            this.searchResults = data["Search"];
            if (this.searchResults == undefined) {
              this.searchResults = [];
            }
          });
      }
    },
  },
};
</script>

<style scoped>
* {
  font-size: 102%;
}

.search-wrapper {
  text-align: center;
  margin: 1.5rem auto;
  width: 60%;
  display: flex;
  justify-content: center;
}

input[type="search"] {
  flex-grow: 1;
}

input:focus,
input:active {
  outline: violet;
}

input,
button {
  margin: 0.1rem;
}

button {
  padding: 0.3rem 0.8rem;
  outline: violet;
  color: #eee;
  background: rgb(155, 57, 155);
  border: 1px solid violet;

  box-shadow: 0 0 0;
}

button:hover {
  box-shadow: 0 0 2px;
}

button:active {
  box-shadow: inset 0 0 2px;
}

#movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 576px) {
  .search-wrapper {
    width: 80%;
  }
}

@media (max-width: 350px) {
  .search-wrapper {
    flex-direction: column;
  }
}
</style>
