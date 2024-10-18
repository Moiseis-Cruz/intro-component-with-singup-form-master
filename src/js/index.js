const form = document.getElementById("form");

let formControl = document.querySelectorAll(".form-control");

let input = document.querySelectorAll("input");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    input.forEach((input, i) => {
        if(input.value === ""){
            formControl[i].classList.add("error");
        }else{
            formControl[i].classList.remove("error");
        };
    });
    
});
