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

---

## DAY 3: 28.04.2025

### DOM Methods and Properties
- methods are actions you can perform on HTML elements
- properties are values of HTML elements that you can set or change

```html
Example:
<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!"; // changes the html element with id demo 
</script>

</body>
</html>
```

**getElementById Method**
- way to access an HTML element is to use the id of the element
- in the example above the **getElementById** method used id="demo" to find the element

**innerHTML Property**
- way to get the content of an element is by using the innerHTML property
- useful for getting or replacing the content of HTML elements

### Finding HTML Elements

| Method | Description |
|--------|-------------|
| document.getElementById(id) | Find an element by element ID |
| document.getElementsByTagName(name) | Find elements by tag name |
| document.getElementsByClassName(name) | Find elements by class name |

```js
Example:
var element = document.getElementById("myHeading"); // finds the element with the ID "myHeading"
```

```js
Example:
var paragraphs = document.getElementsByTagName("p"); // finds  all <p> elements on the page
```

```js
Example:
var items = document.getElementsByClassName("list-item"); // finds all elements with the class "list-item"
```

### Changing HTML Elements

| Property | Description |
|----------|-------------|
| element.innerHTML = new html content | Change the inner HTML of an element |
| element.attribute = new value | Change the attribute value of an HTML element |
| element.style.property = new style | Change the style of an HTML element |

| Method | Description |
|--------|-------------|
| element.setAttribute(attribute, value) | Change the attribute value of an HTML element |

```js
Example:
document.getElementById("demo").innerHTML = "Hello World!"; // changes the content of the element with ID "demo" to "Hello World!"
```

```js
Example:
document.getElementById("myImage").src = "newImage.jpg"; // changes the source of the image with ID "myImage" to "newImage.jpg"
```

```js
Example:
document.getElementById("demo").style.color = "blue"; // changes the text color of the element with ID "demo" to blue
```

```js
Example:
document.getElementById("myLink").setAttribute("href", "https://www.example.com"); 
// changes the "href" attribute of the link with ID "myLink" to a new URL
```

### Adding and Deleting Elements

| Method | Description |
|--------|-------------|
| document.createElement(element) | Create an HTML element |
| document.removeChild(element) | Remove an HTML element |
| document.appendChild(element) | Add an HTML element |
| document.replaceChild(new, old) | Replace an HTML element |
| document.write(text) | Write into the HTML output stream |

```js
Example:
var newDiv = document.createElement("div"); // creates a new <div> element
```

```js
Example:
var parent = document.getElementById("parentDiv"); 
var child = document.getElementById("childDiv"); 
parent.removeChild(child); // removes the child element from the parent element
```

```js
Example:
var newItem = document.createElement("li"); 
var textNode = document.createTextNode("New Item"); 
newItem.appendChild(textNode); // appends the text to the new <li> element
document.getElementById("myList").appendChild(newItem); // adds the new list item to the element with ID "myList"
```

```js
Example:
var newElement = document.createElement("p"); 
newElement.innerHTML = "This is a new paragraph.";
var oldElement = document.getElementById("oldPara"); 
var parent = oldElement.parentNode; 
parent.replaceChild(newElement, oldElement); // replaces the old paragraph with the new one
```

```js
Example:
document.write("<h1>Hello, World!</h1>"); // writes a new <h1> element with the text "Hello, World!" into the document
```

### Adding Event Handlers

| Method | Description |
|--------|-------------|
| document.getElementById(id).onclick = function(){ code } | Assign an event handler function to an element's `onclick` event |

```js
Example:
document.getElementById("myButton").onclick = function() { // adds a click event listener to the button with ID "myButton"
  alert("Button clicked!"); // Displays an alert when the button is clicked
};
```

---

## DAY 4: 29.04.2025

### Form Events
- Form events in JS are events that are associated with HTML forms
- Allows to execute JS code in response to these actions, enabling you to validate form data, perform actions on form submission or reset, and enhance the user experience
- Hooked onto the elements in DOM where by default the bubbling propagation is used i.e. from bottom (children) to top(parent)

**Common Form Events**
- `onsubmit` - triggered when a form is submitted. It's often used for form validation before data is sent to the server

```html
Example:
<form onsubmit="return validateForm()">
    <input type="text" id="name" placeholder="Enter name">
    <button type="submit">Submit</button>
</form>

<script>
function validateForm() 
{
    const name = document.getElementById("name").value;
    if (name === "") 
    {
        alert("Name is required!");
        return false; // prevents form submission
    }
    return true;
}
</script>
```

- `onreset` - triggered when the form is reset, allowing you to perform actions when the user resets the form

```html
Example:
<html>
<body>
    <form onreset="resetForm()">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <input type="reset" value="Reset">
    </form>
    <script>
        function resetForm() 
        {
            // Perform actions when the form is reset
            alert("Form has been reset!");
        }
    </script>
</body>
</html>
```

- `onchange` - triggered when the value of a form element (input, select, textarea) changes. Commonly used for user input validation or dynamic updates

```html
Example:
<html>
<body>
    <label for="country">Select a country:</label>
    <select id="country" onchange="handleChange()">
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">UK</option>
        <option value="India">India</option>
    </select>
    <p id="txt"></p>
    <script>
        function handleChange() 
        {
            // perform actions when the dropdown selection changes
            var selectedCountry = document.getElementById('country').value;
            document.getElementById("txt").textContent="Selected country: "+selectedCountry;
        }    
    </script>
</body>
</html>
```

- `oninput` - triggered immediately when the value of an input element changes, allowing for real-time handling of user input

```html
Example:
<html>
<body>
    <label for="search">Search:</label>
    <input type="text" id="search" oninput="handleInput()">
    <div id="message"></div>

    <script>
        var messageElement = document.getElementById('message');
        function handleInput() 
        {
            // performs actions as the user types
            var searchInput = document.getElementById('search').value;
            messageElement.innerHTML+="Search input: " + searchInput+'<br>';
        }
   </script>
</body>
</html>
```

- `onfocus`- triggered when an element receives focus, such as when a user clicks or tabs into an input field
- `onblur` - riggered when an element loses focus, such as when a user clicks outside an input field or tabs away

```html
Example:
<html>
<body>
    <label for="name">Name:</label>
    <input type="text" id="name" onfocus="handleFocus()" onblur="handleBlur()">
    <p id= "output"></p>
    <script>
        const output = document.getElementById('output');
        function handleFocus() 
        {
            // perform actions when the input gets focus
            output.innerHTML += "Input has focus" + "<br>";
        }
        function handleBlur() 
        {
            // perform actions when the input loses focus
            output.innerHTML += "Input lost focus" + "<br>";
        }
    </script>
</body>
</html>
```

---

## DAY 5: 30.04.2025

### Local Storage
- localStorage object allows you to save key/value pairs in the browser
- localStorage object stores data with no expiration date
- data is not deleted when the browser is closed, and are available for future sessions

- Only strings can be stored, use JSON.stringify() and JSON.parse() to store objects or arrays
- Not accessible in private/incognito mode on some browsers

### Methods Used:
- `setItem(key, value)` - stores a value under the specified key

```js
Example:
localStorage.setItem('username', 'JohnDoe');
```

- `getItem(key)` - returns the value associated with the key

```js
Example:
let user = localStorage.getItem('username');
console.log(user); 

Output: 
JohnDoe
```

- `removeItem(key)` - removes the key and its value

```js
Example:
localStorage.removeItem('username');
```

- `clear()` - removes all items in local storage

```js
Example:
localStorage.clear();
```

- `key(index)` - returns the name of the key at the specified index

```js 
Example:
localStorage.setItem('firstName', 'John');
localStorage.setItem('lastName', 'Doe');

let firstKey = localStorage.key(0);
console.log(firstKey); 

// output can be 'firstName' or 'lastName' depending on order
```

### JSON
- JSON stands for JavaScript Object Notation
- method for representing complex data types as strings
- useful for localStorage, and also used for sending information back and forth over the web

JSON has the following rules:
- Keys must be double quoted
- No trailing comma
- Values must be one of the following types:
    - Strings (double quoted)
    - Numbers
    - Booleans
    - Arrays
    - Objects

```js
Example on how JSON would look:
{
    "commonName": "Swiss Cheese Plant",
    "classification": "Monstera",  
    "family": "Araceae",
    "maxHeightInFeet": 30,
    "flower": true,
    "scientificName": "Monstera Deliciosa"
}
```

### Browser provides a JSON object with two methods

1. JSON.stringify();
- takes 1 argument - a JavaScript object
- turns any JavaScript object into a valid JSON string

```js
Example:
const student = {
    name: "Alice",
    age: 22,
    course: "Computer Science"
};

const jsonString = JSON.stringify(student);

console.log(jsonString);

Output: 
{"name":"Alice","age":22,"course":"Computer Science"}
```

2. JSON.parse();
- takes 1 argument - valid JSON
- turns any valid JSON into a usable JavaScript object

```js
Example:
const jsonString = '{"name":"Alice","age":22,"course":"Computer Science"}';

const studentObject = JSON.parse(jsonString);

console.log(studentObject.name);  
console.log(studentObject.age);  
console.log(studentObject.course);

Output:
Alice
22
Computer Science
```




