<template>
  <div class="panel panel-default">
    <div v-if="jokesExist" class="table-responsive">
      <table id="buildingJokes" class="table table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th style="text-align:left">Joke Name</th>
            <th>Year Built</th>
            <th>Year Last Modernized</th>
            <th>Gross SqFt</th>
            <th>Instructional SqFt</th>
            <th>SCAP SqFt</th>
            <th>Occupancy Date</th>
            <th>Board Accept Date</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <!--
          // es6lint-disable-next-line -->
          <tr v-for="joke in jokes">
            <td style="text-align:left;">{{joke.Name}}</td>
            <td>{{joke.YearLastRenovated}}</td>
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
    <!-- <modal-edit v-bind:name="'jokeEditModal'" v-bind:headertext="operation" v-bind:afterSave="getJokes">
        <joke-edit-dialog v-bind:buildingId="buildingId" v-bind:activeJoke="activeJoke" />
    </modal-edit> -->
  </div>
</template>
<script>
// import { icosIcons, icosMixins, icosDialogs, icosModels } from '../../icos-resources'
// import jokeDialog from './building-inventory-dialog'

export default {
  name: 'joke-list',

  // mixins: [ icosMixins.user, icosMixins.api, icosMixins.util ],

  components: {
    // addIcon: icosIcons.add,
    // editIcon: icosIcons.edit,
    // deleteIcon: icosIcons.delete,
    // modalEdit: icosDialogs.modalEdit,
    // jokeEditDialog: jokeDialog,
  },

  props: ['buildingId'],

  data () {
    return {
      inventory: {},
      jokes: [],
      activeJoke: null,
      operation: 'Add Joke'
    }
  },

  computed: {
    jokesExist () {
      return this.jokes.length > 0
    }
  },

  watch: {
    '$route' (to, from) {
      if (to.name === from.name) {
        this.getJokes()
      }
    }
  },

  methods: {
    getJokes () {
      // //retireve from the store
      // let vm = this

      // vm.apiGet(
      //     {
      //         url: `/api/Buildings/${vm.buildingId}/Inventory`,
      //         serviceErrorText: 'Error--could not retrieve jokes!'
      //     }
      // ).then((responseData) => {
      //     vm.inventory = responseData;
      //     vm.jokes = responseData.InventoryJokes.map(data => new icosModels.ICOSBuildingJoke(data))
      //     this.$emit('inventory-loaded', vm.inventory);
      // })
    },

    onAddJokeClicked (event) {
      // vm.operation = "Add Joke"
      // vm.activeJoke = new icosModels.ICOSBuildingJoke({
      //     Id: 0,
      //     BuildingId: vm.buildingId,
      //     ScapSqFt: vm.user.isOSPI ? "" : 0
      // });
      // vm.$modal.show('jokeEditModal');
    },

    onJokeEditClicked (joke) {
      // let vm = this
      // vm.operation = "Edit Joke"
      // we want the edit dialog to have a copy of the joke being edited,
      // not the actual joke from this.jokes array
      // vm.activeJoke = new icosModels.ICOSBuildingJoke(joke);
      // this.$modal.show('jokeEditModal');
    },

    onJokeDeleteClicked (joke) {
      // let vm = this
      // let deleteConfirmed = vm.$dialog.confirm("Are you sure you want to delete this joke?")
      //     .then(() => {
      //         vm.apiDelete({
      //             url: `/api/Building/${joke.BuildingId}/RemoveJokeInventory/${joke.BuildingInventoryId}`,
      //             serviceErrorText: 'Error--attempt to delete joke failed.'
      //         }).then(() => {
      //             vm.getJokes()
      //         });
      //     });
    }
  },

  created () {
    this.getJokes()
  },

  mounted () {
  }
}
</script>
<style scoped>

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
