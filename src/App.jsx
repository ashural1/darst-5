import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portifolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
