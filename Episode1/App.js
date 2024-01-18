// const heading = React.createElement("h1", {id:"heading"}, "Hello World By React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



// to create nested div inside html
// const parent = React.createElement("div", {id:"parent"}, 
//                 React.createElement("div", {id:"child"}, React.createElement("h1",{}, "Nested h1tag"))
//                 );

// ReactElement(Object) => HTML(browser understand)
// createElement is createing an object not html
// while it is rendering it converts the object to html & put it up to DOM
//  we can see it in console



// to create sibbling h2 tag we can pass it as array of childeren
// <div id="parent">
//     <div id="child">
//         <h1>Nested h1tag</h1>
                // <h2>sibling</h2>
                //     </div>
                // </div>
                
const parent = React.createElement("div", {id:"parent"}, 
    [
        React.createElement("div", {id:"child1"}, [
            React.createElement("h1",{}, "Nested h1tag"),
            React.createElement("h2",{}, "Nested h2tag") 
        ]),
        React.createElement("div", {id:"child2"}, [
            React.createElement("h1",{}, "Nested h1tag"),
            React.createElement("h2",{}, "Nested h2tag") 
        ])
    ]
);


root.render(parent)