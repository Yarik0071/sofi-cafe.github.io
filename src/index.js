import React from "react";
import ReactDOM from "react-dom/client";

import "./i18n/i18n";
import reportWebVitals from "./reportWebVitals";
import Router from "./Router";

import "./index.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Suspense fallback="">
    <Router />
  </React.Suspense>);

reportWebVitals();