import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
import About from "./About"


function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
} 

export default App;
