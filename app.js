class App {
  constructor() {
    this.listContainer = document.getElementById('list')
    this.getBooks();
  }
  getBooks() {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(json => this.listBooks(json))
  }

  listBooks(json) {
    json.forEach(book => {
      const li = document.createElement('li');
      li.setAttribute('data-id', book.id)
      li.innerText = book.title;
      this.listContainer.appendChild(li);
      this.addBookListener(li)
    })
  }

  addBookListener(li) {
    li.addEventListener('click', event => {
      let book = new Book(li.dataset.id)
    })
  }

  





}
