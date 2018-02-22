import axios from 'axios'
import { JokeItem } from './Joke'

export default class JokeRepo {
  constructor (testing) {
    this.testing = testing
  }

  getJoke (category) {
    let vm = this
    // console.log("repo get joke")
    return new Promise(function (resolve, reject) {
      if (vm.testing) {
        resolve(vm.getMockJoke(category))
      } else {
        vm.getAxiosJoke(category).then(function (response) {
          // console.log("response***", response);
          var joke = response.data
          resolve(new JokeItem(joke.id, joke.value, joke.category, joke.url))
        })
          .catch(reject)
      }
    })
  }

  getMockJoke (category) {
    // console.log('getMockJoke')
    let jokes = [
      'When Chuck Norris was born he round house kicked the Doctor in the face Slow mo\u0027 3 times for slapping his ass.',
      'Chuck Norris was once bitten by a rattlesnake in the desert, and after 3 days of pain and agony, the snake died.',
      'Chuck Norris likes his coffee half and half: half coffee grounds, half wood-grain alcohol.',
      'In the beginning there was nothing...then Chuck Norris Roundhouse kicked that nothing in the face and said \u0022Get a job\u0022. That is the story of the universe.'
    ]
    var item
    if (jokes.length > 0) { // does not care about cateory will just get a joke for display purposes
      var randomNumber = Math.floor(Math.random() * jokes.length)
      // return jokes[randomNumber]
      item = new JokeItem(0, jokes[randomNumber])
    } else {
      // return 'No Joke'
      item = new JokeItem(0, 'No Joke')
    }
    return item
  }

  getAxiosJoke (category) {
    if (!category) {
      category = ''
    }
    // console.log('getAxiosJoke')
    return axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
  }
}
