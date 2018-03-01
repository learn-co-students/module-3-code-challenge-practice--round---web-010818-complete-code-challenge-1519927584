const url = "https://flatiron-bookstore-challenge.herokuapp.com/books"

const userId = 11

const list = document.getElementById("show-panel")
const listBook = document.getElementById("list")


document.addEventListener("DOMContentLoaded", () => {
  fetchBooks()
});


function fetchBooks() {
  fetch(url)
    .then(res => res.json())
    .then(json => showBooks(json))
}

function showBooks(json) {
  for (var i = 0; i < json.length; i++) {
    let div = document.createElement("div")
    div.innerHTML = (json[i].title)
    div.setAttribute("id", json[i].id)
    listBook.appendChild(div)
  }


}


document.addEventListener("click", (e) => {
  let bookId = (e.target.id);
  fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/${bookId}`)
    .then(res => res.json())
    .then(json => showBook(json))
})


function showBook(json) {
  list.innerHTML = ""
  let divTitle = document.createElement("div")
  let divDes = document.createElement("div")
  let btn = document.createElement("BUTTON");
  var t = document.createTextNode("Checkout");
  btn.appendChild(t);


  divTitle.innerHTML = ("Title:   " + json.title)
  divDes.innerHTML = "Description:   " + json.description
  list.appendChild(divTitle)
  list.appendChild(divDes)


  for (var i = 0; i < json.users.length; i++) {
    let divUser = document.createElement("div")
    divUser.innerHTML = ("User:  " + json.users[i].username)
    list.appendChild(divUser)

  }
   list.appendChild(btn);


}
