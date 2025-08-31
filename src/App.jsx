import { Footer } from "./component/Footer";
import Home from "./component/Home";
import Login from "./component/Login";
import About from "./component/About";
import NavBar from "./component/NavBar";
import Services from "./component/Services";
import Programs from "./component/Programs";
import Contact from "./component/Contact";
// import { Footer } from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./component/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
