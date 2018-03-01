
class App {
 constructor() {
   this.list = document.getElementById("list");
   this.showPanel = document.getElementById("show-panel");
  }

  fetchBooks() {
   fetch("https://flatiron-bookstore-challenge.herokuapp.com/books")
      .then(res => res.json())
      .then(json => this.generateBooks(json));
  }

  generateBooks(json) {
  json.forEach(result => {
     this.createBookItem(result);
  });
};


  createBookItem(result) {
     let li = document.createElement("li");
     li.innerText = result.title;
     this.list.appendChild(li);

     li.addEventListener("click", event => {
      this.onBookClick(result);
  });
}

  //render the individual page for each book

onBookClick(result){
  console.log(result)
  let div = document.createElement("div")
  div.innerHTML = ` <h1>${result.title}</h1> `
  div.innerHTML += `<h3> ${result.description} </h3>`
  div.innerHTML += `<img src=${result.img_url}>`
  result.users.forEach(user => {   
    div.innerHTML +=`<li>${user.username}</li>`
  })
  this.showPanel.appendChild(div)
}

};
