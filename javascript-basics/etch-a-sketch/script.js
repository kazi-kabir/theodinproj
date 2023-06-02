let i=0, n=16;

container.innerHTML = 
    `<div class="row">${'<div class="cell" onmouseover=changeDivColour()> </div>'.repeat(n)}</div>`.repeat(n);

function changeDivColour() {
    console.log('fooey')
    document.getElementsByClassName('cell')[i].style.backgroundColor = 'red';
}

