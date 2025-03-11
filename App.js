import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Itachi Uchia 🐦‍⬛"
// );

// JSX -HTML like or XML-like syntax
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
// Babel is converting JSX code and converts into React code
// Attributes should be written in camelcase in JSX
// For multiple lines of JSX code we have to wrap our code in ()

// React Element
const heading = (
  <h1 id="heading" className="heading">
    Naruto Uzumaki 🦊
  </h1>
);

// React Component:
//  1. Class based components - Old
//  2. Functional components - New

// React functional component
const Title = () => {
  return <h1 className="heading">Naruto Starts Learning Namaste React 🦊</h1>;
};

// Component Composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    {heading}
    <h1 className="heading">Itachi starts learning React JS 🐦‍⬛</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);
