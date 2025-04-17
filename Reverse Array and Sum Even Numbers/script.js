function processArray() 
{
    const input = document.getElementById("arrayInput").value;
  
    if (!input.trim()) 
    {
      alert("Please enter some numbers!");
      return;
    }
  
    let arr = input.split(",").map(num => parseInt(num.trim()));
  
    if (arr.some(isNaN)) 
    {
      alert("Invalid input! Please enter numbers separated by commas.");
      return;
    }
  
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) 
    {
      reversedArr.push(arr[i]);
    }
  
    let evenSum = 0;
    for (let i = 0; i < reversedArr.length; i++) 
    {
        if (reversedArr[i] % 2 === 0) 
        {
            evenSum += reversedArr[i];
        }
    }
  
    document.getElementById("reversed").textContent = `[${reversedArr.join(", ")}]`;
    document.getElementById("evenSum").textContent = evenSum;
}
  