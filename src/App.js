import Header from "./sections/Header";
import "./app.scss";
import LandingPage from "./sections/LandingPage";
import SideDisplays from "./sections/SideDisplays";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import GoToTop from "./components/GoToTop";
import Experience from "./sections/Experience";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
function App() {
  return (
    <div className="app">
      <Header />
      <SideDisplays />
      <LandingPage />
      <AboutMe />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact/>
      <Footer/>
      <GoToTop />
    </div>
  );
}

export default App;
