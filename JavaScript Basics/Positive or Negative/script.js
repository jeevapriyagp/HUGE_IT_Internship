function checkSign() 
{
    let number = Number(document.getElementById("numInput").value);
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
      default:
        sign = "not a valid number";
    }
  
    document.getElementById("resultText").innerText = `The number ${number} is ${sign}.`;
  }
  