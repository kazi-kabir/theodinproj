console.log('hi!')


const myLibrary = [];

(function(window, document, undefined) {

    // code that should be taken care of right away
  
    window.onload = init;
  
    function init(){
      // the code to be called when the dom has loaded
      // #document has its nodes
      let originalContent = document.getElementById("myTable")
      console.log('original content reference')
      console.log(originalContent)      
    }
  
  })(window, document, undefined);


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

