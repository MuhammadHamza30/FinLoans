import Home from './Pages/Home'
import About from './Pages/About';
import ApplyLoan from './Pages/ApplyLoan';
import Element from './Pages/Element';
import ContactUs from './Pages/ContactUs';
import Blog from './Pages/Blog';
import SingleBlog from './Pages/SingleBlog';
import Loan from './Pages/Loan'
import FAQ from './Pages/FAQ'
import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


return(
    <BrowserRouter>
    <Headers/>
    <Routes>
      <Route index="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/ApplyLoan" element={<ApplyLoan/>} />
      <Route path="/Loan" element={<Loan />} />
      <Route path="/Element" element={<Element />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/SingleBlog" element={<SingleBlog />} />
      <Route path="/FAQ" element={<FAQ />} />
    </Routes>
  </BrowserRouter>
)
}

export default App;
