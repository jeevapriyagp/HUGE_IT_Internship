## DAY 1: 24.04.2025

### ES6+ 

### Arrow Functions
- Provide a concise syntax for writing functions in JS
- Known as fat arrow functions due to the use of the **=>** arrow syntax

- Always anonymous - they do not have a name
- Offers a shorter syntax compared to traditional function expressions
- If the function has only one parameter then parentheses around the parameter can be omitted
- If the function has only one statement then you can omit the curly braces and the return keyword
- If the function has no parameters then you must include empty parentheses

```js
Example 1:
// with one parameter
const myFunction = (name) => {
    console.log(`Hello, ${name}!`);
};

myFunction("Alice");

Output: 
Hello, Alice!
```

```js
Example 2:
// syntax for single-statement arrow function
const multiply = (a, b) => a * b;

multiply(3, 5); 

Output: 
15
</pre>
```

```js 
Example 3:
// with no parameters
const sayHello = () => {
    console.log("Hello!");
};

sayHello();

Output: 
Hello!
```

```js
Example 4:
const add = (a, b) => {
    return a + b;
};

add(4, 2);

Output: 
6
```

### Template Literals
- Allows to create strings with dynamic content
- Enclosed by backticks **`** instead of single or double quotes
- Allows insertion of placeholders, indicated by the dollar sign and curly braces **(${expression})** which can contain any valid JS expression

- Allows creation of multiline strings without the need for escape character
- Placeholders within template literals allows to insert variables or expressions into the string
- Offers a more readable and intuitive syntax compared to traditional string concatenation

```js
Example 1:
const name = "Bam";
const age = 24;
const greeting = `Hello, my name is ${name} and I am ${age} years old`; // a multiline string with variables

console.log(greeting); 

Output: 
Hello, my name is Bam and I am 24 years old
```

```js
Example 2: 
const a = 10;
const b = 5;
const result = `The sum of ${a} and ${b} is ${a + b}`; // with expressions

console.log(result); 

Output:
The sum of 10 and 5 is 15
```

### Destructuring
- Allows to extract values from arrays or properties from objects and assign them to variables
- Way to access specific values without the need for lengthy code

### Destructuring Arrays
- We can destructure an array by using square brackets **[]** and matching variable names on the left side of the assignment
- Values from the array will be assigned to the corresponding variables

```js
Example:
const names = ["Alice", "Bob", "Charlie", "Dave"];
const [name1, name2, name3, name4] = names;

console.log(name1);

Output:
Alice
```

### Destructuring Objects
- We can extract specific properties from an object and assign them to variables with matching names
- Variable names are enclosed in curly braces **{}**

```js
Example:
const person = {
    name: "Alice",
    age: 25,
    address: "NY",
};

const { name, age, address } = person;

console.log(name); 
console.log(age);
console.log(address);

Output:
Alice
25
NY
```

### Destructuring Nested Objects
- We can also destructure nested objects by specifying the nested structure within the destructuring pattern

```js
Example:
const person = {
    name: "Alice",
    age: 25,
    address: {
        city: "New York",
        state: "NY",
    },
};

const { name, age, address: { city, state } } = person;

console.log(name); 
console.log(age); 
console.log(city); 
console.log(state); 

Output:
Alice
25
New York
NY
```

---

## DAY 2: 25.04.2025

### Map method
- Applies a given function on all the elements of the array and returns the updated array
- Simpler and shorter code instead of a loop

<pre>Syntax of map()
array.map(function_to_be_applied)

(or)

array.map(function (args) {
    // code block of the function
})
</pre>

```js 
Example 1:
function triple(n)
{ 
	return n*3; 
}	 
arr = new Array(1, 2, 3, 6, 5, 4); 

// function is declared outside map() and the function name is mentioned in map()
var new_arr = arr.map(triple) // applies the triple() to all the elements of arr
console.log(new_arr); 

Output:
[ 3, 6, 9, 18, 15, 12 ]
```

```js
Example 2:
let celsiusTemps = [0, 15, 30, 25, 40];

// the function is declared inside the map()
let fahrenheitTemps = celsiusTemps.map(function(temp) { // applies function(temp) to all the elements of celsiusTemps
    return (temp * 9/5) + 32;
});

console.log(fahrenheitTemps);

Output:
[32, 59, 86, 77, 104]
```

### Reduce Method
- Reduces all the elements of the array to a single value by repeatedly applying a function
- Alternative of using a loop and updating the result for every scanned element

<pre>Syntax of reduce()
array.map(function_to_be_applied)

(or)

array.map(function (args) {
    // code block of the function
})
</pre>

```js
Example 1:
function product(a, b)
{ 
	return a * b; 
}

arr = new Array(1, 2, 3, 6, 5, 4); 

var product_of_arr = arr.reduce(product) // reduces the array into the product of all elements in it
console.log(product_of_arr)

Output:
720
```

```js
Example 2:
let cart = [
    { item: "Book", price: 250 },
    { item: "Pen", price: 30 },
    { item: "Notebook", price: 120 },
    { item: "Bag", price: 800 }
];

let totalPrice = cart.reduce(function(accumulator, currentItem) { // reduces into the total sum price of all items in the cart list
    return accumulator + currentItem.price;
}, 0);

console.log(totalPrice);

Output:
1200
```

### Filter Method
- Filters the elements of the array that return false for the applied condition and returns the array which contains elements that satisfy the applied condition
- Simpler and shorter code instead of using a loop

<pre>Syntax of filter()
array.map(function_to_be_applied)

(or)

array.map(function (args) {
    // code block of the function
})
</pre>

```js
Example 1:
arr = new Array(1, 2, 3, 6, 5, 4); 

var new_arr = arr.filter(function (x) { // filters out even numbers using the condition x%2 == 0
	return x % 2==0; 
}); 

console.log(new_arr) 

Output:
[ 2, 6, 4 ]
```

```js
Example 2:
let students = [
    { name: "Anya", marks: 85 },
    { name: "Ben", marks: 42 },
    { name: "Clara", marks: 76 },
    { name: "Derek", marks: 33 },
    { name: "Eva", marks: 90 }
];

let passedStudents = students.filter(function(student) { // filters out students with marks >= 50
    return student.marks >= 50;
});

console.log(passedStudents);

Output:
[
  { name: 'Anya', marks: 85 },
  { name: 'Clara', marks: 76 },
  { name: 'Eva', marks: 90 }
]
```









