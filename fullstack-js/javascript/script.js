function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

const playerOne = new Player('steve', 'X');

console.log(playerOne.name)

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return this.title + " " + this.author + " " + this.pages + " " + this.read
}

const TheHobbit = new Book("The Hobbit", "JK Rowling", "200", "not read yet")

console.log("updated" + TheHobbit.info())
