import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SignUp from "./components/pages/SignUp.jsx";
import Header from "./components/layout/Header.jsx";
import ContactUs from "./components/pages/ContactUs.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import DownloadApp from "./components/pages/DownloadApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/download-app" element={<DownloadApp />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
