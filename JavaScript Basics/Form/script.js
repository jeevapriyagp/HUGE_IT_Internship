var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var form = document.getElementById('myForm');

nameInput.addEventListener('input', function () { 
    validateName(); //validate name
});

emailInput.addEventListener('input', function () {
    validateEmail(); //validate email
});

passwordInput.addEventListener('input', function () {
    validatePassword(); //validate password
});

function validateName() // function to validate name
{
    var name = nameInput.value.trim();
    var isValidName = /^[A-Za-z\s]+$/.test(name);  
    var error = "";
    
    if (name.length < 3) 
    {
        error = "Name must be at least 3 characters";
    } 
    else if (!isValidName) 
    {
        error = "Name can only contain letters and spaces";
    }
    
    document.getElementById('nameError').textContent = error;
    return error === "";
}

function validateEmail() // function to validate email
{
    var email = emailInput.value.trim();
    var pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    var error = "";
    if (!pattern.test(email)) 
    {
        error = "Invalid email address";
    }
    
    document.getElementById('emailError').textContent = error;
    return error === "";
}

function validatePassword() // function to validate password
{
    var password = passwordInput.value;
    var error = "";
    
    if (password.length < 6) 
    {
        error = "Password must be at least 6 characters";
    } 
    else if (!/\d/.test(password)) 
    {
        error = "Password must contain a number";
    }
    
    document.getElementById('passwordError').textContent = error;
    return error === "";
}

form.addEventListener('submit', function (event) // form submission
{
    event.preventDefault();
    
    // runs all validations again
    var isNameValid = validateName();
    var isEmailValid = validateEmail();
    var isPasswordValid = validatePassword();
    
    if (isNameValid && isEmailValid && isPasswordValid) 
    {
        alert("Form submitted!");
        form.reset();

    // clears all error messages
    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('passwordError').textContent = "";
    } 
    else 
    {
        alert("Please fix the errors before submitting.");
    }
});
