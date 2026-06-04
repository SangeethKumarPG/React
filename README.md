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

