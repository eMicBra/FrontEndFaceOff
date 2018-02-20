import axios from 'axios'

export default class JokeRepo {  
    constructor(testing) {
      this.testing = testing;
    }
  
    // start() {
    //   return "Project " + this.name + " starting";
    // }

    getJoke () {
        console.log("repo get joke")
        if (this.testing) {
            this.getMockJoke()
        } else {
            this.getAxiosJoke()
        }
      }

      getMockJoke () {
        let vm = this
        console.log('getMockJoke')
        let jokes = [
          'When Chuck Norris was born he round house kicked the Doctor in the face Slow mo\u0027 3 times for slapping his ass.',
          'Chuck Norris was once bitten by a rattlesnake in the desert, and after 3 days of pain and agony, the snake died.',
          'Chuck Norris likes his coffee half and half: half coffee grounds, half wood-grain alcohol.',
          'In the beginning there was nothing...then Chuck Norris Roundhouse kicked that nothing in the face and said \u0022Get a job\u0022. That is the story of the universe.'
        ]
        if (jokes.length > 0) { // does not care about cateory will just get a joke for display purposes
          var randomNumber = Math.floor(Math.random() * jokes.length)
          return jokes[randomNumber]
        } else {
          return 'No Joke'
        }
      }

      getAxiosJoke () {
        console.log('getAxiosJoke')
        let vm = this
        axios.get(`https://api.chucknorris.io/jokes/random?category=${vm.randomCategory}`)
          .then(function (response) {
            // console.log(response)
            return response.data.value
          })
          .catch(function (error) {
            console.log(error)
          })
      }    
  }
  


