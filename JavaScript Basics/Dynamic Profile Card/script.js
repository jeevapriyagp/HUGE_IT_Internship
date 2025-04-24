var checkbox = document.getElementById("darkModeToggle");

function toggleDarkMode() 
{
    if (checkbox.checked) 
    {
        document.body.classList.add("dark-mode");
    } 
    else 
    {
        document.body.classList.remove("dark-mode");
    }
}

checkbox.addEventListener("change", toggleDarkMode);
