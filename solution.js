// import modules
const axios = require('axios')
const fs = require('fs').promises

// prompt: make a request to scryfall for a random magic card,
// save that card as a json file,
// and then print the names of all cards we have stored

// first, make the request for a random card from the scryfall api
axios.get('https://api.scryfall.com/cards/random')
// if we were in browser, we could use fetch()
// but since we are in node, we must use a library
// for more info about axios: https://axios-http.com/docs/intro
  .then(res => {
    // res will contain a lot of other information about the network/server
    // but the actual response payload will be in res.data
    let card = res.data
    // to save the card to a file, we are using node's native fs library
    // fs docs: https://nodejs.org/api/fs.html
    // fs.writeFile needs two arguments: the file name/path and the actual data to write
    // for the filename, let's use the card's id, since we know that will be unique
    return fs.writeFile(
      'cards/' + card.id + '.json',
      JSON.stringify(card), // if we don't JSONify the data, it gets written as [object Object]
    )
  })
  .then(() => {
    // next, we need to read the names of all files in the cards directory
    return fs.readdir('cards')
  })
  .then(cards => {
    // if you didn't have time for the bonus,
    // you can simply print the filenames
    // console.log('Cards:')
    // cards.forEach(card => {
    //   console.log(card)
    // })

    // for the bonus, we can use Promise.all() to simultaneously read every file at once
    // the next .then() will only fire once every promise within the Promise.all() has resolved
    return Promise.all(cards.map(card => {
      return fs.readFile('cards/' + card)
    }))
  })
  .then(cards => {
    // now, we can just loop through the cards and print their names after parsing the json
    console.log('Card names:')
    cards.forEach(card => {
      console.log(JSON.parse(card).name)
    })
  })
  .catch(err => {
    // remember to always include a .catch()!
    // the .catch() will run if any of the previous promises rejected
    console.error(err)
  }) 