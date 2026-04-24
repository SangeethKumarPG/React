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

`` The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it? ``   
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

* **Static and semi-static components** like forms, landing pages, and CRUD operations
* **Nested data structures** where tree traversal is expensive (e-commerce, CMSs)
* **UI-heavy applications** where DOM manipulation is the bottleneck