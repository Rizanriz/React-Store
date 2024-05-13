import React from 'react'
import {Container,Navbar,Nav, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
  

function Header({insidehome}) {
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
              <input type='text'  className='rounded' placeholder='Search' style={{width:"400px", padding:"5px", border:"none", outline:"none"}}/>
            </Nav.Link>}
            <Nav.Link ><Link to={"/wishlist"} style={{color:"#fff", textDecoration:"none", fontWeight:"bolder"}}>
              <i class="fa-regular fa-heart"></i> Wishlist <Badge>10</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={"/cart"} style={{color:"#fff", textDecoration:"none", fontWeight:"bolder"}}>
              <i class="fa-solid fa-cart-shopping"></i> Cart <Badge>5</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>                                          
      </Container>
    </Navbar>   
  )
}

export default Header