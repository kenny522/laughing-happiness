import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    { name: "Home" },
    { name: "About" },
    { name: "Contact" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
      <Header>
        {/* Navigation */}
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Nav>
      </Header>
      <main>
        {currentPage.name === "About" && <About />}
        {currentPage.name === "Home" && <Home />}
        {currentPage.name === "Contact" && <Contact />}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
