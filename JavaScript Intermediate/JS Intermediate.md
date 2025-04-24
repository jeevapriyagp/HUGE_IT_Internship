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
