import React from 'react';
import Header from '../Components/Header';

function View() {
  return (
    <>
      <Header />
      <div className='d-flex align-items-center bg-dark container mt-5' style={{ height: "70vh" }}>
        <div className='row align-items-center w-100'>
          <div className="col-lg-6">
            <img className="img-fluid ps-3" src="https://images.unsplash.com/photo-1592179900431-1e021ea53b28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Product" />
          </div>
          <div className="col-lg-6 text-light">
            <h5>ID</h5>
            <h1>Title</h1>
            <h3 className='text-danger'>234 $</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vitae sequi dolor dolore sed, cum ducimus omnis repellendus, illum, incidunt nihil fugiat. Odit laborum voluptas ipsa voluptatum eligendi minima eveniet!</p>
            <div className='d-flex justify-content-evenly mt-3'>
              <button className='btn bg-white text-dark '><i class="fa-regular fa-heart"></i> Add to wishlist</button>
              <button className='btn bg-white text-dark'><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
