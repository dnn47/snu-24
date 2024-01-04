import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/Global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
