/*function regirter(){
    let name = document.getElementById("name")

    let lastName = document.getElementById("last-name")

    let email = document.getElementById("email")

    let password = document.getElementById("password")

    let formulary = document.getElementById("form")

    formulary.addEventListener('submit', (e) => {
        e.preventDefault()
    
        checkInputs()
    })
}*/



let formulary = document.getElementById("form")

let userName = document.getElementById("name")

 let lastName = document.getElementById("last-name")

let email = document.getElementById("email")

let password = document.getElementById("password")

formulary.addEventListener('submit', (e) => {
    e.preventDefault()
    
    checkInputs()
})


function checkInputs() {
    const nameValue = userName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if(nameValue === ""){
        errorValidation(userName, "Isso é um teste")
    }else{
        successValidation(userName)
    }

    if(lastNameValue === ""){
        errorValidation(lastName, "Testando!")
    }else{
        successValidation(lastName)
    }

    if(emailValue === ""){
        errorValidation(email)
    }else{
        successValidation(email)
    }

    if(passwordValue === ""){
        errorValidation(password)
    }else{
        successValidation(password)
    }
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    small.innerText = message

    formControl.className = "form-control error"
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success"
}