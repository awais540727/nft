import React from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/projects/Projects";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import TermsAndConditions from "./pages/terms-and-conditions/TermsAndConditions";
import PageNotFound from "./pages/page-not-found/PageNotFound";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms%conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
