class App {
  constructor(){
    this.listBooks = document.getElementById("list")
    this.showPanel = document.getElementById("show-panel")


  }

  fetchBooks(){
    fetch("https://flatiron-bookstore-challenge.herokuapp.com/books")
    .then(res => res.json())
    .then(books => this.showBooks(books))

  }

  showBooks(books){
    books.forEach((book) => {
      this.createBook(book)
    })
  }

  createBook(book){
    let li = document.createElement('li')
    li.setAttribute("id", book.id)
    li.innerText = book.title
    this.listBooks.appendChild(li)
    li.addEventListener("click", (event) => {
      this.displayBook(book)
    })
  }

  displayBook(book){
    this.showPanel.innerHTML = ""
    let h2 = document.createElement('h2')
    h2.innerText = book.title
    let img = document.createElement("img")
    img.src = book.img_url
    let p = document.createElement("p")
    p.innerText = book.description
    let p2 = document.createElement("p")
    p2.innerText = "People who have read the book:"
    let ul = document.createElement("ul")

    this.showPanel.appendChild(h2)
    this.showPanel.appendChild(img)
    this.showPanel.appendChild(p)
    this.showPanel.appendChild(p2)
    this.showPanel.appendChild(ul)

    book.users.forEach((user) => {
      let li = document.createElement("li")
      li.innerText = user.username
      ul.appendChild(li)
    })

    this.readBook(book)
  }

  patchUser(book){

    let options = {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },

      body: JSON.stringify({
          "user_id": 17
          })
    };
    
    fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/${book.id}`, options)
    .then((res) => res.json())
    .then(book => {
      this.displayBook(book)
    })
  }

  readBook(book){
    let btn = document.createElement('button')
    btn.innerText = "Read Book"
    this.showPanel.appendChild(btn)
    this.buttonListerner(book)

  }


  buttonListerner(book){
    let btn = document.getElementsByTagName('button')[0]
    btn.addEventListener("click", (event) => {
      if(book.users.find((user) => user.id === 17)){
        return alert("you have read the book")
      } else {
        this.patchUser(book)
      }
    })
  }



}
