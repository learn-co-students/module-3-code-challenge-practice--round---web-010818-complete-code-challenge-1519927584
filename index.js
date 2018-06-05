/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function() {
  console.log('loaded');
  getBooks();
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
  selectBookListener();
}

function selectBookListener() {
  let ul = document.getElementById('list');
  ul.addEventListener('click', (e) => {
    let bookId = e.target.dataset.id;
    getBookInfo(bookId);
    const showPanel = document.getElementById('show-panel');
  });
}

function getBookInfo(id) {
  fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/${id}`)
  .then(res => res.json())
  .then(json => renderBookInfo(json));
}

function renderBookInfo(book) {
  const showPanel = document.getElementById('show-panel');
  showPanel.innerHTML = '';

  const title = document.createElement('h3');
  title.innerText = book.title;
  showPanel.appendChild(title);

  const img = document.createElement('img');
  img.setAttribute('src', book.img_url);
  showPanel.appendChild(img);

  const description = document.createElement('p');
  description.innerText = book.description;
  showPanel.appendChild(description);

  const checkedOutBy = document.createElement('h4');
  checkedOutBy.innerText = 'Past users:';
  showPanel.appendChild(checkedOutBy);

  const usersUl = document.createElement('ul');
  usersUl.setAttribute('id', 'usersUl');
  const usersArr = book.users;
  usersArr.forEach((user) => {
    let li = document.createElement('li');
    li.innerText = user.username;
    usersUl.appendChild(li);
  });
  showPanel.appendChild(usersUl);

  const checkoutBtn = document.createElement('button');
  checkoutBtn.setAttribute('id', 'checkout');
  checkoutBtn.innerText = 'Check Out';
  showPanel.appendChild(checkoutBtn);
  checkOutListener(book);
}

function checkOutListener(book) {
  const checkoutBtn = document.getElementById('checkout');
  checkoutBtn.addEventListener('click', (e) => {
    let users = book.users;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === 14) {
        alert("You had your chance!");
      }
    }
    updateApi(book);
  });
}

function renderUpdatedCheckOutList() {
  const usersUl = document.getElementById('usersUl');
  let li = document.createElement('li');
  li.innerText = user.username;
  usersUl.appendChild(li);
}

function updateApi(book) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user_id: 14})
  };
  fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/${book.id}`, options)
  .then(res => res.json())
  .then(json => renderBookInfo(json));
}
