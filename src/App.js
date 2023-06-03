import Header from "./sections/Header";
import "./app.scss";
import LandingPage from "./sections/LandingPage";
import SideDisplays from "./sections/SideDisplays";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import GoToTop from "./components/GoToTop";
function App() {
  return (
    <div className="app">
      <Header />
      <SideDisplays />
      <LandingPage />
      <AboutMe />
      <Skills />

      <GoToTop />
    </div>
  );
}

export default App;
