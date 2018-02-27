<template>
  <div>
    <div class="outerJokeContainer">
        <button class="btn move" v-on:click="goBack">Prev</button>
      <div class="innerJokeContainer">
        <div>
          <h2>{{ currentJoke.value }}</h2>
        </div>
        <div class="jokecategory">
          <!-- {{ randomCategory }}  -->{{selectedCategories}}
        </div>
      </div>
        <button class="btn move" v-on:click="goNext">Next</button>
    </div>
    <div class="switchContainer">
      <toggle-button id="jokeSwitch"
          v-model="randomJokeEnabled"
          :width="250" :height="40"
          :color="{checked: 'green', unchecked: 'gray'}"
          :labels="{checked: 'NORRIS JOKES ON!!!', unchecked: 'I can not take anymore'}"
          />
    </div>
    index {{moveIndex}}
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import JokeRepo from '../model/JokeRepo'

export default {
  name: 'Joke',

  props: { // passed into component from parent using attributes
    selectedCategories: {
      type: Array,
      default: () => ([])
    },
    testing: true // if true it will use mock service to enable offline development
  },

  data () {
    return {
      msg: 'Pick a Category below',
      randomJokeEnabled: true, // bound to the button
      randomCategory: '', // holds the current category to pass to the service
      currentJoke: {},
      moveIndex: 0,
      timerHandle: 0
    }
  },

  watch: { // watching for change so when toggled and on it will get the next joke
    randomJokeEnabled: {
      handler: function (val, oldVal) {
      // console.log('switch worked')
        if (val) {
          this.getJoke()
        }
      }
    }
  },

  methods: {
    ...mapMutations([
      // Mounts the "addJoke" mutation to `this.incrementStoredNumber()`.
      'addJoke'
    ]),

    goBack () {
      this.moveIndex--
      this.go()
    },

    goNext () {
      this.moveIndex++
      this.go()
    },

    go () {
      if (this.moveIndex < 0) {
        this.moveIndex = 0
      }
      if (this.moveIndex > this.$store.state.jokeList.length - 1) {
        this.moveIndex = this.$store.state.jokeList.length - 1
      }
      this.currentJoke = this.$store.state.jokeList[this.moveIndex]
    },

    jokeOn () { // method will determine if call to api should be made
      if (this.randomJokeEnabled) { // toggle must be on, maybe check for at least one category selected
        return true
      }
      return false
    },

    getJoke () {
      let vm = this
      // console.log("joke get joke")
      var repo = new JokeRepo(this.testing)
      repo.getJoke(this.randomCategory).then(function (joke) {
        vm.currentJoke = joke
        // vm.$emit('add-joke', joke) // notify the parent that there is a new joke
        vm.addJoke(joke)
        vm.moveIndex = vm.$store.state.jokeList.length - 1
        console.log(`got joke: ${joke.value}`)
      })
    },

    prepareToExit: function () {
      console.log("Preparing to exit sub component, stopping 'getting jokes'")
      clearInterval(this.timerHandle)
    }
  },

  created () {
    // console.log(`creating joke: ${this.value}`)
    this.getJoke()

    // Requirement #4
    // As a classic javascript developer, I want to make a random joke appear every so many (5?) seconds on the website.
    this.timerHandle = setInterval(function () {
      if (this.jokeOn()) {
        this.getJoke()
      }
    }.bind(this), 10000)
  },

  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .outerJokeContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #222;
    min-height: 220px;
  }

  .innerJokeContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
  }

  .jokecategory {
    align-self: flex-end;
  }

  .switchContainer {
    padding-top: 10px;
  }

  .move {
    background-color: #42b983;
  }

  .vue-js-switch#jokeSwitch {
    font-size: 16px !important;
  }

  .vue-js-switch {
    margin: 2px;
  }
</style>
