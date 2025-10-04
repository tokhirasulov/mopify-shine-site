import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize i18n after React import
import "./i18n/config";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
