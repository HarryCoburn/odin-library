let myLibrary = [
    { title: 'The Hobbit', author: "J.R.R. Tolkien", pageCount: 264, readYet: true },
    { title: 'The Fellowship of the Ring' }
];

function Book(title, author, pageCount, readYet) {
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.readYet = readYet
    this.info = function () {
        return `${title} by ${author}, ${pageCount} pages, ${readYet ? "already read" : "not read yet"}`
    }
}

function addBookToLibrary() {
    let title = "foo"
    let author = "bar"
    let pageCount = "baz"
    let readYet = "false"
    myLibrary.push(new Book(title, author, pageCount, readYet));
}


function render(myLibrary) {
    let body = document.querySelector('body');
    myLibrary.forEach(book => {
        let newBook = document.createElement('div');
        newBook.classList.add("bookEntry");
        let bookDetails = document.createElement('div');
        bookDetails.classList.add("bookDetails");
        let title = document.createElement('h2');

        title.textContent = book.title;
        bookDetails.innerHTML = `
        Author: ${book.author}<br>
        Page Count: ${book.pageCount}<br>
        Read yet?: ${book.readYet}`
        newBook.appendChild(title)
        newBook.appendChild(bookDetails)
        body.appendChild(newBook);
    });
}

render(myLibrary)
