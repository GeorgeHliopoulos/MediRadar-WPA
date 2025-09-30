import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { RoleProvider } from "./context/RoleContext";

/** Καταχώριση του service worker για FCM/PWA */
if ("serviceWorker" in navigator) {
  // καταχωρείται από τη ρίζα του site (public/)
  navigator.serviceWorker.register("/firebase-messaging-sw.js").catch(() => {});
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoleProvider>
        <App />
      </RoleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
