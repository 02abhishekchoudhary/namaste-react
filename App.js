import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!"
// );

// root.render(heading);

// console.log(heading);

/**
 * <div id="parent">
 *  <div id="child">
 *   <h1>I'm h1 tag</h1>
 *   <h2>I'm h2 tag</h2>
 *  </div>
 *  <div id="child2">
 *   <h1>I'm h1 tag</h1>
 *   <h2>I'm h2 tag</h2>
 *  </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Naruto Uzumaki 🦊"),
    React.createElement("h2", {}, "Dattebayo!"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm Itachi 🐦‍⬛"),
    React.createElement("h2", {}, "Legend!"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
