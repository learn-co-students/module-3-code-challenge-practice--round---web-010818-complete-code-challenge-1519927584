let URL =`https://flatiron-bookstore-challenge.herokuapp.com/books`;


document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom Content has been loaded");
  // let app = new App();


let bookElements = document.getElementById('book-panel');
let bookId = document.getElementById('show-panel');


// function fetchBooks() {
//   fetch('https://flatiron-bookstore-challenge.herokuapp.com/books')
//     .then(res => res.json())
//     .then(json => {
//       json.forEach(book => {
//         console.log(book)
//         new Book(book)
//       })
//     })
// }

function fetchBooks(){
  fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books`)
  .then(res => res.json)
  .then(json => console.log(json))
}

fetchBooks();

function postBook(title) {
  let options = {
    method:'post',
    headers: {
      'Content-Type':'application/json',
      Accept:'application/json'
    },
    body:JSON.stringify({user_id:3, title:title})
  }
  fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books`, options)
    .then(res => res.json())
    .then(json => new Book(json))
}

function postClick(bookId, title, description) {
let options = {
  method:'post',
  headers: {
    'Content-Type':'application/json',
    Accept:'application/json'
  },
  body:JSON.stringify({user_id:6, title:title, description:description})
}
fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/users/2`, options)
  .then(res => res.json())
  // s.then(json => new Book(json, bookId))
}


    function addClickListener() {
      this.taskForm.addEventListener('submit',event => {
        event.preventDefault();
        let bookId = ?event.target[0].value
        let title = ?event.target[1].value
        let description = event.target[2].value
        this.postClick(BookId, title, description)
        event.target[1].value =
        event.target[2].value=
      })
    }
    postClick()

});
