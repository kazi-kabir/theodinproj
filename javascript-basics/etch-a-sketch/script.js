let i=0, n=16;

function changeColour(id) {    
    document.getElementById(id).classList.add("cellHover");
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
            changeColour(allElements[i].id)
        }
    }
}

getElements();