// class App {
//   let list = document.getElementById("list")
//   let listPanel = document.getElementById("list-panel")
//   let showPanel = document.getElementById("show-panel")
//
//   function fetchBooks() {
//     const url = "https://flatiron-bookstore-challenge.herokuapp.com/books"
//     const options = {}
//
//     fetch(url, options)
//       .then(res => res.json())
//       .then(json => console.log(json[2].title))
//   }
//
//
//   function displayList(json) {
//     let ul = document.createElement("ul")
//     ul.setAttribute("title", json.title)
//     list.appendChild(ul)
//   }
// }