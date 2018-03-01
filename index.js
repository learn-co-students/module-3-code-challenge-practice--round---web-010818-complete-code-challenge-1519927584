document.addEventListener("DOMContentLoaded", function() {

  fetch('https://flatiron-bookstore-challenge.herokuapp.com/books')
    .then(res=>res.json())
    .then(json=>printTitle(json))

  let bookList = document.getElementById("list")


  function printTitle(json){
    for(let i = 0; i < json.length; i++){
      let title = json[i].title
      let li = document.createElement("li")
      li.setAttribute("id", title)
      li.innerText = title
      li.addEventListener('click', function(event){
        displayBook(json[i])
          })
      bookList.appendChild(li)
    }
  }

  function displayBook(json){
    let display = document.getElementById("show-panel")


    let bookInfo =
    `<h3>${json.title}</h3>
    <img src=${json.img_url} alt=${json.title}>
    <p>${json.description}</p>`


    let ul = document.createElement("ul")

    for(let i = 0; i < json.users.length; i++){
      let user = json.users[i].username
      let li = document.createElement('li')
      li.innerText = user
      ul.appendChild(li)
    }


    let button = document.createElement('button')

    button.setAttribute("id", "json.id")
    button.innerText = "Read Book"
    button.addEventListener("click", function(event){
      pushToDB(18, json.id)
    })


    display.innerHTML = bookInfo
    display.appendChild(ul)
    display.appendChild(button)

  }


// function addUser(json, user){
//   )
//
//
//   json.users.push(user)
//
// }

// function getUser(userId){
//   fetch("https://flatiron-bookstore-challenge.herokuapp.com/users")
//     .then(res=>res.json())

// }




  function pushToDB(user_id, bookId){
    console.log(user_id, bookId)

    let options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({"user_id": user_id})
    };
    fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/${bookId}`)
      .then(res=>res.json())
      .then(json=>addUser(json, user_id))
  }







    // On click:
    // Title
    // Picture
    // description
    // Button "Read Book"

    // On click readbook:
    // add username
    // push up username to db

});
