import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import AuthProvider from "./providers/AuthProvider";

import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

// App Component
function App() {
  // Initialize AOS
  useEffect(() => {
    Aos.init(); // Initialize AOS
    Aos.refresh(); // Refresh animations on render
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

// Render to DOM
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
