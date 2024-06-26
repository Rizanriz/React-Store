import React from 'react'
import {Container,Navbar,Nav, Badge} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../Slice/productSlice';


function Header({insidehome}) {

  const dispatch = useDispatch()
  const myWishlist = useSelector(item=>item.wishlistReducer)
  const myCart = useSelector(item=>item.cartReducer)

  return (
        <Navbar expand="lg" className="bg-info w-100 position-fixed top-0" style={{zIndex:"10"}}>
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{color:"#fff", textDecoration:"none", fontWeight:"bolder "}}>
        <i class="fa-brands fa-opencart"></i> Real Store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            { insidehome &&
              <Nav.Link>
              <input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} type='text' className='rounded' placeholder='Search' style={{width:"400px", padding:"5px", border:"none", outline:"none"}}/>
            </Nav.Link>}
            <Nav.Link ><Link to={"/wishlist"} style={{color:"#fff", textDecoration:"none", fontWeight:"bolder"}}>
              <i class="fa-regular fa-heart"></i> Wishlist <Badge>{myWishlist?.length}</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={"/cart"} style={{color:"#fff", textDecoration:"none", fontWeight:"bolder"}}>
              <i class="fa-solid fa-cart-shopping"></i> Cart <Badge>{myCart?.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>                                          
      </Container>
    </Navbar>   
  )
}

export default Header