/*let formulary = document.getElementById("form")

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
        errorValidation(userName, "First Name cannot be empty")
    }else{
        successValidation(userName)
    }

    if(lastNameValue === ""){
        errorValidation(lastName, "Last Name cannot be empty")
    }else{
        successValidation(lastName)
    }

    if(emailValue === ""){
        errorValidation(email, "Looks like this is not an email")
    }else{
        successValidation(email)
    }

    if(passwordValue === ""){
        errorValidation(password, "Password cannot be empty")
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
}*/


// let enviarFomrulario = document.querySelector("button[class='btn-claim']")

// let userName = document.getElementById("name");

// let lastName = document.getElementById("last-name");

// let email = document.getElementById("email");

// let password = document.getElementById("password");

// enviarFomrulario.addEventListener("click", function(e){
//     e.preventDefault()

//     checkInputs()
// })

// function checkInputs() {
//     const nameValue = userName.value.trim()
//     const lastNameValue = lastName.value.trim()
//     const emailValue = email.value.trim()
//     const passwordValue = password.value.trim()

//     if(nameValue === ""){
//         errorValidation(userName, "First Name cannot be empty")
//     }else{
//         successValidation(userName)
//     }

//     if(lastNameValue === ""){
//         errorValidation(lastName, "Last Name cannot be empty")
//     }else{
//         successValidation(lastName)
//     }

//     if(emailValue === ""){
//         errorValidation(email, "Looks like this is not an email")
//     }else{
//         successValidation(email)
//     }

//     if(passwordValue === ""){
//         errorValidation(password, "Password cannot be empty")
//     }else{
//         successValidation(password)
//     }
// }

// function errorValidation(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector("small")

//     small.innerText = message

//     formControl.className = "form-control error"
// }

// function successValidation(input) {
//     const formControl = input.parentElement;

//     formControl.className = "form-control success"
// }

const form = document.getElementById("form")

let formControl = document.querySelectorAll(".form-control")

let input = document.querySelectorAll("input")

form.addEventListener("submit", function (event) {
    event.preventDefault()
    
    input.forEach((input, i) => {
        if(input.value === ""){
            formControl[i].classList.add("error")
        }else{
            formControl[i].classList.remove("error")
        }
    })
    
})