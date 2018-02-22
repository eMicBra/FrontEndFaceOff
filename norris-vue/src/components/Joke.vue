<template>
  <div>
    <div class="joke container">
      <div class="row">
        <div class="col-md-12">
          <h2>{{ currentJoke.value }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="offset-md-10 col-md-2">
          <!-- {{ randomCategory }}  -->{{selectedCategories}} -- cats
        </div>
      </div>
    </div>
    <div class="switchContainer">
      <toggle-button id="jokeSwitch"
          v-model="randomJokeEnabled"
          :width="250" :height="40"
          :color="{checked: 'green', unchecked: 'gray'}"
          :labels="{checked: 'NORRIS JOKES ON!!!', unchecked: 'I can not take anymore'}"
          />
    </div>
  </div>
</template>

<script>
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
      currentJoke: {}
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
        console.log(`got joke: ${joke.value}`)
      })
    }
  },

  created () {
    // console.log(`creating joke: ${this.value}`)
    this.getJoke()

    // Requirement #4
    // As a classic javascript developer, I want to make a random joke appear every so many (5?) seconds on the website.
    setInterval(function () {
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

  .joke {
    padding: 15px;
    background-color: #222;
  }

  .switchContainer {
    padding-top: 10px;
  }

  a {
    color: #42b983;
  }

  .vue-js-switch#jokeSwitch {
    font-size: 16px !important;
  }

  .vue-js-switch {
    margin: 2px;
  }
</style>
