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
    console.log("Got here");
    let title = "foo"
    let author = "bar"
    let pageCount = "baz"
    let readYet = "false"
    myLibrary.push(new Book(title, author, pageCount, readYet));
    render(myLibrary);
}


function render(myLibrary) {
    let bookList = document.querySelector('#bookList');
    destroyOldList(bookList);
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
        bookList.appendChild(newBook);
    });
}

function destroyOldList(bookList) {
    let child = bookList.lastElementChild;
    while (child) {
        bookList.removeChild(child);
        child = bookList.lastElementChild;
    }
}

bookFormButton = document.querySelector('button[id="newBook"]');
bookFormButton.addEventListener('click', openBookForm);

function openBookForm() {
    bookFormButton.style.visibility = "hidden";
    let formDiv = document.querySelector('div[id="addBookForm"');    
    let newBookForm = document.createElement('form');    
    // Populate form with fields
    let fieldNames = ["Title", "Author", "Page Count", "Read Yet?"]
    fieldNames.forEach(field => {
        let newField = document.createElement('input');
        newField.id = field;
        let newLabel = document.createElement('label');
        newLabel.for= field;
        newLabel.textContent = field + ": ";
        newField.type = "text";
        newField.name = field;
        newField.id = field;
        newBookForm.appendChild(newLabel);
        newBookForm.appendChild(newField);
    })
    let submitButton = document.createElement('button');    
    submitButton.textContent = "Add Book"
    submitButton.addEventListener("click", addBookToLibrary);
        
    formDiv.appendChild(newBookForm);
    formDiv.appendChild(submitButton);
}

render(myLibrary)
