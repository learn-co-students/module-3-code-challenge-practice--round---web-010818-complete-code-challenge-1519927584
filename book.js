class Book {

  constructor(){
    this.bookContainer = document.getElementById("book-list");
  }

  fetchBooks(){
    fetch("https://flatiron-bookstore-challenge.herokuapp.com/books")
    .then(res => res.json());
    .then(json => this.populateData(json));
  }

  populateData(json){
  let bookResults = json.results;
  console.log(this.bookContainer);
  bookResults.forEach((book)=>{
    this.createBookItem(book));
  });




};
