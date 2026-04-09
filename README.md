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