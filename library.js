// Book constructor

function Book(title, author, pageCount, readYet) {
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.readYet = readYet    
}

// Core library data object

let myLibrary = [
    { title: 'The Hobbit', author: "J.R.R. Tolkien", pageCount: 264, readYet: "Yes" },
    { title: 'The Fellowship of the Ring', author: "J.R.R. Tolkien", pageCount: 264, readYet: "Yes" },
];

function addBookToLibrary() {    
    let bookForm = document.getElementById('bookForm');        
    let title = bookForm["Title"].value;
    let author = bookForm["Author"].value;
    let pageCount = bookForm["Page Count"].value;
    let readYet = document.querySelector('input[name="readYet"]:checked').value;
    myLibrary.push(new Book(title, author, pageCount, readYet));
    render(myLibrary);
}

// Rendering functions

function render(myLibrary) {
    let bookList = document.querySelector('#bookList');
    destroyOldList(bookList);
    // Create new book list
    myLibrary.forEach(book => {
        let newBook = document.createElement('div');
        newBook.classList.add("bookEntry");
        let bookDetails = document.createElement('div');
        bookDetails.classList.add("bookDetails");        
        bookDetails.innerHTML = `
        <h2>${book.title}</h2>
        Author: ${book.author}<br>
        Page Count: ${book.pageCount}<br>
        Read yet?: ${book.readYet}<button>Read Book?</button><button id="removeBook">Remove Book</button>`
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

// Adding a book

function openBookForm() {
    bookFormButton.style.visibility = "hidden";
    let formDiv = document.querySelector('div[id="addBookForm"]');    
    let newBookForm = document.createElement('form');
    newBookForm.id = "bookForm";    
    // Populate form with fields
    let fieldNames = ["Title", "Author", "Page Count", "Read Yet?"]
    fieldNames.forEach(field => {
        if (field === "Read Yet?") {
           buildReadYetRadio(newBookForm, field);            
        } else {
        let newField = document.createElement('input');        
        newField.id = field;       
        newField.type = "text";
        newField.name = field;        
        let newLabel = document.createElement('label');        
        newLabel.for = field;
        newLabel.textContent = field + ": "        
        newBookForm.appendChild(newLabel);
        newBookForm.appendChild(newField);
        }
    })

    let submitButton = document.createElement('button');        
    submitButton.textContent = "Add Book"    
    submitButton.addEventListener("click", validateNewBookForm);

    let cancelButton = document.createElement('button');
    cancelButton.textContent = "Close Form"
    cancelButton.addEventListener("click", function() {closeNewBookForm([newBookForm, submitButton, cancelButton])});
        
    formDiv.appendChild(newBookForm);
    formDiv.appendChild(submitButton);
    formDiv.appendChild(cancelButton);
    
}

function validateNewBookForm() {    
    let title = document.forms["bookForm"]["Title"].value;
    let author = document.forms["bookForm"]["Author"].value;
    let pageCount = document.forms["bookForm"]["Page Count"].value;
    if (/\D/.test(pageCount) === true) {
        alert("Page count field can only contain numbers!");
        return;
    }
    if (title === "" || author === "" || pageCount === "") {
        console.log("Got here")
        alert("All fields must be filled out before submission.");
        return;
    }
    addBookToLibrary();
}

function buildReadYetRadio(bookForm, field) {
    let radioLabel = document.createElement('label');
    let yesLabel = document.createElement('label');
    let noLabel = document.createElement('label');
    radioLabel.for= field;
    yesLabel.for = "yes"
    noLabel.for = "No"
    radioLabel.textContent = field + ": ";    
    yesLabel.textContent = "Yes"   
    noLabel.textContent = "No"            
    yesLabel.innerHTML = `Yes<input type="radio" id="yes" name="readYet" value ="Yes" />`
    noLabel.innerHTML = `No<input type="radio" id="no" name="readYet" value ="No" checked/>`   
    bookForm.appendChild(radioLabel);
    bookForm.appendChild(yesLabel);
    bookForm.appendChild(noLabel);
}

function closeNewBookForm(form) {
    form.forEach(item => item.remove())
    bookFormButton.style.visibility = "visible";

}

// Start program

render(myLibrary)
bookFormButton = document.querySelector('button[id="newBook"]');
bookFormButton.addEventListener('click', openBookForm);