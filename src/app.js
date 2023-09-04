import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

const AppLayoutComponent=()=>(
    <div className="app">
        <HeaderComponent/>
        <BodyComponent/>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent/>) 
