import "../src/App.css";
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import MainNavbar from "../src/main navbar/MainNavbar";
import MainFooter from "../src/main footer/MainFooter";
import Page404 from "../src/Pages/Page404";
import Home from "../src/Pages/Home";
import Animations from "../src/Pages/Animations";
import Cards from "../src/Pages/Cards";
import Footers from "../src/Pages/Footers";
import Hero from "../src/Pages/Hero";
import Inputs from "../src/Pages/Inputs";
import Navbars from "../src/Pages/Navbars";
import Texts from "../src/Pages/Texts";
import Toggles from "../src/Pages/Toggles";
import Various from "../src/Pages/Various";
import Contact from "../src/Pages/Contact";
import Backgrounds from "./Pages/Backgrounds";
import Buttons from "./Pages/Buttons";
import Loaders from "./Pages/Loaders";

function App() {
  return (
    <div className="App">
      <Router>
      <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/backgrounds" element={<Backgrounds />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/footers" element={<Footers />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/loaders" element={<Loaders />} />
          <Route path="/navbars" element={<Navbars />} />
          <Route path="/texts" element={<Texts />} />
          <Route path="/toggles" element={<Toggles />} />
          <Route path="/various" element={<Various />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
      <MainFooter />
    </div>
  );
}

export default App;
