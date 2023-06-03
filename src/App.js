import Header from "./sections/Header";
import "./app.scss";
import LandingPage from "./sections/LandingPage";
import SideDisplays from "./sections/SideDisplays";
import AboutMe from "./sections/AboutMe";
function App() {
  return (
    <div className="app">
      <Header />
      <SideDisplays/>
      <LandingPage />
      <AboutMe/>
    </div>
  );
}

export default App;
