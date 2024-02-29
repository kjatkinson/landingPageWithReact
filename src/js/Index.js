//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Footer from "../Footer.js";
import Navbar from "../component/Navbar.js";

//render your react application
ReactDOM.render(<Footer/> , <Navbar />, document.querySelector("#app"));