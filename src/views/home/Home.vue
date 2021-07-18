<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt0409591‏">
        <img
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2019/12/theater-02.jpg"
          alt=""
          class="feature-img"
        />
        <div class="detail">
          <h3>NOW PLAYING</h3>
          <h1><strong>NOW</strong> PLAYING</h1>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="SearchMovies()" class="search-box">
      <input
        type="text"
        placeholder="what are you looking for?"
        v-model="search"
      />
      <input type="submit" value="Search" />
    </form>

    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          <div class="product-image">
            <img :src="movie.Poster" alt="Movie Poster" />
            <div class="type">{{ movie.Type }}</div>
          </div>
          <div class="detail">
            <p class="year">{{ movie.Year }}</p>
            <h3>{{ movie.Title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import env from "@/env.js";
export default {
  setup() {
    const search = ref("friends");
    const movies = ref([]);

    const SearchMovies = () => {
      if (search.value != "") {
        fetch(`http://www.omdbapi.com/?&apikey=${env.apikey}&s=${search.value}`)
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.Search;
            search.value = "";
            console.log(movies.value);
          });
      }
    };
    onMounted(() => {
      SearchMovies();
    });
    return {
      search,
      movies,
      SearchMovies,
    };
  },
};
</script>

<style lang="scss">
.home {
  .feature-card {
    position: relative;
    .feature-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;

    }
    .detail {
      text-align: left;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 10px;
      z-index: 1;
      h3 {
        color: #bd2323;
        margin-bottom: 10px;
        margin-left: 40px;
      }
      h1 {
        color: #fff;
        padding: 0;
        margin-left: 40px;
        font-size: 50px;
      }
    }
  }
  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"] {
        width: 500px;
        color: #fff;
        background-color: #bd2323;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;

        &::placeholder {
          color: #f3f3f3;
        }
        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }
      &[type="submit"] {
        width: 50%;
        text-align: center;
        padding: 10px;
        max-width: 300px;
        background: linear-gradient(to left, #ff6347, #ffa500);
        border-radius: 12px;
        color: #fff;
        font-size: 16px;
        text-transform: uppercase;
        transition: 0.4s;
        &:active {
          background-color: #388070;
        }
      }
    }
  }
  .movie-list {
  display:flex;
  flex-wrap: wrap;
  flex-direction:row;
    .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;

      .movie-link {
        display: flex;
        flex-direction: row;
        height: 100%;
       
        .product-image {
          position: relative;
          display: block;

          img {
            display: block;
            width: 100%;
            height: 275px;
          }
          .type {
            position: absolute;
            padding: 8px 16px;
            background-color: #42b883;
            color: #fff;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }
        .detail {
          background-color: #496583;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;

          .year {
            color: #aaa;
            font-size: 14px;
          }
          h3 {
            color: #fff;
            font-weight: 600;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>