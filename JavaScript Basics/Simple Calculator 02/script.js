// Store the current input expression
let currentInput = "";

// Get the display element from HTML
const display = document.getElementById('display');

// Add a character (number or operator) to the current input
function append(char) 
{
  currentInput += char;
  display.value = currentInput;
}

// Clear the display and reset input
function clearDisplay() 
{
  currentInput = "";
  display.value = "";
}

// Calculate the result of the input expression
function calculate() 
{
  try 
  {
    let result = eval(currentInput);
    display.value = result;
    currentInput = result.toString(); 
  } 
  catch (error) 
  {
    display.value = "Error";
    currentInput = "";
  }
}

// Remove the last character or backspace
function backspace() 
{
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}

// Close the calculator window
function closeSite() {
  window.close(); 
}
