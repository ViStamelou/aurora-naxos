import './App.css'
import Nav from './components/Navbar/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import Villas from './pages/Villas/Villas'
import Discover from './pages/Infos/Discover'
import Contact from './pages/Contact/Contact'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='Villas' element={<Villas/>}></Route>
        <Route path='Discover' element={<Discover/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
