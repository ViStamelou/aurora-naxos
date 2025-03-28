import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import Villas from './pages/Villas/Villas'
import Discover from './pages/Infos/Discover'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
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
