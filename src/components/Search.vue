<template>
  <div class="search-wrapper">
    <input
      type="search"
      name="searchMovie"
      id="searchMovie"
      placeholder="Search your favourite movie.."
      aria-label="search movie"
      v-model="searchTerm"
      @keyup.enter="searchNewMovie()"
    />
    <button type="submit" aria-label="movie" @click="searchNewMovie()">
      Search
    </button>
  </div>
  <div id="movies" v-if="searchResults.length !== 0">
    <Movie :response="searchResults" />
  </div>
  <div id="movies" v-else-if="!loadAnimation">
    <NoMoviesFound />
  </div>
  <div v-if="loadAnimation">
    <Loading />
  </div>
</template>

<script>
import Movie from "@/views/Movie.vue";
import NoMoviesFound from "@/components/NoMoviesFound.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "Search",
  components: {
    Movie,
    NoMoviesFound,
    Loading,
  },
  data() {
    let currentPage = 1;
    let totalPages = null;
    let loadAnimation = false;
    return {
      searchTerm: "",
      searchResults: [],
      currentPage,
      totalPages,
      loadAnimation,
      Response: true,
      scrolledToBottom: false,
    };
  },

  mounted() {
    this.scroll();
  },

  methods: {
    searchNewMovie() {
      let currentPage = (this.currentPage = 1);
      this.loadAnimation = true;
      this.searchResults = [];

      this.searchMovies(currentPage);
    },

    async searchMovies(currentPage) {
      if (this.searchTerm !== "") {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=817080ef&s=${this.searchTerm}&page=${currentPage}`
        );
        const data = await response.json();
        if (data["Response"] == "True") {
          this.totalPages = data["totalResults"];
          data["Search"].map((dt) => {
            this.searchResults.push(dt);
          });
        }

        console.log(this.loadAnimation);
        this.currentPage += 1;
        if (this.searchResults == undefined) {
          return;
        }
      }
    },

    loadMoreMovies() {
      if (this.currentPage <= this.totalPages) {
        console.log("loading next page");
        this.searchMovies(this.currentPage);
      }
    },

    scroll() {
      window.onscroll = () => {
        let bottomOfWindow = Math.floor(
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight -
            document.documentElement.offsetHeight
        );

        if (bottomOfWindow > -100) {
          this.scrolledToBottom = true; // replace it with your code
          this.loadMoreMovies();
        }
      };
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

.load-more {
  width: fit-content;
  padding: 0.3rem 0.6rem;
  display: block;
  margin: 2rem auto;
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
