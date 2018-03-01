class App {
  constructor(){
    this.listPanel = document.getElementById("list-panel")
    this.books = []
  }

  fetchBooks(){
    fetch('https://flatiron-bookstore-challenge.herokuapp.com/books')
      .then(res => res.json())
      .then(json => this.createBooks(json))
  }

  createBooks(books){
    books.forEach(book => {
      let title = book.title
      let id = book.id
      let description = book.description
      let imgUrl = book.img_url
      let users = book.users
      let newBook = new Book(id, title, description, imgUrl, users)
      this.books.push(newBook)
    })
    this.renderBooks()
    this.addEventListenerToBooks()
  }

  renderBooks(){
    let booksHTML = this.books.map(book => `<li data-id="${book.id}"> ${book.title} </li>` )
    this.listPanel.innerHTML += booksHTML.join("")
  }

  addEventListenerToBooks(){
    let lis = document.querySelectorAll("li")
    lis.forEach(li => li.addEventListener("click", event =>{
      let book = this.books.find(book => book.id == li.dataset.id)
      book.render()
    }) )
  }


}
