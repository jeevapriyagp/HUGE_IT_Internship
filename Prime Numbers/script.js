function isPrime(num) 
{
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) 
    {
        if (num % i === 0) return false;
    }
    return true;
}

function listPrimesInRange(start, end) 
{
    const primes = [];
    for (let i = start; i <= end; i++) 
    {
        if (isPrime(i)) 
        {
            primes.push(i);
        }
    }
    return primes;
}

function findPrimes() 
{
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    const output = document.getElementById("output");

    if (isNaN(start) || isNaN(end)) 
    {
        output.innerText = "Please enter valid numbers.";
        return;
    }

    const primes = listPrimesInRange(start, end);
    output.innerText = primes.length > 0 ? primes.join(", ") : "No prime numbers found in this range.";
}