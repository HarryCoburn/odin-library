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
    let bookForm = document.getElementById('bookForm');    
    let title = bookForm["Title"].value;
    let author = bookForm["Author"].value;
    let pageCount = bookForm["Page Count"].value;
    let readYet = bookForm["Read Yet?"].value;
    myLibrary.push(new Book(title, author, pageCount, readYet));
    render(myLibrary);
}


function render(myLibrary) {
    let bookList = document.querySelector('#bookList');
    destroyOldList(bookList);
    // Create new book list
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

function openBookForm() {
    bookFormButton.style.visibility = "hidden";
    let formDiv = document.querySelector('div[id="addBookForm"]');    
    let newBookForm = document.createElement('form');
    newBookForm.id = "bookForm";    
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

    let cancelButton = document.createElement('button');
    cancelButton.textContent = "Close Form"
    cancelButton.addEventListener("click", function() {closeNewBookForm([newBookForm, submitButton, cancelButton])});
        
    formDiv.appendChild(newBookForm);
    formDiv.appendChild(submitButton);
    formDiv.appendChild(cancelButton);
    
}

function closeNewBookForm(form) {
    form.forEach(item => item.remove())
    bookFormButton.style.visibility = "visible";

}

render(myLibrary)
bookFormButton = document.querySelector('button[id="newBook"]');
bookFormButton.addEventListener('click', openBookForm);