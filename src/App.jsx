import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import Villas from './pages/Villas/Villas'
import Discover from './pages/Infos/Discover'
import AboutInfo from './pages/Infos/AboutInfo'
import Beaches from './pages/Infos/Beaches'
import Infos from './pages/Infos/Infos'
import Activities from './pages/Infos/Activities'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Restaurants from './pages/Infos/Restaurants'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='Villas' element={<Villas/>}></Route>
        <Route path='Discover' element={<Discover/>}></Route>
        <Route path='Restaurants' element={<Restaurants/>}></Route>
        <Route path='AboutInfo' element={<AboutInfo/>}></Route>
        <Route path='Beaches' element={ <Beaches/>}></Route>
        <Route path='Infos' element={<Infos/>}></Route>
        <Route path='Activities' element={<Activities/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
