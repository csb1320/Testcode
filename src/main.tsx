import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter/ui/Counter";
import App from "./components/Login/ui/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Counter /> */}
    <App />    
  </React.StrictMode>
);
