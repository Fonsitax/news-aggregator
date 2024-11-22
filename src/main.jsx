import React from "react";
import "./index.css";
import App from "./App.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { createRoot } from "react-dom/client";

//createRoot(document.getElementById('root')).render(
//  <StrictMode>
//    <App />
//  </StrictMode>,
//)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <SearchProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SearchProvider>
);
