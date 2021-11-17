// import modules
const axios = require('axios')
const fs = require('fs').promises

// prompt: make a request to scryfall for a random magic card,
// save that card as a json file,
// and then print the names of all cards we have stored

// remember, a promise will look something along the lines of:
// promise
//   .then((someInput) => {
//     // whatever
//   })
//   .then((someInput) => {
//     // remember, you can chain any number of .then() as long as each previous .then() returned a promise
//   })
//   .catch((err) => {
//     // what to do if a promise failed
//   })

// first, make the request for a random card from the scryfall api
// for more info about axios: https://axios-http.com/docs/intro
axios.get('https://api.scryfall.com/cards/random')
  // your first .then() should take this information and use it to write a new file
  // for the new file, use fs.writeFile() and name the file after the card's id
  // fs.writeFile() docs: https://nodejs.org/api/fs.html#fspromiseswritefilefile-data-options

  // your second .then() should read the files you have saved under cards/ using fs.readdir
  // fs.readdir() docs: https://nodejs.org/api/fs.html#fspromisesreaddirpath-options

  // finally, you can read all the files in the cards/ directory with fs.readFile()
  // fs.readFile() docs: https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
  // to read all the files at once, use Promise.all()

  // and remember to have a .catch() at the end!