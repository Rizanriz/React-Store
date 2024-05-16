import React from 'react';
import Header from '../Components/Header';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header insidehome={true} />
      <div style={{ marginTop: "100px" }} className='container-fluid'>
        <Row className='my-5'>
          <Col className='mb-5 me-2' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem',  border: '1px solid #000'}}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1592179900431-1e021ea53b28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbnxlbnwwfHwwfHx8MA%3D%3D" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className='text-center'>
                <Button variant="info"><Link style={{textDecoration:"none"}} to={'/:id/view'}>
                  View More.....</Link></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
