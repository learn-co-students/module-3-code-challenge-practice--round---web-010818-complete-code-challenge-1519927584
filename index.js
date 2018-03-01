document.addEventListener("DOMContentLoaded", function() {
  console.log("loaded")
  let newApp = new App()
  newApp.fetchBooks()
});

class App{
  constructor(){
  }

  fetchBooks(){
    fetch("https://flatiron-bookstore-challenge.herokuapp.com/books")
    .then(resp => resp.json())
    .then(books => this.booksData(books))
  }

  booksData(books){
    let booksUl = document.getElementById("list")
    books.forEach(book => {
      let bookLi = document.createElement("li")
      bookLi.setAttribute("data-bookid", book.id)
      bookLi.innerText = book.title
      booksUl.append(bookLi)
      bookLi.addEventListener("click", () => {
        this.bookEvent(event)
        }
      )
    })
  }

  bookEvent(event){
    let bookId = event.target.dataset.bookid
     fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/${bookId}`)
     .then(resp => resp.json())
     .then(book => this.bookInfo(book))
  }

  bookInfo(book){
    console.log(book.users)

    let bookId = book.id
    let showPanel = document.getElementById("show-panel")
    let ul = document.createElement("ul")
    // let img = document.createElement("img")
    // let imgURL = book.img_url
    // img.setAttribute("src", imgURL)
    let descriptionLi = document.createElement("li")
    descriptionLi.innerText = book.description
    ul.append(descriptionLi)
    // ul.append(imgURL)
    showPanel.append(ul)

    let bookUsers = book.users
    for(let i = 0; i < bookUsers.length; i++){
      let userLi = document.createElement("li")
      userLi.innerText = bookUsers[i].username
      ul.append(userLi)
    }


// `http://books.google.com/books/content?id=${bookId}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`
  }


}
