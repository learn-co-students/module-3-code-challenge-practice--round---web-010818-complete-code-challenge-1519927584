class App {
  constructor() {
    this.url = 'https://flatiron-bookstore-challenge.herokuapp.com/books'
    this.list = document.getElementById('list')
    this.showPanel = document.getElementById('show-panel')
    this.books = []
    this.displayDetails = this.displayDetails.bind(this)
    this.fetchBooks()
  }

  fetchBooks() {
    const options = {
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      }
    }
    fetch (this.url, options)
    .then(res => res.json())
    .then(json => this.createBooks(json))
  }

  createBooks(json) {
    this.books = json.map(book => {
      return new Book(book.title, book.description, book.img_url, book.users.map(user => user.username))
    })
    this.displayBooks()
  }

  displayBooks() {
    this.list.innerHTML = this.books.map((book) => book.render()).join('')
    this.list.addEventListener("click", this.displayDetails)
  }

  displayDetails(event) {
    event.preventDefault()
    //find book object with matching title
    const targetBook = this.books.find(book => book.title === event.target.innerText)
    targetBook.renderDetails()
  }
}
