<!-- Stusy -->
# Study

<!-- episode 2 lecture -->
 REACT is making our app fast but not only react make it fast there are another packages helped in making it fast
 like :-
 ===================
 npm
 === npm is not node package manager but it does have full form ..
 === npm is standard repository for packages(dependency) & behind the scene it manages the package
 =====================

 package.json is a configuration for npm
 packaglock.json will keep track of every package(dependency) version
 =====================

 bundler
 it is the package to minify together before sharing it with production serve
 webpack, vite, parcel are the bundlers
 npm i parcel -D  (-D is as dev dependency)
 there are two types of dependency
 1 dev dependency ---used for development pahse
 2 dependency ---- used for production
 to build build we use for dev npx parcel index.html(entry point)
                for production npx parcel build index.html(entry point)
 parcel will build :-(parcel.org for more information)
    local server, 
    dev build, 
    HMR(hot module replacement), 
    file watching algorithm (written in C++), 
    parcel is cacheing the project, 
    parcel will optimize image
    minification
    bundling
    it compress the file
    consistent hashing
    code spliting 
    differential bundling :- support older browser
    diagonistic
    error handling
    to host on htttps
    tree shaking :-  It statically analyzes the imports and exports of each module, and removes everything that isn't used
    different build for dev and production

  transitive dependency :- any package does not work on it itself it require help of other packages or dependency so this dependency is know as transitive dependency


 npx is used to execute package 
 

 cdn links are not a good way to get react into our project because it will cost more and because to manage versioning we will install react within our project

==================
browserlist is npm package it helps app to load in older browser browserlist.dev


<!-- episode 3 -->

React Element
JSX is a javascript syntax which is easier to create html element.
JSX is a convention in which html and js merge together.
JSX is different than html but it is like html syntax or XML.
JSX is not Element it is just a syntax

fromm         
        React.createElement("div", {id:"child1"}, [
            React.createElement("h1",{}, "Nested h1tag"),
            React.createElement("h2",{}, "Nested hdgfgdfdfgdfggdfgdfgdgd2tag") 
        ]),

to 

  <!-- <div id="root">
    <h1>Nested h1tag</h1>
  </div> -->


const jsxHeading = <h1 id="heading">Hellow world using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

console.log(jsxHeading);
above code is not valid jsx than how it is working ?
so the reason is parcel
before going to JS engine it is transpiled.

transpiled means compliers take the source code and convert it to another source code,
transpiling is done by parcel to a package name babel

babel jobis to convert jsx to another source code to make it read by the js engine

JSX is converted to react element then it will to object then it will convert to html element and conversion is done by babel


Component
two types of component
1:-  class based  (old way)
2:-  function based (new way)


React functional component is just a normal js function
// React functional component
// function which return react element()JSX is functional component


// const HeadingComponent = () =>{
//     return <h1 className="heading">hellow functional componnet</h1>
// }
// both are same
const HeadingComponent = () =>(
    <div id="container">
        <h1 className="heading">hellow functional componnet</h1>
    </div>
);
we can render it using 
root.render(<HeadingComponent />);


JSX provide the feature to run any js code inside component enclosed within curly brackets{}



<!-- Episode 4 -->

