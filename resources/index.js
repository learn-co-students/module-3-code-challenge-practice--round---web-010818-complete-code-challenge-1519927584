document.addEventListener("DOMContentLoaded", function() {

  let books = []


  function getAllBooks() {
    fetch('https://flatiron-bookstore-challenge.herokuapp.com/books')
      .then(res => res.json())
      .then(json => renderAllBooks(json));
  }

  function renderAllBooks(books) {
    books.forEach(book => {
      renderIndividualBook(book);
    })
  }

  function renderIndividualBook(book) {
    let li = document.createElement('li');
    let bookItem = new Book(book.title, book.img_url, book.description, book.users)
    li.innerText = book.title;
    li.addEventListener('click', (event) => {
      displayBookDetails(event.target.innerText);
    })
    listUl.appendChild(li);
    books.push(bookItem);
  }

  function displayBookDetails(bookTitle) {
    let bookObject = books.find((book) => {
      return book.title === bookTitle;
    });

    let sp = document.getElementById('show-panel');
    sp.innerHTML = `<h1>${bookObject.title}</h1><img src=${bookObject.pictureAddress}><p>${bookObject.summary}</p>`;
    showLikes(bookObject);
    checkOutBookButton(bookObject);
  }

  function showLikes(bookObject) {
    let sp = document.getElementById('show-panel');
    if (bookObject.likes.length > 0) {
      sp.innerHTML += '<h3>Previously checked Out Book:</h3><ul>';
      bookObject.likes.forEach(like => {sp.innerHTML += `<li>${like.username}</li>`})
      sp.innerHTML += '</ul><br>';
    }
  }

  function checkOutBookButton(bookObject) {
    let sp = document.getElementById('show-panel');
    sp.innerHTML += `<button type='button' id='check-out-book' dataset.id=${bookObject.id}>Check Out Book</button>`;
    let btn = document.getElementById('check-out-book').addEventListener('click', (event) => checkOutBook(event.target.attributes[2].nodeValue));
  }

  function checkOutBook(bookId) {
    let options = {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        "user_id": 1
      }
    }
    fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/${bookId}`, options)
      .then(res => res.json())
      .then(json => console.log(json));
  }

  getAllBooks();

});
