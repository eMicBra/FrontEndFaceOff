<template>
<div>
   <div class="panel panel-default">
    <div v-if="jokesExist" class="table-responsive">
     <table id="JokeList" class="table table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th style="text-align:left">Id</th>
            <th>Value</th>
            <th>Category</th>
            <th>URL</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <!--
          // es6lint-disable-next-line -->
          <tr v-for="joke in $store.state.jokeList">
            <td style="text-align:left;">{{joke.id}}</td>
            <td>{{joke.value}}</td>
            <td>{{joke.category}}</td>
            <td>{{joke.url}}</td>
            <!-- <td>{{joke.YearBuilt}}</td>
            <td>{{joke.YearLastRenovated}}</td>
            <td>{{joke.GrossSqFt | utilNumberWithCommas }}</td>
            <td>{{joke.InstructionalSqFt | utilNumberWithCommas }}</td>
            <td>{{joke.ScapSqFt | utilNumberWithCommas }}</td>
            <td>{{joke.OccupancyDate | utilFormatDate }}</td>
            <td>{{joke.BoardAcceptDate | utilFormatDate }}</td> -->
            <td>
              <!-- <edit-icon v-if="!user.isReadOnly" v-bind:clickHandler="() => onJokeEditClicked(joke)" v-bind:dataValue="joke.Id" v-bind:hoverText="'Edit Joke'" />
              <delete-icon v-if="!user.isReadOnly" v-bind:clickHandler="() => onJokeDeleteClicked(joke)" v-bind:dataValue="joke.Id" v-bind:hoverText="'Delete Joke'" /> -->
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <label v-else>No jokes.</label>
  </div>
      </div>
    </template>
<script>

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
    }
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
    text-align: center;
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
