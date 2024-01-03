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



function submitBook() {
    const tableDiv = document.getElementById("myTable");

    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");

    // create submit form 
    tableDiv.innerHTML = " "

    var br = document.createElement("br"); 

    // Create a form dynamically
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");
 
    // Create an input element for Full Name
    var title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "Title");
    title.setAttribute("placeholder", "Title");
 
     // Create an input element for date of birth
     var author = document.createElement("input");
     author.setAttribute("type", "text");
     author.setAttribute("name", "author");
     author.setAttribute("placeholder", "Author");
 
     // Create an input element for emailID
     var pages = document.createElement("input");
     pages.setAttribute("type", "text");
     pages.setAttribute("name", "pages");
     pages.setAttribute("placeholder", "Pages");
 
     const input = document.createElement('input');
     input.type = 'radio';
     input.className = 'question-option';
     input.value = 'name';
     input.id = 'fem';
     input.name = 'question-option';

     const labelForYes = document.createElement('label');
     labelForYes.for = 'yes';
     labelForYes.textContent = 'Yes'
    
     const inputTwo = document.createElement('input');
     inputTwo.type = 'radio';
     inputTwo.className = 'question-option';
     inputTwo.value = 'name';
     inputTwo.id = 'fem';
     inputTwo.name = 'question-option';
 
     const labelForNo = document.createElement('label');
     labelForNo.for = 'no';
     labelForNo.textContent = 'No'
 
                var s = document.createElement("input");
                s.setAttribute("type", "submit");
                s.setAttribute("value", "Submit");
                 
                form.appendChild(title); 
                 
                form.appendChild(br.cloneNode()); 

                form.appendChild(author); 
                form.appendChild(br.cloneNode()); 
                 
                form.appendChild(pages); 
                form.appendChild(br.cloneNode()); 

                form.appendChild(input)
                form.appendChild(labelForYes)

                form.appendChild(inputTwo)
                form.appendChild(labelForNo)
                
                let linebreak = document.createElement('br');
                form.append(linebreak)

                form.appendChild(s); 


                document.getElementsByTagName("body")[0]
               .appendChild(form);

}
