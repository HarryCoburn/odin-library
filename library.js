let myLibrary = [];

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