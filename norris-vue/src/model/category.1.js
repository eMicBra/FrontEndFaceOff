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
      jokeList: []
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
      if (this.moveIndex > this.jokeList.length - 1) {
        this.moveIndex = this.jokeList.length - 1
      }
      this.currentJoke = this.jokeList[this.moveIndex]
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
        vm.jokeList.push(joke)
        vm.moveIndex = vm.jokeList.length - 1
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
