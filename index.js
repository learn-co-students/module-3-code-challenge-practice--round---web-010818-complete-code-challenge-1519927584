document.addEventListener("DOMContentLoaded", function() {
	const bookList = document.getElementById('list');
	const showPanel = document.getElementById('show-panel');

	fetch('https://flatiron-bookstore-challenge.herokuapp.com/books')
		.then(res => res.json())
		.then(json => renderBooks(json))

	function renderBooks(books) {
		books.forEach(book => {
			bookList.innerHTML += `<li data-id=${book.id}>${book.title}</li>`
		})
	}

	bookList.addEventListener("click", event => {
		showPanel.innerHTML = "";
		let targetId = event.target.dataset.id;
		fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/${targetId}`)
			.then(res => res.json())
			// .then(json => console.dir(json))
			.then(json => renderShow(json))
	})

	function renderShow(book) {
		let bookTitleElement = document.createElement('p')
		let bookTitle = book.title
		bookTitleElement.innerText = bookTitle;

		let bookImageElement = document.createElement('img')
		let bookImage = book.img_url
		bookImageElement.src = bookImage;

		let bookDescElement = document.createElement('p')
		let bookDesc = book.description
		bookDescElement.innerText = bookDesc;

		let bookUsersElement = document.createElement('p')
		let bookUsers = book.users
		bookUsers.forEach(user => bookUsersElement.innerText += `${user.username} `)

		let readBookButton = document.createElement('button')
		readBookButton.value = `${book.id}`;
		readBookButton.innerText = "Read Book";
		readBookButton.addEventListener("click", event => {
			let selectedBookID = event.target.value;

			let body = {
				"user_id": 10
			}
			let options = {
				method: 'PATCH',
				headers: {
					"content-type": 'application/json',
					"accept": 'application/json'
				},
				body: JSON.stringify(body)
			}

			fetch(`https://flatiron-bookstore-challenge.herokuapp.com/books/${selectedBookID}`, options)
				.then(res => res.json())
				.then(json => console.log(json)) // STOPPED HERE (NEED TO APPEND USER TO DOM'S LIST)
		})

		showPanel.appendChild(bookTitleElement);
		showPanel.appendChild(bookImageElement);
		showPanel.appendChild(bookDescElement);
		showPanel.appendChild(bookUsersElement);
		showPanel.appendChild(readBookButton);
	}

});