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
    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    FN.setAttribute("placeholder", "Full Name");
 
     // Create an input element for date of birth
     var DOB = document.createElement("input");
     DOB.setAttribute("type", "text");
     DOB.setAttribute("name", "dob");
     DOB.setAttribute("placeholder", "DOB");
 
     // Create an input element for emailID
     var EID = document.createElement("input");
     EID.setAttribute("type", "text");
     EID.setAttribute("name", "emailID");
     EID.setAttribute("placeholder", "E-Mail ID");
 
      // Create an input element for password
      var PWD = document.createElement("input");
      PWD.setAttribute("type", "password");
      PWD.setAttribute("name", "password");
      PWD.setAttribute("placeholder", "Password");
 
       // Create an input element for retype-password
       var RPWD = document.createElement("input");
       RPWD.setAttribute("type", "password");
       RPWD.setAttribute("name", "reTypePassword");
       RPWD.setAttribute("placeholder", "ReEnter Password");
 
                // create a submit button
                var s = document.createElement("input");
                s.setAttribute("type", "submit");
                s.setAttribute("value", "Submit");
                 
                // Append the full name input to the form
                form.appendChild(FN); 
                 
                // Inserting a line break
                form.appendChild(br.cloneNode()); 
                 
                // Append the DOB to the form
                form.appendChild(DOB); 
                form.appendChild(br.cloneNode()); 
                 
                // Append the emailID to the form
                form.appendChild(EID); 
                form.appendChild(br.cloneNode()); 
                 
                // Append the Password to the form
                form.appendChild(PWD); 
                form.appendChild(br.cloneNode()); 
                 
                // Append the ReEnterPassword to the form
                form.appendChild(RPWD); 
                form.appendChild(br.cloneNode()); 
                 
                // Append the submit button to the form
                form.appendChild(s); 
 
                document.getElementsByTagName("body")[0]
               .appendChild(form);

}
