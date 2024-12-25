import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { JSXGreeting, MainHeader } from "./Greeting.jsx";
import { List, PrintBool } from "./Test.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainHeader />
    <JSXGreeting />
    <List animals={["Dog", "Cat", "Bird"]} />
    <PrintBool />
  </StrictMode>
);
