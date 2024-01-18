import React from "react";
import  ReactDOM  from "react-dom/client";


// REact element 
const jsxHeading = (
    <h1 className="head" tabIndex="5">
        Hellow world using JSX
    </h1>
    );


const HeadingComponent = () =>(
    <div id="container">
        <h1 className="heading">hellow functional componnet</h1>
    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

