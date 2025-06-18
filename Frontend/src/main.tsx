import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter/pages/Counter";
import App from "./components/Login/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Counter /> */}
    <App />
  </React.StrictMode>
);
