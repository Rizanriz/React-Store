import React from 'react'
import Header from '../Components/Header'
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Wishlist() {
  return (
    <>
      <Header/>
      <div style={{ marginTop: "100px" }} className='container-fluid'>
        <Row className='my-5'>
          <Col className='mb-5 me-2' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem',  border: '1px solid #000'}}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1592179900431-1e021ea53b28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbnxlbnwwfHwwfHx8MA%3D%3D" />
              <Card.Body>
                <Card.Title className='text-black'>Card Title</Card.Title>
                <Card.Text>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <button className='btn bg-dark text-ligth '><i class="fa-regular fa-heart"></i> </button>
                  <button className='btn bg-dark text-ligth '><i class="fa-solid fa-cart-shopping"></i> </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Wishlist