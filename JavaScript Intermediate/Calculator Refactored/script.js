let currentInput = ""; // store the current input expression

const display = document.getElementById('display'); // get display element from HTML

// add a character (number or operator) to the current input
const append = char => {
    currentInput += char;
    display.value = currentInput;
};

// clear display and reset input
const clearDisplay = () => {
    currentInput = "";
    display.value = "";
};

// calculate the result of the input expression
const calculate = () => {
    try 
    {
        const result = eval(currentInput);
        display.value = result;
        currentInput = `${result}`; 
    } 
    catch 
    {
        display.value = "Error";
        currentInput = "";
    }
};

// remove last character or backspace
const backspace = () => {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
};

// close calculator window
const closeSite = () => window.close();
