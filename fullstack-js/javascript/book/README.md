project: library

two approaches

1. we can create the submit book form and hide it (initially)
so when we submit book we hide the original display list
then show again upon click

2. we can manipulate the dom to replace our table and then reset it (e.g run the function again)

that would mean 
- we populate everything via a function onload
- when we add a book we directly manipulate the dom
- a button is there to toggle it 