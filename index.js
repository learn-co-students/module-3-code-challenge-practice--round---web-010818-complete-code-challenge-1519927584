/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function() {
  console.log('loaded');
  getBooks();
  addEventListeners();
});


function getBooks() {
  fetch('https://flatiron-bookstore-challenge.herokuapp.com/books')
  .then(res => res.json())
  .then(json => renderAllBooks(json));
}

function renderAllBooks(books) {
  let ul = document.getElementById('list');
  for(let i = 0; i < books.length; i++) {
    let li = document.createElement('li');
    li.setAttribute('data-id', books[i].id);
    li.innerText = books[i].title;
    ul.appendChild(li);
  }
}

function addEventListeners() {
  selectBook();
}

function selectBook() {
  let ul = document.getElementById('list');
  ul.addEventListener('click', (e) => {
    let bookId = e.target.dataset.id;
    getBookInfo(bookId);
  });
}

function getBookInfo(id) {
  fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/${id}`)
  .then(res => res.json())
  .then(json => renderBookInfo(json));
}

function renderBookInfo(book) {
  const showPanel = document.getElementById('show-panel');
  const title = document.createElement('h3');
  title.innerText = book.title;
  showPanel.appendChild(title);

  const img = document.createElement('img');
  img.setAttribute('src', book.img_url);
  showPanel.appendChild(img);

  const description = document.createElement('p');
  description.innerText = book.description;
  showPanel.appendChild(description);

  const users = document.createElement('ul');
  let userTitle = document.createElement('h3');
  userTitle.innerText = 'Liked by:';
  users.appendChild(userTitle);

  const usersArr = book.users;
  usersArr.forEach((user) => {
    let li = document.createElement('li');
    li.innerText = user.username;
    users.appendChild(li);
  });
  showPanel.appendChild(users);

  const checkoutBtn = document.createElement('button');
  checkoutBtn.innerText = 'Check Out';
  showPanel.appendChild(checkoutBtn);
  checkout(book);
}

function checkout(book) {
  document.addEventListener('click', (e) => {
    let options = {
      method: 'patch',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify {user_id: 8} //i picked 8
    }
    fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/${book.id}`, options)
    .then(console.log(res))
  }
}
