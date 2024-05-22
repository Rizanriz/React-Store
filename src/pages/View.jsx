import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Wishlist from './Wishlist';
import { addToWishlist } from '../Slice/wishlistSlice';

function View() {

  const [product,setProduct] = useState({})
  console.log(product);

  useEffect(()=>{
    if (localStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(localStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id == id))
    }
  },[])

  const {id} = useParams()
  console.log(id);
  
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
  console.log(userWishlist);

  const handleWishlist = ()=>{
    if (userWishlist?.includes(product)) {
      alert("Item already in wishlist")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  return (
    <>
      <Header />
      <div className='d-flex align-items-center bg-dark container' style={{ height: "70vh", marginTop:"130px"}}>
        <div className='row align-items-center w-100'>
          <div className="col-lg-6">
            <img className="ps-2" height={"400px"} width={"450px"} src={product?.thumbnail} alt="Product" />
          </div>
          <div className="col-lg-6 text-light">
            <h5>{product?.id}</h5>
            <h1>{product?.title}</h1>
            <h3 className='text-danger'>{product.price}$</h3>
            <p>{product?.description}</p>
            <div className='d-flex justify-content-evenly mt-3'>
              <button onClick={handleWishlist} className='btn bg-white text-dark '><i class="fa-regular fa-heart"></i> Add to wishlist</button>
              <button className='btn bg-white text-dark'><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
