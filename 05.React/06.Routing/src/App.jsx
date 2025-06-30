import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Resume } from "./components/Resume";
import { NotFound404 } from "./components/NotFound404"
import { Routes , Route } from 'react-router-dom'
import { Project } from "./components/Project";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<NotFound404/>}></Route>
      </Route>

    </Routes>
  )
}

export default App;
