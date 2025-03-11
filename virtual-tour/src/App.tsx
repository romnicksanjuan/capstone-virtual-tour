
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import Home from './components/Home'
import Academic from './components/Academic'
import About from './components/About'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Scholarship from './components/Scholarship'
import Test from './components/Test'
// import Acads from './components/Acads'
import Rules from './components/Rules'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/academics' element={<Academic />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/scholarships' element={<Scholarship />} />
          <Route path='/test' element={<Test />} />
          <Route path='/rules' element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
