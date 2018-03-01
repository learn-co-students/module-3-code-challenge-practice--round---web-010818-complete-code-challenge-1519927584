class Book {
  constructor(id) {
    this.id = id
    this.container = document.getElementById('show-panel')
    this.getDetail(this.id)
  }

  getDetail(id) {
    fetch(BASE_URL+'/'+id)
      .then(res => res.json())
      .then(json => this.render(json))
  }

  render(json) {
    this.container.innerHTML = ""
    this.container.innerHTML += `<h1>${json.title}</h1>`
    let img = document.createElement('img');
    img.src = json.img_url
    this.container.appendChild(img);
    let desc = document.createElement('p');
    desc.innerText = json.description;
    this.container.appendChild(desc)

    let userList = document.createElement('ul')
    json.users.forEach(user => {
      let li = document.createElement('li');
      li.innerText = user.username;
      userList.appendChild(li);
    })
    this.container.appendChild(userList);

    let button = document.createElement('button');
    button.innerText = "Read Book"
    button.id = `button-${json.id}`
    button.className = 'read-button'

    this.container.appendChild(button)
    let read = this.checkIfRead(json.users)
    if(read) {
      this.alreadyRead(json.id)
    } else {
      this.addButtonListener(json.id)
    }
  }

  addButtonListener(id) {
    let button = document.getElementById(`button-${id}`)
    button.addEventListener('click', event => {
      this.readBook(id)
    })
  }

  alreadyRead(id) {
    let button = document.getElementById(`button-${id}`)
    button.addEventListener('click', event => {
      window.alert("Already read!");
    })
  }

  checkIfRead(users) {
    let self = users.find(user => {
      return user.id === 16
    })
    if (self) {
      return true;
    } else {
      return false
    }
  }



  readBook(id) {
    let options = {
      method:'PATCH',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify({'user_id':16})
    }
    fetch(BASE_URL+'/'+id, options)
      .then(res => res.json())
      .then(json => {
        this.render(json)
      })
  }
}
