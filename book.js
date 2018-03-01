class Book {
  constructor(){
    this.bookList = document.getElementById("list");
    this.bookDetail = document.getElementById("show-panel");
  }

  // addEventListener(){
  //   this.bookList.addEventListener("click", event => {
  //   })
  // }

  fetchBooks(){
    fetch("https://flatiron-bookstore-challenge.herokuapp.com/books")
    .then(res => res.json())
    .then(json => {this.populate(json)})
  }

  populate(json){
    json.forEach(book => {
      this.createBookItem(book);
    });
  }

  createBookItem(book){
      let bookItem = document.createElement("li");
      bookItem.setAttribute("data-bookid", book.id)
      bookItem.innerText = book.title;
      this.bookList.appendChild(bookItem);

      bookItem.addEventListener("click", event => {
        this.showBookDetails(book)
      });
  }

  showBookDetails(book){
    console.log(book)
    let bookImg = document.createElement('img')
    console.log(book.img_url)
    bookImg.innerHTML = `src="${book.img_url}"`
    this.bookDetail.appendChild(bookImg)
  }

}
