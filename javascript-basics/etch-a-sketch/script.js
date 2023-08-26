let i=0, n=16;

function myFunc(id) {
    console.log('myfunc')
    console.log(this.id)
    document.getElementById(id).classList.add("cellHover");
}

function uid() {
    return Math.random().toString(36);
}

container.innerHTML = 
    `<div class="row">${'<div id=uid() onmouseover="myFunc(this.id)" class="cell">X</div>'.repeat(n)}</div>`
    .repeat(n).replace(/X/g,_=> (i++).toString(n))




