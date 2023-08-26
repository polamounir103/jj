let userName = document.getElementById ("userName")
let userPassword = document.getElementById ("userPassword")
let submitBtn = document.getElementById ("submitBtn")

let getUserName = localStorage.getItem ("UserName")
let getUserPassword = localStorage.getItem ("Password")

submitBtn.addEventListener ("click", (e) => {
    e.preventDefault ()
    if(userName.value === "" || userPassword.value === ""){
        alert ("Please fill up all fields")
    }else {
        if (getUserName && getUserName.trim() === userName.value.trim() && getUserPassword === userPassword.value) {
            setTimeout (() => {
                window.location = "index.html"

            } , 1000 )
        }
        else {
            alert ("Invalid Username or Password")
        }
    }
})

// -------  Showing Password   -----------------
let showPasswordBtn = document.getElementById("showPassword") 
userPassword.addEventListener("input", () => {
    if (userPassword.value !== "" ) {
        showPasswordBtn.style.visibility = "visible"
    }else {
        showPasswordBtn.style.visibility= "hidden"
    }
})


showPasswordBtn.addEventListener ("click" , () => {
    if (userPassword.type === "password") {
        userPassword.setAttribute("type" , "text")
        userPassword.style.marginTop = "0"
        showPasswordBtn.innerHTML = '<i class="far fa-eye-slash"></i>'
    }else {
        userPassword.setAttribute("type", "password")
        showPasswordBtn.innerHTML = '<i class="far fa-eye"></i>'
    }
})