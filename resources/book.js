let id = 0;
let listUl = document.getElementById('list');

class Book {

  constructor(title, pictureAddress, summary, users) {
    this.id = ++id;
    this.title = title;
    this.pictureAddress = pictureAddress;
    this.summary = summary;
    this.likes = users;
  }



  // listUl.addEventListener('click', (event) => {
  //   console.log('Clicked', event);
  // })

  showBookDetails(book) {

  }


}
