import React, { useEffect } from 'react';
import Header from '../Components/Header';
import { Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Slice/productSlice';

function Home() {
  
  const dispatch = useDispatch()
  const {allProducts,loading,error}  =useSelector(state=>state.productReducer)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  
  return (
    <>
      <Header insidehome={true} />
      <div style={{ marginTop: "100px" }} className='container-fluid'>
        {
        loading ?
          <div className="text-center mt-5 fw-bolder">
             Loading... <Spinner className='ms-1' animation="border" variant="light" />
          </div>
        :
          <Row className='my-5'>
          {
          allProducts?.length>0 ?
            allProducts?.map(product=>(
              <Col key={product?.id} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem',  border: '1px solid #000', height:"450px"}}>
              <Card.Img height={"180px"} variant="top" src={product?.thumbnail} />
              <Card.Body>
                <Card.Title>{product?.title}</Card.Title>
                <Card.Text>
                  {product?.description.slice(0,50)}...
                </Card.Text>
                <div className='text-center mt-3'>
                <Button variant="info"><Link style={{textDecoration:"none"}} to={`/${product?.id}/view`}>
                  View More.....</Link></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
            ))  
          :
            <div className="fw-bolder mt-5 mb-5 text-center">
              Product not found...
            </div>
          }
        </Row>
        }
      </div>
    </>
  );
}

export default Home;
