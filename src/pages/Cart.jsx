import React from 'react'
import Header from '../Components/Header'

function Cart() {
  return (
    <>
      <Header/>
      <div className='container' style={{marginTop:"150px"}}>
        <div className='cart'>
            <div className='row mt-4'>
                <div className="col-lg-8">
                <table className='table'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>...</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <th>Iphon</th>
                        <th><img width={'50px'} height={'50px'} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT223?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693248280978" alt="" /></th>
                        <th>
                          <div className='d-flex'>
                            <button className='btn fw-bolder'>-</button>
                            <input type="text" readOnly style={{width:"50px"}} />
                            <button className='btn fw-bolder'>+</button>
                          </div>
                        </th>
                        <th>2999 $</th>
                        <th className='text-primary'><button className='btn'><i class="fa-solid fa-trash"></i></button></th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-4">
  
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cart