import React from "react";
import ReactDOM from "react-dom/client";
import About from "./About";
import Photo from "./Photo";
const root = ReactDOM.createRoot(document.getElementById("demo-app"));
root.render
    (
        <>
            <h1>Hello World</h1>
            <About />
            <Photo />

        </>
    )