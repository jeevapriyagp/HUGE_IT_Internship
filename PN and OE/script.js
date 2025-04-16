function checkNumber() 
{
    let input = document.getElementById("numInput").value;
    let number = Number(input);
    let result;
  
    if (input.trim() === "" || isNaN(number)) 
    {
      result = "Please enter a valid number.";
    } 
    else 
    {
        let oddEven;
        if (number % 2 === 0)
        {
            oddEven = "even";
        } 
        else 
        {
            oddEven = "odd";
        }
        
        let sign;
        switch (true) 
        {
            case (number > 0):
                sign = "positive";
                break;
            case (number < 0):
                sign = "negative";
                break;
            case (number === 0):
                sign = "zero";
                break;
        }
        result = `The number ${number} is ${sign} and ${oddEven}`;
    }
    document.getElementById("resultText").innerText = result;
  }
  