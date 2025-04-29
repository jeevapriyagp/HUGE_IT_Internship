const form = document.getElementById('myForm');
const submitBtn = document.getElementById('submitBtn');

// input fields
const inputs = 
{
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword'),
    country: document.getElementById('country'),
    profilePic: document.getElementById('profilePic')
};

function validateName() // to validate name
{
    const name = inputs.name.value.trim();
    const error = name.length < 3 || !/^[A-Za-z\s]+$/.test(name)
    ? "Enter a valid name (min 3 chars, letters only)"
    : "";
    document.getElementById('nameError').textContent = error;
    return error === "";
}

function validateEmail() // to validate email
{
    const email = inputs.email.value.trim();
    const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const error = !pattern.test(email) ? "Invalid email" : "";
    document.getElementById('emailError').textContent = error;
    return error === "";
}

function validatePassword() // to validate password
{
    const pass = inputs.password.value;
    let error = "";
    if (pass.length < 6)
    {
        error = "At least 6 characters required";
    }
    else if (!/\d/.test(pass)) 
    {
        error = "Must contain a number";
    }
    document.getElementById('passwordError').textContent = error;
    return error === "";
}

function validateConfirmPassword() // to validate confirm password
{
    const error = inputs.confirmPassword.value !== inputs.password.value
    ? "Passwords do not match"
    : "";
    document.getElementById('confirmPasswordError').textContent = error;
    return error === "";
}

function validateGender() // to check whether gender is selected
{
    const selected = document.querySelector('input[name="gender"]:checked');
    const error = selected ? "" : "Please select gender";
    document.getElementById('genderError').textContent = error;
    return error === "";
}

function validateHobbies() // to check whether hobby is selected
{
    const selected = document.querySelectorAll('input[name="hobbies"]:checked');
    const error = selected.length === 0 ? "Select at least one hobby" : "";
    document.getElementById('hobbiesError').textContent = error;
    return error === "";
}

function validateCountry() // to check whether country is selected
{
    const error = inputs.country.value === "" ? "Please select a country" : "";
    document.getElementById('countryError').textContent = error;
    return error === "";
}

function validateProfilePic() // validate picture size and type
{
    const file = inputs.profilePic.files[0];
    let error = "";
    if (file) 
    {
        const validTypes = ['image/jpeg', 'image/png'];
        if (!validTypes.includes(file.type)) 
        {
            error = "Only JPG/PNG allowed";
        }
        else if (file.size > 2 * 1024 * 1024) 
        {
            error = "File too large (max 2MB)";
        }
    }
    else 
    {
        error = "Profile picture required";
    }
    document.getElementById('profilePicError').textContent = error;
    return error === "";
}

function allValid() // calling all the functions
{
    return (
        validateName() &&
        validateEmail() &&
        validatePassword() &&
        validateConfirmPassword() &&
        validateGender() &&
        validateHobbies() &&
        validateCountry() &&
        validateProfilePic()
    );
}

// revalidate on input
// if returned false, it keeps the submit button diasbled
for (let key in inputs) 
{
    inputs[key].addEventListener('input', () => {
        allValid();
        submitBtn.disabled = !allValid(); 
    });
}

document.querySelectorAll('input[name="gender"], input[name="hobbies"]').forEach(el =>
    el.addEventListener('change', () => {
        allValid();
        submitBtn.disabled = !allValid();
    })
);

inputs.country.addEventListener('change', () => {
    allValid();
    submitBtn.disabled = !allValid();
});

inputs.profilePic.addEventListener('change', () => {
    allValid();
    submitBtn.disabled = !allValid();
});

form.addEventListener('submit', function (e) // function to revalidate everything before submission and submits
{
    e.preventDefault();
    if (allValid()) 
    {
        alert("Form submitted successfully!");
        form.reset();
        submitBtn.disabled = true;
    } 
    else 
    {
        alert("Please fix all errors.");
    }
});
