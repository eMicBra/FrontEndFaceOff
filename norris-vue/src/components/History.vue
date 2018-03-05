<template>
<div>
   <div class="panel panel-default">
    <div v-if="jokesExist" class="table-responsive">
     <table id="JokeList" class="table table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th>Value</th>
            <th>Category</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          <!--
          // es6lint-disable-next-line -->
          <tr v-for="(joke, i) in orderedJokes">
            <td>{{joke.value}}</td>
            <td>{{joke.category}}</td>
            <td style="text-align:left;"><a v-bind:href="joke.url" target="_blank"> {{joke.id}}</a></td>
          </tr>
        </tbody>
      </table>
</div>
    <label v-else>No jokes.</label>
  </div>
      </div>
    </template>
<script>

import { mapGetters } from 'vuex'

export default {
  name: 'History',

  components: {
  },

  props: {
    buildingId: 0,
    jokeList: {
      type: Array,
      default: () => ([])
    }
  },

  computed: {
    jokesExist () {
      return this.$store.state.jokeList.length > 0
    },
    ...mapGetters(['orderedJokes'])
  }
}
</script>
<style scoped>
  /* .modal-content {
    color: black;
  } */

  #JokeList {
    width: 80%;
    margin: auto;
  }

  .table > tbody > tr > td,
  .table > tbody > tr > th,
  .table > thead > tr > td,
  .table > thead > tr > th,
  .table > tfoot > tr > td,
  .table > tfoot > tr > th {
    text-align: left;
    vertical-align: middle;
  }

    .table > tbody > tr > td:first-child,
    .table > tbody > tr > th:first-child,
    .table > thead > tr > td:first-child,
    .table > thead > tr > th:first-child,
    .table > tfoot > tr > td:first-child,
    .table > tfoot > tr > th:first-child {
      padding-left: 5px;
    }

  .glyphicon {
    top: 0;
  }
</style>
