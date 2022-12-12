
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/header/Header";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/Login/Login";
import Section from "./section/Section";
import Section_2 from "./section_2/Section_2";
import Section_3 from "./section_3/Section_3";
import Section4 from "./section_4/Section4";
import Section5 from "./section_5/Section5";
import Section6 from "./section_6/Section6"; 

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/Login" element={<Login/>} />
      
    </Routes>
       
       
    </BrowserRouter>
  );
}
export default App;

