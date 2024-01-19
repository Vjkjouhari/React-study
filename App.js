import React from "react";
import  ReactDOM  from "react-dom/client";


const Title = () => 
    (
        <h1 className="title" tabIndex="5">
                    React World is full of component !!!!!!
                </h1>
    )

const numb = 10000;

// react element
const elem = <span>React Span</span>

const brandName = (
    <h1 className="brandname"> BrandName {elem}</h1>
)

const HeadingComponent = () =>(
    <div id="container">
        {Title()}
        <Title></Title>
        {brandName}
        <h1 className="heading">hellow functional componnet</h1>
    </div>
);

// we can also use normal function

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<HeadingComponent />
);

