## DAY 1: 06.05.2025

### React JS
- ReactJS is a component-based JS library used to build dynamic and interactive user interfaces
- It simplifies the creation of single-page applications (SPAs) with a focus on performance and maintainability

### JSX
- JSX stands for JavaScript XML and it is a special syntax used in React to simplify building user interfaces
- JSX combines HTML and JS in a single syntax, allowing you to create UI components in React
- simplifies rendering dynamic content by embedding JS expressions inside HTML-like tags

### How JSX Works
- When React processes JSX code, it converts it into JS using Babel and this JS code then creates real HTML elements in the browser’s DOM and displays as a webpage

### JSX Transformation Process
1. Writing JSX: 
- Write JSX just like HTML inside JS files (React components)

```jsx
const element = <h1>Hello, World!</h1>;
```

2. JSX Gets Transformed: 
- JSX is not directly understood by browsers so, it gets converted into JS by a tool called Babel
- After conversion, the JSX becomes equivalent to React.createElement() calls
- After transformation JSX becomes,
```jsx
const element = React.createElement('h1', null, 'Hello, World!');
```

3. React Creates Elements
- React takes the JS code generated from JSX and uses it to create real DOM elements that the browser can render on the screen

### Creating and nesting components 
- React apps are made out of components
- component is a piece of the UI that has its own logic and appearance and it can be as small as a button, or as large as an entire page

**Creating a component**
```jsx
function MyButton() 
{
    return (
        <button>I'm a button</button>
    );
}
```

**Nesting components**
Now that we have declared `MyButton`, we can nest it into another component,

```jsx
function MyApp() 
{
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton /> {/* react component created earlier */}
        </div>
    );
}
```

- `<MyButton />` starts with a capital letter, that’s how you know it’s a React component
- React component names must always start with a capital letter, while HTML tags must be lowercase

### Writing markup with JSX 
- JSX is stricter than HTML
- Component also can’t return multiple JSX tags, we have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper

```jsx
function AboutPage() 
{
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}
```

### Adding styles 
- In React we need to specify a CSS class with `className`, it works the same way as the HTML `class` attribute

```jsx
<img className="avatar" />
```

### Displaying data 
- JSX allows to put markup into JS
- Curly braces lets “escape back” into JS so that you can embed some variable from your code and display it to the user

```jsx
return (
    <h1>
        {user.name}
    </h1>
);
```

We can also "escape into JS" from JSX attributes, but you have to use curly braces instead of quotes. 

```jsx
return (
    <img
        className="avatar"
        src={user.imageUrl}
    />
);
```
In the above Example, className="avatar" passes the "avatar" string as the CSS class, but src={user.imageUrl} reads the JS user.imageUrl variable value, and then passes that value as the src attribute

### Difference between HTML and JSX:
- JSX is a syntax extension for JavaScript, used with React to describe what the UI should look like
- Unlike HTML, it allows JavaScript expressions to be embedded inside {}
- JSX uses camelCase for attribute names that are different from standard HTML, such as className instead of class, and htmlFor instead of for
- JSX expressions must return a single root element while HTML doesn't have this restriction.
- Browsers can't understand JSX directly so it must be transpiled into standard JS using tools like Babel before it can run
- We can write dynamic content in JSX using JS expressions like {user.name}, which isn’t possible in plain HTML

```html
<div class="greeting">
    <h1>Hello, Guest!</h1>
    <p>Welcome to our website</p>
</div>
```

```jsx
const user = {
    name: "Alice"
};

const element = (
    <div className="greeting">
        <h1>Hello, {user.name}!</h1>
        <p>Welcome to our website</p>
    </div>
);
```

| Feature             | HTML                             | JSX                                           |
|---------------------|----------------------------------|-----------------------------------------------|
| Syntax Base         | HTML                             | JavaScript + XML                              |
| File Type           | `.html`                          | `.js` or `.jsx`                               |
| Attribute Naming    | Uses standard HTML attributes    | Uses camelCase for some attributes            |
| JavaScript Usage    | Cannot embed JS directly         | Supports embedding JS expressions inside `{}` |
| Self-closing Tags   | `<img>...</img>`                 |`<img ... />`                                  |
| Comments            | `<!-- comment -->`               | `{/* comment */}`                             |
| Must Return         | Not applicable                   | Must return a single root element             |
| Rendering           | Rendered directly in browser     | Needs to be compiled (e.g., by Babel)         |

---

## DAY 2: 07.05.2025

### useState
- useState is a React Hook that lets you add a state variable to your component.
- Usage:
    - Adding state to a component
    - Updating state based on the previous state
    - Updating objects and arrays in state
    - Avoiding recreating the initial state
    - Resetting state with a key
    - Storing information from previous renders

To import useState from React,

```jsx
import { useState } from 'react';
```
Now we can declare a state variable inside your component as below,

```jsx
function MyButton() 
{
  const [count, setCount] = useState(0);
  ...
}
```

- we'll get two things from useState: the current state (count), and the function that lets you update it (setCount)
- we can give them any names, but the convention is to write [something, setSomething]
- The first time the button is displayed, count will be 0 because you passed 0 to useState()
- When you want to change state, call setCount() and pass the new value to it
- Clicking this button will increment the counter

```jsx
function MyButton() 
{
    const [count, setCount] = useState(0);

    function handleClick() 
    {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
```

### Reusable Components
- Reusable components are self-contained building blocks that can be used multiple times in different parts of a React application
- This improves consistency and maintainability
- DRY (Don't Repeat Yourself) principle
- Easier to test and debug
- Consistent UI/UX

```jsx
import React from 'react';

function Button({ label, onClick, style }) {
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
}

export default Button;
```

### Passing Data via Props
- Props (short for **properties**) allow you to pass data from parent to child components

```jsx
import React from 'react';
import Button from './Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Reusable Component Demo</h1>
      <Button label="Click Me" onClick={handleClick} style={{ padding: '10px', backgroundColor: 'skyblue' }} />
    </div>
  );
}

export default App;
```

- Props are **read-only**
- Destructure props directly in the component function parameter for clarity

---

## DAY 3: 08.05.2025

### Conditional rendering 
- In React, there is no special syntax for writing conditions
- we’ll use the same techniques as you use when writing regular JS code. 

```jsx
let content;
if (isLoggedIn) 
{
    content = <AdminPanel />;
} 
else 
{
    content = <LoginForm />;
}

return (
    <div>
        {content}
    </div>
);
```
We can use the `conditional ?` operator. Unlike if, it works inside JSX,

```jsx
<div>
    { isLoggedIn ? (<AdminPanel />) : (<LoginForm />) }
</div>
```

When we don’t need the else branch, we can also use a shorter `logical &&` syntax,

```jsx
<div>
    {isLoggedIn && <AdminPanel />}
</div>
```

### Rendering lists 
- we have to rely on JavaScript features like for loop and the array map() function to render lists of components

```jsx
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

Inside React component, we use the map() function to transform an array of products into an array of <li> items,

```jsx
const listItems = products.map(product =>
    <li key={product.id}>
        {product.title}
    </li>
);

return (
    <ul>{listItems}</ul>
);
```

---

## DAY 4: 09.05.2025

### Controlled Components
- controlled component is a form element whose value is controlled by React's `useState`
- The input is updated via `onChange`, and its value is always stored in state
- Input values are **bound to state**
- Updates are handled via `onChange` event
- Provides better control and easy validation

```jsx
import React, { useState } from 'react';

function MyForm() 
{
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
```

### Forms

**Adding forms in React**
```jsx
function MyForm() 
{
    return (
        <form>
            <label>Enter your name:
                <input type="text" />
            </label>
        </form>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```

**Handling Forms**
- Handling forms is about how you handle the data when it changes value or gets submitted
- In HTML, form data is usually handled by the DOM while in React, form data is usually handled by the components
- When the data is handled by the components, all the data is stored in the component state, we can control changes by adding event handlers in the onChange attribute

```jsx
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() 
{
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```

**Submitting Forms**
- We can control the submit action by adding an event handler in the onSubmit attribute for the <form>

```jsx
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```

**Multiple Input Fields**
- We can control the values of more than one input field by adding a name attribute to each element
- We will initialize our state with an empty object
- To access the fields in the event handler use the `event.target.name` and `event.target.value` syntax
- To update the state, use square brackets [bracket notation] around the property name

```jsx
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() 
{
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```

**Textarea**
- textarea element in React is slightly different from ordinary HTML
- In HTML the value of a textarea was the text between the start tag `<textarea>` and the end tag `</textarea>`
- In React the value of a textarea is placed in a value attribute, We'll use the useState Hook to manage the value of the textarea

```jsx
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() 
{
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```

**Select**
- In HTML, the selected value in the drop down list was defined with the selected attribute
- In React, the selected value is defined with a value attribute on the select tag

```jsx
function MyForm() 
{
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}
```

