class Book {
  constructor(id, title, description, imgUrl, users){
    this.id = id
    this.title = title
    this.description = description
    this.imgUrl = imgUrl
    this.users = users
    this.showPanel = document.getElementById("show-panel")
  }

  render(){
    let bookHTML = `
      <h1> ${this.title} </h1>
      <img src="${this.imgUrl}">
      <p> ${this.description} </p>
      <ul> ${this.renderUsers().join("")} </ul>
      <button data-id="${this.id}"> Read book </button>
    `
    this.showPanel.innerHTML = bookHTML
    this.addEventListenerToButton()
  }

  renderUsers(){
    return this.users.map(user => `<li> ${user.username} </li>`)
  }

  addEventListenerToButton(){
    let button = document.querySelector(`button[data-id="${this.id}"]`)
    this.button = button
    this.button.addEventListener("click", event => {
      this.checkoutBook()
    })
  }

  checkoutBook(){
    console.log("in checkout book")
    let options = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({user_id: 1})
    }
    fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/${this.id}`, options)
      .then(res => res.json())
      .then(json => {
        let this.renderUsers()
      })
  }

}
