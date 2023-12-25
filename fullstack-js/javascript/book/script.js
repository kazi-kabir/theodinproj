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

addBookToLibrary(TheHobbit);

console.log(myLibrary);

function addRowToTable() {
    let table = document.getElementById("myTable");
   
    // Create row element
    let row = document.createElement("tr")
    
    // Create cells
    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let c3 = document.createElement("td")
    let c4 = document.createElement("td")
    
    // Insert data to cells
    c1.innerText = TheHobbit.title
    c2.innerText = TheHobbit.author
    c3.innerText = TheHobbit.pages
    c4.innerText = TheHobbit.read
    
    // Append cells to row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    
    // Append row to table body
    table.appendChild(row)
}

