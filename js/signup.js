
let userFName = document.getElementById ("userFName")
let userLName = document.getElementById ("userLName")
let userName = document.getElementById ("userName")
let userEmail = document.getElementById ("userEmail")
let userPassword = document.getElementById ("userPassword")
let passwordConfirm = document.getElementById ("passwordConfirm")
let submitBtn = document.getElementById ("submitBtn")

submitBtn.addEventListener ("click", function (e) { 
    e.preventDefault ()
    if(userName.value === "" || userEmail.value === "" || userPassword.value === "" || passwordConfirm.value === "" || userFName.value === "" || userFName.value === "" ){
        alert ("Please fill up all fields")
    }else if (passwordConfirm.value !== userPassword.value ) {
        alert ("Passwords do not match")
    }else {
        localStorage.setItem ("FirstName", userFName.value)
        localStorage.setItem ("LastName", userLName.value)
        localStorage.setItem ("UserName", userName.value)
        localStorage.setItem ("Email", userEmail.value)
        localStorage.setItem ("Password", userPassword.value)

        setTimeout ( () => {
            window.location = "login.html"
        } , 100)
    }
})

// -------  Showing Password   -----------------
let showPasswordBtn = document.getElementById("showPassword") 
let passwordConfirmBtn = document.getElementById("showPassword2") 

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
// ..............................
passwordConfirm.addEventListener("input", () => {
    if (passwordConfirm.value !== "" ) {
        passwordConfirmBtn.style.visibility = "visible"
    }else {
        passwordConfirmBtn.style.visibility= "hidden"
    }
})
    passwordConfirmBtn.addEventListener ("click" , () => {
    if (passwordConfirm.type === "password") {
        passwordConfirm.setAttribute("type" , "text")
        passwordConfirm.style.marginTop = "0"
        passwordConfirmBtn.innerHTML = '<i class="far fa-eye-slash"></i>'
    }else {
        passwordConfirm.setAttribute("type", "password")
        passwordConfirmBtn.innerHTML = '<i class="far fa-eye"></i>'
    }
})






