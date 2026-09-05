# React

React let's us write declarative code. i.e, you define the target UI state and not the steps the get there. Normal javascript is imperative code(we need to define the exact steps to update the UI).

To create a react app with vite we can use `**npm create vite@latest**` this will give you a list of options from which you can use react. The react code we write is in .JSX extension which is in HTML and javascript. This format is not recognized by the browser. we need to convert this into normal js files for the browser to run. Build tools like vite and create-react-app helps in creating the javascript and html files from the JSX code. The js code generated like this will be minimal in size and faster compared to the vanilla javascript code you write for the same things.

Components is the core concept of react. Component are build up of react, html and css. Components make it possible for each components to have it's own styling, structure and logic. These components are also reusable and easily manageable. Without components if you want to make changes you need to make changes in multiple places in your code base. This is time consuming and error prone. Components allows us to have separation of concerns. With components relatable components live together.

**JSX stands for Javascript Syntax Extenstion.**

Built in html components which starts with lower case are rendered as DOM nodes by react. Only valid officially defined html elements are allowed in this. The custom components starts with uppercase, defined by you will be traversed by react until there are only built in components left.

**{} - are used to output values or execute js code inside the jsx code.**

To dynamically load static files such as images in react component you can import the image with any variable name you like and pass the variable name to the src attribute of the img tag

**import imageName from 'relative path';**

<img src={imageName} />

Note that you should not use quotes when passing variable names into the src in {}. Also note that referencing the images directly in the src attribute by full path is not recommended. It might break when you deploy your application.

Props : Helps us to pass data into our component make them reusable. You can pass any value as props(String, arrays, numbers, objects etc). Props are immutable. By default components can only accept only one props. We can use any name instead of props, typically the name props is used. The props will be set by react. The props passed to the component by react is a javascript object. Inside the component you can access the data from the props using props.propName. Note that the key or prop name should be consistent inorder to access a prop.

If you need to pass an object properties as props to the components we can use the spread operator to spread the object. The key name of the object will be considered as the prop name and the value of the property will be considered as the values of the property.

eg: `<CoreConcepts {...CORE_CONCEPTS[0]}/>` instead of using `<CoreConcepts title={CORE_CONCEPTS[0].title} image = {CORE_CONCEPTS[0].image} />`

You can also use object destructuring in the component function to extract the properties. We can access these properties as standalone variables inside the component function.

You can also accept multiple values into a single variable in the component function like  
`function MyComponent({...concept}){}`

**It is recommend to create separate files for different components to make your components more manageable. Unless the components are tightly dependent on each other it is not recommended to store them in a single file.** Generally all the components are present in the components folder in the src folder. This is not a requirement but a common choice. The common convention of the file name is to have the same name of the component to be stored inside the file.

**The children prop in react will give whatever text is passed between the components opening and closing tags. This is automatically set by react.**

Eg:

```javaScript
export default function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}
 
// In the parent component
 <TabButton>Component</TabButton>
```

**We can also have complex JSX components inside opening and closing tags. We can also use object destructuring to access the children prop.**

**This way of passing components inside other components is called component composition. This works same as passing as props.**

In react even the built-in html components have props. These props are used for various purposes such as adding events, styling etc. For events in react we need to pass the event name as prop and the value of the prop needs to be a function which needs to be executed on the event. In javascript we can add functions inside of a function by this, we make sure that the function we write is only accessible from inside of the parent function. We don't need to pass parenthesis with the event name in the props. If we use paranthesis it will call the function. We are just passing the reference of the function to be executed by react.

We can also pass functions to components as props. When you are passing functions that handle events it is a common standard that we must use 'on' prefix for the function name.

To pass custom props in event handler function we can pass anonymous function as the event handler. Inside the function body we need to call the function which we need to execute. At this time we can pass custom arguments.

In react every component function only runs once when they are loaded. If we need to re run the function we need to make changes in the data inside the function. Using normal variables for this is not possible in this case. The event handler functions is an exception for this case. When ever you call an event handler function, the event handler function will be executed again and again.

To make react know about the changes in the data of a component and re render the component we must use a special function called react hooks. The hooks start with 'use' as prefix. Examples are useState(), useEffect() etc. Technically hooks are functions but they must be called inside the react component functions or react hooks. The calling to react hooks must be in the root level of the component function and not inside a nested function. They must not be nested in any type of statements such as if statements. useState() is one of the most important react hook. useState() accepts a parameter which is the initial value. It will return a value, it will return an array. it has 2 elements inside it which are the current value and the setter function. The value will be updated. The 2nd element of the useState will always be a function. This setter allows us to set values. Whenever the value changes the component will re-render.

When you call the state updating function it schedules a state update. Then the function will be re executed. Only after this the new value is available i.e the value will not be updated right after calling the update function.

To render data conditionally inside jsx code we can use {} inside which we can use !, ?: , && operators. It is ok to use null inside if you don't have an or condition for ternary operator.

Alternative to this approach we can create a condition before the return and store the jsx code inside a variable and output the variable. this approach is more cleaner. note that we must use () to store the jsx code. also they should be wrapped in a div or empty fragments.

If you want to add a class to a button in JSX you need to use the className property. We can set the classnames dynamically using the {}.

You can iterate through arrays in the jsx code using .map() js function.

eg:

```javaScript
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts {...conceptItem} />
            ))}
          </ul>
```

You don't necessarily need to write JSX code for react application, you can use regular html or use javascript features to create components.

```javaScript
React.createElement('div',
    {id: 'content'},
    React.createElement('p', null. 'Hello World')
);
```

this is the same as:

```javaScript
 <div id="content">
 <p>Hello World!</p>
</div>
```

The first argument of createElement is the type of component. The second argument is used for passing props. The third argument is the child content which specifies the data to be passed to the component. This can also be nested components. When you use this type of approach you don't need to use build process. The JSX approach is easier to create and read.

JSX return statement should have a parent element if there are multiple elements to be returned. This is because javascript don't support the return of multiple values from a same return of a function. To avoid this normally we wrap the code inside a div. This creates an unnecessary div that wraps our component's children. To avoid this, we can use <></> called fragments. The fragments will not be rendered on the screen. The older versions of react used Fragment component from react. But newer components uses the empty fragment notation.

In react you should split components when they are getting complex and if one component have to manage multiple states. There is no rule such that you should only have one state in a component. But as the number of states in a component increases the component will have to re-render every time when a change to one of the state happens. So we should optimise the number of re-renders for a component by efficiently splitting up components and managing their states.

Putting different features into different components is always a good idea in react projects. Make each component leaner is the key.

Props are not forwarded from parent to child components automatically in react. Even if it is builtin props such as id. You need to manually pass and set the props to children. This approach of passing each and every prop from parent to child is not very scalable. So we use a pattern called forwarding props or proxy props.

We use the rest operator in javascript to collect all the props that is passed into a component. This will create an object from this we can access them. We use the spread operator to spread the received props into the required position in the child component. The following is an example for this:

```javaScript
import React from "react";
 
export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
```

This can be very useful when creating wrapper components.  
**NOTE: Even if there is no key to a prop(only a name) you can access them with their passed name inside the child component. It will just be a true or false value.**

If we want to pass multiple JSX components as props to a component we can use our own prop names and pass the JSX code to them. This is excluding the default children props which is used to access the data passed between the tags of the component. NOTE that the JSX code passed as prop should be wrapped in a fragment or a div if there are multiple elements (sibling elements). By this method we can add multiple JSX slots to a component. This method can be used to enforce the structure of components.

We can dynamically set the type of components we want to use in certain scenarios to improve the reusability of component. For example if we want to wrap a component in a particular tag such as div, menu or ul we can pass them to the component as props. **NOTE that when using built in components we must pass them inside "". If custom components needs to be the wrapper we must pass them without "" as variable names**. In the child component where we need a wrapper we must wrap the section in the passed prop name. If the prop name starts with small letter, it won't work in that case we must assign it a constant which starts with capital letter and use the constant name as wrapper. eg:

```javaScript
export default function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
```

In the parent component we need to pass like:

```javaScript
<Tabs
        buttonsContainer="menu">
....</Tabs>
```

**_Passing a component identifier as a prop value and using this value inside the component to render different HTML elements is a crucial react concept._**
**NOTE: If you are passing a prop name that starts with capital letters you don't need to re-assign them to a const.**

We can have default prop value.

eg:  
`export default function Tabs({children, buttons, ButtonContainer='menu'}){}  
`

**NOTE:** Images that are stored in the public folder are directly accessible by any component or anyone. If you want some images or files to be only accessible from code you can use src/assets folder which is optimal and the url for them is generated at build time. The things you need in index.html can be stored in public. Such as common images, favicons etc.

Whenever you are using two instances of a components they work in an isolated environment. If the state in one component instance changes the other component is not affected. This is an important feature. This helps the user to create complex reusable components that doesn't interfere with each other.

In react when updating state based on previous value of that state, pass a function to your state updating function. This function will be called automatically by react and will receive the guaranteed latest state.  
` setIEditing(prev=!prev);`  
The function will automatically the previous state as input.

Even though `setIsEditing(!isEditing)` will work, it is not guaranteed to be always working. because behind the scenes react is scheduling a state update. This may lead to unexpected behaviours when we are updating the state multiple times.

```javaScript
import React from "react";
 
export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [playerName, setPlayerName] = React.useState(name);
  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };
 
  const changePlayerName = (e) => {
    setPlayerName(e.target.value);
  };
  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={changePlayerName}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
```

The above mentioned is the example of two way data binding. Here we are taking the input of the user and setting it to the output.

**NOTE: You can only use () inside a {} in JSX code**

If your state is an object or an array you should update them in an immutable way.

```javaScript
  function handleSelectSqaure(rowIndex, colIndex) {
    setGameBoard((prev) => {
      prev[rowIndex][colIndex] = "X";
      return prev;
    });
  }
```

The above mentioned is a wrong approach. This means that instead of directly updating the state, create a deep copy of the object first and then updating on that copy. The javascript spread operator can be used for this.

If you are spreading a nested array we need to iterate over the outer array elements and spread both the inner and outer elements like this. array. eg:

```javaScript
 const updatedBoard = [...prev.map((innerArray) => [...innerArray])];
```

If we need to share component state between components, the most basic method is state lifting. For this we need to have the state value in the ancestral component which has access to both the child component which requires the data from the parent component. The state data is passed as props.

**We must not states everywhere. We must derive state from props. We should only use states only when necessary. We should derive information from states. That is we must compute or derive relevant data from the existing states.**

Arrays and objects are stored as reference values in memory in javascript. Whenever we are editing those values, we are editing those original values in memory.

The straight forward approach is to add the css rules in the main css file and import it on the main app component. These files are plugged into the the project at runtime by build tools such as vite. But this can get complex.

We can also split the files into multiple css files and import them. This works in the same way as the previous approach.

The advantage of this approach is that the designer can design the page by creating a styles files. This style file can be used by the developer to be imported into the component and style them. CSS code can be written as is in this approach. This approach decouples the css code from javascript code.

The disadvantage is that you need to know css. also, CSS code is not scoped to components. This means that there might be style conflicts because same class name might be stored in different components.

Any CSS code you write in a CSS file will be available to all the components of the project. So when using element selectors there might be conflicts. Even you split the css code among multiple files and import them to the required components. the css code will not be scoped. All the CSS files are injected to the head section of the html page and will be applied globally.

To avoid the scoping issue of vanilla CSS we can use inline styles in the JSX code. You can do this by using style prop. inside the style prop we should pass a dynamic value as an object. The style should be applied as key value pair.

`<p style={{color:"red"}}>Sample</p>`

if there are - in the css property we should use camel case for the css property.

These inline styles only affects the jsx element in which you add them. It is easy to add.

The disadvantage is that you need to know css and also that you need to target each elements individually. This create css code redundancy. This also removes the separation between the CSS and JSX code. A single person should work on both styling and logic. Another advantage of inline style is that we can conditionally add styling logic. we can evaluate conditions for css properties. eg:

`<p style={{backgroundColor: emailValid ? 'green' : 'red'}}>Email</p>`

You can also add css classes conditionally. If you have only once class to be added conditionally still you need to use ternary operator with 'undefined' as the else condition. Otherwise you will get a warning if you use && operator with just one condition. We can also add class names along with the regular classes using the template literal approach. The following is an example:

```javaScript
import React from 'react';
function App() {
    const [clickedButton, setClickedButton] = React.useState(null);
  return (
    <div id="app">
      <h1 className={`${clickedButton?.style ? clickedButton.style : ''}`}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={()=>{setClickedButton({style:'highlight-green'})}}>Yes</button>
        </li>
        <li>
          <button onClick={()=>{setClickedButton({style:'highlight-red'})}}>No</button>
        </li>
      </menu>
    </div>
  );
}
 
export default App;
```

CSS modules allows you to write vanilla css which is scoped. It needs to be enforced by the build tools. To create a css module in react we must name the css file as `component.module.css` where component is the name of the component. When importing the module we must use :

```javaScript
import classes from './Header.module.css';
....
<p className={classes.paragraph}>....</p>
```

where paragraph is a classname defined in the css module. the classes is a javascript object. We can choose any name instead of classes. By utilising this approach the css classes will get a unique name which is generated by the build process automatically. The classes and styles are scoped to the components which import the styles thus avoiding conflicts.

The advantage of this approach is that the css code is decoupled from the JSX code, another person can write the css code. The css rules are scoped to the components which import the module.

The disadvantage is that you still need to know css. Also you will end up with many relatively small css files in your project.

For creating styled components we need to install a special npm package which is styled components. For this use `npm install styled-components` . To use this in our components we need to import the styled object from styled-component package like:

`import {styled} from 'styled-components';`

You can access different html tags which are properties of the styled object with the . notation. What it does is that it creates the html element as separate component, but the component will have custom style. After the property name we need to use \`\`. This double backticks are called tagged templates which is a javascript feature. All the css styles are placed between the backticks. Normal css rules can be used as is in this (multi-line text). eg:

```javaScript
const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;
```

This will return a div which is styled into a react component. This component will also have a children prop for wrapping other components.

Behind the scenes the styled components creates custom css classes with the styles you defined. And it will be applied dynamically at the run time.

We can add all the normal props to a styled components. Such as id, className etc. We can also add event listeners which are available for the components. All the correct props you define for the styled component will be forwarded to the underlying html element.

If you want to have dynamic styling you can use template literal syntax. Inside the template literal syntax you need to write an arrow function with the props as arguments. from the props you can access the required props. or you can directly de-structure the props directly and use the name. Inside the function body you can use ternary operator for evaluation of the condition.

eg:

```javaScript
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ invalid }) => (invalid ? "#f87171" : "#6b7280")};
`;
```

you can add the props to the label component as :

```javaScript
 <Label invalid={emailNotValid}>Email</Label>
```

NOTE: You should not pass built-in props to apply dynamic style. To work around this you can add a $ sign as prefix to the prop name. You also add the $sign wherever you are using the prop.

We can also handle media queries, pseudo selectors and nested css rules with styled components. For selectors and nested rule like:

```javaScript
header img {
  object-fit: contain;
  margin-bottom: 2rem;
  width: 11rem;
  height: 11rem;
}
```

We can add them inside the styled component definition by replacing the header with `&` symbol. It indicates that the style should be applied to any image under the current component. So it will be like:

```javaScript
 & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }
```

For media queries which targets the main tag like:

```javaScript
@media (min-width: 768px) {
  header {
    margin-bottom: 4rem;
  }
 
  header h1 {
    font-size: 2.25rem;
  }
}
```

We can use:

```javaScript
 @media (min-width: 768px) {
    & {
      margin-bottom: 4rem;
    }
 
    & h1 {
      font-size: 2.25rem;
    }
  }
```

You can also altogether ignore the & symbol if you want to target only the main element like:

```javaScript
 @media (min-width: 768px) {
      margin-bottom: 4rem;
    & h1 {
      font-size: 2.25rem;
    }
  }
```

We use the white space after the & to target the child element.  
The complete styled header will look like:

```javaScript
const StyledHeader = styled.header`
    .....
  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }
 
  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: "Pacifico", cursive;
    margin: 0;
  }
 
  & p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }
 
  @media (min-width: 768px) {
    & {
      margin-bottom: 4rem;
    }
 
    & h1 {
      font-size: 2.25rem;
    }
  }
`;
```

For pseudo selectors also we can do the same. But here we should not use the white space between the pseudo selector and &. Like:

```javaScript
&:hover {
    background-color: #f0920e;
  }
```

If you only are only using a styled component in a single file storing defining that component in the same file is fine. But if we want to reuse components you can create separate component files. For example we can create a separate button component like:

```javaScript
import { styled } from "styled-components";
 
const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;
  &:hover {
    background-color: #f0920e;
  }
`;
 
export default Button;
```

We can create also create components that contains multiple sub components, for example we can create a single new component for label and input which we can reuse in out code. We can define the style components in the file and instead of exporting the component we can export a function which returns a component. The component file will look like:

```javaScript
import styled from "styled-components";
 
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => (props.$invalid ? "#f87171" : "#6b7280")};
`;
const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${(props) => (props.$invalid ? "#fed2d2" : "#d1d5db")};
  color: ${(props) => (props.$invalid ? "#ef4444" : "#374151")};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-color: ${(props) => (props.$invalid ? "#f73f3f" : "transparent")};
`;
 
export function CustomInput({ label, invalid, ...props }) {
  return (
    <p>
      <Label $invalid={invalid}>{label}</Label>
      <Input $invalid={invalid} {...props} />
    </p>
  );
}
```

And we can use it like:

```javaScript
import { CustomInput } from "./Input";
......
<ControlContainer>
        <CustomInput
          $invalid={emailNotValid}
          label="Email"
          type="email"
          style={{
            backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db",
          }}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
 
        <CustomInput
          type="password"
          label="Password"
          $invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </ControlContainer>
```

We can use this pattern for non styled components also. As a react developer you should try to reuse components.

The advantages of using styled components are they are relatively easy to add in the application. You can continue thinking in react because it let's us create configurable style functions. They are also scoped therefore there will not be any css rule clash.  
The disadvantages are we still need to know css to style. There is also no separation between css and react code. You may end up with many relatively small wrapper components.

Tailwind is a popular choice for styling web applications. It works really well with react. Tailwind is all about adding tiny utility classes to style the html elements. It will also setup some base style which will affect the overall document. You can refer the official tailwind documentation for integration steps with react with vite. We can additionally install the tailwind css intellisense extension for vs code to get auto completion for tailwind css.

Even if we are using tailwind we can set up our own css rules in index.css. We can create utility classes in css for implementing styling. For example if we have a custom font like google font and we want to apply it to our components, we can go to the `tailwind.config.js` file and under the `theme `key we can find the `extends `key. Inside of this extends key we can add the `fontFamily `key then register a new font family with any name of your choice. For this key we should specify an array as the value, inside of the array we should specify the font family in double quotes wrapped inside of single quotes. For the fallback font we can specify it in just single quotes. This syntax is required by tailwind. The example will look like:

```javaScript
 theme: {
    extend: {
      fontFamily: {
        title: ['"Pacifico"', 'cursive']
      }
    },
  },
```

After adding this we can use `font-title` css class in our project. The above configuration works on tailwind 3\. But in tailwind 4 we don't need to setup the tailwind.config.js file. Instead we can use the index.css file where we define out utilities. We can use the @theme directive and inside of the curly brackets we can specify the class name using `--property-name :value;` . For example in the above case we can use like:

```javaScript
@import "tailwindcss";
@theme{
    --font-title: "Pacifico", cursive;
}
```

Here we are not specifying the font family anywhere because tailwind 4 has a concept called name space prefixes. When tailwind sees a variable with a particular prefix it will automatically map it to the corresponding css property. There are different prefixes such as:

1. `**--font-***`: Anything starting with this is registered as a **Font Family**.
2. `**--color-***`: Anything starting with this is registered as a **Color**.
3. `**--spacing-***`: Anything starting with this is registered as a **Spacing** value (padding, margin, etc.).  
   By this way we are directly writing css code so there is no translation for javascript to CSS. Also we can use these names as variables in normal css files, like `var(--font-title);`

Tailwind has a solution for media queries. In the official docs under responsive design we can see that there are certain prefixes that we can add to the utility classes to only apply them if you have a minimum screen width. For example if we add `md:` infront of this width class, this width class will be only applied to the medium class screens. We can set up default utility classes and and use these special prefixes for classes which should take effect based on the screen width.  
Similarly for pseudo selectors such as hover we have the `hover:` prefix. The class defined after this prefix will be applied only if the users hovers over the element. For each utility class that we want to apply the prefixes we should specify them separately.

To conditionally style the elements using tailwind we can setup the utility class names inside of a javascript string. We can then use if statement or ternary operator to check for conditions and add or modify the string. We can apply this variable to the `className `property of the component.

example:

```javaScript
export default function Input({ label, invalid, ...props }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
  if(invalid){
    labelClasses += ' text-red-400';
  } else{
    labelClasses + " text-stone=200"
  }
  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className="w-full px-3 py-2 leading-tight bg-stone-300 text-gray-700 border rounded shadow" {...props} />
    </p>
  );
}
```

Make sure that we add a leading space when appending classes to the variable.

We can also apply gradients using tailwind utility classes. For example we can use:  
`bg-gradient-to-b from-stone-700 to-stone-800`  
Will set a gradient from top to bottom with starting color of stone 700 and ending color of stone-800\. We can refer the official documentation for more details.  
We can set the `mx-auto` utility provided by tailwind to center an element horizontally.

When working with CSS we will end up with a lot of CSS classes for some elements. This means that is there more code to add to you JSX code. Tailwind works really well with react because we can create reusable utility components. The advantage of tailwind is that we don't need to really know CSS to use it. We can create applications rapidly because styling elements is fairly easy and quick with tailwind. We can also avoid style clashes between components because you don't define any CSS rule on your own. Tailwind is also highly configurable and customizable. But the disadvantages are that you will end up with relatively long class names. Any styling changes requires editing the JSX code. You might also end up with a lot of relatively smaller wrapper components which can be quite cumbersome at times.

Not all errors lead to error messages. You might also have logical errors in your code. Finding these logical errors are trickier because there will not be an error message. We should think logically and identify these errors and fix them. To identify the origin of these errors we can also use the developer tools of the browser. In the developer tools under sources we can see the folder structure of the project. We can open these files and view the JSX code that has been written in these files. Apart from this we can add break points by clicking on the line number. Once you add a breakpoint the code execution stops at that point when the control reaches that line. We can hover over variables to see the values at that point in time. With the step into button we can jump into a function that is about to be executed. With step outside function we can jump out of a function. The step over button allows us to go to the next statement in the file.

These allows us to walk through the code step by step and see how things are getting executed.

Apart from these react also have some features that helps you to identify errors in the development stage. This is called the strict mode. Usage of strict mode begins from the index.jsx file though you can also enable them for parts of your application. To add this we can simply import the StrictMode component from react. Like:  
`import {StrictMode} from "react";`

It is a component that is meant to be wrapped around other components. We can wrap our App component in the `StrictMode `component. StrictMode does some things in the backend to help us identify the problems in the application early on. The most important thing that it does is that it will run every component function twice. It only does this during development. When every component is executed twice to catch errors which impacts the UI when data is changed. It will not fix the problem or tell us what or where is the problem.

We can also install `React Developer Tools` extension for the browser to make the debugging of the react apps easier. After installing this you can see 2 new tabs in the browser devtools. The `profiler `is primarily used for finding and fixing performance issues in the react application. In the components tab we can see the components tree of the application. You can hover over the components to highlight them on the browser window. If you click on a component you can see more details about that component. You can see which all props a component accepts. You can edit the props and the changes will be reflected in the UI. If a component manages state we can also see that under the hooks section. We can also edit the state values here.

Consider the following scenario. If you have an paragraph, an input field and a button. When you enter a value in the field and click on the submit button you need to set the text in the paragraph to the entered text. For this in react we need to have 2 states. The first state for storing the value from every keystroke to a state, and the second state for determining weather the button was clicked or not for displaying the value. The code will look like:

```javaScript
import { useState } from "react";
 
export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  function handleChange(event){
    setEnteredPlayerName(event.target.value);
  }
  function handleClick(){
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
```

This component is an example for which we can simplify the logic by using refs.

Refs in react are values similar to that of state just as a variable that contains a value. But it is a special kind of value. It is managed by react in a special way. We can create such a value by using the `useRef `hook in react. This hook like all other hooks must be called inside of a component function. We can store this to a constant variable. We use the refs to connect with JSX elements. We can do so with a special prop called `ref `which is supported by all react components automatically. It takes a ref value. We can use this ref to access the underlying connected element. For all the refs created with useRef we need to first access the `current `property. From inside of the current property we can access the necessary values and methods exposed by that html element. For example consider the below code example:

```javaScript
import { useRef, useState } from "react";
 
export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
 
  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
```

In the above code we are using ref to get the value from the input element. When the button is clicked the state which stores the player name will be set. This value is displayed in the paragraph tag. This way we avoid the state updates on every keystroke, also we are using a single state. We don't need any additional state for checking if the button is clicked because when the button is clicked the value will be set to the state from the ref.

When using the above approach the inputs are not instantly reflected on the screen (because we are not using the `onChange `prop in the input). But this way is more efficient and leads to much leaner code.

As we have seen earlier react promotes writing declarative code instead of imperative code. This means that the developer is not responsible for directly manipulating the DOM. We let react do that. For example in the above example if we want to reset the input field after the value is set we can use like:  
`playerName.current.value="";`  
But the above is imperative code because we are setting the value of an element directly in DOM. This is a violation. But in this scenario it is acceptable because we are using it just clear the input, it is not connected to any other state objects, so there are no unnecessary side effects.  
NOTE: Be careful when using refs to read and manipulate all kinds of elements on the page, it is not the principle of react. But it can be useful in the scenarios like the above example.

There are a couple of differences between refs and states. If we try to output the value of the ref onto the element it won't work. Because when the component is rendered for the first time the connection through the ref prop will not take place, so the value of the reference will be undefined. In the next render cycle it will establish the connection between the field and we will be able to read the value. The main difference between ref and state is that in case of ref when the value changes the component is not re executed. But for state whenever the value of the state changes the component function is executed again.  
We should use states for value changes that should be directly reflected in the UI. You don't need to use state for values that are used behind the scenes and have no direct UI impact.

We can use refs to gain direct DOM access

For example you have a react component, it has a button and a couple of paragraph elements. When the user clicks on the button it should start a timer, the starting of the timer should be shown in the screen. Once the timer is started the text of the button should change to stop the timer. We can tackle the first issue with a state because when the data of the state changes the component will re render to display the changes. We can also use the click event of the button to set the state. But the problem becomes when we want to stop the timer when the user click on the stop button. The example code will look like:

```javaScript
import { useState } from "react";
 
export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimeout(() => setTimerExpired(true), targetTime * 1000);
        setTimerStarted(true);
    }

    return <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You Lost!</p>}
        <p className="challenge-time">{targetTime}s</p>
        <button onClick={handleStart}>{timerStarted ? "Stop" : "Start"} Challenge</button>
        <p className={timerStarted ? 'active' : undefined}>
            {timerStarted ? "Timer running..." : "Timer inactive"}
        </p>
    </section>
}
```

Javascript has a `clearTimeout()` function to clear timers, but it needs a pointer at that timer(the id of the timer). Such a pointer is returned by the `setTimeout()` method, we can store this in a variable. We can then pass this variable as the argument to the `clearTimeout()` function.  
If we use a variable in here and try to stop the timer function it will not work, because whenever the state of the component changes the component function re executes thus creating a new reference to the variable. To fix this we can place the variable definition outside of the component function. This will cause one additional problem, if there are multiple components (which uses the same function) which has the set timeout and clear timeout functions and we are placing the timer reference outside of the component function, the variable will be shared by the different instances of the component. This might lead to unexpected behavior because the previously set timer will be thrown away.

In this case instead of variables we can use refs to store the pointers to timer functions. We can use refs to manage any kind of values. We can set the timer pointer to the ref's current property. We can also clear the timeout with the current property of the timer. Since this is created inside of the component function this will be component instance specific. Every instance of the component will get it's own ref. But unlike the variables this reference will not be cleared when the component function re executes. React will store these ref values behind the scenes and make sure that they don't get lost as the component function re executes. The code will look like:

```javaScript
import { useState, useRef } from "react";
 
export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();
 
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }
 
  function handleStop() {
    clearTimeout(timer.current);
  }
 
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
    </section>
  );
}
```

This is another use case for refs. If you have a value that needs to be managed but it is not a state because it has no direct impact on the UI and we need to ensure that the value is not changed when the component is re executed, we can use refs.

In the native html we have the dialog element which can be used for creating components such as modals. Inside the modal if we use a form element with `method="dialog"` attribute and inside this form we create a button, then if we press that button the form will close. We don't need to use any extra javascript for this. Example:

```javaScript
export default function ResultModal({result, targetTime}){
    return <dialog className="result-modal" open>
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds</strong></p>
        <p>You stopped the timer with <strong>X seconds</strong> left</p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}
```

By default the dialog element is invisible. It can be made visible by setting the open prop to it.

We can also set the backdrop for the dialog element. But we cannot set the backdrop if we use the open prop with the dialog to force open the dialog. Instead we need to programmatically open the dialog with the help of javascript. We can refs for this also. We can pass refs as props to components. We can define the ref in the parent component and pass it to as prop to a child component, then in the child component we can set the ref for an element. In case of our dialog also we can do the same in the parent component we can define a ref and pass it to the component which have the dialog element. Then for the dialog element we can set the ref property. This way inside of the parent component we can call the showModal() method which is a method provided by the javascript to open the dialog. We can use like `dialogRef.current.showModal()` to open the modal. This method will show the modal on the screen.

If we are passing the open we needed to render the dialog component conditionally but this way we can render the component but it will not be visible, it will only be visible through the javascript method call. This will also have a nice backdrop which is provided automatically.  
Prior to React 19 we couldn't pass refs as regular props. For older versions if we needed to pass refs to a component we needed to use the `forwardRef() `function which is provided by react. We then needed to wrap our component function in this function. This function will return the adjusted version of this component which should be stored in a constant with the same name as the component. You will then need to export the adjusted component. The component function which was wrapped in `forwardRef()` will now automatically receive a prop apart from the props we have defined. This is the ref prop. The component in the above example will now look like:

```javaScript
import { forwardRef } from "react";
const ResultModal = forwardRef( function ResultModal({result, targetTime}, ref){
    return <dialog ref={ref} className="result-modal">
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds</strong></p>
        <p>You stopped the timer with <strong>X seconds</strong> left</p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
});
 
export default ResultModal;
```

This approach is not required for react versions greater than 19.

In the previous approach when we forwarded refs has a small potential flaw. The problem with that is because the entire parent component needs to know if the ref is attached to the child element. For smaller projects this is not a problem. For bigger react projects components will be written by multiple developers. Therefore it might be preferrable to build the child component such that it exposes it's own function with out the help of a ref outside of that component (Though technically we use ref the child controls what is shared). We can call this function from parent element instead of exposing the internal reference object for various operations. This is achieved by a special hook which we use in the component which want's to expose such a function(child component). It is the `useImperativeHandle `hook. We can call this hook in the component which want's to expose such a function to define properties and methods defined on this component from outside this component.

We don't use this hook quite often, and in most cases we use only props. This hook requires 2 arguments, the first one is a ref object. For versions later than React 19 we can use the ref prop which comes as argument for the component function as argument to this method. Incase if we use the `forwardRef `we can use the ref object coming as the argument. The second argument is a function that returns an object which groups all the properties and methods exposed by that component to other components. The naming of these are up to the users. The idea behind this approach is to detach the ref from outside of the component, so we need to use the `useRef `hook internally for the component. We use this ref as prop to the element which we want to reference. Inside the method of the imperative hook we can create a function which will access or modify the element. Here the parent never directly access the internal ref of the child. It only calls methods you explicitly expose.

**This creates clear separation of concerns and prevents accidental misuse**. In the parent object we will call this method to modify the element. The example code will look like:

```javaScript
import ResultModal from "./ResultModal";
export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timer = useRef();
    const dialog = useRef();
    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);
        setTimerStarted(true);
    }
.....
return <>
        <ResultModal ref={dialog} targetTime={targetTime} result={"lost"} />
        <section className="challenge">
.......</>;
```

And in the child component:

```javaScript
import { useImperativeHandle, useRef } from "react"
 
export default function ResultModal({result, targetTime, ref}){
    const dialog = useRef();
 
    useImperativeHandle(ref, ()=>{
         return{
            open: () => {
                dialog.current.showModal();
            }
        }
    });
    return <dialog ref={dialog} className="result-modal">
......
</dialog>;
```

Here the ref defined in the parent component which is passed as prop to the child component. In the child component it's own ref is connected with the prop with the help of `useImperative `hook. Inside of the hook we call the method on the internal ref object.

Portals allows us to place the elements in the component to placed in a different location in the dom. In some cases some components are deeply nested inside of the dom. We might need to change the position of these for accessibility reasons.  
For using this we should import the `createPortal `function from the `react-dom` module. The `react-dom` module acts as bridge betweeen react and DOM. The createPortal() method takes in 2 arguments, the first is the jsx code that needs to be placed somewhere in the dom. And the second one is an html element to which the code needs to be placed, we need to use an element selector or id selector and place it as the second argument. We can use the `document `api provided by javascript to use methods like `getElementById`, `getElementsByClassName `etc. The return of the component should return a `createPoral `function with the above mentioned arguments. This is similar to the main.jsx file where we can see that the it imports the `ReactDom `module from `reat-dom`

On the `ReactDom `we are calling the `createRoot()` method which has the position inside of the html where the react components should be rendered. The functionalities of the component does not change even if the rendering position of the component changes.

**NOTE**: The document selector selects the actual html element in the real dom.

The example code will look like:

```javaScript
import { useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";
 
export default function ResultModal({ targetTime, remainingTime, onReset, ref }) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            }
        }
    });
 
    return createPortal(<dialog ref={dialog} className="result-modal" onClose={onReset}>
    ........
 
    </dialog>, document.getElementById("modal"));
}
```

Portals are suitable for use cases like the above where we need to render the elements in a different place other than the place it is defined.

We can use \[\] to specify custom values for tailwind classes. For example:  
`w-[35rem]` will set the width to 35rem. Tailwind will generate this class for you.

Prop Drilling is the process of sending props through multiple layer of components. The intermediary components may not necessarily need the prop, they just forward the prop to the child component.

If you have an input field which is binded to a state and if you define the state like:  
` const [enteredTask, setEnteredTask] = useState();`

Initially the value of the state will be undefined. So whenever the user enters the value in the input field it suddenly changes to string value. React will throw a warning like:  
`A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component`

To avoid this warning we should initialize the state as an empty string.

The more complex your app, the more components you will use. These components are structured in a component tree. In most cases you might need to manage states, we might need to lift the states up so that the state can be shared between components such that the state defined in a component might be updated by another component. We used props to share these states and update these states. If your application is complex you might need to pass these props through multiple layers of components, which is called **prop drilling**. In most cases the child components may not actually don't need the state data but are simply passing it further down the component tree. This can be a problem because it makes these components less re usable. The components which requires the state must be placed in parts of the component tree where it can access the state. This also means that you will need to write a lot of boiler plate code.

One possible way to fix this problem is to embrace **component composition**. This is part of a solution but we might need to do some additional things in most cases. For example if we have a shop component which is the child of the app component. The shop component has a child which is the product component. We have a function in the app component which will add the item to the cart called `handleAddItemToCart `(because the state is managed in the app component). We need to pass the this function pointer as prop to the shop component and then later to the product component. We can modify the app component such that we can directly move the product component into the app component by wrapping it inside of the shop component. This way the product component can directly access the `handleAddItemToCart `method. Inside the shop component we should accept the children prop and place the children where the product component was. The code will look like:

```javaScript
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={handleAddItemToCart} />
          </li>
        ))}
      </Shop>
```

The above code should be placed in the app component. Then the below code will be inside the shop component:

```javaScript
export default function Shop({ }) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      <ul id="products">
        {children}
      </ul>
    </section>
  );
}
```

This way we are embracing component composition and we are using the shop component to wrap around the list of products and we were able to get rid of one layer of component nesting thus removing part of the prop drilling problem.  
The down side of the above approach is that you typically don't want to use this approach for all your component layers. If you do so all the components and it's code will end up in your app component.

A more elegant way of solving the prop drilling problem is to use the **React's Context API**. Context API is built into react. It makes sharing data across components and component layers easy. The idea behind the context api in react is that you create a context value and you provide that value that you wrap this context around multiple components, possibly around all components of your app. The great thing about the context value that you provide to multiple components is that it can be easily connected to states. We can connect the react state to the context value. This way we can get rid of all the props. The context value which is linked to state is provided to all components of our application. The components that needs access or need to modify the state can directly react out to the context and that state.

It is a common convention to create a folder called `store `inside of the src folder to store the files which has the context values. Inside this folder. Inside this folder we can create jsx files with any name. We can create a context value by using the `createContext `function from react. When you call the function it will create a context value for you. We can store it in a constant variable. When naming this variable we must follow the react components naming convention, because the `createContext `function will return a react component. We can pass the initial value as argument to this function. We can use any type of values for this. After doing these we must provide the context to the application. For this we must export the context variable which was created using the `createContext `method. The code will look like:

```javaScript
import { createContext } from "react";
 
export const CardContext = createContext({
    items: [],
});
```

After the above step we should go to the app.jsx file which has the app component which wraps all other components. We can then import the context object which was exported from the file in store to the App.jsx file. We should wrap the all the components which requires the context value with the exported variable name(component). In our case the code will look like:

```javaScript
import { CartContext } from './store/shopping-cart-context.jsx';
............
<CartContext>
      <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={handleAddItemToCart} />
          </li>
        ))}
      </Shop>
    </CartContext>
```

Using a context value to wrap around components will work if we are using React 19 or above. But this will not work with older versions of react.

In the older versions we must access the Provider property to wrap around the components. In other words we should wrap the components which wants to use the context should be wrapped with the `ContextName.Provider`. In our case we can use like:

`<CartContext.Provider>....</CartContext.Provider>`

This approach will also work for React 19\. Here what we are doing is accessing a property from the object. This property holds a react component so we can access it like this. The value stored inside the context will be accessible but the values are created by react.  
The above steps shows how we can provide a context, the next step is to consume the context.

For consuming the context we must import the context object that we have created inside of the file in the store folder to where we must consume the context. To get a hold of the values inside of the context we must use 2 react hooks. The first one is `useContext `which let's us consume the context. We would use this hook by calling it inside of the component function where we are consuming the context. to this hook we must pass our context object as an argument. We will get a value back from the useContext() method which we can store in a constant or variable object. This variable will be used to get a hold of the values inside of the context.

This is one way of getting a hold of values inside of the context. There is also an alternative way. For this we can use the `use `hook from react. It is used in the same way as `useContext`. The `use `hook is a bit more flexible than the `useContext `hook. The `use `hook allows us to wrap it inside of blocks inside of the component(if block). Whereas normally you are not allowed to use react hooks inside of if blocks and for loops. But the `use `hook is only available in React 19 and above. In older versions we should use the `useContext `hook. The `useContext `hook is available in react 19 and above also.

After getting the context using any of the above methods we can access the value stored inside of the context using the . operator. The code will look like:

```javaScript
import {useContext} from "react";
import { CartContext } from "../store/shopping-cart-context";
.......
const cartCtx = useContext(CartContext);
  const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
```

After doing the above steps when we try to run the application we will get an error like:

``The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?``  
Even though we have initialized the value inside of the context, this value will be used only if a component which was not wrapped by the provider component tries to access the context value. To fix the issue we must pass a value prop when wrapping other components with the context object. Inside of the value prop we must pass the value which was initialized in the context file. So the correct way is:

```javaScript
<CartContext value={{items:[]}}>
.......
</CartContext>
```

This will fix the error.

We initialized the value inside of the context file to get better auto completion.  
We can also de-structure the value from the value returned from the `useContext `hook. Which means that:  
`const {items} = useContext(CartContext); `  
Is also valid. This way we don't need to use the context object to access the value inside of it. So we can use like:

```javaScript
const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
```

After this the next step is to connect the context with the state. We can create a state in our app component and initialize it as the same structure of the context value. Then, when we pass this state as the value prop for the context provider. Like:

```javaScript
function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });
......
<CartContext value={shoppingCart}>
.......
</CartContext>
```

This way we can link the context to the state. This way we can only read the state from context, for editing the state through context does not work yet. We should also be able to edit the state through context. We can also pass functions to context object. For example if we want to add items to the cart we need a function to add items to the state. For this we can create a function and set it as a property to the context. The code will look like:

```javaScript
  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart
  }
  return (
    <CartContext value={ctxValue}>
```

To get better auto completion we can add an empty arrow function of the same name to the context in the store. Like:

```javaScript
import { createContext } from "react";
 
export const CartContext = createContext({
    items: [],
    addItemToCart: ()=>{}
});
```

To use the value from the context we can import the context and the `useContext `hook in the file where we want to use. Then we can de-structure the required function and objects from the context, by passing the context name to the `useContext`. In our case:

```javaScript
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
...........
const { addItemToCart } = useContext(CartContext);
```

This way we can completely avoid using props to modify the state.

The `useContext `hook is the standard way to get data from the context. But there is also an alternative to this. We can use the `ContextObject.Consumer `component to wrap the component's JSX which needs to access data. It requires a special type of child which is a javascript function that is passed between the opening and closing tags. This function will be executed by react. This function will automatically receive the context object as a parameter. In the functions return we should return the JSX elements of the component. The context object that we automatically get as the argument to the function can be accessed in this JSX code. This way we can avoid the usage of `useContext `hook where we are consuming the data from the context. This approach is a little bit cumbersome and harder to read so this is not the default way which we should use to consume data from the context.

When you access a context value in a component and if that value changes, then that component function that accesses the value will get re executed by react as it is using some internal state that was updated or if it's parent component gets executed again. Just as a component function gets re executed by react in such situations it also re executes the components where the components use the `useContext `hook. That is which all components that have access to the context they are all re executed when the value in the context is changed.

You should separate the functions which modifies the state from the App component to make it more lean. There is an alternate react pattern we handle all the context related operations to separate context component. We have created a JSX file in the store to create a context. Inside this file we can create functions and share it. In our case we can create a `CartComponentProvider `function and export it. The name can be chosen according to your wish. The idea behind this is to manage all the state related and context related code to this function. We can place all the code which creates the state, all the operations on the state till where we construct the context value. From this function we must return the Context.Provider component. In our case we should return the `CartContext.Provider`.

Along with that we should set the value prop to the context value that we have constructed. Since this component is being wrapped around other components, we should accept the children prop to the function and pass it along to the component that is being returned from the function. In the App.jsx we should import the context provider function instead of the context object. The Function will look like:

```javaScript
export default function CartContextProvider({children}) {
    const [shoppingCart, setShoppingCart] = useState({
        items: [],
    });
 
    function handleAddItemToCart(id) {
        .....
    }
 
    function handleUpdateCartItemQuantity(productId, amount) {
        .....
    }
    const ctxValue = {
        items: shoppingCart.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
    }
    return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
}
```

The App.jsx will look like:

```javaScript
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import CartContextProvider from './store/shopping-cart-context.jsx';
function App() {
 
  return (
    <CartContextProvider>
      <Header/>
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}
 
export default App;
```

Now the entire App.jsx code became much more leaner and cleaner.  
**NOTE**: You should wrap the JSX code returned from App.jsx inside of parenthesis if it spans across multiple lines.

When building complex applications context can be powerful feature. But the functions that update the state can get complex and may be harder to read. When handling complex states such as objects and arrays we will need to update the state based on the previous state by passing functions to the setState method. Instead of using the `useState `hook for creating and managing state we can use another hook provided by react which is `useReducer()`. A reducer is a function reduces one or more complex values to a simpler one. There is also a built in reduce method in javascript which can be used on arrays which let's us perform operations on it and return the result as a single value. The idea behind the useReducer hook is the same as the reduce method, which is to transform one or more complex value to a simpler one for state management purpose. To use this first we need to import it from react. Inside of the react component we will execute the `useReducer `hook just like other hooks in react.

It will give you an array with exactly 2 elements The first element is the state, the second value will be a `dispatch `function which allows you to dispatch actions which will be handled by a to be defined reducer function. We can provide any name to to dispatch function. We need to define the reducer function that will get triggered by dispatching values and it will then produce a new state. We should define the reducer function outside of the component function because it should not be re created when the component function executes. Also, it don't need direct access to the values defined or updated in the component function. The reducer function should accept 2 parameters a `state `parameter and an `action `parameter. The function will be executed by react when you dispatch an action. The action you dispatch with the dispatch function will be action you receive on the reducer function.

The state we get in the reducer function will be the latest state snapshot of the state managed by `useReducer`. From the reducer function you should return the updated state. We need to connect the reducer function function with the `useReducer `hook, to achieve this you will pass a pointer as a first argument to `useReducer`. The second value let's you set an initial value for the state which will be used when the state was never been updated yet.  
The code will now look like:

```javaScript
function shoppingCartReducer(state, action){
    return state;
}
export default function CartContextProvider({children}) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
        items: [],
    });
....
```

After this we can use this state variable inside of the component function to access the state. This will set the shopping cart items to an empty array which is defined in the useReducer.

To update this state we have to update the reducer function and handle different actions that leads to different state updates. To trigger an action we should call the dispatch function. When calling the dispatch function we can pass type of arguments. In most cases we pass an object with a `type `or `identifier `key which helps you to call different actions and handle them differently inside of your reducer function. The value of the type can be any identifier of your choice but commonly we used to specify the actions inside of quotes in capital letters separated by underscores. This action also has some data attached to it which will be required to perform the action. We can pass this as a second property to the object. The property name can also be any name of your choice. Often this is called `payload`. In the reducer we will automatically get the object which was passed through the dispatcher call. Inside of the reducer function we can check the type (or any other identifier used)

and update the state accordingly. If we there are more actions we can add more if checks. We can extract the additional data passed through the dispatcher call from the action key of the reducer function. After performing the required action we should return the updated state. Even though the length of the code is not reduced the actions are defined outside of the component function. Also we will get the latest state in the previous function automatically. The code will look like:

```javaScript
function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: "ADD_ITEM",
            payload: id,
        });
    }
```

The dispatcher call will look like above and the reducer method will look like:

```javaScript
function shoppingCartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const updatedItems = [...state.items];
 
        ...........
        }
 
        return {
            items: updatedItems,
        };
    }
    return state;
}
```

We should not modify the state data directly instead we should copy the data into a variable and modify it from there.  
You can also use the `useReducer `hook in other components independent of the context hook.

Side effects are tasks that need to be executed in your application in order for the app to work correctly but tasks that don't impact the current component render cycle. For example if you have a list of tourist places and you want to sort the places according to the distance from your current location. For this we need to get the user's location as soon as possible, so for that we can place it inside of the app component. We can use the `navigator `object exposed by the browser to our javascript code. This globally available object has a `geolocation `object which has a `getCurrentPosition()` method which we can call to get the current position of the user of the website. When you call this method the user will be asked to allow the location permission, once the permission is granted it will fetch the location. Fetching the position can take some time, so for this method it needs a callback function as argument which will be executed by the browser once the location can be fetched.

The callback will automatically receive a `position `object from which we can extract the `latitude `and `longitude`. The latitude and longitude are nested inside the `coords `object which we need to extract using the `.` operator. The code will look like:

```javaScript
  navigator.geolocation.getCurrentPosition((position) => {
    const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);
  });
```

This entire code is actually a side effect because this code is needed by the application, but it is not directly related to the main goal of the component function it is placed in. The responsibility of each component in react is to render JSX code. We don't need the user's location to display JSX code. Also the above code does not finish instantly. The callback function will be called in some point in the future where the app component might have probably finished the execution.

It is not necessarily a problem if you have side effect in your component. But it will be a problem in the above case because as soon as we get the sorted places we need to display them on the screen. By the time we have the available places the component render cycle might have finished. We can use a state to store the available places. We can set this state as soon as we have obtained the sorted places. When the state is updated with the sorted place, it will trigger a re render of the component. Even though this is a good solution, it has a flaw, because it will cause an infinite loop. This is because we are updating the state it will ask react to re render the component function which the state belongs to. When this happens it will again fetch the user's location again and reset the state. This becomes an infinite loop and crash our application.

We can use the react's `useEffect()` hook to solve the above problem. For using this we need to import it from react. Like all hooks it also should be executed inside of the component function. The useEffect hook does not return a value, instead it needs 2 arguments. The first argument is a function that wraps the side effect code. The second argument is an array of dependencies of that effect function. For now we can pass an empty array and the code will look like:

```javaScript
useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);
      setAvailablePlaces(sortedPlaces);
    });
  }, []);
```

This will fix the infinite loop problem.  
The idea behind `useEffect `is that the function we passed as argument will be executed by react after component function has been executed.

That is the component function will be executed and display the JSX code in the browser, after this only the function passed in the `useEffect `will be executed. Here when we update the state the component function will be executed again, so theoretically we might assume that the same infinite loop situation will repeat, but here is the part played by the dependency array. If you define these dependencies array, then react will take a look at the dependency array and the dependencies specified there, and it will only execute the function specified in the first argument only if the dependency value is changed. If we pass an empty array, those dependencies cannot change. Therefore react actually never re execute this effect function, it will only execute it once after the component function is executed for the first time. If you omit the dependency array the effect function will execute on every component render cycle and it will cause an infinite loop.

`useEffect `like other react hooks must be used in the root level of the component function. Not all side effects requires the use of `useEffect `because over using of use effect and using it un necessarily is considered a bad practice because it is another execution cycle for the component. For example if we want to store some data into the `localStorage`. The storing of data into the local storage is also a side effect because it has no direct implication to the JSX code which is displayed by the component. Consider the below function:

```javaScript
 function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
    ........
    });
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
    }
  }
```

In the above code which writes the data into the local storage there is no state updating logic after the item is stored.

Even if we are updating any state after the storage it will not create an infinite loop because it is inside of a function that is triggered once the it is called. If we are calling the function conditionally like based on a button click there is no need to use the `useEffect `hook.  
**NOTE**: We only need the useEffect hook to avoid infinite loops or you have code that can only run after the component code is executed at least once.

Another example would be the the retrieval of items from the `localStorage`. We might assume that we need to use the `useEffect `hook to load the data from the `localStorage`. For example:

```javaScript
  useEffect(()=>{
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    const storedPlaces = storedPlaces.map((id)=> AVAILABLE_PLACES.find((place)=>place.id === id));
 
    setPickedPlaces(storedPlaces);
  },[])
```

In the above code the usage of `useEffect `is redundant, because the operations performed inside of the callback function is synchronous unlike the operations such as getting the current location. It will finish the execution instantly. It will execute line by line, once a line finishes execution it is done and we will have the final result. This was not in the case of fetching the location.

In this case we can fetch the data from the local storage before state initialization and store the fetched value as the initial state value to be precise we can place the data fetching to outside of the function so that the data is loaded only once when the application starts.

For use cases where we can use the `useEffect `hook, we have seen the use of `useRef `and `useImperativeHandle` hooks to expose the opening and closing of Modals/dialogues. We can avoid the use of these and we can use a state variable to control the opening and closing of the modal. In the parent component of the modal we can define a state to indicate weather the modal is open or closed and where ever we are opening the modal using the refs we can update the state variable using the setState. We can then pass this state as prop to the modal component. Inside of the modal component for the `dialogue `element we can set the `open `prop and set the value which is passed from the parent component. But this approach has a problem even though we will be able to display the dialogue it will not show the backdrop. dialogue element will only show the backdrop if we use the` showModal()` function. We can fix this issue with the help of `useEffect()` hook.

We can try to open the modal by checking the prop passed to it from the parent. If the prop value is true we can show the modal using the `showModal()` method, otherwise we can call the `close()` method. We will get an error if we do so which is:  
`Uncaught TypeError: Cannot read properties of undefined (reading 'close')`

This is because the connection between the ref and the element will not be established because when we are trying to call the function on a ref, the JSX code associated with the element will not be executed yet, so the ref will be undefined initially. This is where we can use useEffect. useEffect can help you synchronize prop values/state values to DOM API's like `showModal()` and `close()`. As we learned earlier the callback function in the useEffect will be executed right after the component function is executed. Due to this the connection between the element and ref will be established.

This can be thought of as side effect, because it will have an impact on the UI but it does not have an impact on the JSX code immediately. We can wrap the code in useEffect but this time we must use the dependency array.

Dependencies in the end are prop or state values that are used inside of the useEffect's callback function. Any value that causes the component function to execute again is a dependency if it used inside of useEffect. `useEffect `only considers values as dependencies which causes the component function to execute again. For example consider the below code :

```javaScript
useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);
```

Here if we don't pass the open prop as a dependency the modal will not work because the effect function is not executing again. In the above code the function will execute again if the value of the open prop changes.

Apart from the features that are mentioned earlier `useEffect `has also one additional feature. For this, consider the below component.

```javaScript
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
```

This is the content which we placed inside of the modal which ask the user for a confirmation.

For example if we want to automatically take the user's confirmation after a timeout when the modal is open we can use the `setTimeout()` function provided by the javascript. It takes in 2 arguments the first one is a callback function and the second one is the time in milliseconds to trigger the callback when the time is expired. We can call the `onConfirm()` method which we have already defined to close the modal. Currently this component is always being rendered, so we should make it render conditionally by checking if the modal is open or not. So the timer we have defined will fire automatically when the component is rendered for the first time.  
This approach also have a problem because when a user click on an image it will show the modal which asks the user for confirmation on deletion.

During this timer will be set which will automatically trigger delete. But if the user performs the delete manually the timer is not stopped. If the user confirms the option the item will be deleted, but if the user cancels the operation the item will still be removed because the timeout function is not stopped. This problem can be fixed with `useEffect`. In this case the problem was not setting the timer but clearing it when the component function disappears. In `useEffect `we can also define a clean up function which should be executed right before the effect function runs again. We run a clean up function by returning it from the callback function of `useEffect`. This means that we will be returning another function which will be executed by react right before the effect function runs again or right before the component is removed from DOM. We can use this clean up function to stop the timer.

The clean up function will also run if the effect function runs again, then the cleanup function runs right before the effect function runs. The code will look like:

```javaScript
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);
    return ()=>{
      clearTimeout(timer);
    }
  }, []);
```

The clean up function will not run before effect function if the effect function is executing for the first time.

If we are getting a function as prop we should just point at them in the dependency array. If you have multiple dependencies you should separate them with ,. There is a problem when adding functions as dependencies to the `useEffect`, there is a danger of creating an infinite loop. Because when you add a dependency to the dependency array we are telling react that this effect function should be executed when the component function and the dependency value is changed. If the dependency passed is a variable like a number, string or boolean the function will re execute when dependency value is changed. When the dependency is a function it is a bit more trickier because you could say that the code in the function which is defined never changes, technically this assumption is not correct. Because functions in javascript are just values (objects). The function which is defined in a component will be re created when the component function is re executed.

In javascript even if they have the same value two objects are never the same. React compares the two values of the dependency array using the equality operator and determines whether to re execute the effect function. Due to this the function pointer which we pass to the dependency array will be different between the render cycles. This causes the effect function to re execute when re rendering happens even though dependency is not changed. In the above example the infinite loop will not happen because when the onConfirm method is called a state update is triggered and the component itself is removed from dom. There is a safer way which we can use to avoid the problem.

It is by the use of `useCallback `hook provided by react. This hook ensures that the function is not re created all the time. The idea behind this hook is that we wrap it around a function. We pass the function as the first argument to this hook. For the second argument we need an array of dependencies. The `useCallback `hook returns a value, specifically the function which you have wrapped but now it is not recreated if the surrounding component is re executed. This function which we have passed is stored inside of the memory and re used when the component function is executed again. The example will look like:

```javaScript
import {useCallback} from "react";
........
const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false);
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter(id => id !== selectedPlace.current)));
  }, []);
......
<Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        {modalIsOpen &&
          <DeleteConfirmation
            onCancel={handleStopRemovePlace}
            onConfirm={handleRemovePlace}
          />}
      </Modal>
```

In the Delete confirmation component we can use it like:

```javaScript
import { useEffect } from "react";
 
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);
    return ()=>{
      clearTimeout(timer);
    }
  }, [onConfirm]);
  return (
.....);
```

There is one more thing we need to do when using `useCallback `that is to set the dependency array. We should add any prop or state values that are used inside of the wrapped function. A general rule of thumb is that we should include any value that the callback uses and can change over time. It is also fine if we pass it as an empty array if there are no such values.

Consider another example for the cleanup function. We had previously seen the implementation of the automatic deletion feature when the modal is opened. We can show a progress bar which indicates that the timer is running and the given item will be deleted after 3 second timer is expired. We can use the `progress `html element inside of the delete confirmation component. To indicate the progress we should manage a state and control the re rendering of the component to show the progress on the screen. For this we can use the `setIntervalFunction` which is provided by javascript. The setInterval takes in a function as the first argument and time in milliseconds as the second argument. The function we passed will be executed again and again after the specified time. We can initialize the state as the total time for the value to be deleted automatically. We can then use the set interval function to reduce 10 milliseconds from the state every 10 milli seconds.

We can use the state variable as value for the value prop for progress element. We should also pass the `max `value so that the browser can automatically calculate and display the progress. This will cause an infinite loop problem which we have seen earlier, so we should wrap it inside of the `useEffect `and use a clean up function. The code will look like:

```javaScript
import { useEffect, useState } from "react";
const TIMER = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        return prevTime - 10;
      })
    }, 10);
    return ()=>{
      clearInterval(interval);
    }
  }, []);
  useEffect(() => {
  .....
  }, [onConfirm]);
  return (
    <div id="delete-confirmation">
       ............
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
```

The above code is not optimal because every 10 milli seconds the component is re rendered to show the progress bar. Even though it works and does not show any issue on a modern computer this is not optimal. To optimize this we can outsource the progress bar to a separate component so that only one component is re rendered.

The `sort `function in javascript is used to sort elements in an array. It takes a function as argument. This function will automatically receive 2 elements as argument. If we are returning a negative number they will be swapped, but if we are returning a positive number their order will remain the same. If we want to shuffle the sorting we can use the `Math.random()` function which returns a value between 0 and 1 and if we subtract 0.5 from that we will have a 50% chance of getting a +ve number and 50% chance of getting a -ve number.

In the dependency array of hooks like `useEffect `and `useCallback `if there are are state updating function we don't need to pass the state as dependency because react will guarantee that they never change.

You can add a `key `prop to any component because it is a prop that react is looking for. Whenever the key prop changes react will destroy the old component and create a new one. Basically it will unmount and re mount the component. We can use this approach to update components in the UI. You must not create 2 components with the same key. Each key must be unique for each component. Using the same key for different components tells React they're the same logical element, which causes unnecessary unmounting/remounting and state loss. We can also de structure the key prop and use it in our child component, but we should not use the `key `as prop name in the child component, because it is reserved for react. We should use a different name for accepting the key and using it in the child component. Eg:

```javaScript
<Questions
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAnswer={skipAnswer}
      />
```

We can use the index prop in the Questions child component.

In some cases if there are multiple states inside of a component and the change of a state may cause un expected behavior to the component when that state changes. To solve this we may use the `useEffect `hook and control the re rendering of the component. But as a react developer you should minimize the use of `useEffect `as often time you might misuse it. It is a good practice to avoid the usage of `useEffect `whenever possible. To fix the above scenario we can use `refs `instead of state because the change of the ref value will not cause re execution to the component.

Rendering a component means that executing all the code inside of a component function. Every component must return something that can be rendered typically JSX code. This JSX code is in the end translated to javascript code and translated to actual elements that are shown on the screen. If you have custom components inside of the JSX code react will go ahead and execute those functions from top to bottom. For every application react will generate a component tree like this. For every app the App component is the root element in the render tree and the other components which is rendered inside of it is placed as children to this component. When the parent component is executed if it have children and the if the children have props those props will be passed to child component. Re-renders happen when state or props change, not just on the initial render. So the component function executes again, and React compares the new output with the previous one to update the DOM efficiently.

The profiler tab of react dev tools shows which component is being rendered and which components are being updated on which circumstances. We can click on the start profiling button and interact with the application. After this we can click on stop profiling button which will show the components that has been rendered between the start and stop. The flamegraph chart show the components by the order of their execution along with the relation between component function. It will also show the components that did not re render.  
When we switch to the ranked chart mode we can see only the components that were re rendered. It will also show the components which caused the re render cycle. The root element will be shown at the top and it's nested child elements will be shown below it.  
You can also go to the settings and under profiler enable the option to show why each component re rendered.

Previously we have used the `onChange `event on the input fields to listen to the keystrokes and set the state which holds the input data. This way when ever the user enters the input the state will be set which causes the component to re render. If the component also have children it will also re render. Re rendering happens because the component functions are re re executed. If this does not have an impact on the DOM and we want to avoid the un necessary re rendering of components react provides a built in function called `memo `which can be imported from react. After importing it we can pass our component function definitions as argument to the memo function. It returns a component which should be exported instead of the component function which we usually do. The example will look like:

```javaScript
import { useState, memo } from 'react';
 
const Counter = memo(function Counter({ initialCount }) {
  log('<Counter /> rendered', 1);
  const initialCountIsPrime = isPrime(initialCount);
 
  const [counter, setCounter] = useState(initialCount);
 
  function handleDecrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }
 
  function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
  }
 
  return (
 
.........
  );
});
 
export default Counter;
```

What memo will do is that it will take a look at the props of your component function, when the component function would normally execute again, it will compare the old prop value and new prop value. If both these values are the same the execution of the function will be prevented by memo. It will only execute the component if the prop value change or the internal state change.

**NOTE :**`memo `only blocks the component function re executions triggered by the execution of parent component. memo doesn't consider internal changes for the component such as state change. You should not over use memo. Never wrap all your component functions as memo. Whenever the use of memo is absolutely necessary use them as high up in the component tree as possible. If we do so all the nested components execution will be also blocked. When we memoize a component function react checks the props, when you do this for all the components react will always have to check the props which will have a significant impact on the performance. We also should not memoize component functions which will have frequent prop changes. This is meaningless and will impact the performance.

When we are passing functions as props to components which is memoized we should wrap those functions with `useCallback `hook because other wise every time the component function of the parent component executes the function will also change thus triggering re render of the memoized component.

A better way than using memo is to adjust the component composition. For components which changes it's states frequently we can create separate components so that the separate component will only re render instead of the whole component which was the previous case. If the state in the child component changes the parent component is not re rendered. This is a much better approach.

We can use the `useMemo()` hook to prevent the re execution of functions inside of a component. This hook prevents the re execution of functions inside of a component function unless the arguments(dependencies) to the function changes. It memoizes the return value so that it will return the same result every time unless the dependency changes. The `useMemo `hook should only be used if you have a complex calculation which you want to prevent the re execution un necessarily. To use this we need to pass a callback function to the `useMemo `hook. This callback function will call the function which will execute and return the result. It also requires a dependency array as the second argument. The idea behind use memo is that react will execute the function which was passed in the anonymous function and store the result. It will only re execute the function if any of the values in the dependency array changes.

If you have an empty dependency array the function will never re execute. You should pass the arguments of the function as dependency. For example:

```javaScript
import {useMemo} from "react";
......
  const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);
```

In the above example code we used the `useMemo `hook to memoize the result of `isPrime `function. If the `initialCount `is changed then only it will re execute the isPrime method and calculate the result.

You should not over use `useMemo`. You should not wrap all your functions inside of `useMemo()`. Use it only if the functions are computationally expensive and takes time to run and the results will not change unless the parameters to the function changes(same inputs=same outputs). If you have a normal function which needs to be executed when the the component re renders don't use `useMemo`. Use it to optimize the performance where there is actually a performance bottle neck.

Just because a component function is re executed doesn't means that all the code returned by the component is re inserted into the DOM. You can see this by opening the dev tools of the browser. When you interact with the page the elements which change will flash. React works with the help of virtual DOM to find out which parts of the actual DOM need to be updated. The virtual DOM is a snapshot of the real DOM which resides only in the memory. Working with the virtual DOM is faster than working in the real DOM. React creates a component tree and derives the html code to be rendered. Then it creates a virtual DOM snapshot, it is a representation how the real DOM should look like. Whenever a change happens in the page react compares the new snapshot that is generated to the old snapshot that is present. In the initial loading since there is no old snapshot it places the new snap shot as the real DOM. i.e, the entire virtual DOM is inserted to real DOM.

When a change happens it recreates the component tree and derives the updated html code for the entire component tree. It compares the newly generated code (snapshot) with the old code(snapshot) which happens in the memory. It then determines which parts of the code needs to updated, then as a next step react goes ahead and apply those changes to the real DOM(only those changes, nothing else).  
**NOTE:** Just because a component function is re executed doesn't mean that all the code returned by that component is replaced by react. All the real DOM operations are performance intensive and react tries to minimize it as much as possible.

The state you registered in a component is scoped to that component and it is recreated whenever you re use the component. This is what makes components re usable. We can create multiple instances of the component and use them in our application. The states of these components will be independent and works separately. State is tracked by the component type, the component's position in the component tree and key if provided. When there are multiple sibling components of the same type and each has it's own state, if a state change triggers a position change for a component the component there are chances of state inconsistencies. React forces you to add a key prop to these type of components such as list items because key is one of the things that is taken into account to map a state to a component. When you are working with states like this try to use objects to store the values, also use unique id's for each value so that each change can be properly tracked and applied.

This way the state change moves with the item. The key prop helps to identify components when there is a dynamic list of similar components. If you don't use a key for sibling elements react may re render all sibling elements un necessarily, also the component state can get mixed up because react relies on position rather than identity. Also the input, focus, animations etc can behave unexpectedly. When you use a unique key only the required elements are updated and all the above mentioned problems are avoided. Usage of keys for items such as lists makes react render items such as lists in a more optimal way.

We can use the key prop to re render the components whenever the key changes. When the key of a component changes react will throw away the old component instance and re create it. This method can be used if a state in a component can change that should lead to some change in child component.

When you call a state updating function the state update will be scheduled by react. It will not be executed instantly. If you try to access the value of the state right after updating the state you might not get the new state value instantly. When we call the state update function it will trigger a new component function execution and when the component function is executed again the new value will be available inside of the state. When your state update depends on the previous state it is recommended to use the function form for updating the state. The function you pass to the state updating function will automatically get the previous state as the argument and it will return the new state. When using this method react guarantees you that you will get the latest snapshot of the state available. And if multiple updates of the same type should be scheduled they will executed in the order they were scheduled and you will always get the right value in state.

If you have multiple state updates that are triggered simultaneously inside of the component function, you will not end up with multiple component function executions. This is because react also performs state batching which means that multiple state updates that are triggered from the same function are batched together and will only need one component execution.

We can use the `Million.js` package to optimize the performance of react applications. This package can make your react applications faster. This package can be used for free. You can configure this in you project either in automatic mode or manual mode. In automatic mode you need to install the package using the command :  
`npm install million`  
After this since we are using vite we need to configure vite config file. You can paste the following code inside of vite config file like:  
`import million from "million/compiler";import react from "@vitejs/plugin-react";import { defineConfig } from "vite"; export default defineConfig({ plugins: [million.vite({ auto: true }), react()],});`

This will provide you some improvements out of the box just by doing this.  
If you want to ignore certain components we should use the below command as:  
`// million-ignore`

Million.js is an optimizing compiler that automatically improves React performance without requiring code changes. t analyzes your React components and compiles them into optimized higher-order components without you needing to rewrite anything. The compiler can make components up to 70% faster by using a different rendering approach. Instead of diffing the entire DOM tree like React does, Million.js diffs data and updates DOM nodes directly, which is significantly more efficient for larger component trees. Million.js uses about 55% of the memory that React does on standby after page load. his is crucial for resource-constrained devices and older hardware, where memory overhead can cause noticeable lag and poor user experience.

Million.js shines for:

- **Static and semi-static components** like forms, landing pages, and CRUD operations
- **Nested data structures** where tree traversal is expensive (e-commerce, CMSs)
- **UI-heavy applications** where DOM manipulation is the bottleneck

Class based components are an alternative to functional components. Even though react prefers functional components many legacy projects and packages of react are in class based components. For functional components we created javascript functions which accepts props and return the JSX code that is rendered on the screen. For class based components we can create a class which extends the `Component `class. The class should have the render method which will return the JSX code. Usage of functional components is the modern and default approach. Apart from `Error Boundaries` there is no need to use class based components. You can build anything that you can build with functional components with class based components also.  
Prior to react 16.8 usage of class based components were a requirement because that is how state and side effects was managed in react. React 16.8 introduced React Hooks for functional components.

These hooks brought features to the functional components which were once reserved for class based components. Class based components cannot use react hooks.

`render` method is a specific method in react which react will call when it finds a component that is used in the JSX code. React will use this render method to determine what should be rendered on the screen. We should return JSX code from the render method.  
For functional components we had props which was automatically send by react. But for class based components that is not the case. Here the render method doesn't receive props. To make a class based component work we first need to import the Component class from react like:  
`import {Component} from 'react';`

Then we need to extend our component class with the `Component `class imported from react. This way our custom component class will inherit from the component class defined by react. It also adds a couple of important properties such as the `props `property. We can access the props passed to a class based component using `this.props.propName`. Example for class based component:

```javaScript
import classes from './User.module.css';
import {Component} from 'react';
class User extends Component{
  render(){
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
export default User;
```

**NOTE:** We still need to export the custom component class we created just like the function for functional components.  
Class based components can work together with functional components. Class based components can render a functional component and functional components can render class based components. In react projects it is a common practice to either stick with functional components or class based components.

In class based components we should add the functions required by the component without using the function keyword. For class based components we need to initialize the state inside of the component class and update it when we need it. To define the state inside of class based components we need to use the `constructor ` function. The constructor function is automatically called when the component is instantiated. Inside this we can initialize the component using `this.state` to an object. It is important to note that for class based components your state is always an object. Whereas for functional components your state can be anything like a string, numeric or boolean value. Also the property name should also be `state`, it is not upto us to define the state name. We group all the states that we use inside of the component into a single object. You can add any type of values as attributes to the state object.

When changing the state we should not directly access the properties from the state object and modify it instead we use the `this.setState()` method to update the state. This is provided by the component class. The `setState `method always takes in an object or a function that returns an object. When you pass the property which you want to modify through the `setState`, other properties which are already inside of the state are not modified, instead the new state property is merged with the old state property. Whereas when we use the `useState `hook the new state value overrides the old state value. We can also pass a function to the `this.setState` if your current state change depends on the previous state change.  
To access the state we can directly access the state using the `this.state.propertyName`. We define variables and constants inside of the `render `method. When calling methods that are present in the component class we should use the `this `keyword to call the methods.

Additionally we need to bind the function with `bind(this)` so that the functions are correctly pointed and executed.  
**NOTE:** When using the constructor we should call the `super() `method as the first line of the constructor.  
Example:

```javaScript
class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true
    }
  }
  toggleUsersHandler() {
    this.setState((currentState) => {
      return {
        showUsers: !currentState.showUsers
      }
    });
  }
 
  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
 
export default Users;
```

All the components in react has a concept of life cycle. For class based components we have life cycle methods to run code at different points of that life cycle. The first and most important life cycle method you can add to the class based component is the `componentDidMount()` method. Like render this is a built in method which you can use when you extend the component class. When you add this method, react will call it when the component is mounted. Apart from this we also have `componentDidUpdate()` and `componentWillUnmount()`. There are also other life cycle methods but these 3 are the most important. The componentDidMount method will be executed by react when the component is mounted(evaluated and rendered by react) to the DOM. This is equivalent to using `useEffect()` hook. Using the useEffect hook with an empty dependency array is same as using `componentDidMount()`. The componentDidUpdate() method is called by react when the component is updated.

ie, when component is re evaluated, and re rendered by react. This is equivalent to the use of `useEffect` with a dependency array. The `componentWillUnmount()` method is called right before the component is removed from DOM. This is equivalent to the cleanup function which we used with the useEffect.

We can use the `componentDidUpdate `method to execute code when ever the component is updated. Inside this method if we are doing some state updates it will create an infinite loop. To avoid this the `componetDidUpdate `method automatically receives 2 arguments the `previousProps `and `previousState`. We can use an if check before updating the state and determine weather the `previousState` 's data is the same as the current state's data which we want to update. On if they are different we should execute the state updating logic. This way we can avoid an infinite loop. The example code will look like:

```javaScript
componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState(
        {
          filteredUsers: DUMMY_USERS.filter(
            (user) => user.name.includes(this.state.searchTerm)
          )
        }
      );
    }
  }
```

This is the same as:

```javaScript
useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);
```

Which is much more leaner and easy to implement because we don't need to manually check if the state is changed.

We can use the `componentDidMount()` method to execute some code when the component is loaded for the first time. For example you might want to fetch the data from a remote server by using http requests, so we can use this method for that. We don't need to use an if check because this method will only run once when the component is initially rendered for the first time. eg:

```javaScript
  componentDidMount(){
    this.setState({
      filteredUsers: DUMMY_USERS
    });
  }
```

This is the same as using `useEffect `with an empty dependency array or a dependency that remains constant.

All these life cycle methods run for every component instance just like `useEffect `and state works for every component instance.

We create the context for class based components as the same way as we used to create for functional components. When using the context inside of functional components we used the `useContext()` hook. But for class based components we can't use it. We can do it in 2 ways, by using the ContextConsumer like we have seen for functional components. Since this is used in JSX only it will work in both class based and functional components. We have seen that we can use the `useContext `hook for listening to multiple contexts inside of the same component. But for class based components we cannot do that. You can connect a class based component only to a single context. We can do that by defining a `static `property to the component class called `contextType `and assigning it with the context object which we have imported from the context file. This tells react that the component will have access to the context. You can only set this once.

To access the context we can use the `this.context.contextValue` inside of the component. The example will look like:

```javaScript
class UserFinder extends Component {
  static contextType = UsersContext;
.......
componentDidMount(){
    this.setState({
      filteredUsers: this.context.users
    });
  }
```

You only need to use class based components if you are building error boundaries or you have an existing legacy react project which uses class based components.

Sometimes something goes wrong with your application (not bugs introduced by the developer), some errors that you can't prevent or which are simply being used to transport information that something went wrong from one part of the application to another part. For example an http request, if we sent a http request from our application and if the server is not responding the request can't complete and you will end up with an error in your application. This is not something that we can fix as a developer. This can cause the application to crash because if the error is not handled properly the application might crash. In regular javascript we use `try...catch` we can only use this in places where we can write normal javascript code. If the error is inside of JSX code we cannot wrap that in `try...catch`. In such a case we can use an error boundary. To create an error boundary we can create a javascript file inside of the components folder inside which we can create a class based component.

The error boundary is a special component class which implements the `componentDidCatch()` method. Thought the `componentDidCatch()` method can be added to any class based component, and it makes the class based component an error boundary. There is no equivalent to this for functional components at the moment. This life cycle method will be triggered when one of the child components throws an error. So inside the custom error boundary component we add a render method. From this render method we will return `this.props.children`. This way we can wrap other components which might cause problems with this custom error boundary component. You can also wrap it around more than one component. To the `componentDidCatch()` method we will get the error object as parameter automatically passed in by react. We can handle this error inside of this function. Since this is a regular class based component we can also use state to set the error states and handle it. An example will look like:

```javaScript
import { Component } from "react";
 
class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error){
        this.setState({
            hasError: true
        });
    }
    render(){
        if(this.state.hasError){
            return <p>Something Went Wrong!</p>;
        }
        return this.props.children;
    }
}
 
export default ErrorBoundary;
```

We can wrap the components like:

```javaScript
      <ErrorBoundary>
        <Users users={this.state.filteredUsers} />
      </ErrorBoundary>
```

In the development mode we will see the errors, but in production we will not see any errors if we don't use error boundaries. If we used error boundaries the message that we have set will be displayed to the users. It is similar to try catch in regular javascript because it let's you to catch the errors without crashing the entire application.

We don't directly connect our react apps to a database because we will run into security issues. When you create react apps all your code runs inside of the user's browser. If we are doing so the visitors can access the code and if that code contains credentials to access the database your database might get compromised. There are also some restrictions when writing front-end code for example we cannot easily access the file system that is shared and centrally managed. Instead of directly accessing the database or a shared file system we communicate with a backend server which acts as a middle man. The front end react code which runs in the users browser will communicate with a separate backend server. We interact with the database through this backend server. This backend server and it's code is in accessible to the users of the website. To connect with the front end and backend we use http requests.

We can send only the http requests that are allowed and accepted by the backend. You can control what the users of the application can do and can't do. This is possible through API (Application Programming Interface) end points. A REST API is a web server that exposes certain pre-defined routes to which HTTP requests can be sent. The API URL's are configured by the developer so that the necessary functionalities can be accessed through proper URL's. We usually have separate front end and backend projects where you don't necessarily need to use the same programming language. You can also build fullstack react apps (blend of front end and backend) via Next JS or Remix.

When communicating with a backend we are sending http request which needs to travel through the internet and reach the backend server. Then the backend server needs to process that request and send back the response. This might take some time. So in our react component we need to load the component initially without data and once the data is available we need to update the component with the data.

We can use multiple ways to send http requests to backend servers. We can use the `fetch()` function which is provided by javascript. In the simplest form it requires the URL to which we need to send the request. Out of the box it will send a get request to the specified URL. Fetch function returns a promise which is a javascript value that will eventually resolve to another value. It is basically a wrapper object around a value that is not present yet but eventually will be there. To access the values resolved by fetch we can chain values. We can chain the then method and pass a function to the then method to define a function that should be executed once this promise is resolved and a response is present. This function will automatically receive that response object. In modern javascript we can use the `await `keyword to access the response. The await syntax can only be used if the function wrapping the fetch is marked as `async`.

**We cannot mark component functions as async**. So we should create another async function and wrap it around the fetch call.  
The response object which we automatically receive as argument to the then() method's callback function has built-in properties and methods. The `.json()` method can be used to extract data in json format. The `json()` method will also return another promise. So if we return that from the first then method, we can chain another `then()` method and access the data. eg:

```javaScript
const [availablePlaces, setAvailablePlaces] = useState([]);
  fetch("http://localhost:3000/places").then((response)=>{
    return response.json();
  }).then((data)=>{
    setAvailablePlaces(data.places);
  });
```

Though the above code is syntactically correct this above code has a problem. This will create an infinite loop. Because the above code will be executed every time the component function executes. So whenever the state is set after the data is resolved it will again execute the component function.

We cannot send the HTTP request like this. We can fix this infinite loop by using the `useEffect` hook. We can move the above code into the useEffect's call back function. The callback function of `useEffect` is executed **after the DOM has been updated and painted**, but only if its dependencies have changed (or on the initial mount). Since we only need to load the data once we can use an empty array as dependency. The code will look like:

```javaScript
  useEffect(() => {
    fetch("http://localhost:3000/places").then((response) => {
      return response.json();
    }).then((data) => {
      setAvailablePlaces(data.places);
    });
  }, []);
```

If we want to use `async await` we cannot directly mark the callback function as `async`. What you can do is create a new function inside of the callback function and mark it as async. Then place the fetch code inside of it. Then inside of the callback function we can call this newly defined async function. The code will look like:

```javaScript
 useEffect(() => {
    async function fetchAvaialblePlaces(){
      const response = await fetch('http://localhost:3000/places');
      const data = await response.json();
      setAvailablePlaces(data.places);
    }
    fetchAvaialblePlaces();
  }, []);
```

When working with http requests it a common practice to use loading state to handle situations where the request is sent and the response is not yet arrived. To simulate this we can throttle the connection by going to the developer tools of the browser, inside the network tab we will see an option for more network conditions. Inside this there is option for choosing the network. We can choose the presets defined. The example code will look like:

```javaScript
const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  useEffect(() => {
    async function fetchAvaialblePlaces(){
      setIsFetching(true);
      const response = await fetch('http://localhost:3000/places');
      const data = await response.json();
      setAvailablePlaces(data.places);
      setIsFetching(false);
    }
    fetchAvaialblePlaces();
  }, []);
```

We can use this state to show a loading screen.

Errors can occur when working with http requests. In your front end code you must prepare for conditions where the network request might fail. The request can be failed due to 2 reasons. Either the client might fail to send the request or the request was sent successfully to the backend but the some error happens on the backend and send back an error response. We can check the status of the response by checking the `ok` property which is present in the promise that is returned. If it's value is true then the sever have returned a response with status code 200 or 300\. If that is false, it means that it returned a response that is 400 or 500\. We need to handle these situations. It is a good practice to create a custom error object and throw it. If you throw an error it will crash your application. So you should wrap the code that could potentially throw an error inside of try block. In the catch block we can catch the error and handle the error.

The `fetch `function may also throw an error if there is no network connection. So it is a good idea to wrap this also inside of try catch. In react we might need to show the users that an error has been occurred. So we can use an error state and conditionally display the error message. It is also a good idea to create a custom error page component so that we can re use. The example will look like:

```javaScript
  const [errorState, setErrorState] = useState(null);
  useEffect(() => {
    async function fetchAvaialblePlaces() {
      setIsFetching(true);
      try {
        const response = await fetch('http://localhost:3000/placesXyz');
        const data = await response.json();
        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }
        setAvailablePlaces(data.places);
      } catch (error) {
        setErrorState({message: error.message || "Could not fetch places. Please try again later."});
      }
      setIsFetching(false);
    }
    fetchAvaialblePlaces();
  }, []);
  if(errorState){
    return <ErrorPage title="An error occured" message={errorState.message} />;
  }
```

And the ErrorPage component will look like:

```javaScript
export default function ErrorPage({ title, message, onConfirm }) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
      {onConfirm && (
        <div id="confirmation-actions">
          <button onClick={onConfirm} className="button">
            Okay
          </button>
        </div>
      )}
    </div>
  );
}
```

It is a good idea to create a separate js file for performing http calls because that way we can reduce the code in our components as well as re use those functions. Example:

```javaScript
export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const data = await response.json();
    if (!response.ok) {
        throw new Error("Failed to fetch places");
    }
    return data.places;
}
```

We can send all type of http requests using the `fetch `method. When using http methods other than get we should specify the method type when sending the request. We do this by using the second argument of the fetch method. It is a configuration object that allows you to configure the outgoing request. Inside this object we can define the `method `property which specifies which http method should be send from the client. The `body `property defines which data should be attached to the request. We cannot directly send the request body like this. We need to convert it into a JSON formatted string. The `headers `property of the configuration object allows us to add extra meta data to the request. We should specify the `Content-Type` to `application/json` to inform the backend that the data sending is in JSON format. This ensures that data is extracted successfully on the backend. The code will look like:

```javaScript
export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const resData = await response.json();
    if (!response.ok) {
        throw new Error("Failed to update user data");
    }
    return resData.message;
}
```

**We can mark event listener functions as async**.

Optimistic updates are state updates where you update the local state before sending the http request to the backend. The state update is done and the changes will be reflected instantly to the user and the the http request is send to the backend server behind the scenes. There are chances that the http request might return an error response, in those cases we need to handle them. So in the catch block we can set the state to the previous state thus rolling back the update. Often the optimistic updating can provide a better user experience that showing the loading spinner or loading text. You can choose an approach based on the preferences or the exact requirement you want. There are also situations where we cannot use the optimistic updates such as fetching the data, in those cases we need to display the loading state.

In some cases the UI might update because the state is updated, but when the response from the backend provides an error the instant rollback without any warning message might confuse the user. To avoid this we might need to manage some extra state.

There are 2 important rules that we should be aware of when using hooks in react:

1. You should only use react hooks only inside of react component functions.
2. You should only call hooks in the top level statements. You must not nest them in functions or if statements inside of the component functions.

For creating custom hooks we can modify the first rule a little bit. You can use custom hooks inside of other hooks.  
The idea behind custom hooks is to wrap and re use code that goes into your component functions. For example consider the method we used for making an http request. We used a loading state to show that the data is being loaded, we also called a method which makes the http request, and we also created an error state to handle situations where the http request might fail, and we were using `useEffect `hook to perform all the above. Even though the endpoint is different the core logic remains the same.

This above condition is a perfect case for using a generic code which helps us to reuse based on the situation. We used components to build configurable re usable UI elements. We can follow the same principle for code that does not return JSX elements.

```javaScript
useEffect(()=>{
    async function fetchPlaces(){
      setIsFetching(true);
      try {
          const places = await fetchUserPlaces();
          console.log("Places",places);
          setUserPlaces(places);

       } catch (error) {
         setErrorState({message: error.message || "Failed to fetch user places"});
       }
      setIsFetching(false);
    }
    fetchPlaces();
  },[]);
```

In the above code the useEffect and the logic inside of it we need it inside of the component we cannot put it into a separate component because it is a part of the component. This problem can be solved with custom react hooks.

In normal scenarios where we need to reuse code we used functions, but here we already have a hook, so we cannot outsource it into a function. We can only use the react hooks (including state updates) inside of component functions.

It is a good practice to create a custom folder for keeping the custom hooks though it is totally optional. Inside this folder we can create a js file to store our custom hook, you can use any name for the js file. Inside this file we should create function, the name of the function should start with `use`. Functions that starts with `use `are treated as hooks in react. React will look for such functions in the project and enforce certain rules for those functions (such as using them only inside of a component function or custom hooks). These rules are important because using the hooks in wrong place could result in un expected behaviors. You should not clash the name of the custom hooks with the built in hooks in react. Custom hooks can make your component functions leaner. We also can use the same custom hook in other components to re use the functionality.

A custom hook is just like a function, i.e it can receive parameters. This can make the custom hooks more generic and re usable. From the custom hook we can return the data like states for data, loading and errors in the form of either array or object. Most importantly we should export the custom hook function. The example code will look like:

```javaScript
import { useEffect, useState } from "react";
export function useFetch(fetchFn) {
  const [isFetching, setIsFetching] = useState(false);
  const [errorState, setErrorState] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        console.log("Places", places);
        setFetchedData(places);
      } catch (error) {
        setErrorState({ message: error.message || "Failed to fetch data" });
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchFn]);
  return { isFetching, fetchedData, errorState };
}
```

The great thing about using a custom hook is that any state that you used in the custom hook will belong to the component in which the hook is exported to. So when the state defined in the custom hook changes the component where the hook is imported will also execute again. We can use it like:

```javaScript
import { useFetch } from "./hooks/useFetch.js";
.........
  const {isFetching, errorState, fetchedData} = useFetch(fetchUserPlaces);
```

In our custom hook we are not just limited to exposing state values. We can also expose state updating functions and custom functions. We can also use aliases for functions and objects returned by the custom hook like:  
`const {objectExposedFromHook : aliasName} = useCustomHook();`

The use of custom hooks is same as that components. That is when ever you use a custom hook inside of a component the states and methods that are used inside the custom hook will have a dedicated instance where the hook is used. So using them in other components will not affect the state that is present in the hook. When ever you use the custom hook in another component a new snapshot for the state which is present inside of the hook.

We will need to add the state updating functions exposed from the custom hook as dependencies for `useCallback `functions.

We can create a promise by using the `Promise()` constructor provided by javascript. It takes in a function which automatically gets 2 parameters `resolve` and `reject`. In the function's body we can execute the code which we want which will return a promise. Then to makes sure that the value is returned we can call the `resolve `method and pass the value which should be returned by the promise. We can use the reject method to throw an error if anything goes wrong. The promise constructor can turn a code that does not return a promise to a code that returns a promise. The example code will look like:

```javaScript
async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve(sortPlacesByDistance(places, pos.coords.latitude, pos.coords.longitude)),
      () => reject(new Error("Failed to get location"))
    );
  });
}
export default function AvailablePlaces({ onSelectPlace }) {
  const { isFetching, errorState, setFetchedData, fetchedData } = useFetch(fetchSortedPlaces, []);
  if (errorState) return <ErrorPage title="An error occurred" message={errorState.message} />;
  return (
    <Places
      title="Available Places"
      places={fetchedData}
      isLoading={isFetching}
      loadingText="Fetching places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
```

A form is a collection of input fields. They are used in conjunction with labels. It is wrapped in the `form `element. We need to handle the submission i . e, extract the values entered by the user and you also need to validate the data that is provided by the user and show errors to the user if incorrect data has been provided. Handling the submission is relatively easy, we can managed the entered values through state. Alternatively we can use refs to extract values. Or we can use the `FormData `object which will provide the data in the form once it is submitted (this is a native browser feature and not a react specific feature).  
Providing a good user experience is tricky when validating. You can validate on every keystroke this can cause errors to show up too early. Or you can validate the input field once it is lost the focus, but this way the errors may show up for too long. You can validate on form submission this way errors will be shown too late.

We should choose an approach that is suitable for our use case by understanding the tradeoffs.

In react we use the `htmlFor `attribute for connecting with the input field instead of `for `which we traditionally use for the `label `element. eg:

```javaScript
 <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>
```

By default even if you don't specify a button type to the button inside of a form, if you click it, the form will be submitted. It means that an http request is created and send to the server that is serving the application. This is also the case for react applications. In react applications this will cause problem because when the form is submitted the page is refreshed. When the page is refreshed in between the data is lost when submitting because the state might be lost in a full page refresh as well as it will interrupt the intended flow (you might want to send the data to an API but the page refresh will interrupt this).

The react application server is not capable for handling this request generated from form. One way to fix this problem is by using the `type `prop to `button `for the submit button. This makes the button not submit the form when clicked.  
A more elegant solution is to remove the `onClick `prop to the button and change it's type to default which is submit. Then for the form element we can use the `onSubmit `prop and pass the function which should handle the form submission. The form will automatically generate a submit event which we can listen to in react when ever a button is pressed inside of the form. In the function we will automatically get the `event `object. We can then call the `preventDefault()` method on this `event `object, which will prevent the default behavior. That is it will prevent the generation and sending of http request. This will prevent the page refresh. The example code will look like:

```javaScript
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
  }
  return (
    <form onSubmit={handleSubmit}>
.......
<button className="button">Login</button>
....
```

React also provides another way to handle forms in react version 19 and above. This is possible through a feature called form actions. But this approach will not work with react versions older than 19\. So the above method used in the example is most commonly used in react applications.

To access the values from the form we can use state. We can use individual state variables for each input field or use a combined state object and store individual values as properties. Then we typically want to set change listeners to handle the input to these fields. Inside the change function we can set the state and use this state as value for the input element. This way every keystroke the user makes is fed back to the input field. The example will look like:

```javaScript
export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log("enteredEmail", enteredEmail);
    console.log("Entered password", enteredPassword);
  }
  function handleEmailChange(event) {
    setEnteredEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setEnteredPassword(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleEmailChange}
            value={enteredEmail}
          />
          <input
            id="password"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            value={enteredPassword}
          />
      </div>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
```

In the above approach we will end up with a lot of state variables and change functions, so alternatively we can use a combined state. Then we can use a single function which accepts the event object as well as a field identifier which sets the values for the particular field. The function will look like:

```javaScript
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  })
.....
function handleInputChange(event, identifier){
    setEnteredValues(prevState=>({
      ...prevState,
      [identifier]: event.target.value
    }));
```

In the above code we are immediately returning an object from the state updating function that is why we are using `()` . Also we can use the special `[]` (**computed property name**)to put a identifier variable which is coming as an argument as the key to the state object. To this we are setting the data we got from the event. This function must be connected with the input fields like:

```javaScript
<div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange(event, "email")}
            value={enteredValues.email}
          />
        </div>
 
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={() => handleInputChange(event,"password")}
            value={enteredValues.password}
          />
        </div>
      </div>
```

We need to use the use the function form of the `onChange `event to pass the identifier along with the event.

The above shown is only one possible way, another possibility is to use refs. We can create separate refs for the input fields and connect it using the `ref `prop. The example code will look like:

```javaScript
export default function StateLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enetedPassword = passwordRef.current.value;
    console.log("Entered Email : ", enteredEmail);
    console.log("Entered Password : ", enetedPassword);
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
 
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
        </div>
 
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>
        <button className="button">Login</button>
    </form>
  );
}
```

The advantage of this approach is that it requires less code than using states. The down side of this approach is that resetting the values in a clean way is harder. Because using refs to manipulate DOM is not considered a good practice. You will still end up with a lot of refs, if you have a complex form.

When working with complex forms using multiple states and refs for each individual field can be cumbersome. That is why we should consider the built in native feature for getting hold of all those values. This is possible by a special constructor function that is built into the browser. It is called the `FormData()` constructor function. This makes it easy to get a hold of values entered into the form. For this we need to pass the form as input data for this constructor. For the form submission handling function, it will automatically receive the form from the `event.target` object. The `FormData `constructor will provide a form data object which will provide access to all the fields in the form. For this to work all the fields (including select fields) from which we want to extract the data should have a `name `prop. We can use the built-in methods of the form data object to access and modify the data.

The `.get()` method of the form data can be used to get the value for a specific field by using the name we defined on the `name `prop. If there are many fields this can be difficult because we will have as many variables inside of the form submission handling functions as there are fields in the form. To solve this we can use the `Object.fromEntries()` method which is provided by the browser. We can then pass the formdata object by calling the `entries()` function as an argument to this. The entries method of the form data object will provide all the input fields and their values as an array. There is one potential problem with this, that is if you have multiple fields with same name, like checkbox or radio buttons they are lost from the entries and you wouldn't have values for that. You need to manually extract them and store them. We can use the `formdata.getAll()` method to get multiple values from the same input field. We can easily add this to the object by adding a new key. Example:

```javaScript
function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const aquisitonChanel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = aquisitonChanel;
    console.log("Data : ", data);
  }
```

This is a relatively easier and quicker way of extracting all the data from the form.

If we provide a button with `type `as `reset `upon pressing that button the form will be reset. When we are using states we can reset the states to reset the values in form. Similarly when using refs we can set the value of the ref to empty string to reset the input fields. This is not a recommended approach because in most cases you should let react update the DOM.  
The form element also have a reset method which we can use, this does the same thing as pressing the reset button. We can use like: `event.target.reset()` on the form submission handling function. Even though this is imperative code we can use this because it is much less code than resetting individual states and refs.

When we are using states to store the inputs on every keystroke we can define the validation logic inside of the component function body itself because for every keystroke the state is updated and the component function is re executed. Example:

```javaScript
 const emailIsInvalid = !enteredValues.email.includes("@");
.....
 <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange(event, "email")}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>
```

This approach is not perfect because the error message will be shown right from the start and only goes away once we add an @ symbol to the input field.

We might want to provide a chance to the users before showing the error message. We can ensure that by setting the validation variable once the user starts entering a value to the input field. So the above code will look like:

```javaScript
 const emailIsInvalid = enteredValues.email !== "" && !enteredValues.email.includes("@");
```

This approach also have flaws that is when we entered a correct value and erase it we are not showing any error. Another problem is that the error message will be displayed to the user as soon as the user starts typing into the field.  
From this we can understand that we are showing the error message too early.

Another way we can validate is when the input field has lost it's focus. We can check weather an element is out of focus by using the `onBlur `prop. The `onBlur `event will be fired automatically when the element lose the focus. We will need to manage a separate state to handle weather a field has been modified or not by the user. If the state has been edited they will lose focus. We can use this state to perform validation. This way we give the user a chance for editing before we show the error. The error message will only be shown when we change the focus of the input field.  
The above approach offers a comparatively better user experience. But the down side of this approach is that the error might be shown for too long. Because if we have the error message on screen it will keeps showing until we provide a valid value. The example code will look like:

```javaScript
const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
 
  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }
.......
  <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange(event, "email")}
            value={enteredValues.email}
          />
```

The above shown method may be the user experience we want, but as a better way we can make sure that the error message disappears when the user starts typing on the input field. To do this we can set the didEdit state of the input field once the user starts typing again. The code will look like:

```javaScript
function handleInputChange(event, identifier) {
    setEnteredValues((prevState) => ({
      ...prevState,
      [identifier]: event.target.value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }
```

This approach is the best of both worlds because we are validating on every keystroke as well as validating once the field has lost it's focus.

There are also other ways of validating inputs apart from the above mentioned methods. We have seen that we can use refs to take the input. When using refs we cannot validate on every keystroke. We can only validate when the user submits the form. We can create additional variables inside of the form submission handling function and implement the validation logic. We still need to use states because we need to show the validation errors on the screen. We can manage the state to determine weather to show an error message on the screen or not. The code will look like:

```javaScript
export default function StateLogin() {
  const emailRef = useRef();
  const [emailIsInvalid, setEmailIsInvalid] = useState();
  const passwordRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enetedPassword = passwordRef.current.value;
    const isEmailValid = enteredEmail.includes("@");
    if (!isEmailValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
    console.log("Sending http request.....");
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" ref={emailRef} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>
```

The approach you want to use totally up to you. Validation on submission is comparatively less code than validating on every keystroke and the focus state of the input element. Even when we are using keystroke based validation it is a good idea to also use submission based validation. Though the keystroke based validation provides a nice feedback to the user, when the user clicks on the submit button by avoiding the error message the empty data is sent. If we are sending this to a backend server this might cause problems, so it is a good idea to validate on submission also.

When working with the `FormData `object there is an easier way to validate all the fields. We can use some built in validation props provided by the html to validate our input. The `required `prop which is one of such built in props. This let's the browser validate the input fields. The `required `attribute prevents the field to be empty when the form is submitting. Additionally it will also take the type of the input field into account, and not allow values that don't fit the format. For example when we use the required attribute with an input field with type email, it will enforce the email address format. We don't need to add any code of our own for this. Using the required attribute is not restricted to input fields, we can use it for select fields.  
Apart from required we also have `minLength `attribute which is also a built in attribute. We can use this attribute to enforce a minimum length to the input field. This is particularly useful for fields like password field.

We can add custom logic with the built in attributes. We can use states for these.

If we have input fields with similar structure we can create a custom component. We can make it configurable by using props. For example:

```javaScript
export default function Input({ label, id, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
```

We can also outsource the validation logic to make it re usable. We can store this logic in a separate js file and use it any where we want in our project.

We can create a custom hook to manage the state. We can use this custom hook inside our custom input component. We can also manage the validation logic inside our custom hook. Since we are using a reusable hook we should not hardcode the logic into the hook but instead we can accept a function as an argument for the hook and perform the validation by calling the function. If we have multiple functions to execute for validating a field we can use an anonymous function and call those functions. We can repeat this approach for whichever input field we have. The custom hook will look like:

```javaScript
import { useState } from "react";
 
export default function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
 
  const [didEdit, setDidEdit] = useState(false);
  const valueIsValid = validationFn(enteredValue);
  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }
  function handleInputBlur() {
    setDidEdit(true);
  }
  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
```

And the component function will now look like:

```javaScript
import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import useInput from "../hooks/useInput.js";
 
export default function Login() {
  const { value: emailValue, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, hasError: emailHasError } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const { value: passwordValue, handleInputChange: handlePasswordChange, handleInputBlur: handlePasswordBlur, hasError: passwordHasError } = useInput("", (value) => hasMinLength(value, 6));
 
  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) return;
    console.log(emailValue, passwordValue);
  }
```

```javaScript
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input label="Email" id="email" type="email" name="email" onBlur={handleEmailBlur} onChange={handleEmailChange} error={emailHasError && "Please enter a valid email."} value={emailValue} />
        <Input label="Password" id="password" type="password" name="password" onBlur={handlePasswordBlur} onChange={handlePasswordChange} value={passwordValue} error={passwordHasError && "Please enter a valid password"} />
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
```

We can also use third party libraries that makes it easier to work with forms. There are libraries like `React Hook Form` and `Formik `which can help in getting use input and validating the input.

Form actions is another way to handle user inputs. It is available in react 19 and higher. We have seen that we can use the `onSubmit `prop on the form element to handle the form submission. If we are in a react version which is 19 or above we can use the `action `prop instead of `onSubmit `prop and pass the same form submission handling function. The `action `is not at all a new prop (or attribute), form elements always supported the action attribute. When we are not using react the action attribute will be used to set the path or URL to which the browser sends the data when the URL is submitted. But when using react if we use the action prop the function which we passed will be executed. Also inside of the function we don't need to manually call `event.preventDefault()` because react will call that for you. The form submission handling function will not get an `event `object instead it will receive a `formData `object.

We had to create this manually using the previous approaches where we used the `Object.fromEntries()` method to convert values from the event to `formData `object.

The `formData `object obtained from form action will have all the submitted data. We still need to add the name prop for all our input fields for this to work. We can extract individual fields using the `get `method on the `formData `object. After the form submission handling function is executed react will automatically clear the form fields. Example:

```javaScript
function signupAction(formData) {
    const enteredEmail = formData.get("email");
    console.log(enteredEmail);
  }
  return (
    <form action={signupAction}>
```

We can extract multiple values from fields like check boxes by using `formData.getAll("name");` . For validation we can manually extract all the fields to respective variables and perform the validation. We can create an array to store the error data for different fields. We can then return this array from the form action function. If there is no error we can return a null value. To get a hold of the value that is returned by the action function we can use a special hook provided by react which is `useActionState`, we can import this from react. This is a new hook that is added in react 19\. Like all hooks we must use this inside of a component function or a custom hook. In our case we should define it after the form action function. Because the first argument to this hook is the form action function. It also need to have a form related state (action related state). Here we should pass the initial state value as the second argument.

The useActionState hook returns an array, we can use the array destructing to store various elements just like the useState. It returns an array with 3 elements. The first element is the current form state, so initially it will have the initial state we passed as argument to the hook. This will have the error values returned by the form action function once it is executed and have errors. As the second argument we will get an updated form action. We have passed as action function as the first argument to the hook already, react will create a new function internally that is wrapped around our action. This way it can listen to the invocation of the action. This returned function is our defined action function itself but enhanced by react. This returned form action should be passed as action prop to our form. The final element we get back from the hook is a pending element which will be true or false based on weather the form is currently being submitted or not.

This comes into picture when we are working with http requests to submit the data from form. If you don't have such an async action it is not mandatory to use this third element.  
When we are using the `useActionState `hook the form action function is called in a different way. The formData will come as the second argument to our defined action function. The first argument will be the previous form state. It is possible that the action function is invoked multiple times, in that case react will provide the last form state as an input value, incase you want to base your new state on the old state. Even though we don't need it in our case we should accept it as an argument. The example code will look like:

```javaScript
import { useActionState } from "react";
export default function Signup() {

```

```javaScript
function signupAction(prevFormState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const role = formData.get("role");
    const terms = formData.get("terms");
    const acquisitionChanel = formData.getAll("acquisition");
 
    let errors = [];
    if (!isEmail(email)) {
      errors.push("Invalid email address");
    }
    if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
      errors.push("You must provide a password with atleast 6 characters");
    }
    if (!isEqualToOtherValue(password, confirmPassword)) {
      errors.push("Passwords do not match");
    }
    if (!isNotEmpty(firstName) || !isNotEmpty(lastName)) {
      errors.push("Please provide both your first and last name");
    }

```

```javaScript
if (!isNotEmpty(role)) {
      errors.push("Please select a role");
    }
    if (!terms) {
      errors.push("You must agree to the terms and conditions");
    }
    if (acquisitionChanel.length === 0) {
      errors.push("Please select at least one acquisition chanel");
    }
    if (errors.length > 0) {
      return { errors };
    }
    return { errors: null };
  }
  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
  });
 
  return (
    <form action={formAction}>
....
 </div>
      {formState.errors && (
        <ul className="error">
          {formState.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
....
```

The problem with this approach is that if you enter a valid data to a field and you have invalid data in your form, all the data in the form will be cleared even though there won't be any error message for the correct value entered to field. React will reset the form for you. This might not be something you need because you might need not to clear the valid values from the fields even if the form has invalid values.

To fix the above problem we can adjust the signup action a little bit. For this we need to ensure that the values returned from the form action function should also have information about the entered values. We can use this information to prepopulate the input fields again so that the entered correct values are not lost. We can return an object which contains all the values extracted from the formData object. We can then use the `defaultValue `prop, and we can extract and set the value to the appropriate value from the `formState`. This way the entered data is repopulated into the input fields once the form is submitted. The action function code will look like:

```javaScript
if (errors.length > 0) {
      return { errors, enteredValues: {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        role,
        acquisitionChanel,
        terms,
      } };
    }
```

```javaScript
 <input id="email" type="email" name="email" defaultValue={formState.enteredValues?.email}/>
```

We used the ? after the enteredValues because it might not exist, in such a case the value of the input field will be set into undefined.  
For fields like checkbox and radio buttons we should use the `defaultChecked` prop and pass the date extracted from the `formState `as prop. This expects a boolean value so we should manually check if the value extracted from the formState matched the field. Example:

```javaScript
  <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked = {formState.enteredValues?.acquisitionChanel.includes("google")}
          />
```

In case if you are setting a default value to select box this might not be reflected on screen because it is a react bug. It will always have the first option selected by default. For all other elements it works as expected.

Now we have another problem that is the reset button will not work. By default the reset button resets the value of the fields to the value defined in the `defaultValue `prop. If we want to remove values from all the fields we will have to add some custom logic. If there are no errors the fields in the form will be reset this is as per the logic we defined, because we are not returning the `enteredValues `key if there is no error.

There is one import thing about form actions. You don't need to create action functions inside of a component function, if in the action function you are not using any component specific data (props or state). We can move such action functions outside of the component functions to make the component functions leaner. We can also store these action functions in a separate file. This also have performance improvements because the action function will not be recreated every time the function is executed. If we are using props or state we should move the action function to the inside of the component function.

If we are sending the data from form to a backend server the process is asynchronous. So we need to mark the form action function as async. This is supported by react. Form action functions can be either synchronous or asynchronous. If it marked as async react will wait till the promise from the asynchronous operation is resolved to mark the form as submitted.

When submitting data through an API we have 2 ways to show the loading state when using form actions. The first way is that we can use the `pending `object which we will get as the third element from the `useActionState `hook. The value of pending will be true until the promise inside of the action function is resolved.  
Alternatively we can use another hook which can be used in conjunction with form actions. This hook is present in the `react-dom` module. This is called the `useFormStatus()`. This hook cannot be used in the component that contains the form. It must be used in a nested component that is used inside of the form. We can create a new react component for the submit button and place this component inside of the form.  
The `useFormStatus()` hook returns an object which has various information about the current form status. We can get the data that is submitted as well as other information. We can refer the official documentation to get an idea about this.

For our case we are interested in the `pending `property. This will return either true or false depending on weather the form has been submitted or not. We can use this property to show conditional messages or actions inside of the form(the parts that are written in that component). The example code will look like:

```javaScript
import { useFormStatus } from "react-dom";
 
export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </p>
  );
}
```

We can also trigger two different actions from a single form. We can do this by adding `formAction `props to buttons inside of a form and set different action functions. We can define separate action functions inside of the component and call them, we will still get the `formData `object as argument for these functions. Example:  
`<button formAction={upvoteAction}>....</button>`  
Based on these actions we can also send http requests to the backend.  
From the action functions we can make API calls, because we can also make these functions async.  
We can also use the `useActionState `hook to track the status of form submission, if we have multiple actions we need to call `useActionState `hook multiple times. For example:

```javaScript
  const { upvoteOpinion, downvoteOpinion } = use(OpinionsContext);
  async function upvoteAction() {
    await upvoteOpinion(id);
  }
  async function downvoteAction() {
    await downvoteOpinion(id);
  }
  const [upvoteFormState, upvoteFormAction, upvotePending] =
    useActionState(upvoteAction);
  const [downvoteFormState, downvoteFormAction, downvotePending] =
    useActionState(downvoteAction);
....
<button
          formAction={upvoteFormAction}
          disabled={upvotePending || downvotePending}
        >
....</button>
<button
          formAction={downvoteFormAction}
          disabled={upvotePending || downvotePending}
        >....</button>
...
```

The above approach provides a good user experience but we have an even better approach. We can use the optimistic updating to ensure that the UI is instantly updated without waiting. We can use the `useOptimistic `hook for this. This hooks helps us with optimistic updates. For this hook it needs the first argument as the value which needs to be updated optimistically. This defines the initial state of the optimistically managed state. The second argument to the hook is a function that will be invoked by react at a point of time defined by you. This function will automatically receive a parameter which handles the old state that is managed by the `useOptimistic `hook. This function is responsible for returning a new state. Additional to that we can also pass our own parameters to this function which we can use inside of the function. The `useOptimistic `hook returns an array, it is like the useState hook because the first value is the state object and the second value is a function,

which we can call to invoke the function defined with the `useOptimistic `hook. This function can be called in any form action of your choice. It must be used inside of a form action because `useOptimistic `hook is used in conjunction with the form action. This optimistic state is only shown on the UI once the form is being submitted. After the form is submitted this state will be thrown away and the actual UI state applied by some other code will be applied. Example:  
` const [optimisticVotes, setVotesOptimistically] = useOptimistic(votes, (prevVotes, mode)=> mode === "up"? prevVotes+1 : prevVotes - 1);`

Any argument which we pass to the function is forwarded to the function passed as argument to the hook. Though we should define these arguments.  
The function should be called in form actions before we are sending the request to the API. The state associated with this will automatically be updated once the function is called.

We can then use this state returned by `useOptimistic `as the value on the UI. The example will look like:

```javaScript
import { use, useActionState, useOptimistic } from "react";
import { OpinionsContext } from "../store/opinions-context.jsx";
export function Opinion({ opinion: { id, title, body, userName, votes } }) {
  const { upvoteOpinion, downvoteOpinion } = use(OpinionsContext);
  const [optimisticVotes, setVotesOptimistically] = useOptimistic(
    votes,
    (prevVotes, mode) => (mode === "up" ? prevVotes + 1 : prevVotes - 1),
  );
  async function upvoteAction() {
    setVotesOptimistically("up");
    await upvoteOpinion(id);
  }
  async function downvoteAction() {
    setVotesOptimistically("down");
    await downvoteOpinion(id);
  }
  const [upvoteFormState, upvoteFormAction, upvotePending] =
    useActionState(upvoteAction);
  const [downvoteFormState, downvoteFormAction, downvotePending] =
    useActionState(downvoteAction);
```

```javaScript
<form className="votes">
        <button
          formAction={upvoteFormAction}
          disabled={upvotePending || downvotePending}
        >....</button>
<span>{optimisticVotes}</span>
<button
          formAction={downvoteFormAction}
          disabled={upvotePending || downvotePending}
        >....</button>
...
</form>
```

If the update were to fail it will rollback the value automatically.

Javascript provides a built in way to format currencies. Example:

```javaScript
export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
```

We can create such an object and to apply the formatting we can use:  
`currencyFormatter.format(meal.price);`

To get the index of an item in an array we can use the `findIndex()` method on the array. It will accept a function which automatically receive the item as argument. Inside this function we can check condition to determine weather the item matches our condition. The index of the matched item will be returned from the function. If no matches are found it will return -1\. Example:

```javaScript
const existingCartItemIndex = state.items.findIndex((item)=>item.id === action.item.id);
```

The .splice() method is used to splice an array(remove). It takes in 2 arguments, the first one is the index from which we need to remove. The second argument is the number of values that need to be removed. We call this method on the array. eg:  
`updatedItems.splice(existingCartItemIndex, 1);`

The reduce() function is a function that let's us reduce an array into a single value. It takes a function as the first argument. And the second argument is the initial value. The function will automatically receive 2 values as arguments they are the new value which we want to derive and every item of the array as second value. Example:

```javaScript
const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item)=>{
    return totalNumberOfItems + item.quantity;
  },0);
```

We can use `useEffect `hook with `useRef `hook to open a modal. For example consider the below code:

```javaScript
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
export default function Modal({ children, open, className = "" }) {
  const dialogRef = useRef();
  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    }
  }, [open]);
  return createPortal(
    <dialog ref={dialogRef} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
```

Here the open prop which is passed from outside of the component is used to determine weather the dialog should be shown or not. We are creating a ref locally to control the dialog element. Inside of the `useEffect `we are checking the open prop and calling the `showModal()` on the `dialogRef`. Since the open is a prop coming from outside the function and we need to show the modal based on it's value we should add it as dependency to `useEffect`.

It is a good practice to organize the components into folders based on their functionality.

The above approach works for opening the modal, but for closing the modal we need to use the clean up function of `useEffect `to close the modal. Since we are using refs inside of useEffect it is recommended to create a temporary constant to store the ref and use this constant for manipulating the ref. This is to ensure that the same ref is used for the function logic and cleanup function. This is not a strict requirement but a recommended pattern. The example code will now look like:

```javaScript
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
export default function Modal({ children, open, className = "" }) {
  const dialogRef = useRef();
  useEffect(() => {
    const modal = dialogRef.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog ref={dialogRef} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
```

Even if we are using context api we can use prop drilling for one level if we want to make our component code leaner.

Redux is a state management system for cross component or app-wide state. State is the data which changes the UI. There are typically 3 types of states in react applications:

- Local State: State belongs to a single component, eg listening to user input and setting the state on every keystroke. We typically use the `useState `hook for handling the simple states, and use the `useReducer `hook for handling complex states.
- Cross component states: These are the states that affect multiple components, for example a button that opens a modal overlay. The definition for opening the model will be outside of the modal. To close the modal the button will be present inside of the modal. So we have multiple components utilizing the same state. We can use the same `useState `or `useReducer `hooks here also. We need to pass states and functions to modify these states as props to components. It requires props drilling and might often become complex if there are many components.

- App wide states : There some states that affects the entire applications. They are called app wide states. An example for this would be user authentication. If a user is logged in we might need to change the navigation bar which needs to show more options for the logged in user. Other components as well might need to utilize this for displaying more options based on this. We can use the `useState `and `useReducer `hooks and pass it to other components using props drilling. Alternatively we can use `React Context` that helps in managing cross component and app wide states easier.

Redux solves the same problem as React context which helps in cross component and app wide state management.

We use redux because react context has some potential dis-advantages. This might not matter in some apps but are important in other apps. Though it is not strictly an either or decision, we can use a mix of both react context and redux in the same application. Normally we use redux for app wide state and use react context for general state sharing required between components.  
The main disadvantages of react context are:

- Complex setup and management: For small and medium applications this might not be a problem. If we are building a complex application we will have a lot of context providers and managing them will be cumbersome. Even if we use a single context provider component to store all the states, it will result in a very big context file and it will be difficult to manage.
- Performance: The react context is useful for low frequency updates to the UI. For frequent updates we should use something like flux like state propagation. Redux is a flux like state propagation. So we should not use react context for frequent UI updates. Though this doesn't matter for small applications.

Redux is all about having one central data (state) store in your application. You never have more than one store. Whichever cross component or app wide state we want we will store it inside the store. You don't need to manage the store the entire time. For the changes in data the components must know about the changes and update the UI accordingly. For this components sets up subscriptions to our central store. Whenever the data changes the store notifies the components and the components can get the data that they need. One important rule of redux is that components never directly change the data inside of the store. For manipulating the data we use reducers. We need to set up these reducer functions. These functions are responsible for mutating the state inside of the store. **NOTE:** We are not using the `useReducer`, reducer is a general concept which we use. Reducer functions takes in an input and transforms that input and reduce it. For example it can reduce a list of numbers into sum.

We need to connect the components with the reducer functions to change the state. We have actions for this. The components will dispatch actions (trigger certain actions). An action can be thought of as a javascript object which describes the kind of operation that the reducer performs. Redux forwards the actions to the reducer which meets the description of the desired operation and the necessary mutation is performed. After the change is performed by the reducer will spit out a new state which effectively will replace the existing state in the central data store. After the store is updated the central store notifies the respective components which is subscribed to the store so that they can get these changes and update the UI.

To understand the core concepts of redux we can create a new empty node js project and install the redux package using `npm install redux`. After this in the main js file we can import the redux package into an object using the node js `require() `function. Then we need to call the `createStore() `function on this redux object to create a store. We can store this store into an object. We use the store to manage data, and the data it manages is in the end determined by the reducer function. So we should add a reducer function. The reducer function we create here will be called by the redux library. It will always receive two arguments, the existing state and the action that is dispatched. The reducer function should always return a new state object. The reducer function should be a pure function. A pure function is function which produces same output for the same inputs and there will not be any side effects inside of the function.

You must not send http requests, or write to local store or fetch something from local store inside of the reducer. We then need to connect the reducer function with the store by passing the reducer function as argument to the `createStore `method. After we need someone who will subscribe to the store and we need an action that can be dispatched. We can create a subscriber function. Inside of the subscriber function we can use the store object and call the `getState `method. The `getState()` method is automatically provided by redux when we create a store with `createStore()`. This `getState `method will provide us the latest snapshot of the state after it was updated. The next step is to make the redux aware of the subscriber function, for this we can call the `subscribe()` method on the store object. We need to pass the subscriber function as argument to the `subscribe `method. The passed function will be executed when the data in the redux store is changed.

We just need to pass the pointer of the subscriber function to the subscribe method. We should provide a default value to the state argument of the reducer function so that we will not get undefined value error.  
To create an action we can use the `dispatch()` method on the store object. Dispatch is a method that dispatches an action. Action is a javascript object with a type property which acts as an identifier, typically we use unique strings to describe the actions. The dispatch function will cause the reducer function to run again.

Typically when using redux we need to perform different things inside of the reducer for different actions. That is why we are getting the state and action as argument for the reducer function. Inside of the reducer we can check the action to determine the operation to be performed. If no actions need to be performed on the state we need to return the existing state from the reducer function. Redux is not limited to react, we can use redux in any javascript project. The example code will look like:

```javaScript
const redux = require("redux");
 
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return state;
};
const store = redux.createStore(counterReducer);
 
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
 
store.subscribe(counterSubscriber);
 
store.dispatch({ type: "increment" });
```

To make it easy to work with redux in the react project we can use the `react-redux` package. This makes it easy to connect react components with stores and reducers simple.

When working with redux in a react project we create a store folder inside of the src folder of the project. Inside this store we will create a js file which will define the store and reducer. We will then export the store object from this js file.

To provide the redux store to the react components we will go to the main.jsx file or the index.js file (To the highest level we can go in the react application). Here we will import the `Provider `component from the `react-redux`. We will then wrap our `App `component with this imported `Provider `component. We can choose to wrap only certain components with provider but only those components will get access to the store. To make sure that we are getting the access to the store through out our application we are wrapping our App component with the provider.  
We also need to tell react which store we are using in our application for this we need to import the exported store object here also. We should pass this `store `object as the value of `store `prop of the `Provider `component. The code will look like:

```javaScript
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store/index.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
```

And the store file will now look like:

```javaScript
import { createStore } from "redux";
 
const counterReducer = (state = { count: 0 }, action) => {
  if (action.type === "increment") {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      count: state.count - 1,
    };
  }
  return state;
};
 
const store = createStore(counterReducer);
 
export default store;
```

To access the value from store inside of a component we can use the `useSelector `hook provided by the `react-redux` module. We can also alternatively use the `useStore `hook but the `useSelector `automatically let's us select the part of the state that is managed inside of the store.  
The `useSelector `hook requires a function as argument, this function determines which piece of data we want to extract from store. This function will get the complete state object managed by store as argument automatically, from the function we can return the slice of data we want from the received state object. When we use the use the `useSelector `hook react-redux will automatically setup a subscription for the redux store for the component. The component will be updated and it will automatically receive the new value when the value is changed in the store. When the component is removed from the DOM react-redux will automatically un subscribe from the store.

The code will look like:

```javaScript
import { useSelector } from "react-redux";
......
 const counter = useSelector((state) => state.count);
```

To dispatch an action we can use the `useDispatch `hook. We don't need to pass any argument to this hook, it will give us a dispatch function which we can use to dispatch actions against the redux store. We call this `dispatch()` method with an object having the `type `attribute to specify the action defined in the reducer function. The example code will look like:

```javaScript
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
 
const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
 
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
 
export default Counter;
```

We can also use redux with class based components. There are alternative methods for using the redux since the class based components does not support hooks. We can use the `connect `method from `react-redux` which we can use connect class based components with redux. We can also use it for functional components, but using hooks is more convenient there. To use this when exporting the class we will export the connect function and pass the component class as argument when the function is executing. This is a 2 step execution. First it will call the connect method and it will return a function as result, the obtained result function will be called immediately with the component as argument. This is called **currying**. The connect function also wants some arguments. The first argument is a function that maps the redux state to props which we will receive in the component. We should define this function outside of the class component.

We can choose any name for this function but a common convention is to use `mapStateToProps`. This function will automatically receive the state as argument. This is the equivalent of `useSelector `hook. This function will return an object and the keys of this object will be available as props in the receiving component. For the values we can drill into the redux state and set it for the keys of the objects. We will pass the mapStateToProps as first argument to the connect function.  
The second argument to the connect function is `mapDispatchToProps `which also we should define. This is equivalent of `useDispatch `hook. This let's us define dispatch functions inside of props which we can use inside of our component. These functions when executed will dispatch an action. The `matchDispatchToProps `will automatically receive the `dispatch `function as argument.

This will also return an object where the keys are prop names, and for the value we will define anonymous function which will call the dispatch method with the specified action passed as argument. We can use these keys(props) as functions inside of the component class. Even when using the connect function react redux will create a subscription and manage the subscription for you. The code will look like:

```javaScript
import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
```

```javaScript
class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler() {}
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

We will also have actions that has values. We can also pass additional data when dispatching actions. We can do this by passing the data in different keys when dispatching the action. We can extract the values passed in the reducer function by accessing the keys from the action object. For example:

```javaScript
 const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };
.....
        <button onClick={increaseHandler}>Increase By 5</button>
```

From the component function we can dispatch an action like this and inside of the reducer we can use like:

```javaScript
if (action.type === "increase") {
    return {
      count: state.count + action.amount,
    };
  }
```

Note that the key name that we passed from the dispatch should match the key name we have in the reducer function.

We can also manage multiple states inside of a store. For this we need to manage the state in the reducer function for all the action types so that the state remains consistently across updates. For example in the above example code if we add an additional state for showing the counter the reducer function will look like:

```javaScript
const counterReducer = (state = { count: 0, showCounter: true }, action) => {
  if (action.type === "increment") {
    return {
      showCounter: state.showCounter,
      count: state.count + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      showCounter: state.showCounter,
      count: state.count - 1,
    };
  }
  if (action.type === "increase") {
    return {
      showCounter: state.showCounter,
      count: state.count + action.amount,
    };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      count: state.count,
    };
  }
  return state;
};
```

To use this we can use the `useSelector `hook to extract the data. Like:  
` const showCounter = useSelector((state) => state.showCounter);`

**NOTE**: From the reducer action we will always a brand new object which redux will use to replace the existing state. The objects we are returning from the reducer will not be merged with the existing state object. They will be overridden. So it is important that we should maintain the other state values when we are updating a piece of state.  
Even when you directly change the value from a state object inside of the reducer it will work, but you should not do this when working with redux. You should never mutate the existing state when working with redux. You should always override it by returning a new object. You should never mutate the state values directly. Always copy the values and then only mutate and return a new state.

The more complex our project becomes the more it is difficult to use redux correctly. There is a slightly easier way of using redux. The potential issues we might face when our application grows and we have more number of states we need to manage with redux are:

- Action types: We need to make sure that there are no typos in the action identifiers. We should also ensure that the identifier names are unique. As a workaround we can create constants to store the identifier values across the application.
- State data: The more data we need to manage the larger the state object will be. We will need to copy our state properties and the reducer function will get longer. This makes the redux file large.
- State immutability: We need to respect the state immutability. If we have a complex application we will have nested objects and arrays inside of the state, in such cases it is easy to make mistakes and change the data.

There is a library called redux toolkit, which makes it easier to work with redux. To install this we can use:  
`npm install reduxjs/toolkit`  
We can uninstall `redux `package because it is already included in the redux toolkit package.

To use this we can go to the js file in the store and import the `createSlice `from the` reduxjs/toolkit` package. There is also a `createReducer `function but the `createSlice `function is much more powerful.  
The `createSlice `function want's an object as an argument. What we are trying to do with `createSlice `is that we are creating a slice of the global state. When we have different pieces of states that are not related, we can create different slice(potentially in different files) to make our code maintainable. Every slice need a name which we define by setting the `name `key. We can give any string of our choice as value for this key.  
The second key we need to set is the `initialState `key. We need to set the initial state object here which defines the values of the states initially.  
The third key we need to set is the `reducers`. It is also an object (map) for all the reducers that will work with this slice. We can create methods inside this with any name of our choice.

Every method we define in this will receive the latest state automatically. These methods will be called for you by redux. They will also receive the action, but we don't need that here because, these methods will be called automatically depending on the action that is triggered. We don't need to write separate if checks any more, this also reduces some boiler plate code.  
Inside of these methods we are allowed to mutate the state. Because redux toolkit internally uses `immer `which is a javascript package which convert these direct state mutations into immutable state mutations. They will clone the existing state, create a new state object, keep the states which are not edited and override the state which we are editing in an immutable way. So the developer don't need to worry about immutability.  
We can use the automatically received action object for the reducer functions to extract the payload. It is not mandatory to accept this attribute if we are not using it inside the function.

The code will look like:

```javaScript
import {createSlice} from "@reduxjs/toolkit";
 
createSlice({
  name: "counter",
  initialState: {count: 0, showCounter:true},
  reducers:{
    increment(state){
      state.count++;
    },
    decrement(state){
      state.count--;
    },
    increase(state, action){
      state.count = state.count + action.amount;
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter;
    },
  }
});
```

To use the slice we need to capture the return value of the `createSlice()` method. Then to the `createStore `method pass `reducer `object of the created slice object. This is fine if you have only one slice. But if you have multiple slices we cannot reducers of individual slices to the `createStore `method, instead we will use the `configureStore `method from the `@reduxjs/toolkit module`. This is similar to createStore but makes the process of merging multiple reducers into one reducer easier. To this configure store we can pass a configuration object. On this object we will set the `reducer` property. Even if we are using this `configureStore `method it still only needs a single main reducer function. If there is a single reducer we can pass it like `sliceObject.reducer`. If we have multiple reducers we can pass an object to the reducer. We can set keys with any name for the individual reducer and pass the reducer of the slice object as value.

Behind the scenes the `configureStore `will convert all the reducers method into a single method.

The `createSlice `will automatically create unique identifiers for our different reducer functions. We can access them by using the `sliceObject.actions` property which will have action creator methods which we have the same name as defined inside of the reducer. But when we call them it will create an action object for us. So these methods are called action creators. These actions will have a unique type property for each action automatically created behind the scenes. Calling these action creator methods will dispatch the particular action.  
As a developer we don't need to create action objects on our own, create unique action identifiers and worry about typos.  
We can export the `sliceObject.actions` from the redux file so that we can access this action creator function in other files. The complete store file will look like:

```javaScript
import { createSlice, configureStore } from "@reduxjs/toolkit";
 
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
},
    increase(state, action) {
      state.count = state.count + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
 
 
const store = configureStore({
  reducer: counterSlice.reducer
});
 
export const counterActions = counterSlice.actions;
export default store;
```

To use these actions, import the exported actions object. To trigger an action, call the `dispatch()` method and pass it the result of calling the specific action creator (e.g, `dispatch(actions.someAction())`). You must invoke the action creator function (using parenthesis ()) at that moment. This ensures you are passing the actual action object to `dispatch()`, rather than passing the function definition itself.  
If we have payload we still call the action creator function, but we will pass the payload data to this function call as argument. We can pass any type of data, but care should be taken when we are extracting the data. Any data we pass to the action creator will be stored in the `payload `property of the action object. The name payload is set by the redux toolkit and we cannot change it. So we should extract the data from the payload property. Example of dispatching actions:

```javaScript
import { counterActions } from "../store/index.js";
 
const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const counter = useSelector((state) => state.count);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
 
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
 
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  return (
...........);
}
```

Even though we can manage multiple states inside of a single slice, it may not be suitable in all cases. It is a good idea to separate the concerns. We can create another slice using the same `createSlice `function and initialize it with different initial values and the reducers. In the `configureStore `method we can then set the reducer as an object and pass the different reducers as a map where key can be any string and the value is the reducer object of each slice object. Example:

```javaScript
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
```

To use the values of the state inside of the components we need to use these keys to access those values when using the `useSelector `hook. In the example scenario if we want to access the state for the counter slice we need to use like:

```javaScript
const counter = useSelector((state) => state.counter.count);
const showCounter = useSelector((state) => state.counter.showCounter);
```

This might look counter intuitive inside of the selector we are first accessing the specified slice's reducer to get the latest state and then we are accessing that respective property from the state.

When using redux toolkit it makes sense to create separate files for every slices. We will manage the state specific to that slice in this file. It will look like:

```javaScript
import { createSlice } from "@reduxjs/toolkit";
 
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export default authSlice;
```

We can import this slice in the main store file where we configure our store. Or alternatively we can export the reducer object of the slice from the slice file, since we are only using the reducers of the slice in the main store file.  
Like:  
`export default authSlice.reducer;`  
And in the main store file we can import it as:  
`import authReducer from "./auth.js";  
`If you are using the above method you will also need to export the action from the same slice file like:  
`export const authActions = authSlice.actions;`

**NOTE:** The reducer functions in redux must be pure, side effect free and synchronous.  
When working with code with side effects we can write the code that have side effects inside of the component with the `useEffect `hook, and after this we can dispatch the action.  
Another alternative is to create our own action creators, as part of these action creators we can perform asynchronous tasks without changing the reducer function.

In some cases the backend will not do all the work the work. We might need to format the data in such a way that it is acceptable in the backend. This is the case for backends like firebase. We cannot send the http requests from the reducer functions, as mentioned previously we have 2 options which we can use for this. We can write it inside of the component or inside of the action creator.  
In a regular component we cannot mutate the state directly, it is only possible inside of the reducer functions. If we mutate it the redux store will not be aware of the change and the change will exist only in memory. This is why we don't directly modify the states in redux inside of a component.  
For side effect free code such as data transformations reducers are preferred. Avoid action creators or components for cases where we have asynchronous code (code with side effects).

When we want to sync the local redux state with the data in the server we can listen to the changes of the state inside of a component and when the state is changed we can make the http request. We can use the `useEffect `hook for this. The example code will look like:

```javaScript
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import {useEffect} from "react";
function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector(state=>state.cart);
  useEffect(()=>{
    fetch("https://shopping-website-46-default-rtdb.firebaseio.com/cart.json", {method: "PUT", body: JSON.stringify(cart)});
  },[cart]);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}
 
export default App;
```

If the state is used app wide we can place that logic inside of the app component. In this case we will update the state first inside of the redux store and once that update is completed then only we will send http request to the backend.  
An issue with the current approach is that whenever the application starts the cart is empty, so when even if there are items in the cart in the backend this will be overridden to empty. To fix this we can create a global variable inside of the component file, something like `isInitial = true`, and we can check it's value before sending the data through fetch inside of `useEffect`. It will look like:

```javaScript
if(isInitial){
      isInitial = false;
      return;
    }
    sendCartData().catch((error) => {
.....
```

Since this variable is set outside of the component function it's value will remain the same. We are setting it false before returning from the useEffect function. So this way the above mentioned issue is resolved.

If we are dispatching an action inside of `useEffect`, we should add it to the dependency array. We can safely add it to the dependency array because react will ensure that only one instance of the dispatch is created for the component.

There is an alternative to putting all the side effect logic into the component. This is through the form of action creator. We have already used the action creator. For dispatching actions when using the redux toolkit we used the action creators which are provided by redux. We can also manually create those action creators. This is done through **thunks**. Thunks are functions that delays an action until later. We can create an action creator as a thunk which does not immediately return the action object but returns another function which eventually returns the action (In javascript we can write functions that return functions). This way we can run some code before actually dispatching the action.  
Thunks are also created in the same file as slices. We typically write thunks after creating the slice.

We can return another function from the thunk function. This will receive dispatch function as argument. With dispatch we can perform the actual action we want to perform. Before we call dispatch we can write any code that that has side effects. We can also dispatch other actions from other slices inside of a thunk function. We can make the returning function async and perform asynchronous operations inside of the function. We can also create additional async functions inside of the function that is returning. Example of thunk function:

```javaScript
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      }),
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://shopping-website-40246-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) },
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Send cart data successfully!",
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        }),
      );
    }
  };
};
```

The great thing about redux toolkit is that it will also accept action creators that return functions apart from the regular action object with a type property. If we are passing an function instead of the action object it will execute that function for you and it will provide that dispatch argument automatically. This way in that executed function we can dispatch again. Therefore we can create action creators that can handle side effects and dispatch other actions. To actually use the above defined function we can also use the dispatch() method. Inside it we can call this function with the relevant argument. The code will look like:

```javaScript
import { sendCartData } from "./store/cart-slice.js";
.....
useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
```

You can choose any method you want but the above method make the component function leaner.

If the slice file is getting bigger we are free to create separate files for creating the thunk functions.  
For fetching the data from the backend we can also create a thunk function and perform the API call from there and set the data to the redux store using actions which let's us set the state. The code will look like:

```javaScript
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://shopping-website-40246-default-rtdb.firebaseio.com/cart.json",
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        }),
      );
    }
  };
};
```

There is a small problem with the above approach that is when load the page initially it will call for sending the data because in the effect we have added the cart state as dependency. So when we are replacing the cart it will trigger a state update and hence it will send data again after fetching. To avoid this we can add a `changed `property to the cart state. And in the reducer functions where we are changing the state we can set it true where we are truly changing the state. And in the component's use effect function we can check this property and determine weather to send the data or not.

Redux devtools makes the debugging easier. If there are a lot of states and slices for your application it can be difficult to find errors. The redux devtools chrome extension helps you to view all the data managed by redux in the store. It also helps us to see the actions that are dispatched. We can also see the data that is changed by the action. By using the diff tab we can see the difference in the state data. We are also able to navigate to the previous states and see it's impact on the screen. For normal redux we need to do some extra configuration in your code for dev tools to work, but for redux toolkit it will work out of the box.

For complex applications we might need to separate the pages and link pages instead of forcing users to start on the start page and navigate to different areas manually. In some cases it would we easier to provide a url so that it loads a particular page on the screen. But till now we worked with single page application where there is only a single page where the data is displayed and changed with the help of javascript. This is where single page application routing comes into the picture. This helps us to build single page applications that have urls which can open different parts of the application.

In regular websites we can append strings after the domain's url which will take us to that particular page if it exists. We can also use the hyperlinks in the page which let's us navigate to different pages of the website. The core concept is that different url paths shows different content in the screen. In normal websites we use different html files for that. The disadvantage is that we need to fetch new content and a new http request is sent and a response is received. This can break the flow because there might be some lag in between. This might lead to bad user experience. This is why prefer single page applications for more complex user interfaces. For the single page application the browser will send only one request where it will load the html page and a bunch of javascript files associated with the page. This js will take care and adjust what the user is seeing on the screen.

For single page applications we can implement routing by watching over the url and if it changes we can load the corresponding component. This feature is not built into react so for this we need into install a separate package.

We will use the `react-router-dom` package for this. We can install this using:  
`npm install react-router-dom`

Setting up routing is a 3 step process.

The first step is defining which all routes are supported, and which component should be loaded for the corresponding path.

The second step is to activate our router and load the route definitions that defined in the first step.

The third step is to ensure that we have all the components that we do want to load and we provide a means for navigating between those pages so that users can move through different pages.

For the first step we need to go the App.js file and import the `createBrowserRouter `function from the `react-router-dom` package. This allows us to define our routes. To this function we pass an array of route definition objects. Every object will represent one route. We call this function outside of the App function. We should define the `path `property for the object (path is the part that comes after domain). This path property determines the route to be activated. We typically store the pages of the application in a folder named pages (though you can name it as you want). The second property of this object is the `element `property. The element property defines the JSX element to be loaded corresponding to the specified path. You can pass any code you want but typically you will pass JSX elements. We should store the value returned by the `createBrowserRouter `into an object to use it for routing.

To tell react that this router object should be used we need to import the `RouterProvider `component from the `react-router-dom`. It is a regular JSX component which we can wrap with other JSX code. From the app component for now we can only only return the `RouterProvider `component so that the components are loaded corresponding to the paths. The `RouterProvider `component has a `router `prop to which we will pass the router object we got from the `createBrowserRouter`. The example code will look like:

```javaScript
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.js";
const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);
function App() {
  return <RouterProvider router={router} />;
}
 
export default App;
```

This will load the HomePage components as the default page(when you have no route specified with the URL) when you open the application initially.

We can add any number of paths to this `createBrowserRouter `array as objects by defining the path and the element which should be loaded based on the path. If you try to visit a path which does not have corresponding component it will throw an error in the page generated by react-router-dom.  
The above defined approach is the newest form. In the older versions of react router we define routes within the JSX code, instead of defining javascript objects.  
Alternatively we can use the `createRoutesFromElements `function from `react-router-dom` package. This lets us define the routes in JSX code. The example code will look like:

```javaScript
const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>,
);
```

This also servers the same purpose. Note that we should import the Route component also from the `react-router-dom `module.

For the above code to work we should pass the `routeDefinitions `object to the `createBrowserRouter `funciton. Like:  
`const router = createBrowserRouter(routeDefinitions);`  
You can choose any approach as you wish.

We provide links in the pages so that users can navigate to different routes without manually entering the route in the url of the browser. We can use the anchor tag and set the href attribute to navigate to the path when the user clicks on the link. But there is a potential problem with this approach. When user clicks on the link it will send a new request to the server that serves the page and fetches back the page (component) corresponding to the route. Simply put the page refreshes. This causes all the javascript code to load again. This will impact the site performance which we want to avoid.  
To prevent this default behavior we can use the `Link `component provided by `react-router-dom`. We should import it in the component where we want to implement the navigation. We use this component instead of the default anchor element. It has a `to `attribute instead of the ref attribute. For the to attribute we will specify the path to which we want to navigate.

The link component under the hood uses the anchor element, it listens for clicks on that element, prevents the default behavior that sends http request, then it looks at the route definitions to update the page accordingly and loads appropriate content. It will also change the url without creating an http request.

```javaScript
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <h1>My home page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
}
 
export default HomePage;
```

The Link tag will only work inside of the `RouterProvider `component. So we cannot use it outside or the same level as the `RouterProvider `component. What we can do is create a wrapper for wrapping the other components and load that as the first page of the app by setting it into the root path. Then we should use the `createBrowserRouter `method to create the routes, set this component as the root by setting the path and element. Also we add an additional `children `property to this object. This is set as an array. This array is used to set more nested route definitions. The root component will act as wrapper to these routes. In the wrapper component we should define the position of the children components should be rendered.  
The definition of wrapper will look like:

```javaScript
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);
```

To specify the position of the child components in the wrapper component we must import the `Outlet `component from the `react-router-dom`. This component marks the place the child component is rendered. The `RootLayout `component will look like:

```javaScript
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.js";
function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}
 
export default RootLayout;
```

We add other routes as children of the wrapper route. If we are having a large application we will have multiple wrapper components based on the functionality.

To set up an error route we can provide a `errorElement `definition to our route definition to define which page should be loaded when an error occurs. We can use this on any route. Error will be generated automatically by react router dom if we visit a page that does not exist. The code to define error page will look like:

```javaScript
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);
```

In modern websites the active item on the nav bar will be highlighted, also user will get a feedback when he hovers over the nav bar item. This behavior is easy to support with react router dom. We can set up the styles for the hover and active items using CSS. To show the active page react-router-dom has an alternative to the `Link `component. It is the `NavLink `component. It has a special behavior, if we add a `className `prop which will take in a function as value. The function should return the css class name that should be added to the anchor tag. The function automatically receives an object from which we can de structure the `isActive `property. This is a boolean which returns true if the link is presently active. We can check this and conditionally apply css classes for active nav bar items. We must do this for all the links in the navbar. The code will look like:

```javaScript
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
 
export default MainNavigation;
```

We can also use the `style `prop the same way as we have used the `className `prop (passing a function as prop value and de-structuring the `isActive `property from the object) and set inline values.

In some situations we will want to trigger a navigation programmatically for this we can use the `useNavigate `hook provided by the `react-router-dom` package. We can then call that in our functional component to get access to the navigate function. This can be used to trigger a navigation action from inside of your code.

```javaScript
import { useNavigate } from "react-router-dom";
......
 const navigate = useNavigate();
  function navigateHandler() {
    navigate("/products");
  }
.....
<button onClick={navigateHandler}>Navigate</button>
```

The most important feature of react-router-dom is the ability to create dynamic routes. For example if we have a list of products in our products components. When we click on the component it should show the product details. We can create such a product details page. Every time we will load the same product detail page when user clicks on a product item, but the data should be different for different products. We could not possibly hard code every path for every product. This is why react-router-dom supports dynamic path segments (path parameters). We add such a path parameter by specifying a `:` and any name of your choice. This signals react router dom that this part of the route is dynamic. We can have more hard coded segments after the dynamic segment. We can pass any value of our choice for the dynamic segment. The code will look like:

```javaScript
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductDetails /> },
    ],
  },
]);
```

In the product details page we can access the dynamic path segment's value. We can use the `useParams` hook provided by react-router-dom for this. This hook gives us a params object when we call it. This params object is javascript object which contains every dynamic path segment defined in our route definition as a property. We should use the exact name of the dynamic segment to access the value from the params object. The example code will look like:

```javaScript
import { useParams } from "react-router-dom";
function ProductDetails() {
  const params = useParams();
  return (
    <>
      <h1>ProductDetails</h1>
      <p>{params.productId}</p>
    </>
  );
}
 
export default ProductDetails;
```

We can also use template literals for creating dynamic paths like:

```javaScript
import { Link } from "react-router-dom";
const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];
function ProductsPage() {
  return (
    <>
      <h1>The products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
 
export default ProductsPage;
```

The paths we defined till now are absolute paths. This is what we sees after domain name. Suppose if we change the name of the `/ `path to `/root` like :

```javaScript
const router = createBrowserRouter([
  {
    path: "/root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductDetails /> },
    ],
  },
]);
```

We will get an error like:

`Absolute route path "/" nested under path "/root" is not valid. An absolute child route path must start with the combined path of all its parent routes.`

To fix this we should make the children path relative by removing their leading `/`. This means that the relative paths are appended after the path of the wrapper route. Like:

```javaScript
const router = createBrowserRouter([
  {
    path: "/root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetails /> },
    ],
  },
]);
```

This same rule will apply for links also.

We can also set the `relative `prop to the Link component. It's value can either be `path `or `route`. The default is

`route`.  
We can use the `..` in the `to `prop of `Link `tag to go back. This is resolved based on the route definitions. If we are placing this in a sibling routes it will go back one level to the wrapper path. If we set the relative `prop `to `path`, now react router will look at the currently active path and remove one segment from the path.  
This prop does not work with absolute paths.

If we have a path like:

`path: "", element: <HomePage />`

We can use the `index `property and set it `true`. This will turn the route to an index route which means that it is the default route that will be displayed if the parents path is currently active.

If you you have 2 routes like:

```javaScript
        { path: "/events/:id", element: <EventDetailPage /> },
        { path: "/events/new", element: <NewEventPage /> },
```

You don't need to worry about whether the first route will override the second route or not. The first one has a dynamic path at the end and the second route has a static name. Both has the /events as prefix. The react router is smart enough to distinctly identify them. The /new route is more specific and can easily be identified without problems by react router.

We can also create deeply nested routes like:

```javaScript
const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsRootLayout />,
          children: [
            { index:true, element: <EventsPage /> },
            { path: ":id", element: <EventDetailPage /> },
            { path: "new", element: <NewEventPage /> },
            { path: ":id/edit", element: <EditEventPage /> },
          ],
        },
      ],
    },
  ]);
```

**NOTE:** Always use end `prop `when using the the `NavLink `component.

When we are using the `useEffect `hook to fetch the data inside of a component, the component is loaded first without the data and when the data is available it is shown on the component. We use loading states in this approach.  
React router helps to avoid this by first fetching the data and then render the component. If we are using react router version higher than 6 we don't need to write the code for fetching data and handling the different states, instead react router will help you with all that. This can be done by adding an extra property in the route definition. We can add the `loader `property. It requires a function as value (a regular function or an arrow function). This function will be executed when you are about to visit that route for which the loader property is specified (Before the component function of the specified element is executed). Inside this function we can load and fetch your data. Since we are using async await we can mark the function as async.

After fetching the data we can return it from the function. If we do so react router will make sure that it will provide the data to the component to which it is needed. The code will look like:

```javaScript
 {
              index: true,
              element: <EventsPage />,
              loader: async () => {
                const response = await fetch("http://localhost:8080/events");
 
                if (!response.ok) {
                 //...
                } else {
                  const resData = await response.json();
                  return resData.events;
                }
              },
            },
 
```

To get the data from the loader we need to go to the component we need to import `useLoaderData `from `react-router-dom`. This is a special hook which let's you access the closest loader data. We can simply call this hook and accept the value into an object. This will have the data returned from the loader. We might think that the data returned from the async loader function is a promise. But the `useLoader `hook will automatically convert the data and give us the data. The component code will now look like:

```javaScript
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
 
function EventsPage() {
  const events = useLoaderData();
 
  return (
    <>
      <EventsList events={events} />
    </>
  );
}
 
export default EventsPage;
```

As you can see it makes the component function more leaner and easier to read.

We can also use this hook in other components which are children of the component.  
We can use this hook in a higher level route. If we try to do so we will get undefined as response. This is because we are trying to access the data from a loader which is defined on a lower level. This means that we can use the `useLoaderData `hook in the element that is assigned to a route and all the components that might be used inside that element.

We can argue that defining the loader function in the App.js file will make the file bloated and the loader function is actually belonging to the component and not the App.js. So it is a good practice to place the loader function in the component where we actually need to load the data. We can define the function inside of the component function and export it. In the App.js file we can import it and pass it as the value for the `loader `property of the route. The code will look like:

```javaScript
export async function loader() {
  const response = await fetch("http://localhost:8080/events");
 
  if (!response.ok) {
    //...
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
```

And in the app.js:

```javaScript
import EventsPage, { loader as eventLoader } from "./pages/EventsPage.js";
....
 {
              index: true,
              element: <EventsPage />,
              loader: eventLoader,
            },
```

The loader for the page will be executed right when we load that page. The element will load when ever the data is available, if there is a delay in fetching the data that delay will be reflected when navigating to the page. The advantage of this approach is that we can rely that the data will be there when the component is loaded. This let's us avoid the use of loading state. The downside of this approach is that there is a delay which looks to the user like nothing is happening.

React router provides us with an option to show feed back based on what is happening. React router provides a special hook which let's us check the current route transition state. We can use the `useNavigation `hook to determine whether we are in an active transition to load the data or if we have no transition. This hook returns a navigation object. We can access the state property of this object, and by checking it's value we can determine the state. It's values are defined as string by the react router dom. The possible values are `"idle", "loading", "submitting"` . We can check this value to show the loading state to the user.

```javaScript
import { Outlet, useNavigation } from "react-router-dom";
...
const navigation = useNavigation();
{navigation.state === "loading" && <p>Loading.....</p>}
```

**NOTE:** The loading indicator won't be added to the page which you are transitioning into, but to some page or component which is already visible on the screen when the transition is started.

We can return any kind of data from loader function. We can also return a response object. We can create a response object by creating an instance of the build in `Response `class. This class is built in in the browser. The loader is still part of the client side code. The Response constructor takes in any data of your choice as first argument. We can configure additional things by passing an object as second argument like status codes. When return such a response from the loader the react router package will automatically extract the data from the response when using the `useLoaderData `hook. So we will get access to the data send from the loader easily.  
The fetch function which we use to communicate with backend API will return a response object(promise of type Response). Since the react router package automatically extracts the data from the response it is ok to return the response object directly from the loader without any additional configuration. Like:

```javaScript
export async function loader() {
  const response = await fetch("http://localhost:8080/events");
 
  if (!response.ok) {
    //...
  } else {
    return response;
  }
}
```

We don't need to parse the data into json. But we still need to extract the required data from this object when we want to use the data. Like:

```javaScript
  const data = useLoaderData();
  const events = data.events;
```

So this way we can reduce the amount of code in the loader function by leveraging the support of react router dom to parse response objects automatically.

We can use any browser specific api inside of our loader function, because the code is still client side code which runs in the browser. But we cannot use react hooks inside of this.

To handle errors in the loader function we can return an object which has the error message and any other additional keys if you want. In our component code we can check if the data has error we can show the error message by returning JSX code. The code will look like:

```javaScript
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
 
function EventsPage() {
  const data = useLoaderData();
  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}
 
export default EventsPage;
 
export async function loader() {
  const response = await fetch("http://localhost:8080/events");
 
  if (!response.ok) {
    return { isError: true, message: "Could not fetch events..." };
  } else {
    return response;
  }
}
```

This is one possible approach.

Alternatively we can throw an error object by using the built-in `Error `constructor, or by simply throwing an object with the error message. When an error gets thrown inside of a loader something special happens. The react router will render the closest error element. The `errorElement `we have seen earlier is not just for showing an error page if there is invalid route. The error element will be shown whenever an error is generated in any route related code including loader. We can place the `errorElement `property for the root path it will be triggered if there is any error in any of the children. We can also have `errorElement `property in the children routes too. If we define such property, incase of error in the route that error element will be shown.

It is a good practice to handle 404 errors(route/page not found) with errors in the component. For this inside of the loader instead of throwing an error we can return a response with a message. We must stringify the argument when we are passing an object as response. The second argument must be an object which will return the status code. Like:

```javaScript
throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
```

We can get a hold of the data which is getting thrown as an error inside of a component that is rendered as the `errorElement`. Inside this component we should import the `useRouteError `hook provided by the `react-router-dom`. Then when we call this hook inside of the component function it will return an error object. The shape of the error object will depend upon the shape of the response that is thrown from the loader. If we set a status code it will have a status code which will reflect the status of the response thrown.

If you threw a regular kind of javascript object then this error object will have that object only. Throwing a status code is a good option because it will let us create a generic error component and display the results in that component dynamically based on the status code.  
The message of the response will be inside the `data `property of the error object. Note that we must parse the data object to access it. The code will look like:

```javaScript
import PageContent from "../components/PageContent.js";
import { useRouteError } from "react-router-dom";
import MainNavigation  from "../components/MainNavigation.js";
function ErrorPage() {
  const error = useRouteError();
  let title = "An error occured!";
  let message = "Something wen wrong!";
 
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find the respource for the page.";
  }
  return (
    <>
      <MainNavigation/>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
 
export default ErrorPage;
```

It might be a little difficult to construct the response object manually and throw it in case of an error. To fix that react router provides a special utility. This helper is available in react router version 6\. For this we need to import the `json()` hook from the `react-router-dom`. Then return the json() from the loader. To the json function we must pass our data that needs to be sent as argument (object). This way we don't need to manually stringify the our data to json before sending it. We can also send extra response metadata as the second argument.  
We can also avoid parsing the data manually from when accessing the error data inside of the react component.  
**NOTE:** This is not supported in the latest version of react-router-dom.

We can still get access to route parameters inside of the loader function. The react router dom will automatically pass an object to the loader function when it is executing it. This object contains 2 important pieces of data the `request `property which contains the request data and the `params `property which contains the request params. The request property can be used to access certain things like the url, query parameters etc. We can get access to all the route parameter values using the params property like we used the `useParams`. After defining the loader we must register the loader with the route. The code will look like:

```javaScript
export async function loader({request, params}){
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/"+id);
  if(!response.ok){
  throw new Response(JSON.stringify({message: "Could not fetch details of the selected event"}),{
      status: 500
    });
  }else{
    return response;
  }
}
```

We can use the data returned from the loader inside of the component using the `useLoaderData `hook like we did before.

If two routes use the same data, we don't need to create separate loaders, instead we can create a common parent route and add the routes which share the same data (similar route name). For that parent route we don't need to provide an element property. We can avoid the element property if we don't need a shared layout. In the children we can specify the relative path with respect to the parent route and specify the element. We can then specify the loader for the common parent route, this way the loader can be shared. The code will look like:

```javaScript
{
              path: ":id",
              loader: eventDetailLoader,
              id: "event-detail",
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                },
              ],
            },
```

By default the react-router-dom looks for loader in the route definition of that particular element. In the above case we have defined the loader in the parent route. So to make sure that the loader is available for the child route we should add a special property to the parent route called `id`. We can provide any string of our choice as value for this. To access the data we will use the `useRouteLoaderData `hook inside of the component which wants to access the parent loader. This hook works similar to that of `useLoaderData `but it takes a route id as argument. The code will look like:

```javaScript
import { useRouteLoaderData } from "react-router-dom";
export default function EditEvent() {
  const data = useRouteLoaderData("event-detail");
......
```

We can use actions of the react-router-dom to send data, like we used loaders to load data.

To add action to a route we add the special action property to the route definition. The action wants a function as value. We typically define the function inside of the component file to keep the code organized. The action function is similar to loader function. It is still client side code so, we can access any client side code here. To access the data from the form we must ensure 2 things:

1. We must replace the `form `element with the `Form `component which is imported from the `react-router-dom`. We should also specify the `method `prop and set it's value based on the method we want to use like GET, POST, PUT, DELETE etc.
2. We must ensure that all input elements have a `name `attribute with a value specified.

This special Form component will make sure that the request and the data from the form is sent to the action.

To get the data from the form component inside of the action function we can accept an object which will have some helpful properties. We can de-structure those properties to get a hold of the data. The properties are `request `and `params `property. The request object will have the form data. To get a hold of the form data we need to call the `formData()` method on the request object (make sure to await this). We can accept this into an object and from this object we can access individual fields of the form by using the `get()` method with the name of the field as argument. The action function will look like:

```javaScript
export async function action({request, params}){
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  }
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers:{
      'Content-Type': "application/json",
    }
    body: JSON.stringify(eventData)
  });
  if(!response.ok){
    throw new Response({message: "Could not save event."}, {status: 500});
  }
}
```

To add this action to the route we can do it like:

```javaScript
import NewEventPage, {
  action as newEventAction,
} from "./pages/NewEventPage.js";
..........
..........
 { path: "new", element: <NewEventPage />, action: newEventAction },
```

In the above example nothing will happen after the data is sucessfully submitted to the backend, because we haven't specified anything after the request is successful. To redirect the user to a different page upon submission of the data we can use the `redirect `function which can be imported from `react-router-dom`. It creates a response object which redirects the user to a certain page. The updated code will look like:

```javaScript
import {redirect} from "react-router-dom";
.......
export async function action({ request, params }) {
.......
  return redirect("/events")
}
```

We can send the data from the `Form `component to any other path using the `action `prop and specifying the path to which the data needs to be send (That route's action function will be triggered). If we use the form component to trigger an action it will not ask for any confirmation (if we have any confirmation code).

To overcome this we can trigger an action programatically. We can use the `useSubmit `hook for this provided by the `react-router-dom`. Calling this hook will give you a submit function. To trigger the action we can call this submit function. The submit function requires 2 arguments, the first argument is the data that we want to submit. This data will automatically be wrapped in a form data object when the data is sent. If we don't need to send any data we can use `null`. The second argument is an object which has similar properties which we set to a form. We can specify the request method, the action path if we have a different action path.

We can extract the request method inside of the action function from the `request `param. The example code will look like:

```javaScript
import { Link, useSubmit } from "react-router-dom";
function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
....
```

We can provide a feed back on form submission and disable further submission if the form by disabling the submit button of the form.  
The `useNavigation()` hook provided by `react-router-dom` is different hook when compared to `useNavigate()`. The use navigation object provides access to a navigation object. We can access different properties from this such as the data that was submitted. What we are interested is the state of the current transition when we are submitting a form. We can track weather the action is submitted. We can use the `state `property of the navigation object and check weather it's value is `submitting`. We can use this value to disable the submit button. The example will look like:

```javaScript
import { Form, useNavigation } from "react-router-dom";
.......
  const navigation = useNavigation();
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...': "Save"}</button>
      </div>
```

You should never rely solely on client side validation because they can be turned off with dev tools. So you should also validate the data on the server side so that incorrect data is not stored.  
To offer a good user experience the errors should be shown in the form itself without using the generic error page. To show such an error message we can return the response object directly from the action function. We can use this returned response object in our component. We can use the `useActionData `hook provided by the `react-router-dom` for this. Calling this hook will provide the data returned by the action. It will provide the data returned from the closest action. React router dom will automatically parse the response object and provide the data so that it is readily accessible.

```javaScript
import {
  Form,
  useNavigation,
  useActionData,
} from "react-router-dom";
 
import classes from "./EventForm.module.css";
 
function EventForm({ method, event }) {
 ........
  const data = useActionData();
....
 return (
    <Form method="POST" className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
......
```

The example code will look like above.

We can reuse action functions. If you use the same form multiple times for different purposes (for example we can use the same form for adding data and editing data), we can create a common form component and set the method attribute of the form dynamically. We can get access to this method in our action function to differentiate between the requests. We can extract the request method from the request object. This can be used to set the method attribute of the request which we are sending to the backend. There might also be changes in the url so we need to adjust accordingly to make sure that the action function can be reused. We can also store the action function in a separate file if we want, but to make it more readable and meaningful we can place it with the reusable form component we created.  
**NOTE:** When checking the method type in the action function we should check with capital letter request method names. Like POST, PATCH etc.

In React Router, using the standard `<Form>` component typically triggers a route transition after an action completes. To avoid this, use the `useFetcher()` hook. It returns a `fetcher` object containing a `Form` component that submits data to an action or loader **without navigating** away from the current page. This allows you to handle background updates in components with multiple actions, whereas the default `<Form>` will redirect the user to the action's route upon submission.

The fetcher object also provides ways to access the data returned by loaders and actions. We can also provide feedback to the user if the action is succesfull using the same fetcher object. The `state `property of the fetcher tells you the status of the operation that is happening behind the scenes. It's values are `idle`, `loading `or `submitting`. This can help you with updating the UI. For that we can use `useEffect` and check the message from the action and provide a feedback to the user. The example code will look like:

```javaScript
import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";
function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);
  return (
    <fetcher.Form
      method="post"
      className={classes.newsletter}
      action="/newsletter"
    >
      <input
        name="email"
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button type="submit">Sign up</button>
    </fetcher.Form>
  );
}
 
export default NewsletterSignup;
```

In some cases we might need to show the page or some parts of the page before the data is there from the loader. When using the loader the page will be displayed only after the data is loaded successfully. In these cases we can defer loading and tell react router that we want to render a component even though we don't have the data for that. For this we need to go to the file where the loader for that route is placed and outsource the logic that fetched the data into a separate function. Then in the loader function we don't need to await the newly created function, instead we can use the `defer `function imported from react router dom.  
**NOTE:** The defer function is not available in react router version 7 and above.

To the defer function we will pass an object, in this object we will bundle all the http requests that will go from the page. We can set a key name of our choice and call the outsourced method for the http request. Here we need to call the method instead of passing a pointer. The data returned from the function will be placed as a promise inside of this key. There should be a promise so that we can defer, if there is no promise we cannot defer. From the loader function we will return the value returned by the `defer `function. The code will look like:

```javaScript
import {defer} from "react-router-dom";
.....
async function loadEvents(){
  const response = await fetch("http://localhost:8080/events");
 
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
export async function loader() {
  defer({
    events: loadEvents(),
  });
}
```

We cannot use the data directly from the defer inside of our components. Instead we use another component provided by `react-router-dom` which is called `Await`. The `Await `component has a special `resolve `prop which wants one of our deferred values as value. Between the opening and closing tags of the Await component we must provide a dynamic value which is a function which will be executed once the data is there. This function should return the component which uses the data from the loader.  
We should finally wrap the `Await `component with the `Suspense `component. The `Suspense `component is imported from `react`. The Suspense component is used in situations where we need to display a fallback while the data needs to arrive. It requires a `fallback `prop which accepts JSX code as value. This code can be used to display the fallback when the data is loading.  
When using defer we need to manually parse the response and send the data from the helper function which sends data to the defer inside loader.

The code will look like:

```javaScript
import { defer, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
function EventsPage() {
  const data = useLoaderData();
 return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data.events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}
```

This can be helpful if you have multiple http requests in a page with different speeds.

If you have react router version 7 or higher, instead of using `defer()`, you can directly return an object that contains unresolved promises.

I.e., instead of writing this code:

```javaScript
export async function loader() {  return defer({    events: loadEvents(),  });}
```

Use this code with React Router v7:

```javaScript
export async function loader() {  return {    events: loadEvents(),  };}
```

Also make sure to remove the `defer` import at the top of the file.

That's all! No further changes are needed, you still use the `<Await>` component as shown before. So:

```javaScript
export async function loader() {
  return {
    events: loadEvents(),
  };
}
```

We can handle multiple http requests from the component using the defer method. For this we can create separate functions for each request and call it inside of the defer (or inside of the returned object) inside of the loader function.  
Then inside of the JSX code which uses the data from the loader we will need to use as many Await tags as the number of requests. Inside these we can use the dynamic block to add a function which will return the component which needs to access the data. All the `Await `components must be wrapped in independent `Suspense `components, otherwise the `Supsense `component will wait for all the awaits to complete before showing the data. The code will look like:

```javaScript
export async function loader({ request, params }) {
  const id = params.id;
  return {
    event: loadEvent(id),
    events: loadEvents(),
  };
}
```

```javaScript
import { useRouteLoaderData, redirect, Await } from "react-router-dom";
import { Suspense } from "react";
export default function EventDetailsPage() {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}
```

There are cases where we need to show some data first. In this case the defer offers fine grain control. In such cases, if we have an async loader we can await inside of the defer (or inside of the object returned) for the data to be arrived before navigating to the component and load other data after we have navigated to the page. The `await `keyword acts as a switch here to control which data should be loaded before the navigation and which data should be loaded after navigating. Example:

```javaScript
export async function loader({ request, params }) {
  const id = params.id;
  return {
    event: await loadEvent(id),
    events: loadEvents(),
  };
}
```

Certain resources or routes of the backend should not be accessible to everyone. So the react application that want's to access certain resources must authenticate before access is granted. To grant the frontend application to access the data from the backend we need to pass the user credentials to confirm the identity of the user (username and password). The backend will then validate those credentials and send a response based on the credentials. If the credentials are matching then access is granted, otherwise it is rejected. The server must not reply with a literal "yes" or "no", the access must be able to be validated by the server later on when the client requests protected resources.  
To fix the above problem we can use 2 methods:

- Server side sessions
- Authentication Tokens

Server side sessions are suitable for full stack applications where we don't have a de coupled front-end and backend, but this is not ideal for react applications where we have a de coupled front end and backend. The idea behind server side sessions is that after a user is logged in and authenticated we store a unique identifier on the server and map that to a specific client that will be sent back to the client. The client will send that id with future requests which. This id will be checked to determine weather he has access to restricted resources when it request for them. This requires tight coupling of front end and backend to work.

For react apps to solve the above problem we use authentication tokens. The idea behind authentication tokens is that on the server after a user was authenticated we create a permission token (but we don't store it). This token is a string which is created based on some algorithm, the token will have some encoded information. We will send this token back to the client. The validity of this token can be checked and proven by the the backend which created the token. Because token is created with some private key which is only known to the backend. For future requests we will attach those tokens with the requests and the backend will validate the token and determine whether the token was created by that backend. If the token is valid, permission to those protected resources will be granted.

A query parameter is a parameter that is appended in the URL after a question mark. We can define query parameters in the URL to define how query components are rendered. The advantage of this approach is that we can directly link the page to the desired mode with the query parameter. To access the query parameters in a component we can use the `useSearchParams `hook inside of the component which is imported from `react-router-dom`. This hook returns an array, so we can use array de-structuring to get access to the elements in that array. There are 2 elements in that array, the first element is an object will give us access to the currently set query params. The second element of that array is a method which lets us update the currently set query params. We can use the `get `method on the query parameter object and pass the key for which we want to extract the value from query param. This approach is an alternative to using state. Example code will look like:

```javaScript
import { Form, Link, useSearchParams } from "react-router-dom";
 
import classes from "./AuthForm.module.css";
 
function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}
 
export default AuthForm;
```

We can directly provide the link to the login mode in the above example like:

```javaScript
  <NavLink
              to="/auth?mode=login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Authentication
            </NavLink>
```

We can extract the query parameters from inside of the action function. For this we can use the built in URL constructor and passing the `request.url` to construct a new url. We can then access the search params on this object by using the `searchParams `property. Example:

```javaScript
export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  if (mode !== "login" && mode !== "signup") {
    throw new Response(JSON.stringify({ message: "Unsupported mode." }), {
      status: 422,
    });
  }
  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not authenticate user." }),
      { status: 500 },
    );
  }
  return redirect("/");
}
```

We must make sure that we had mapped the action to appropriate route.

We can access the error messages returned by the action inside of a component by `useActionData `hook provided by `react-router-dom` like we have seen earlier.

The example code will look like:

```javaScript
import classes from "./AuthForm.module.css";
function AuthForm() {
  const [searchParams] = useSearchParams();
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
 
  const isLogin = searchParams.get("mode") === "login";
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          ........
          <button disabled={isSubmitting}>
            {isSubmitting ? "Saving...." : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}
```

We need to store the token coming from the backend after we successfully logged in. Then we need to send the token with every request so that the backend can verify the identity of the user. We can store it in memory or inside of a cookie. An easier option is to set it inside of local storage or session storage. We can access the local storage and attach it with the outgoing requests whenever we need it. We should take care in extracting the token received as response from the backend.  
We need to send the token inside of the request header under the `'Authorization'` key. The value of this key should be `Bearer` followed by a white space and the token. This is the typical method used for authentication. The code looks like:

```javaScript
 const token = getAuthToken();
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
    headers:{
      'Authorization' :'Bearer '+ token,
    }
  });
```

We can check the token by going to the browsers dev tools > Application > storage. We can delete the token from here if we want.

We will need to add this token with every request which are protected by backend (requires authentication) from the backend to perform the suitable action.

To perform the logout operation we can create a new action inside of a new file and remove the token stored in the local storage. After this we can `redirect `to the homepage using the redirect hook provided by `react-router-dom` . We can then register this action in the home page, by adding a new route. This route will not have any element, it will only have a `path `and `action`. The code will look like:

```javaScript
import { redirect } from "react-router-dom";
 
export function action() {
  localStorage.removeItem("token");
  return redirect("/");
}
```

The route will look like:

```javaScript
import { action as logoutAction } from "./pages/Logout.js";
.....
.....
{
        path: "logout",
        action: logoutAction,
      },
```

**NOTE:** You should make sure that you do add an extra `return null` statement in all if statement branches where nothing would be returned otherwise to avoid errors.

We can make the token available to all components so that all components can track this and update the UI accordingly. We can use react context which is perfectly fine for handling the auth token through out the application. Since we are using react router we can use add a loader to our root path which extracts the token from the local storage. This token will then be available through out the application. The best thing about this is that once we logout, it will re fetch the token from local storage and if it does not exist, it will update all the pages that uses the loader data. To use this loader inside of other routes, we should add an id to the route which have the token loader. We can then use the `useRouteLoaderData()` hook of `react-router-dom` which will take in the id we defined for the route. This will give us the token. We can check this and perform various actions in our component.

We can protect certain routes which send the data to the backend and require authentication tokens. Normally even if we don't have a valid token certain components in our front end such as forms behaves normally allows us to submit data. But when we send the data to the backend without token to the backend it will cause an error and it will be displayed to the user. To avoid this we can block certain routes if the user is not logged in at all. We can use a loader for this. We can create a loader and check if the token exists. If the token does not exist we can redirect away from the page.

Normally the tokens have expiry time, so we should clear the token when the token is expired. We can place a `useEffect `hook in the root route of the application and set a timeout function which will get triggered after one hour. This approach won't work if we have multiple root layouts. Inside the timeout function we can programmatically call the logout route using the `useSubmit `hook. The code will look like:

```javaScript
import {
  Outlet,
  useNavigation,
  useLoaderData,
  useSubmit,
} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import {useEffect} from "react";
function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }
    setTimeout(
      () => {
        submit(null, { action: "/logout", method: "post" });
      },
      60 * 60 * 1000,
    );
  }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}
 
export default RootLayout;
```

The above solution also has a flaw. The problem is that if we login initially and later if we reload the page (with in 1 hour) the timer is reset again but the token expiry remains un changed in the backend. The backend won't accept this token once it is expired.  
To solve this we can store the expiration of the token along with the token when it is created and stored first inside the browser. We can create a date object and convert it into ISOString and store it as a new value in our local storage. The code will look like:

```javaScript
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());
```

We can create a new function to check if the token has expired and check if it expired or not while fetching the token. The code will look like:

```javaScript
export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}
export function getAuthToken() {
  const token = localStorage.getItem("token");
  const tokenDuration = getTokenDuration();
  if(!token){
    return null;
  }
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
}
```

And in the root layout we can trigger the submit if the token is expired.

```javaScript
 useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }
    const tokenDuration = getTokenDuration();

    setTimeout(
      () => {
        submit(null, { action: "/logout", method: "post" });
      },
      tokenDuration,
    );
  }, [token, submit]);
```

Before deploying the react application we should follow a couple of steps:

**1\. Test Code**: We should test code manually and through automated tests.

**2\. Optimize Code:** We should optimize the code for the deployment. For this we might want to look into a concept called lazy loading.

**3\. Build the app for production:** We will execute a script which is already part of react project. This script will output a production ready bundle of code which is optimized to be as small as possible. We can then move this bundle to the server. Shipping less code is faster because the user will only be able to interact with the application once it is completely loaded.

**4\. Upload the application to server:** We can deploy this output bundle in any server provided by various hosting providers.

Lazy loading is the concept of loading certain parts of code only when it is needed. To understand this concept we should first know about how the code will get built when we don't use lazy loading. In react application we use import statements to use features that are written in other files. So for the code which use these imported code, the imported code needs to be loaded first before showing the content on screen. This means that all code files must be loaded before anything is shown on screen. For smaller applications this is not a problem, but for bigger apps that can be a problem. This can cause the application to slow down when it is initially loaded. This is where lazy loading comes into play, in this we load certain components in the end. We load the components only when they are needed, not ahead of time.

To implement lazy loading in a page first step is to remove the import statement for the component which we want to load lazily. Then we need to re-add it in a way that it is loaded only when it is needed. When we are importing loaders, we can use an anonymous function in place of that loader and inside this function we can call the `import()` method. This method allows us to import items dynamically. To import function we pass a path of the file which we want to import. This function returns a promise. We can either use await or call the `then()` method on this. To the then method we will automatically get the loaded module as argument, we can access the loader function from this module object using the dot operator. The code sample will look like:

```javaScript
     {
            index: true,
            element: <BlogPage />,
            loader: () =>
              import("./pages/Blog.js").then((module) => module.loader()),
          },
```

The loader will be executed when we try to navigate to the path.

When it needs to be executed the code for the loader will be fetched dynamically. To lazy load components we can follow the same approach. We can create a constant which is assigned to an anonymous function which will use the same import function that return the component as a promise. We need to wrap this entire anonymous function with `lazy()` function which is imported from `react`.

```javaScript
import { lazy, Suspense } from "react";
const BlogPage = lazy(() => import("./pages/Blog.js"));
```

Since this component will take some time to load, we should wrap it with the `Suspense `component.

```javaScript
  {
            index: true,
            element: (
              <Suspense>
                <BlogPage />
              </Suspense>
            ),
            loader: () =>
              import("./pages/Blog.js").then((module) => module.loader()),
          },
```

If we have arguments to the loader function when implementing lazy loading we can accept the meta object as argument to the anonymous function and forward that to the loader. like:

```javaScript
 {
            path: ":id",
             element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PostPage />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/Post.js").then((module) => module.loader(meta)),
          },
```

The JSX code you write inside your components are not supported by react so we need to build the application which converts the code into native html, css and javascript. The start script translates the code in real-time so that we can see the changes in the browser instantly. This is not an optimized version. To build the react application we use `npm run build` command. This will produce a highly optimized code bundle which can be uploaded to the server. This will create a build folder. The content of this build folder is what we need. Inside of the static folder we have the optimized javascript files. These javascript files will have all the code you wrote and code from all javascript libraries that you use in your code.

A react single page application is a static website, it only consists of html, css and javascript files. We need a static site hosting provider to host our react applications. Sites like netlify, render, firebase hosting etc. Fire hosting is free and you can host static sites with this. We need to create a firebase project in firebase. To create a hosting inside our project we can go to build>hosting. This will give you a setup process which you can follow.

In a deployed application using **server-side routing**, when a user visits a route, the browser sends a request to the server, which checks if a corresponding file exists and returns it. In contrast, packages like `react-router-dom` offer **client-side routing**, where the browser does **not** send a request to the server for every route change. Instead, the JavaScript code running inside the browser intercepts the navigation, updates the URL, and renders the appropriate component without reloading the page. When deploying the applications with firebase we should reply to the prompt which asks if we have single page application with Yes.

Tanstack query is a library that helps you with sending http requests and keeping your front end user interface in sync with your backend data. We don't necessarily need tan stack query for this we can do the same with `useEffect `and the built in fetch function of javascript. But tanstack query can simplify your code and makes the development process much simpler. It also have more complex features which can be applied to more complex react applications.  
The problem with the traditional react approach is that it requires quite a lot of code. Also if we navigate away from from our active browser tab which runs the application and later when we comeback it will not trigger a re-fetch automatically. Another limitation is that in the traditional react hook approach there is no caching. When we navigate away from a page and come back to the same page again all the data fetching is performed again. We can also perform data fetching behind the scenes.

We can fix the above problems with tanstack query.

To use tan stack query in react we must install it using `npm install @tanstack/react-query` . It will install the latest version.  
We can use tanstack query in components which sends http requests. To use this we must import `useQuery `hook from the `@tanstack/react-query` library. This hook will send us an http request behind the scenes and send us the data that we need. It also gives us information about loading state and errors. To use the hook we must configure it first. For that we should pass an object as argument to this hook. We can set various properties, to pass a function we pass the `queryFn `property and set it's value as a function which we want to call. This function sends the actual http request. The `queryFn `needs a function that returns a promise.  
**NOTE:** Tan stack does not have built in logic which sends http requests. Instead it helps with managing the data associated with those requests. The code to send the request is written by the user.

We should also add the `queryKey `property with the `useQuery `hook. Every fetch request you are sending should have a query key when using this hook. This key will then internally be used tanstack query to cache the data that is yielded by the request. This makes it possible for the response of the request to be reused in the future if we are trying to send the same request again. We can also set for how long the data is stored and reused by tanstack query. This way data can be shown to the user quickly without the need for re fetching. The value of this `queryKey `property is an array of values which are then stored by tanstack query such that when are using a similar array of values tanstack query sees that and it will be able to reuse the existing data. We can provide a string value as element of the array and provide a name of your choice.

We are not limited to strings, we can also use objects or nested arrays.  
We will get back an object from useQuery. We can use object de structuring to pull out contents which are important to us such as `data`. This will have the actual response data. This object will also have `isPending `property which helps to determine the response is received. We can also de structure `isError `from this object which let's us know if there are any errors. We need to throw an error in the function which makes the http request when an error response is received from the backend. We will also get an error property which will contain the details about the error. We can also extract additional properties on this error property if we are sending them with the error.  
If we do the above mentioned steps such as configuring the function and using the `useQuery `hook, extracting the necessary data and use them in our components we will still get an error.

It will show that No `QueryClient `set use `QueryClientProvider `to set one. Because in order to use tanstack react query and useQuery hook we need to wrap our component where we want to use the features with a special provider component provided by tanstack query. We can do this in the App component so that all our components can use the react query. We must import the `QueryClientProvider`, `QueryClient `from `@tanstack/react-query`.  
We must then create a new object of `QueryClient`. We must then wrap our app component with the `QueryClientProvider `component and pass the client prop as the `queryClient `object which we created in the above step.  
The example component code will look like:

```javaScript
import { useQuery } from "@tanstack/react-query";
 
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { fetchEvents } from "../../util/http.js";
 
export default function NewEventsSection() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });
 
  let content;
 
  if (isPending) {
    content = <LoadingIndicator />;
  }
 
  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "Failed to fetch events."}
      />
    );
  }
 
  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <section className="content-section" id="new-events-section">
......
    </section>
  );
}
```

In the app component:

```javaScript
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
```

The advantage of this approach is that if there is some change in the backend if the user visits the website the updated data is fetched instantly without needing to reload the page. This happens automatically.

One of the important feature of tanstack react query is caching. That is when we navigate through our application from one page to another page and when we return back to the first page the data is available immediately without the need for fetching the data again. What happens behind the scenes is that react query is showing the cached data (stale data) immediately and at the same time it will send the request to the associated backend and fetch data, then it will compare it with the query key and updates the UI if the data is changed. It will replace the data silently.  
We can control this behavior by setting the `staleTime `property in the `useQuery `hook's configuration object. This controls after how much the react query sends a request behind the scenes to get the updated data if there is data in the cache. The default is 0, which means that it will use data from the cache, but also it will send a new request. We can set this value in milliseconds.

The request will only be sent if the component is refreshed.  
Another value we can set is `gcTime `or garbage collection time. This controls how long the data in the cache will be kept. The default is 5 minutes. We can set values for this also in milli seconds. After this time the data will be discarded and the tanstack react query will need to fetch the data again.

```javaScript
 const { data, isPending, isError, error } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
    staleTime: 5000,
    gcTime: 30000,
  });
```

We can pass arguments to the query function by wrapping it in an anonymous function and pass the value. We must ensure that the query keys are specific so that they don't over lap and cause undesired caching behavior. We can construct a query key dynamically so that react query can cache different data for different keys based on the same query.

The `queryFn `parameter of the useQuery's configuration object passes some default data to the function when assigned. This data is an object that has properties like `queryKey`, `signal` . The signal key is used to abort the request if the user navigates away from the component before the request is finished. We can de-structure this signal property inside the function which sends the http request using the fetch function and to the fetch function we can pass a configuration object as the second argument. In this object we pass the `signal `property and set it's value to the de-structured object. This can help the request to be stopped when the user navigates away.  
When passing data to this function we should make sure that we are passing data as an object so that we can de-structure that. In such cases we should de-structure the signal object in the anonymous function and forward them to the actual function which makes the request. The code will look like:

```javaScript
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { search: searchTerm }],
    queryFn: ({signal}) => fetchEvents({ signal,searchTerm }),
  });
```

In the fetchEvents function:

```javaScript
export async function fetchEvents({ signal, searchTerm }) {
  let url = "http://localhost:3000/events";
  if (searchTerm) {
    url += "?search=" + searchTerm;
  }
  const response = await fetch(url, { signal: signal });
.....
}
```

The above approach offers the highest flexibility because we can either pass data to this function and use it or we can simply pass a pointer which will also execute the function without issues.

If you don't de-structure the signal attribute from the object it will cause issues when you are reusing the function which requires arguments to construct the url in some cases and for cases which don't need any arguments.

We can enable or disable a query using the `enabled `property in the configuration object of `useQuery `hook. When this is set to false the query will not be send. We can also pass operations that returns boolean value to dynamically enable or disable the query. This type of behavior may be needed in cases where we don't need to send a query immediately, but we need to after certain conditions are satisfied.  
When we are using the `enabled` property we can use the `isLoading `state instead of the `isPending `state because if the query is disabled initially it will show the loading spinner if we use the isPending. The value of `isLoading `will not be true if the query is disabled.

We can also use tanstack react query to send data to the backend. We use the `useQuery `hook only to get data. To send data we use the `useMutation `hook. Though we can technically send the data using the `useQuery `hook we don't use it because the `useMutation `hook is optimized for sending requests. The requests that is send through `useMutations `are not sent instantly when the component render. They are only sent when you want to send.  
The `useMutation `hook also takes in a configuration object. We can set a `mutationFn `to this object. The `mutationKey `attribute can also be set but it is not required because we don't need to cache the response of the request which changes the data in the backend.  
When using the `useMutation `hook and we have to send some data from the component to the `mutationFn `we don't need to wrap it inside an anonymous function.  
The `useMutation `hook returns an object, we can destructure this object to get access to some useful properties.

We can de-structure the `data `property to get access to the response data. The `mutate `property is an important property which is a function we can call anywhere in the component to send the request. When calling this mutate function we can pass the data which we want to send to the backend as argument.  
We can use the `isPending `property returned from the `useMutation `hook to determine weather the request is completed or not. The `isError `property is used to determine if there is any error. The `error `property will contain details about the error. The example code will look like:

```javaScript
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createNewEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
export default function NewEvent() {
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
  });
  function handleSubmit(formData) {
    mutate({ event: formData });
  }
 
  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting..."}
        {!isPending && (
          <>
           ...
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Failed to create event"
          message={
            error.info?.message ||
            "Failed to create event. Please check your input and try again later."
          }
        />
      )}
    </Modal>
  );
}
```

We can use the `onSuccess `property to handle things once the mutation is successful. It needs a function as value. This function will be executed once mutation is succeeded(only when mutation is succeeded).  
We can manually navigate away from the screen after calling the mutation but it will not ensure that mutation is completed. Even if there are errors in the mutation it will also navigate away.  
We should write the code to navigate away from the screen in the `onSuccess `function.  
After a new data is submitted we might need to re fetch the data from the backend and show it on the screen. Without additional configuration the submitted data will not be visible on the screen immediately, because react query fetched data periodically. To trigger a re-fetch we will need to mark the existing data in the react query as stale explicitly. We use the `queryClient `object which we have placed in the App.jsx for this.

We can initialize this `queryClient `object in a common js file and use it in any component we want by importing it.  
On this shared queryClient object we will call the `invalidateQueries()` method. This method tells react query to mark some data as stale and trigger an immediate re-fetch for this data if the data is currently used in a component that is presently visible on the screen. To target specific queries invalidate queries takes in an object as argument. This object should have a `queryKey `attribute that defines the queryKey which needs to be targeted. It is an array where query keys are passed as strings separated by ,. All queries which have this key will be invalidated. It does not need to be an exact match.  
To work around this we can pass the `exact `attribute to true in the configuration object of the `invalidateQueries `method.

The code will look like:

```javaScript
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
  });
```

To avoid the automatic re fetching of all queries associated with a queryKey we can specify the `refetchType `property to `'none'` in the configuration object of `invalidateQueries` method. This will avoid immediate triggering of re fetching if a query is invalidated. The next time they are required they will fetch the data again. The code will look like:

```javaScript
queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
```

This can be useful in many cases. For example we have details of an event in the event details page. In this page we also have the option to delete the event. The event details are fetched and stored using the react query. If we delete the event we should invalidate the events query key so that the event list is fetched again. But since we are already in the event details page it will try to fetch the event details of the event that was deleted just before. This will cause the request to fail. To avoid this we can use the above approach.

There is also an alternative way to register updates in the UI without `invalidateQueries()` method. This is called optimistic updating.

Optimistic updates allows us to update the UI without waiting for the backend response. If the update fails in the backend we will need to rollback to the previous state and the UI is updated accordingly. This approach is easy to implement with react query. This can be done by specifying `onMutate` property in the configuration object of `useMutation` hook. It needs a function as value. This function will be executed when you call the mutate function. Inside the function we will update the function that is cached by react query. We will still need the shared `queryClient` object to implement this. We can set the data in the react query using the `setQueryDate` method on the `queryClient` object. This method needs 2 arguments, the first one is the query key for which you want to perform an edit. The 2nd argument is the new data which you want to store under that query key.

React query automatically pass any data to the `onMutate `function which you pass to the `mutate `function.  
When performing an optimistic update we should cancel all queries for that particular queryKey, we can do this by calling the `cancelQueries` on the `queryClient` object. This function also needs a queryKey. The `cancelQueries` returns a promise which you should await.  
**NOTE**: `cancelQueries` function only cancels the queries not the mutation.

You should also ensure that the query keys are used consistently otherwise the optimistic updates will not work.  
The code will look like:

```javaScript
 const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;
      await queryClient.cancelQueries({ queryKey: ["events", { id: params.id }] });
      queryClient.setQueryData(["events", { id: params.id }], newEvent);
    },
  });
```

We should also consider the scenario where the backend responds with an error if the optmistic update fails.

To ensure this we should also get the old data and store the old data. For this we can use the `getQueryData` method on the `queryClient` object. It needs the key of the query which you want to get.  
We can use the `onError` property in the configuration object of `useMutation` hook. This requires a function as value. This function will be executed when the mutation fails. This automatically gets a couple of inputs automatically send by the react query. It receives the `error` object, the `data` and the `context` object. The `context` object will have the data that you returned from the `onMutate` function. Inside this function we can set the queryData by calling the `setQueryData` as before but this time we will set the data to the previous data accessed from the context object. The code will look like:

You should also set the `onSettled` property on the `useMutation` hook's configuration object. It requires a function as value. This function will be called after the end of the mutation even if the mutation succeeded or failed. Inside the function we can invalidate our queries so that we have the same data on the backend and frontend for the query key. The code will now look like:

```javaScript
  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;
      await queryClient.cancelQueries({
        queryKey: ["events", { id: params.id }],
      });
      const previousEvent = queryClient.getQueryData([
        "events",
        { id: params.id },
      ]);
      queryClient.setQueryData(["events", { id: params.id }], newEvent);
      return { previousEvent };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(
        ["events", { id: params.id }],
        context.previousEvent,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(["events", { id: params.id }]);
    },
  });
```

We will automatically get the `queryKey` corresponding to the query function in the query function as argument automatically provided by react query. If we set some values in the query key we can access it inside of the query function. Example:

```javaScript
const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", {max:3}],
    queryFn: ({signal, queryKey})=>fetchEvents({signal, ...queryKey[1]}),
  });
```

This approach can be useful if we are trying to avoid the repetition of code.

React router and react query works well together. We can load the data using `loader` function of react router instead of `useQuery` hook. We can do this with the help of shared `queryClient` object. The `queryClient` object has `fetchQuery` method. This can be used to trigger a query programmatically. The `fetchQuery` function also accepts a configuration object which works the same way as `useQuery`. As we have seen we can access to query parameters in the loader function using the params objects automatically provided by react router dom.  
But still we will need to use the useQuery hook inside of the component function even if we fetch data with the loader function. Because when the component is loaded it will make the http request and fetch the data and store the response in cache set by react react query. When we need the data the `useQuery` will fetch this data from the cache. In most cases this avoids the need for a loading indicator. The loader function will look like:

```javaScript
export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["events", { id: params.id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}
```

The useQuery hook will now look like:

```javaScript
 const { data, isError, error } = useQuery({
    queryKey: ["events", { id: params.id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
```

We should also assign the loader to the route in our App.js file like:

```javaScript
{
    path: "/events/:id",
    element: <EventDetails />,
    children: [
      {
        path: "/events/:id/edit",
        element: <EditEvent />,
        loader: editEventLoader,
      },
    ],
  },
```

The approach you choose is upto you.

We can also use react router for performing mutations (editing data). As we have seen earlier we can use action functions to submit the data from a form. The action function automatically receives the request object and params object. We can then extract the data submitted through form and call the function directly without the `useMutation` hook to make the http request. After this we still need to invalidate the queries so that updated data is fetched again.  
**NOTE**: This approach takes away the optimistic update capability of react query. This approach will have all the advantages and disadvantages of react router.  
The action function will look like:

```javaScript
export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries(["events"]);
  return redirect("../");
}
```

Now we can avoid the use of `useMutate` hook.

We can use the `useSubmit` hook of react router to trigger the form submission programatically. So now the form submission handling function will look like:

```javaScript
  function handleSubmit(formData) {
    submit(formData, {method: "PUT"});
  }
```

And finally we need to register the action to the route in App.jsx.  
We can use the `useNavigation` hook of react router to provide feedback to the user when the data is submitting to the backend.  
In some cases the it might take a while for the component to get load when it needs data from the backend. In such cases we can use the `useIsFetching` hook to check weather the react query is currently fetching any data currently in the application. Calling this hook will return a value which indicates weather react query is fetching or not. The code will look like:

```javaScript
import { useIsFetching } from "@tanstack/react-query";
......
 const fetching = useIsFetching();
<div id="main-header-loading">{fetching > 0 && <progress />}</div>
```

To avoid un necessary fetching we can use `staleTime` parameter in `useQuery` hook.

Next.js is a react framework which allows you to build full stack applications with react.

To create a nextjs project we can use the command `npx create-next-app@latest projet_name` . This will create a new folder with the specified filename and install next js in that project. This will ask you a couple of questions like weather you want to enable typescript, eslint, tailwind css, app router. You must enable app router.  
After the project is created you must go to the project root folder and use `npm install` command to install the necessary dependencies.  
To start the development server we use the same `npm run dev` command.

The **app** folder is the most important folder in the next js application. In this folder we setup our different pages that we want in our website. Inside this you will also find **page.js**. page.js is a reserved file name just like **layout.js**. The **page.js** tells next js that it should render a page. Inside this file we can see a react component function. The special thing about this component is that it is a server component. A server component is component that is not easily built by just react but it is embraced and supported by nextjs. On the surface it looks like a regular component, but nextjs ensures that this component is rendered on the server. The code that is executed inside of the component function is not visible to the client. The JSX code is sent over the wire to the browser to be rendered as html.

To create a new page, we can create new folders which nextjs will treat as new routes. For example if we want to add an about route we can add an about folder inside of app. But on it's this folder won't do anything. We should add a page.js file to let nextjs know that there is a page otherwise it will show a 404 error if we navigate to the route.

We can use normal anchor tags to navigate between pages, but the problem with that approach is that the it will not work as a single page application, the browser will make a request to the backend and it will load the new page. Next js offers both client side and server side rendering. When we initially visit the application the content is rendered on the server and displayed to the user. But inside the page if we try to navigate to another page by clicking on the links it will perform client side rendering. Technically the page is rendered in the server initially but when the user visits the application it is updated with the help of client side javascript code.  
So you get the best of both of both worlds, i.e, a highly interactive reactive client side application once it is active and finished page being served if we are visiting for the first time.  
With the anchor tag we are not getting this benefit because the page is always reloaded.

To get this feature we should use the `Link` component provided by nextjs. This is a component provided by nextjs framework which you should use instead of anchor element if we have some internal link inside of the application. It still takes the `href` prop for the path. We can also add additional props just like any other react component. The code will look like:

```javaScript
import Link from "next/link";
export default function Home() {
  return (
    <main>
      ....
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
```

While the page.js file defines the content of the page, the **layout.js** file defines the shell around one or more pages. i.e to the layout the page will be rendered. Every page needs at-least one root layout.js file. We can also have nested layout.js files. In the layout file we are also exporting a react component. This component accepts the children prop which is used to inject some content into the body tag. This component renders an html and a body tag. We don't need to add the head tag here because we can do that in another way in nextjs. The sample code will look like:

```javaScript
import './globals.css'
 
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

We can export a constant named metadata to insert content in the head like shown above. The **metadata** is a reserved name.

It needs an object which will apply the defined properties to the page and it will be used for all pages that uses that particular layout.  
The children prop will have the content of the page.js file that is currently active.

The globals.css file is used to define global styles in a project. We can import it in any layout file using the import statement.  
If we have an icon named **icon.png** inside the app folder, it will be taken as favicon for the project. We don't need to setup anything else in our project.  
We can also create files for our components anywhere in the project. We can either use smaller case or upper case for the filename. We can use it in any other component like in normal react. We can also store the components in the components folder. This folder is ignored by next routing because we don't have a page.js file.  
A good practice is to move the components folder outside of the app folder (root of the project). If we do so we can use the @ symbol to refer to the root of the project. The `jsconfig.json` file which configures this. The code will look like:  
`import Header from "@/components/header.js";`

As you already learned, there are some reserved filenames when working with NextJS.

Important: These filenames are only reserved when creating them inside of the `app/` folder (or any subfolder). Outside of the `app/` folder, these filenames are not treated in any special way.

Here's a list of reserved filenames in NextJS - you'll, of course, learn about the important ones throughout this section:

- `page.js` \=> Create a new page (e.g., `app/about/page.js` creates a `<your-domain>/about` page)
- `layout.js` \=> Create a new layout that wraps sibling and nested pages

- `not-found.js` \=> Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)
- `error.js` \=> Fallback page for other errors (thrown by sibling pages or nested pages or layouts)
- `loading.js` \=> Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data
- `route.js` \=> Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

You also find a list with all supported filenames & detailed explanations in the official docs: `https://nextjs.org/docs/app/api-reference/file-conventions`

We can create dynamic routes in nextjs. We can define a route once and render different pages for different content. We can create nested folder the particular route with `[]` and specifying an identifier of your choice. Inside this special folder we need a page.js file. Inside this file we can create a react component. For example we have a blog route and inside this we have nested dynamic route to show each blog post. We can link it like: `<Link href="/blog/post-1">Post 1</Link>` .  
The \[\] tells nextjs that we want some path segments after the parent route path and we don't know the exact value. The variable name we defined inside the \[\] will give access to the concrete value which we will get dynamically. The component function of the page.js file of that dynamic route will get a props object. Inside this prop object we have a params prop which can pull out using de-structuring. This is automatically done by nextjs.

Inside the params object we will have all the route variables we defined and the value will be actual value which we will have at run time. The example code will look like:

```javaScript
export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
}
```

We can define **nested layout files** in Next.js, where a parent `layout.jsx` exists at the root and a separate `layout.jsx` exists inside a child route folder. The components in the **child layout** only become active when the user visits that specific route. While the child layout is a **separate file** (not code inside the parent), it is rendered **inside the parent layout's** `**children**` **prop**, meaning the child's DOM structure is physically nested within the parent component at runtime.  
Nextjs will wrap the layout around all the pages and nested layouts that are covered by this layout. So the children prop will give us access to the nested layouts and pages.

When importing images to a component in next js we can import it into an object just like in react. But to actually display the image we must access the src property of this object. example:

```javaScript
import logoImg from '@/assets/logo.png';
....
 <img src={logoImg.src} alt="A plate with food on it"/>
```

Next js supports CSS modules just like react. We can also use tailwind css if we want.

In next js we have a better way for outputting images rather than using the default img tag. In nextjs we have a built in `Image` component which let's you output images in a more optimized way like lazy loading images behind the scenes so that that are only displayed when they are visible on page. Image component can also simplify the process of setting up responsive images also. It is recommended to use the Image component if you need to output images in your page. To use this component we must import it like:  
`import Image from "next/image";`  
Then use this component instead of img tag in the code.  
Example:  
`<Image src={logoImg} alt="A plate with food on it" />  `**Note that we just need to pass the image object as the source to the Image component**. The information the image object will be used to display the image in an optimized way.

It will also infer the size of the image automatically. It will also display the image in suitable optimized formats depending on the browser. For example it will display the images in webp format if the user is visiting from chrome. It will also lazy loads the image. There are a lot of props we can set for the Image component but the most necessary props are set by default.  
In certain cases we want the images to be visible as soon as the page is loaded. In such cases we can set the `priority` prop to the Image component to make the image load as fast as possible. This is particularly useful for content such as logos.  
eg:  
`<Image src={logoImg} alt="A plate with food on it" priority />`

We can also use css modules for page files also.

In most react applications we use client components where the code runs on the client's browser. But with next js it changes, because nextjs is a full stack framework. It also has a backend. The code executes on the backend. By default all components in your next js application are rendered on the server. Therefore they are called react server components. This feature can be unlocked in normal react also with some extra configuration. In nextjs it is the default.

Server components are one of the biggest advantages of nextjs. By using server side components the client has less javascript code to download thus increases the performance of the website. It is also great for search engine optimization, because web crawlers can see complete finished page with content. This is not the case for normal react applications. Here the page loaded is mostly empty initially and the content is loaded when the user interacts with the page.

In nextjs you can also create client components. These components are technically pre rendered on the server but also rendered on the client. In most cases these components must be rendered on the client because it contains code or use some features that are only available in the client. The hooks like `useState` and `useEffect` can only be used in client components. Also event handlers are only available in client components.  
You have to explicitly tell nextjs when you are creating a client side component. This is done by specifying a special directive at the top of the file that holds that component.  
we use the `"use client";`

We can get the current path in nextjs using the `usePathname()` hook. This can be useful to make items in the navigation bar active or inactive based on the current path.  
We can import this hook like:  
`import {usePathname} from "next/navigation";`

We can store this value into a constant and it will have the path after the domain name.

```javaScript
  const path = usePathname();
.......
   <Link
                href="/meals"
                className={
                  path.startsWith("/meals") ? classes.active : undefined
                }
              >
                Browse Meals
              </Link>
```

**NOTE:** This hook only works in client components so make sure that we mark it as client component by using `"use client"` directive at the beginning of the file. Another important thing is to use client components as far down the tree as possible. This way you only turn the components into client components only when required. This way most of the components in your application will remain server components and you will get the advantages of that.  
Example:

```javaScript
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";
export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.active} ${classes.link}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
```

We can create a custom client component and use it so that we don't need to convert the entire page into a client component.

You can use client components inside of server components.

You can use the fill prop to the Image component if you don't know the exact width and height of the image beforehand.

We can use sqlite database in nextjs projects. To use that we need to install `better-sqlite3` using npm. Sqlite can be set up locally without the need for complex configuration. This package let's us work with sqlite databases easily.

To fetch the data there are a couple of ways in nextjs. We can of course fetch the data using `useEffect` just like in normal react applications. But in nextjs we don't always need that approach, because the nextjs is a full stack framework. All the code is executed in the server. So we can directly reach out to the database from our component function.  
It is a good practice to keep the code related to fetching and manipulating data of a database inside of a separate lib folder. Inside this folder we can create javascript files which can perform the database operations.

In a js file we will need to import the sql function from better-sqlite3 package and call it with the name of database file as string passed as argument.  
To create database queries we can use the `prepare()` method on the database object and pass the sql statement as a string.

We can then chain the `all()` method to execute the query which fetches all rows from the table. If we want to get a single row we can chain the `get()` method. We can chain the `run()` method to insert data.  
We can easily convert the server components to async functions by adding the `async` keyword, which cannot be done on normal react components. We can use await statement in the function body of the component function also.

Nextjs performs very aggressive caching behind the scenes. It caches any page you visited including the data of the page and then if you go to another page and come back it loads that existing page from the cache.

To show the users a loading screen we can create a `loading.js` file inside of the route where you need to show it. It will be applied to that route as well as the nested routes. `loading.js` is a reserved file name. This page becomes active when any of the sibling page or nested route page is loading data. This page is shown as a fallback until the data is there.

Nextjs also provides another way for handling loading states. If we have a component which performs some operation which may take a while. We can separate the component which is actually responsible for loading and showing the data and place this smaller component as a child of the previous component. The advantage of this approach is that we are now outsourcing the data fetching part to a separate component. And now we can wrap this component with the `Suspense` component which is built into react. This helps us to handle loading state and show fallback content until some data or a resource has been loaded.  
The loading.js file also does the same thing behind the scenes. It wraps the page inside the Suspense component. It shows the content of the loading page as a fallback. The code will look like:

```javaScript
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid.js";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals....</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
```

We can also an `error.js` file which is a reserved file for handling the errors. During the development even if you don't provide an error page nextjs will show an error screen. But in production it will not show this. To set up an error screen we need to create an error.js file and inside that we should define a component which will be rendered in case of error. The error page will be shown for errors in any page that sits in the same folder hierarchy or any nested page.  
We will get details about the errors through props of the error component. We can de-structure the error prop and access the information of the error. The actual error message will be hidden by nextjs so that you can't accidentally expose any information to the end users.  
**NOTE**: error.js must be a client component. This way nextjs can catch and show the error page even for client side errors.

Example error page will look like:

```javaScript
"use client";
export default function Error() {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
    </main>
  );
}
```

There is also one another type of error which is 404 error. This type of error occurs when the user tries to navigate to an invalid route. Nextjs provides a default page for that, but if you want you can create a `not-found.js` file so that we can customize the not found page. This works the same way as error and loading pages i.e, it will automatically cover any sibling page or nested page. The code will look like:

```javaScript
export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
    </main>
  );
}
```

We can directly set html content in react. We can do this by using the `dangerouslySetInnerHTML` prop. You should use this prop with caution because it might subject you to cross site scripting attacks. This prop requires an object as value. Inside this object we should set the `__html` property which takes in the html code string as value.  
We can use the `prepare()` method of the better sqlite package to prepare an SQL statement with dynamic values. We add the placeholder for the value which needs to be bind with the statement using the `?` symbol; then we will chain the `.get()` method and pass the value which needs to bind.

The code will look like:

```javaScript
export async function getMeal(slug){
  return db.prepare('SELECT * FROM meals WHERE slug=?').get(slug);
}
```

When working with SQLite on nextjs it is not required to use promises for manipulating the data in the database and fetching the data because it works instantly.

In certain cases we might need to trigger a not found page manually from the code. This can be done by calling the `notFound()` function imported from `"next/navigation"` . Calling this function will stop the function from executing and will show the closest not found or error page. Example:

```javaScript
import { notFound } from "next/navigation";
import { getMeal } from "@/lib/meals";
export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
..........
}
```

We can trigger a click on a component using ref by using the `.click()` method on the current instance of the ref.  
Example code:

```javaScript
"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";
export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  function handlePickClick() {
    imageInput.current.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
```

We can use the event object to get the files passed through event (onChange). We can use `event.target.files[0]` to access the file selected through a file input field. This can be done with regular react also. The files property will only exist for file input field. If the input field supports multiple file selection it will all be present in the array. We enable multiple input by passing the `multiple` prop to the input field.

We can show a preview of a file such as an image by creating a data url. This can be done with the help of `FileReader` class which is built into javascript. We can create an object of this class and call the `readAsDataURL()` on this object and pass the file as argument to it. It does not return anything. We can access the data url by assigning the `onload` property to the file reader object. We store a function as value in onload. This method will be triggered by the file reader once this method here is read as data url. Inside this function we can access the `result` property of file reader object. This will be the generated URL. The code will look like:

```javaScript
function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
```

In the JSX code:

```javaScript
<div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
```

Nextjs provides a more powerful and convenient pattern that helps us in handling form submission and sending the data. Inside of the component function we can create create a utility function and use the `"use server";` special directive inside this utility function. This directive creates a server action which is a function that guarantees to be executed on the server. In case of functions we must explicitly state that it belongs to the server unlike normal component functions. We must also make sure that this utility function is `async`. Then we need to pass this utility function as value for the `action` prop for the form element.  
This pattern ensures that nextjs will create a request behind the scenes when the form is submitted and send it to nextjs server. This time the server action function gets triggered and we can handle the form submission handling. This server action function(utility function) will automatically get the `formData` object. The example code will look like:

```javaScript
export default function ShareMealPage() {
  async function shareMeal(formData) {
    "use server";
    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };
  }
  return (
 .....
 <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
.....
    </>
  );
}
```

The above method is one way for adding server actions. The above approach will only work if the component you are adding this function is not a client component. It is also not a good idea to store the form submission handling in the same file as JSX code. So it is better to store the server actions in a separate file. Typically we will create a `actions.js` file and store it inside of the lib folder. The file name doesn't matter here. This file should have the `"use server";` directive at the top of the page. When you do like this all the functions you define in that file will be treated as server action. The code will look like:

```javaScript
"use server";
 
export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  console.log(meal);
}
```

If we do so we can import these functions to client components as well and use it.

We can create slugs using the `slugify` package. We install it using `npm install slugify` .  
We can install the `xss` package to protect us from cross site scripting attacks. We can do it by using `npm install xss`. Cross site scripting vulnerability is applicable when we are taking user generated content and directly setting them in our application. The example code will look like:

```javaScript
import slugify from "slugify";
import xss from "xss";
.....
export function saveMeal(meal) {
  meal.slug = slugify(meal.title, {lower:true});
  meal.instructions = xss(meal.instructions);
....
}
```

We can write to the file system by using the fs library of node. After importing this we can call the `createWriteStream` method to write data to a certain file. It needs a path to which you want to write to. We will get a stream object as a result of the above and then we call call the `write()` method on the stream object to write to the stream to the file. This write method requires a chunk as argument. So we must convert our image into a buffer. We can call the `arrayBuffer()` method on the image to perform this. This method will return a promise so we should await it. The array buffer method returns the buffer as an array so we need to convert it into a regular buffer, we can easily convert this using the `Buffer.from()` method. The second argument of the write method is a function which will be executed once the file is done writing. This function will automatically receive an error object whose value will be null if everything works fine.

By default all requests for images will be sent to the public folder. Due to this we don't need to pass public in the path name when storing the path.  
To actually insert the data we can use the prepare statement of better sqlite package. The better sqlite package offers an easier syntax when inserting data. We can provide the values to be inserted with `@` symbol instead of `?`. By this method we can directly send an object and it will automatically infer the necessary fields. The code will look like:

```javaScript
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });
  meal.image = `/images/${fileName}`;
  db.prepare(
    `
  INSERT INTO meals (title, summary,  instructions, creator, creator_email, image, slug) VALUES(@title, @summary,  @instructions, @creator, @creator_email,@image, @slug )
`,
  ).run(meal);
  redirect("/meals");
}
```

**NOTE:** Always make sure that there is a preceeding / in the path so that the file can be accessible.

We can use the `useFormStatus` hook to track the submission status of a form. It works in nextjs only though this is a react feature. We need to import it from `"react-dom"`. This hook returns a status object. This status object has `pending` property which becomes true if there is an ongoing request and false otherwise. This hook can only be used in a client component. Also this hook will only give the status if it is used inside of a component which is wrapped inside of form. So it is a good idea a to create a new component which is a client components and inside this component we can create a button and use this hook to enable or disable this button based on the pending status. The component will look like:

```javaScript
"use client";
import { useFormStatus } from "react-dom";
export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
```

We can use this component inside of the form.

You should perform validations on the input data on the server side, because the client side validations can be disabled from the browser dev tools. When handling form validation in the server side it is not a good practice to throw an error, because it will remove all the valid data and redirect us to the error page. The user will need to add all the data again before he can submit the form again.

We can also return values from server actions. When validating the inputs in the server action we can send response object back instead of throwing errors. The shape of the object is up to the user, just ensure that it is a serializable object (it should not have any methods as values).  
To access the value returned from the server action we can use the `useFormState()` hook from `react-dom` package. This hook works similar to that of use state hook. This hook is responsible for managing the state of the page which uses a form that will be submitted with the help of server actions. It requires 2 arguments. The first one is the actual server action that should be triggered when the form is submitted. The second argument is the initial state of the component (initial value returned by useFormState before the action is triggered and yielded a response).  
It will give you an array with 2 elements.

The first element is the current response of the page(state). The second element is the formAction function which we should set as value for the action prop of the form element.  
We can use this state object to check if there are any errors in the component.  
We should also modify the implementation of the server action function such that the first argument of the function is the previous state. We should accept it even if we are not using it.

**NOTE**: The `useFormState` hook should be present only in a client component.

**NOTE**: The `useFormState` hook is renamed to `useActionState`. We must import it from `"react"` instead of react-dom. The implementation remains the same.  
Example code:

```javaScript
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }
  await saveMeal(meal);
}
```

The client component code will look like:

```javaScript
"use client";
import { useActionState } from "react";
export default function ShareMealPage() {
  const [state, formAction] = useActionState(shareMeal, {
    message: null,
  });
  return (
    <>
.....
<form className={classes.form} action={formAction}>
......
</>);
```

To build the nextjs application to production we should run the `npm run build` command in the root folder of the project. This will give us a project that we can deploy onto a server. To run the production server we use the `npm start` command.  
Nextjs performs caching aggresively. When we run the build command nextjs generates and pre render all pages of the application that can be pre generated (which does not have dynamic content). This allows the users to instantly visit the finished page without needing to wait. Nextjs also caches the pre rendered pages so it can serve to all visitors.  
The downside of the approach is that it never re-fetch the data used for the page, it will just use the pre rendered pages again. This can cause problems when a user adds some new data to the website and this will not be available because the data is not re-fetched.

To fix the above problem of aggressive caching, we need to tell nextjs to throw away parts of it's cached data when a new data is added. There is a built in function provided by nextjs for this. The `revalidatePath()` method tells nextjs to revalidate the cache that belongs to a certain route path. For example if we are changing the data of the meals page we can use like : `revalidatePath("/meals");`

By default only that path will be revalidated, no nested path will be revalidated. If we want to revalidate the nested paths also we can pass a second argument to the function which is `"layout"`.  
We import this method from `"next/cache"` package.  
We should only revalidate the nested pages if the data for the changed page is also stale. Otherwise we can ignore the second argument to this function.

If we want to revalidate all the pages of the website we can pass `"/"` as first argument and `"layout"` as second argument to the `revalidatePath()` method.

The images and files which we store in the public folder is copied over to `.next` folder. This folder will also contain the cached pages also. This folder will be used by the running nextjs production server. If we add new images into the public folder, those will be ignored.  
So it is recommended to store any files generated at the run time using services like AWS S3\.

We can customize the metadata of a page by setting the metadata object. We can set various properties and configure the metadata so that it works well with search engine crawlers.

`https://nextjs.org/docs/app/api-reference/functions/generate-metadata`

If you add the metadata to a layout it will automatically be added to all the pages that are wrapped with that layout unless the page specifies its own metadata.  
We can specify the metadata by exporting the `metadata` constant from the page.  
Example:

```javaScript
export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};
```

For dynamic pages also we can add metadata by exporting an async function called `generateMetadata`. It should be exactly like this because nextjs will look for this if it can't find the metadata constant or variable. Nextjs will execute this function for you. We must return a `metadata` object in that function. This function receives the same data as our page component receives as props. So we can construct the meta data and return an object which sets the metadata.  
Example:

```javaScript
export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);
  if(!meal){
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}
export default function MealDetailsPage({ params }) {
......
}
```

We are checking if the data is not null to ensure that the page doesn't throw an error if the item required is not found.

