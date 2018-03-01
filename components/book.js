class Book {
  constructor(title, description, img_url, users) {
    this.title = title;
    this.description = description;
    this.img_url = img_url
    this.users = [];
  }

  render() {
    return `<li id="${this.id}">${this.title}</li>`
  }

  renderDetails() {

    return `<h2>${this.title}</h2>
            <img src="${this.img_url}">
            <p>${this.description}</p>
            ${this.users.map(user => {
              return `<p><strong>${user}</strong></p>`
            }).join('')}
            <button id="read-book">Read Book</button>`

  }
}
