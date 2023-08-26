let i=0, n=16;

function myFunc(id) {
    console.log('myfunc')
    console.log(id)
    let node = document.getElementById(id);
    let content = console.log(node.innerHTML)
    document.getElementById(id).classList.add("cellHover");
}

function uid() {
    return Math.random().toString(36);
}

container.innerHTML = 
    `<div class="row">
    ${'<div class="cell"> </div>'.repeat(n)}</div>`
    .repeat(n);

function getElements() {
    let allElements = document.getElementsByClassName("cell");
    console.log(allElements)
    console.log(allElements[2])

    for(let i = 0; i < allElements.length; i++) {
        allElements[i].setAttribute('id', i + 1);
        allElements[i].onmouseover = function(e) {
            myFunc(allElements[i].id)
        }
    }
}

getElements();



