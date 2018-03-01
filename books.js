function fetchBooks() {
  fetch('https://flatiron-bookstore-challenge.herokuapp.com/books')
    .then(res => res.json())
    .then(json => {
      json.forEach(book => {
        console.log(book)
        new Book(book)
      })
    })
}

function postBook(title) {
  let options = {
    method:'post',
    headers: {
      'Content-Type':'application/json',
      Accept:'application/json'
    },
    body:JSON.stringify({user_id:3, title:title})
  }
  fetch('https://flatiron-bookstore-challenge.herokuapp.com/users/3', options)
    .then(res => res.json())
    .then(json => new Book(json))
}
