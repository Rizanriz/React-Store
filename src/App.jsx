import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Footer from './Components/Footer'
import View from './pages/View'

function App() {

  return (
    <>
       <Routes>
        <Route  element={<Home/>} path='/'/>
        <Route  element={<Wishlist/>} path='/wishlist'/>
        <Route  element={<Cart/>} path='/cart'/>
        <Route  element={<View/>} path='/:id/view'/>

        <Route path='/*' element={<Navigate to={'/'}/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
