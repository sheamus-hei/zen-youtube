let placeholders = [
  "cats",
  "music",
  "illegal panini making"
]

$(() => {
  // set random placeholder text in searchbar
  $('#search').val(placeholders[Math.floor(Math.random() * placeholders.length)])

  $('form').on('submit', (e) => {
    e.preventDefault()
    let query = $('#search').val()
    fetch(`https://www.googleapis.com/youtube/v3/search)
    // redirect to youtube results
  });

  $('#lucky').on('click', (e) => {
    e.preventDefault();
    // redirect to first result
  })


});