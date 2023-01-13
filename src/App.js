import About from "./components/About";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialIcons from "./components/SocialIcons";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
  <Projects/>
      <SocialIcons />
   <Skills/>
    </div>
  );
}

export default App;
