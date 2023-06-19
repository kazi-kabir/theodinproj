let i=0, n=16;

container.innerHTML = 
    `<div class="row">${'<div class="cell" onmouseover=changeDivColour()> </div>'.repeat(n)}</div>`.repeat(n);

function changeDivColour() {
    let foo = document.getElementsByClassName('cell')
    document.getElementsByClassName('cell')[i].style.backgroundColor = 'red';
}


// give divs a unique id ? 

// so collect the class of divs e.g inside foo
// for each cell in foo give it a unique id 
// onhover get the ID of that specific div 


