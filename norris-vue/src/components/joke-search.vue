<style scoped>
    div#searchResults {
        text-align: left;
    }

    .row {
       margin: 0.5em 1em; 
    }
</style>

<template>
    <div class="row">
        <div class="col">
            <div class="row justify-content-center" style="margin-top:1em;">
                <div id="searchForm" class="col-4">
                    <form class="row">
                        <div class="col-9">
                            <input type="text" v-model="searchText" placeholder="Search" class="form-control" aria-label="Search">
                        </div>
                        <div class="col-3 text-left">
                            <button type="submit" class="btn btn-outline-success" style="margin-left:0.5em;" @click="doSearch">Search</button>
                        </div>
                    </form>
                </div>
            </div>
            <div v-if="searchResult" id="searchResults" class="row">
                <div class="col">
                    <div class="row">
                        <div class="col-2">
                            <b>Total Results:</b> {{searchResult.total}}
                        </div>
                    </div>
                    <hr style="background-color: white;">
                    <div v-for="joke in searchResult.result" :key="joke.id" class="row">
                        <ul class="col-8">
                            <li>{{joke.value.trim()}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'joke-search',
  data(){
      return {
          searchText: "",
          searchResult: null,
      };
  },

  methods: {
      doSearch(){
          let vm = this;

          axios.get(`https://api.chucknorris.io/jokes/search?query=${vm.searchText}`)
          .then(response => {

              vm.searchResult = response.data;
          });

      },
  },
}
</script>


