## DAY 1: 15.04.2025

### Variables
 - value of a variable may vary or can be changed
 - can be declared using keywords **let** and **var**
 - **let**: block scoped, can only be accessed within the block where they were declared
 - **var**: function scoped, can be accessed anywhere within the function they were defined in
 - **=** operator is used to assign values to variables
 - variable names must start with a letter, an underscore _, or the dollar sign $

<pre>Example:
var age;
let name;

let message = "hello";
let _message = "hello";
let $message = "hello";
</pre>

<pre>Example 1:
let age=5;
age=10; // variable can be changed
console.log(age)

Output:
10
</pre>

### Constants
 - constant is a type of variable whose value cannot be changed
 - **const** keyword is used to create constants
 - always initialize a constant during **declaration**,if not then it throws an error

<pre>Example:
const num = 5;

num = 10; // constant cannot be changed
console.log(num) 

Output:
Error
</pre>

### console.log()
 - this is used to display messages or variables
 - can be simply said as print()

<pre>Example 1:
let message = "Seventeen Right here!";
console.log(message);

Output:
Seventeen Right here!
</pre>

<pre>Example 2:
const greet = "Hello";
console.log(greet);

Output:
Hello
</pre>

### Data Types
 - **8** basic data types
 - can be classified as primitive and non primitive data types

**Primitive data type:**
 - String: textual data enclosed by single quotes, double quotes or backticks

<pre>Example:
let a = 'SEVENTEEN'; // string enclosed within single quotes
console.log(a)

let b = "RIGHT"; // string enclosed within double quotes
console.log(b);

let c = `HERE`; // string enclosed within backticks
console.log(c);

Output:
SEVENTEEN
RIGHT
HERE
</pre>

 - Number: integer or floating point number

<pre>Example:
let integer_number = -17; // integer value
console.log(integer_number);

let float_number = 7.17; // floating-point value
console.log(float_number);

Output:
-17
7.17
</pre>

 - BigInt: number that can represent very large or very small integers beyond the range of the regular number data type, created by appending **n** to the end of an integer

<pre>Example:
let value1 = 900719925124740998n; // BigInt value

let result1 = value1 + 1n; // add two big integers
console.log(result1);

Output:
900719925124740999n
TypeError!
</pre>

 - Boolean: true or false

<pre>Example:
let dataChecked = true;
console.log(dataChecked);  

Output:
true

let valueCounted = false;
console.log(valueCounted);

Output:
false
</pre>

 - undefined: refers to absence of value

<pre>Example:
let name; // undefined
console.log(name);  

let name = undefined; //explicitly assigning undefined
console.log(name);  

Ouput:
undefined
</pre>

 - null: no value or nothing

<pre>
let number = null;
console.log(number);

Ouput:
null
</pre>

 - symbol: data type whose instances are unique and immutable

<pre>Exmaple:
// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2);

Ouput:
false
</pre>

**Non Primitive data type:**
 - object: holds data in the form of key-value pairs

<pre>Example:
let student = {
    firstName: "John",
    lastName: null,
    class: 10
};
</pre>

here, student is the object with keys firstName, lastName and class whose values are John, null and 10 respectively.

### Operators
 - Arithmetic Operators: + - * / % ++ -- **

<pre>Example:
let x=5;

sum=x+3;
console.log(sum);

Output:
8
</pre>

 - Assignment Operators: = += -= *= /= %= **=

<pre>Example:
let x=5;
console.log(5);

Output:
5
</pre>

 - Comparison Operators: == != > < >= <= === !==

<pre>Example:
const a = 3, b = 2;
console.log(a > b);

Output:
true
</pre>

 - Logical Operators: && || !

<pre>Example:
const x = 5, y = 3;
console.log((x < 6) && (y < 5));

Output: 
true
</pre>

 - Bitwise Operators: & | ^ ~ << >> >>>

<pre>Example:
let a = 5; // 0101 in binary
let b = 3; // 0011 in binary

console.log("a & b =", a & b);   // 0101 & 0011 = 0001 => 1

Output:
1
</pre>

 - String Operators: +

<pre>Example:
let firstName = "Hello";
let lastName = "World";
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

Output:
Hello World
</pre>

 - many more operators, some miscellaneous ones are , and ?:

---

## DAY 2: 16.04.2025

### if else statement
 - used to execute/skip a block of code based on a condition
 - it is a conditional statement executes only when a given condition is met

**if statement**
 - **if** executes code based on some specific condition

 Syntax of if:
  if(condtion)
  {
    //block of code
  }

 - **if** keyword checks the condition inside the parentheses (), if the condition is evaluated to true, the code inside { } is executed
 or if the condition is evaluated to false, the code inside { } is skipped

<pre>Example:
const number = prompt("Enter a number: ");

if (number > 0) 
{
    // the body of the if statement
    console.log("positive number");
}

Output:
Enter a number: 5
Output: positive number

Enter a number: -1
//code block does not execute because the if condition is false
</pre>

**else statement**
 - **else** keyword executes code when the condition specified in the preceding **if** statement evaluates to false

 Syntax of else:
  if (condition) 
  {
    // block of code
    // execute this if condition is true
  }
  else 
  {
    // block of code
    // execute this if condition is false
  }

 - **if else** statement checks the condition and executes code,
    - if condition is true, the code inside if is executed and the code inside else is skipped
    - if condition is false, the code inside if is skipped and the code inside else is executed

<pre>Example:
const age = prompt("Enter your age: ");

if (age >= 18) 
{
    console.log("You are an adult");
}
else 
{
    console.log("You are a minor");
}

Output:
Enter your age: 17
Your are a minor

Enter your age: 25
You are an adult
</pre>

**else if stament**
 - **else if** keyword is used to check multiple conditions

 Syntax of else if:
  if (condition1) 
  {
    // if body
  }

  else if (condition2)
  {
    // else if body
  }

  else 
  {
    // else body
  }

here, 
- first, the condition in the if statement is checked, ff the condition evaluates to true, the body of if is executed, and the rest is skipped
- otherwise, the condition in the else if statement is checked, if true, its body is executed and the rest is skipped
- if no condition matches, the block of code in else is executed

<pre>Example:
let rating = 4;

if (rating <= 2) 
{
    console.log("Bad rating");
}

else if (rating >= 4) 
{
    console.log("Good rating!");
}

else 
{
    console.log("Average rating");
}

Output:
Good rating!
</pre>

**nested if else statement**
 - if else statement inside another if else is called nested if else 
 
 Syntax of nested if else:
  if(condition) // outer if
  {
    //body of outer if
    if(condition) //inner if
    {
        //body of inner if
    }
    else // inner else
    {
        //body of inner else
    }
  }
  else
  {
    //body of outer else
  }

<pre>Example:
let marks = 60;

if (marks >= 40) 
{
    if (marks >= 80) 
    {
        console.log("Distinction");
    }
    else 
    {
        console.log("Passed");
    }
}

else 
{
    console.log("Failed");
}

Output: 
Passed
</pre>

`if else statement is used in the task to find whether a number is odd or even and also to check if the entered input is a valid number or not`

### switch case statement
 - switch case statement executes different blocks of code based on the value of a given expression

 Syntax of switch case:
  switch (expression) 
  {
    case value1:
        // code block to be executed if expression matches value1
        break;

    case value2:
        // code block to be executed if expression matches value2
        break;
    .
    .
    .
    default:
        // code block to be executed if expression doesn't match any case
  }

here,
 - the switch statement first evaluates the expression
 - then it compares the result against value1, if a matching is found, the corresponding code block is executed and then the break statement immediately stops further checking of other cases
 - if there is no match for value1, the program compares the result with the next specified case value (value2), this process continues until a matching case is found
 - if none of the case values match, the code block in the default block is executed

<pre>Example:
let day = 3; 
let activity;

switch (day) 
{
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Friday");
        break;

    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("Invalid Day");
}

Output:
Tuesday
</pre>

 `switch case is used in the task to find whether a number is positive or negative`





