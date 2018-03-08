<template>
  <div class="row">
    <div class="col">
      <cool-video></cool-video>
      <div class="toggleRow">
        <div class="rowItem">Local Mode - </div>
        <div class="rowItem">
          <div class="toggleButton">
            <div>Off&nbsp;</div>&nbsp;
            <toggle-button id="testingSwitch"
                          v-model="testing"
                          :width="40" :height="20"
                          :color="{checked: 'green', unchecked: 'gray'}" />
            &nbsp;<div>&nbsp;On</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img class="image" src="../assets/Chuck-Norris-HD.jpg">
        </div>
      </div>
      <rjoke v-on:add-joke="addJoke" v-bind:testing="testing" v-bind:selectedCategories="passedCategories"
              v-bind:jokeList="jokeList" ref="myJoke"></rjoke>
      <hr />
      <Cat v-bind:testing="testing" v-on:selectedCategories-changed="updateCategoryList">
      </Cat>

    </div>
  </div>
</template>

<script>
import Categories from './Categories'
import RandomJoke from './Joke'
import Video from './Video'
import History from './History'

export default {
  name: 'Home',
  components: {
    Cat: Categories,
    rjoke: RandomJoke,
    coolVideo: Video,
    history: History
  },

  data () {
    return {
      msg: 'Chuck Norris Vue(s)',
      testing: true,
      passedCategories: [''],
      jokeList: []
    }
  },

  beforeRouteLeave: function (to, from, next) {
    // Indicate to the SubComponent that we are leaving the route
    this.$refs.myJoke.prepareToExit()
    // Make sure to always call the next function, otherwise the hook will never be resolved
    // Ref: https://router.vuejs.org/en/advanced/navigation-guards.html
    next()
  },

  methods: {
    addJoke (joke) {
      this.jokeList.push(joke)
    },
    updateCategoryList (categories) {
      this.passedCategories = categories
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .title {
    /*padding-bottom: 10px;*/
    margin: 0px 0 10px 0;
  }

  .image {
    width: 400px;
    margin: 10px 0 10px 0;
  }

  a {
    color: #42b983;
  }
</style>
