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

    console.log('passwords matching')

     convertFormDataToJSON();
}

function convertFormDataToJSON() {
    let formEl = document.forms.signUpForm;
    let formData = new FormData(formEl);
    let object = {};

    formData.forEach((value, key) => object[key] = value);
    let json = JSON.stringify(object);

    console.log(json)
}





