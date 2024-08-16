import React from "react";
import Home from "./components/home";
import ManageData from "./components/manageData";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manage-data" element={<ManageData />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;