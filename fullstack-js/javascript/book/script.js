const getBookTable = document.getElementById('myTable');
const getForm = document.getElementById('formID');
const getReturnButton = document.getElementById('return-button')

const myLibrary = [];
let itemsInTable = []


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
    myLibrary.push(book);
}

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

const TheHobbit = new Book("The Hobbit", "JK Rowling", "200", true);
const DeepWork = new Book("Deep Work", "Cal Newport", "200", false);
const WillyWonka = new Book("Willy Wonka", "Roald Dahl", "200", true);

addBookToLibrary(TheHobbit);
addBookToLibrary(DeepWork);
addBookToLibrary(WillyWonka)

function displayBooksToTable() {

    myLibrary.forEach(item => {

        if(!isInArray(item, itemsInTable)) {
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
        }

        

        itemsInTable.push(item);

    })
}

displayBooksToTable();

function isTableHidden() {
    return getBookTable.style.display = 'none' ? true : false
}

function hideFormShowTable() {
   if(getBookTable.style.display === 'none') {
    getBookTable.style.display = 'revert'
    getForm.style.display = 'none'
   }
}

function addRow(tableID) {
    getBookTable.style.display = 'none';
    getForm.style.display = 'block';
    getReturnButton.style.display = 'inline'


    let tableStatus = isTableHidden();

    console.log(tableStatus);

    console.log(tableID);

    // also add button that hides this view and returns us to the main view
    // make a form that takes in all the book object parameters
    // create a new object from that form
    // add that to our Library
    // once submit happens return to main view to show all books


}

// good example https://stackoverflow.com/questions/66072838/passing-form-data-to-javascript 
function submitForm() {
    const inputValues = document.querySelectorAll('#formID input')
    const title = inputValues[0].value;
    const author = inputValues[1].value;
    const pages = inputValues[2].value;
    const readStatus = inputValues[3].value;

    const addedBook = new Book(title, author, pages, readStatus);

    myLibrary.push(addedBook)

    console.log(myLibrary);

    displayBooksToTable();
    getBookTable.style.display = 'revert'; 
    getForm.style.display = 'none';
    getReturnButton.style.display = 'none';
    document.forms[0].reset();
}


console.log(myLibrary);

