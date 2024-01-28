import React from "react";
import  ReactDOM from "react-dom/client";


import Header from "./components/Header.js";
import Body from "./components/Body.js";




const Applayout=()=>{
    return(
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    )
};

const root=ReactDOM.createRoot(document.querySelector("#root"));

root.render(<Applayout></Applayout>)

