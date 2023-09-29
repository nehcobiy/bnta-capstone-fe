import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BasketProvider } from "./contexts/BasketContext";
import { UserProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <BasketProvider>
        <App />
      </BasketProvider>
    </UserProvider>
  </BrowserRouter>
);
