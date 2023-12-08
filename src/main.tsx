import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppProviderWrapper from "./layouts/AppProviderWrapper";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProviderWrapper>
      <App />
    </AppProviderWrapper>
  </React.StrictMode>
);
