const heading=React.createElement("h1",{id:"heading"},"Hello world from react!!"); 
//it creates an React object not html tag
//{id:"heading"} is attribute of h1 tag.
const root= ReactDOM.createRoot(document.getElementById("root")); 
root.render(heading); 
// this render method convert react object into h1 tag.


//nested structure
const heading1=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"Hello from h1 tag"),
    React.createElement("h2",{},"Hello from h2 tag")])); 
//it creates an React object not html tag
//{id:"heading"} is attribute of h1 tag.
const root1= ReactDOM.createRoot(document.getElementById("root")); 
root.render(heading1); 
// this render method convert react object into h1 tag.