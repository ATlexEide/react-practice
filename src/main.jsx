import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { JSXGreeting, MainHeader } from "./Greeting.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainHeader />
    <JSXGreeting />
  </StrictMode>
);
