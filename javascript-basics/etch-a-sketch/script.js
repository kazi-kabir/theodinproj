let i=0, n=16;

function myFunc() {
    console.log('myfunc')
    document.getElementById('mydiv').classList.add('cellHover')
}

container.innerHTML = 
    `<div class="row">
    ${'<div id="mydiv" onmouseover="myFunc()" class="cell"> </div>'.repeat(n)}</div>`
    .repeat(n);





