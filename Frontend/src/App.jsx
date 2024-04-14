import React from "react";
import Navbar from "@shared/Navbar";
import Footer from "@shared/Footer";
import Switch from "@routes/Switch";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch />
      <Footer />
    </>
  );
}

export default App;
