import React from "react";
import ReactDOM from "react-dom/client";

//JSX is html like or xml like syntax
const jsxHeading=<h1 id="heading">Hello from React</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); //React Element

//React functional component
const title=<h1>Hello!!</h1>
const HeadingComponent1=()=> <h1>Hello from functional component2</h1>
//or
//component composition
const HeadingComponent=()=>(
    <div id="container">
        {title}
        <HeadingComponent1/>
        <HeadingComponent1></HeadingComponent1>
        {HeadingComponent1()}    
        <h1>Hello from functional component1</h1>
    </div>
)


root.render(<HeadingComponent/>)  //React functional component we have to put in </> so that babel can understand it.
