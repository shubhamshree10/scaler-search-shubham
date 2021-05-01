import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./css/style.css";
import $ from "jquery";


ReactDOM.render(
    <App />,
  document.getElementById("root")
);

$(document).bind("DOMNodeRemoved", function(e) {
  console.log("Removed: " + e.target.nodeName);
});


