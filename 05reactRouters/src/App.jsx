import { useState } from "react";
import "./App.css";
import Header from "./Components/header/header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet /> {/*we can change things*/}
      <Footer />
    </>
  );
}

export default App;
