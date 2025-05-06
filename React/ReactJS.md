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

