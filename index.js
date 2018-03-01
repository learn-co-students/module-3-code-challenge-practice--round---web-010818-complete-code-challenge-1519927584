document.addEventListener("DOMContentLoaded", () => {
console.log("hello")

// let books = new Book();




fetch("https://flatiron-bookstore-challenge.herokuapp.com/books")
.then(res => res.json())
.then(json => populateBooks(json))

function populateBooks(json){
  json.forEach(book => {
    createBooks(book.title)
  })
}

 function createBooks(book){
  let list = document.getElementById('list')
   let li = document.createElement("li")
    li.innerText = book
    li.setAttribute("book-id", book.id)
    list.appendChild(li)
   // list.innerHTML = `<li> ${books.forEach(function(book){book.title})} </li> `
   li.addEventListener("click", event => {
     this.clickedBook(event);

   })
}

  function clickedBook(event) {
    console.log()
    // let bookData = event

  }




});
