// const { default: axios } = require("axios");
// require('dotenv').config();

let placeholders = [
  "cats",
  "music",
  "illegal panini making"
];

$(() => {
  // set random placeholder text in searchbar
  $('#search').attr("placeholder",
    placeholders[Math.floor(Math.random() * placeholders.length)]
  );

  $('form').on('submit', (e) => {
    e.preventDefault()
    let query = $('#search').val()
    window.location = `https://www.youtube.com/results?search_query=${query}`
    // fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&key=${process.env.API_KEY}`)
    // .then(response => {
    //   console.log(response)
    // })
    // redirect to youtube results
  });



});