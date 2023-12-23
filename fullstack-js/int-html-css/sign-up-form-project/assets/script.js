console.log('hello')

// TODO
// get both passwords somehow and render them to console 
// then find a matching algo online


function comparePasswords(event) {
    event.preventDefault
    password = document.getElementById('pass');
    confPassword = document.getElementById('check-pass')

    if(password.innerHTML !== confPassword.innerHTML) {
        window.alert("Passwords do not match!");
     }

    window.alert('password matching'); 

     convertFormDataToJSON();
}

function convertFormDataToJSON() {
    var formEl = document.forms.signUpForm;
    var formData = new FormData(formEl);
    var object = {};

    formData.forEach((value, key) => object[key] = value);
    var json = JSON.stringify(object);

    console.log(json)
}





