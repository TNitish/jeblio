import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

// Add this line to ensure Tailwind is properly initialized
import "tailwindcss/tailwind.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
