const getBookTable = document.getElementById('myTable');
const myLibrary = [];

// classes in this method aren't supported by older browsers, have to use the function Book() {} implicit constructor def but works locally so whatever
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

Book.prototype.info = function() {
    return this.title + " " + this.author + " " + this.pages + " " + this.read
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const TheHobbit = new Book("The Hobbit", "JK Rowling", "200", true)
const DeepWork = new Book("Deep Work", "Cal Newport", "200", false)

addBookToLibrary(TheHobbit);
addBookToLibrary(DeepWork)

function displayBooksToTable() {
    myLibrary.forEach(item => {

        let mutableTableState = getBookTable.insertRow(-1);
    
        let title = mutableTableState.insertCell(0);
        let author = mutableTableState.insertCell(1);
        let pages = mutableTableState.insertCell(2);
        let read = mutableTableState.insertCell(3);
    
        title.innerHTML = item.title
        author.innerHTML = item.author
        pages.innerHTML = item.pages
        read.innerHTML = item.read

        console.log('looping inside my library');
        console.log(item);
    })
}

displayBooksToTable();

function isTableHidden() {
    return getBookTable.style.display = 'none' ? true : false
}

function addRow(tableID) {
    getBookTable.style.display = 'none';

    let tableStatus = isTableHidden();

    console.log(tableStatus);

    console.log(tableID);
}




console.log(myLibrary);

