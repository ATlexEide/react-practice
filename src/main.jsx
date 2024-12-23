import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Greeting, Header } from "./Greeting.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Greeting />
  </StrictMode>
);
