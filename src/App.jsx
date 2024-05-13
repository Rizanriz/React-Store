import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Footer from './Components/Footer'

function App() {

  return (
    <>
       <Routes>
        <Route  element={<Home/>} path='/'/>
        <Route  element={<Wishlist/>} path='/wishlist'/>
        <Route  element={<Cart/>} path='/cart'/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
