import './App.css'
import { Routes , Route } from 'react-router-dom'
import { Nav } from './Components/Nav'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Resume } from './Components/Resume'
import { Projects } from './Components/Projects'
import { Nf } from './Components/Nf'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<Nf />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
