import React from 'react';
import ReactDOM from 'react-dom/client';


const root=ReactDOM.createRoot(document.getElementById("demo-app"));
root.render(
    <>
    <h1 style={{color:"#5c015e",fontSize:"90px", marginLeft:"2%"}}> React Fundamentals </h1>
    <div style={{display:"flex", flexDirection:"row"}}>
    <Demo />
    </div>
    </>
)