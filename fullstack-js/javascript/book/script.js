console.log('hi!')


const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return this.title + " " + this.author + " " + this.pages + " " + this.read
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const TheHobbit = new Book("The Hobbit", "JK Rowling", "200", true)

addBookToLibrary(TheHobbit)

function isTableHidden() {
    const getBookTable = document.getElementById('myTable');
    return getBookTable.style.display = 'none' ? true : false
}

function addRow(tableID) {
    const getBookTable = document.getElementById('myTable');

    getBookTable.style.display = 'none';

    let tableStatus = isTableHidden();

    console.log(tableStatus)

    console.log(tableID);
}



console.log(myLibrary);

