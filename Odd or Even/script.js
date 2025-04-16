function checkOddEven()
{
    let input = document.getElementById("numInput").value;
    let number = Number(input);
    let result;
  
    if (input.trim() === "" || isNaN(number)) 
    {
      result = "Please enter a valid number.";
    }
    else if (number % 2 === 0) 
    {
      result = `The number ${number} is even.`;
    } 
    else 
    {
      result = `The number ${number} is odd.`;
    }
  
    document.getElementById("resultText").innerText = result;
}
  