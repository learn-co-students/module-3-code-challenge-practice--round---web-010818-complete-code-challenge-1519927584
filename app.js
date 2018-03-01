class App{
  constructor(){


  }


  fetchBooks(){
    fetch('https://flatiron-bookstore-challenge.herokuapp.com/books')
    .then(res => res.json())
    .then(json => this.listBooks(json))
  }

  listBooks(listArr){
    for(let i=0; i<listArr.length; i++){
      let b = new Book(listArr[i])
      // let li = document.createElement('li')
      // li.innerText = listArr[i].title
      // li.dataset.id = listArr[i].id
      // listSpace.appendChild(li)
      // this.addEventListener(li)
    }
  }

  addEventListener(li){
    let div = document.createElement('div')
    showSpace.appendChild(div)
    li.addEventListener('click', event=>{
      let p = document.createElement('p')
       p.innerText = li.innerText
       div.appendChild(p)
    })


    //reference all the books
    //every time i click on a book i get the book infor
  }

}
