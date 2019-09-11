let myLibrary = [
    {title: 'The Hobbit'}, 
    {title: 'The Fellowship of the Ring'}
];

function Book(title, author, pageCount, readYet) {
    this.title = title    
    this.author = author
    this.pageCount = pageCount
    this.readYet = readYet
    this.info = function() {
        return `${title} by ${author}, ${pageCount} pages, ${readYet?"already read":"not read yet"}`
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
        let bookDetails = document.createElement('div');
        let title = document.createElement('h1');        

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
