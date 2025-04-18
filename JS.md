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
<pre>if(condtion)
  {
    //block of code
  }</pre>

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
<pre>if (condition) 
  {
    // block of code
    // execute this if condition is true
  }
  else 
  {
    // block of code
    // execute this if condition is false
  }</pre>

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
<pre>if (condition1) 
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
}</pre>

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
<pre>if(condition) // outer if
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
  }</pre>

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
<pre>switch (expression) 
{
    case value1:
        // code block to be executed if expression matches value1
        break;
    case value2:
        // code block to be executed if expression matches value2
        break;
    ...
    default:
        // code block to be executed if expression doesn't match any case
}</pre>

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

---

## DAY 3: 17.04.2025

### Loops 

### for loop
 - **for** loop is used for iterating over a block of code a certain number of times or to iterate over the elements of an array

syntax of for loop:
<pre>for (initialExpression; condition; updateExpression) 
{
    // for loop body
}</pre>

here,
- `initialExpression` - initializes a counter variable
- `condition` - the condition to be evaluated, if true, the body of the for loop is executed
- `updateExpression` - updates the value of initialExpression
- once an iteration of the loop is completed, the condition is evaluated again, the process continues until the condition is false

<pre>Example:
for (let i = 1; i < 6; i++) 
{
    console.log(i);
}

Output:
1
2
3
4
5
</pre>

### while loop
 - while loop repeatedly executes a block of code as long as a specified condition is true

syntax of while loop:
<pre>while (condition) 
{
    // body of loop
}</pre>

here,
- while loop first evaluates the condition inside ( )
- if the condition evaluates to true, the code inside { } is executed
- then, the condition is evaluated again
- this process continues as long as the condition evaluates to true
- if the condition evaluates to false, the loop stops

<pre>Example:
let i = 1;

while (i < 4) 
{
    console.log(i);
    i += 1;
}

Output:
1
2
3
</pre>

### do while loop
 -  do while loop executes a block of code once, then repeatedly executes it as long as the specified condition is true

syntax of do while:
<pre>do 
{
    // body of loop
} while(condition);</pre>

here,
- do…while loop executes the code inside { }
- then, it evaluates the condition inside ( )
- if the condition evaluates to true, the code inside { } is executed again
- this process continues as long as the condition evaluates to true
- if the condition evaluates to false, the loop terminates

<pre>Example:
let i = 3;

do 
{
    console.log(i);
    i--;
} while (i > 0);

Output:
3
2
1
</pre>

### break statement
- break statement terminates the loop immediately when it's encountered

<pre>Example:
for (let i = 1; i <= 5; i++) 
{    
    if (i == 3) 
    {
        break; // breaks when 1=3
    }

    console.log(i);
}

Ouput:
1
2
</pre>

### continue statement
- continue statement skips the current iteration of the loop and proceeds to the next iteration

<pre>Example:
for (let i = 1; i <= 5; i++) 
{
    if (i % 2 === 0) 
    {
        continue; // skip the iteration if i is even
    }
    console.log(i);
}

Output:
1
3
5
</pre>

### JS Arrays
- array is an object that can store multiple values at once
- arrays allow us to organize related data by grouping them within a single variable
- array can store many values in a single variable, making it easy to access them by referring to the corresponding index number

**creating an array**
- we can create an array by placing elements inside an array literal [], separated by commas

<pre>Example:
const numbers = [10, 30, 40, 60, 80];
</pre>

here,
- numbers - name of the array
- [10, 30, 40, 60, 80] - elements of the array

**accessing elements of an array**
- each element of an array is associated with a number called an index, which specifies its position inside the array

<pre>Example:
let numbers = [10, 30, 40, 60, 80]

console.log(numbers[0]);  // access first element

console.log(numbers[2]);  // access third element

Output:
10
40
</pre>

**adding element to an array**
- add elements to an array using built-in methods like **push()** and **unshift()**

1. using push()
    - push() method adds an element at the end of the array

<pre>Example:
let dailyActivities = ["eat", "sleep"];

dailyActivities.push("exercise"); // add an element at the end

console.log(dailyActivities);

Output: 
[ 'eat', 'sleep', 'exercise' ]
</pre>

2. using unshift()
    - unshift() method adds an element at the beginning of the array

<pre>Example:
let dailyActivities = ["eat", "sleep"];

dailyActivities.unshift("work"); // add an element at the beginning

console.log(dailyActivities);

Output: 
[ 'work', 'eat', 'sleep' ]
</pre>

**changing elements of an array**
- we can add or change elements by accessing the index value

<pre>Example:
let dailyActivities = [ "eat", "work", "sleep"];

dailyActivities[1] = "exercise"; // change the second element - use array index 1

console.log(dailyActivities);

Output: 
[ 'eat', 'exercise', 'sleep' ]
</pre>

**removing elements in an array**
- we can remove an element from any specified index of an array using the **splice()** method

<pre>Example:
let numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 1); // remove one element starting from index 2

console.log(numbers);

Output: 
[ 1, 2, 4, 5 ]
</pre>

**Iterate through an array**
 - for loop can also be used to iterate over elements of an array

<pre>Example:
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) 
{
    console.log(fruits[i]);
}

Output:
apple
banana
cherry
</pre>

**commonly used array methods**
- concat() - joins two or more arrays and returns a result
- toString() - converts an array to a string of (comma-separated) array values
- indexOf() - searches an element of an array and returns its position (index)
- find() - returns the first value of the array element that passes a given test
- findIndex() - returns the first index of the array element that passes a given test
- forEach() - calls a function for each element
- includes() - checks if an array contains a specified element
- sort() - sorts the elements alphabetically in strings and ascending order in numbers
- slice() - selects part of an array and returns it as a new array
- splice() - removes or replaces existing elements and/or adds new elements

### Multidimensional arrays
 - multidimensional arrays contain another array inside them

<pre>Example:
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]]; // contains 3 separate arrays as elements

console.log(data);

Output: 
[ [ 1, 2, 3 ], [ 1, 3, 4 ], [ 4, 5, 6 ] ]
</pre>

**using existing array as elements**
- we can create multidimensional arrays by nesting arrays within them

<pre>Example:
let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

let studentsData = [student1, student2, student3]; // create multidimensional array using student1, student2, and student3

console.log(studentsData);

Output: 
[ [ 'Jack', 24 ], [ 'Sara', 23 ], [ 'Peter', 24 ] ]
</pre>

**accessing elements of a multideimensional array**
- we can access the elements of a multidimensional array using array indexes

<pre>Example:
let x = [ ['Jack', 24], ['Sara', 23],  ['Peter', 24] ];

console.log(x[0]);  // access the first item 

console.log(x[0][0]);  // access the first item of the first inner array

console.log(x[2][1]);  // access the second item of the third inner array

Output:
[ 'Jack', 24 ]
Jack
24
</pre>

**adding elements to a multidimensional array**
- we can use an **index notation** or **push()** method to add elements to a multidimensional array

1. using index notation

<pre>Example:
let studentsData = [["Jack", 24], ["Sara", 23]];

studentsData[1][2] = "hello"; // add "hello" as the 3rd element of the 2nd inner array

console.log(studentsData);

Output: 
[ [ 'Jack', 24 ], [ 'Sara', 23, 'hello' ] ]
</pre>

2. using push()

<pre>Example:
let studentsData = [["Jack", 24], ["Sara", 23]];

studentsData.push(["Peter", 24]); // add element to the end of the outer array

console.log(studentsData);

studentsData[1].push("hello"); // add "hello" as the final element of the 2nd inner array

console.log(studentsData);

Output:
[ [ 'Jack', 24 ], [ 'Sara', 23 ], [ 'Peter', 24 ] ]
[ [ 'Jack', 24 ], [ 'Sara', 23, 'hello' ], [ 'Peter', 24 ] ]
</pre>

**removing elements from multidimensional array**
- we can use the splice() method to remove an element from any position in the multidimensional array

<pre>Example:
let studentsData = [['Jack', 24], ['Sara', 23],];

studentsData.splice(0,1); // remove one element starting from index 0

console.log(studentsData);

Output: 
[ [ 'Sara', 23 ] ]
</pre>

**Iterate through an multidimensional array**
 - we can use nested loops to go through a multidimensional array: one loop for the outer array and another loop inside it for the inner arrays

<pre>Example:
et studentsData = [["Jack", 24], ["Sara", 23]];

for(let i = 0; i < studentsData.length; i++) // loop over outer array
{
    for(let j = 0; j < studentsData[i].length; j++) // loop over inner array elements
    {
        console.log(studentsData[i][j]);
    }
}

Output:
Jack
24
Sara
23
</pre>

---

## DAY 4: 18.04.2025

### Function and Function Expression
- function is an independent block of code that performs a specific task
- a function expression is a way to store functions in variables (the value returned from the function is stored in function expression)

**creating a function**
- we can create a function in JavaScript using the **function** keyword

<pre>Example:
function greet() 
{
    console.log("Hello World!");
}
</pre>

**calling a function**
- we call a function by writing the function name followed by parentheses ()
-  if we want to use the function, we need to call it

<pre>Example 1:
function greet() // function creation
{
    console.log("Hello World!");
}

greet(); // function call

Output:
Hello World!
</pre>

<pre>Example 2:
function greet() 
{
    console.log("Hello World!");
}

greet(); // function call

console.log("Outside function");

Output:
Hello World!
Outside function
</pre>

here,
- when the greet() function is called, the program's control transfers to the function definition and all the code inside the function is executed (Hello World! is printed)
- the program control then jumps to the next statement after the function call (Outside function is printed)

**Function Arguments**
- arguments are values you pass to the function when you call it

<pre>Example:
function greet(name) // function with a parameter called 'name'
{
    console.log(`Hello ${name}`);
}

greet("John"); // pass argument to the function

Output: 
Hello John
</pre>

here, we passed "John" as an argument to the greet() function

**passing different arguments to the function**
- we can pass different arguments in each call, making the function re-usable and dynamic

<pre>Example:
function greet(name) 
{
    console.log(`Hello ${name}`);
}

greet("John"); // pass "John" as argument

greet("David"); // pass "David" as argument

Output:
Hello John
Hello David
</pre>

**return statement**
- we can return a value from a JS function using the **return** statement

<pre>Example:
function findSquare(num) 
{
    return num * num; // return square
}

let square = findSquare(3); // call the function and store the result

console.log(`Square: ${square}`);

Output:
Square: 9
</pre>

**return terminates the function**
- any code after return statement is not executed

<pre>Example:
function display() 
{
    console.log("This will be executed.");
    return "Returning from function."; // teriminates

    console.log("This will not be executed."); // code after return statement
}

let message = display();
console.log(message);

Output:
This will be executed.
Returning from function.
</pre>

**JS library functions**
- JS provides some built-in functions that can be directly used in our program
- we don't need to create these functions, we just need to call them

some common JS library functions,
- console.log() - prints the string inside the quotation marks
- Math.sqrt() - returns the square root of a number
- Math.pow() - returns the power of a number
- toUpperCase() - returns the string converted to uppercase
- toLowerCase() - returns the string converted to lowercase

<pre>Example:
let squareRoot = Math.sqrt(4); // Math.sqrt() computes the square root
console.log("Square Root of 4 is", squareRoot);

let power = Math.pow(2, 3); // Math.pow() computes the power
console.log("2 to the power of 3 is", power);

let band = "Tommorow x Together"; 
let bandUpper = band.toUpperCase(); // toUpperCase() converts text to uppercase
console.log(`Favorite Band: ${bandUpper}`);

Output:
Square Root of 4 is 2
2 to the power 3 is 8
Favorite Band: TOMORROW X TOGETHER
</pre>

**function expressions**
- it is the way to store functions in variables

<pre>Example:
let square = function(num) // store function in the square variable
{
    return num * num;
};

console.log(square(5));  

Output: 
25
</pre>

### Variable Scope
- scope of a variable determines where it can be accessed within the code
- variables can be declared in various scopes namely, **global, local and block-level scopes**
- based on the scope the variables are decalred in, they can be classified as **global, local and block-level variables**

## Local Variables
- when variables are declared inside a function, they have a local scope and are accessible only within that function

<pre>Example:
function greet() 
{
    var message = "Hello"; // local variable
    console.log(`Local: ${message}`);
}

greet();

console.log(`Global: ${message}`); // try to access message variable outside the greet() function

Output:
Local: Hello
ERROR! // when accessed outside the function
</pre>

## Global Variables
- a variable declared outside any function or in the global scope is known as a global variable
- can be accessed both inside and outside of functions

<pre>Example:
var message = "Hello"; // declare global variable

function greet() 
{
    console.log(`Local: ${message}`); // accessing inside a function
}

greet();

console.log(`Global: ${message}`); // accessing outside a function

Output:
Local: Hello
Global: Hello
</pre>

## Block Level Variables
- JS ES6 introduced block-level scoping with the let and const keywords
- accessible only within the block {} they are defined in, which can be smaller than a function's scope

<pre>Example:
function display_scopes() 
{
    let message = "local"; // declare variable in local scope, used inside the display_scopes() function

    if (true) 
    {
        let message = "block-level"; // declare block-level variable, used only inside the if block
        console.log(`inner scope: ${message}`);
    }
    console.log(`outer scope: ${message}`);
}

display_scopes();

Output:
inner: block-level
outer: local
</pre>



