class App {
  constructor() {
    this.bookList = document.getElementById("list")
    this.showPanel = document.getElementById("show-panel")
    this.renderBookList = this.renderBookList.bind(this)
    this.updateBookUserList = this.updateBookUserList.bind(this)
    this.books = []
    this.userId = 1
  }

  fetchBooks() {
    fetch("https://flatiron-bookstore-challenge.herokuapp.com/books")
      .then(res => res.json())
      .then(json => this.renderBookList(json))
  }

  patchBook(bookId, userId) {
    let body = {"user_id": userId}
    let options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    }
    fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/${bookId}`, options)
      .then(res => res.json())
      .then(json => this.updateBookUserList(json))
  }

  createBookEvent(bookLi) {
    bookLi.addEventListener("click", () => {
      this.showPanel.innHTML = ""
      this.renderBookInfo(bookLi.dataset.bookId)
    })
  }

  createUpdateUsersEvent(button, bookId) {
    button.addEventListener("click", () => {
      this.patchBook(bookId, this.userId)
    })
  }

  updateBookUserList(json) {
    let ul = document.getElementById("user-list")
    ul.innerHTML = ""
    let users = json.users
    for (let user of users) {
      let li = document.createElement("li")
      li.innerText = user.username
      li.setAttribute("data-user-id", user.id)
      ul.append(li)
    }
  }

  renderBookList(json){
    for(let book of json) {
      this.renderBook(book)
      this.books.push(book)
    }
  }

  renderBook(book) {
    let li = document.createElement("li")
    li.innerText = book.title
    li.setAttribute("data-book-id", book.id)
    this.bookList.append(li)
    this.createBookEvent(li)
  }



  renderBookInfo(bookId) {
    this.showPanel.innerHTML = ""
    let foundBook = this.books.find((book) => book.id == bookId)
    let img = document.createElement("img")
    img.setAttribute("src",foundBook.img_url)
    img.innerText = `${foundBook.title} thumbnail`
    this.showPanel.append(img)

    let p = document.createElement("p")
    p.innerText = foundBook.description
    this.showPanel.append(p)

    let ul = document.createElement("ul")
    ul.id = "user-list"
    let users = foundBook.users
    for (let user of users) {
      let li = document.createElement("li")
      li.innerText = user.username
      li.setAttribute("data-user-id", user.id)
      ul.append(li)
    }
    this.showPanel.append(ul)
    let button = document.createElement("button")
    button.innerText = "Read Book"
    button.id = "read-book"
    this.createUpdateUsersEvent(button, foundBook.id)
    this.showPanel.append(button)
  }
}
