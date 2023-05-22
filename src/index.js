import React from "react";
import ReactDOM from "react-dom/client"; 
import "./index.css";
import { makeServer } from "./server";
import Routing from "./route/Routing";
import { RouterProvider } from "react-router-dom";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={Routing} />
);
