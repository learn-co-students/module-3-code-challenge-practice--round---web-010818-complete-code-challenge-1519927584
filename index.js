document.addEventListener("DOMContentLoaded", function() {

    console.log('dom content loaded')
    let app = new App()
    app.fetchBooks()
    console.log(app.books)
});
