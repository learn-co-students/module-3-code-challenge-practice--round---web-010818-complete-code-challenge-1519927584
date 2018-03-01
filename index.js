document.addEventListener("DOMContentLoaded", function() {
  let list = document.getElementById("list")
  let listPanel = document.getElementById("list-panel")
  let showPanel = document.getElementById("show-panel")
  fetchBooks();

  function fetchBooks() {
    const url = "https://flatiron-bookstore-challenge.herokuapp.com/books"
    const options = {}

    fetch(url, options)
      .then(res => res.json())
      .then(json => displayList(json));
    // displayList()
  }


  function displayList(json) {
    i = 0
    while (i < 100) {
      let div = document.createElement("div")
      div.setAttribute("id", json[i].id)
      div.innerText = json[i].title
      // div.addEventListener("click", displayCover)
      list.appendChild(div)
        ++i
    }
  }

  function displayCover() {

  }

});