const getBookTable = document.getElementById('myTable');
const getForm = document.getElementById('formID');

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

const TheHobbit = new Book("The Hobbit", "JK Rowling", "200", true);
const DeepWork = new Book("Deep Work", "Cal Newport", "200", false);
const WillyWonka = new Book("Willy Wonka", "Roald Dahl", "200", true);

addBookToLibrary(TheHobbit);
addBookToLibrary(DeepWork);
addBookToLibrary(WillyWonka)

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
    getForm.style.display = 'block';
    

    let tableStatus = isTableHidden();

    console.log(tableStatus);

    console.log(tableID);

    // also add button that hides this view and returns us to the main view
    //make a form that takes in all the book object parameters
    //create a new object from that form
    //add that to our Library
    // once submit happens return to main view to show all books
}




console.log(myLibrary);

