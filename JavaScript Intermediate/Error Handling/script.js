document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form submission when empty
  
    // clear previous error messages
    document.getElementById("generalError").textContent = "";
    const fields = ["name", "email", "age", "password", "confirmPassword"];
    fields.forEach(function(field) {
        document.getElementById(field + "Error").textContent = "";
    });
  
    let hasError = false;
  
    try // try and catch errors for name field
    {
        const name = document.getElementById("name").value.trim();
        if (name === "") 
        {
            throw "Name is required.";
        }
    } 
    catch (err) 
    {
        document.getElementById("nameError").textContent = err;
        hasError = true;
    }
  
    try // try and catch errors for email field
    {
        const email = document.getElementById("email").value.trim();
        if (email === "") 
        {
            throw "Email is required.";
        }
        if (!email.includes("@"))
        {
            throw "Invalid email format.";
        }
    } 
    catch (err) 
    {
        document.getElementById("emailError").textContent = err;
        hasError = true;
    }
  
    try // try and catch errors for age field
    {
        const age = parseInt(document.getElementById("age").value);
        if (isNaN(age))
        {
            throw "Age is required.";
        }
        if (age < 18 || age > 100)
        {
            throw "Age must be between 18 and 100.";
        }
    } 
    catch (err) 
    {
        document.getElementById("ageError").textContent = err;
        hasError = true;
    }
  
    try // try and catch errors for password field
    {
        const password = document.getElementById("password").value;
        if (password.length < 6) 
        {
            throw "Password must be at least 6 characters.";
        }
    } 
    catch (err) 
    {
        document.getElementById("passwordError").textContent = err;
        hasError = true;
    }
  
    try // try and catch errors for confirm password field
    {
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        if (confirmPassword !== password)
        {
            throw "Passwords do not match.";
        }
    } 
    catch (err) 
    {
      document.getElementById("confirmPasswordError").textContent = err;
      hasError = true;
    }
  
    try // checks or validates once before submission
    {
        if (hasError) 
        {
            throw "Please fix the errors before submitting.";
        }
        alert("Form submitted successfully!");
        document.getElementById('myForm').reset(); // resets form after submission
    }
    catch (err) 
    {
        document.getElementById("generalError").textContent = err;
    }
});
  