import React from 'react'
import Header from '../Components/Header'
import { Row, Col, Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItem } from '../Slice/wishlistSlice';
import { addToCart } from '../Slice/cartSlice';

function Wishlist() {

  const myWishlist = useSelector(item => item.wishlistReducer)
  const ourCart = useSelector(item => item.cartReducer)
  const dispatch = useDispatch()

  const handleCart = (product)=>{
      const existingProduct = ourCart.find(item=>item.id == product.id)
      if (existingProduct) {
        dispatch(addToCart(product))
        dispatch(removeWishlistItem(product?.id))
        alert("Product quantity incremented")
      }else{
        dispatch(addToCart(product))
        dispatch(removeWishlistItem(product?.id))
      }
  }
  return (
    <>
      <Header />

      <div style={{ marginTop: "100px" }} className='container-fluid'>
        {myWishlist?.length > 0 ?
          <Row className='my-5'>
            {myWishlist?.map(product=>(
              <Col key={product.id} className='mb-5' sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem', border: '1px solid #000' }}>
                <Card.Img height={"250px"} src={product.thumbnail} />
                <Card.Body>
                  <Card.Title className='text-black'>{product.title}</Card.Title>
                  <Card.Text>
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn bg-dark text-ligth '><i class="fa-solid fa-trash"></i> </button>
                    <button onClick={()=>handleCart(product)} className='btn bg-dark text-ligth '><i class="fa-solid fa-cart-shopping"></i> </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            ))
              
            }
          </Row>
          :
          <div className='d-flex flex-column align-items-center justify-content-center '>
            <img width={"400px"} src="https://evyapari.com/static/media/empty_wishlist.4b6281beecbb34e00bf3.png" alt="" />
          </div>
        }
      </div>

    </>
  )
}

export default Wishlist