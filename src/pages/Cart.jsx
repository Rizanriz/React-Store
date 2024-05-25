import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../Slice/cartSlice'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {

  const myCart = useSelector(item => item.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDecrement =(product)=>{
    if (product.quantity>1) {
      dispatch(decQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const checkOut = ()=>{
    dispatch(emptyCart())
    alert("Order placed successfully..Thank you for purchasing with us...")
    navigate('/')
  }
  return (
    <>
      <Header />
      <div className='container' style={{ marginTop: "130px"}}>
        {myCart?.length > 0 ?
          <div className='cart'>
            <div className='row mt-4'>
              <div className="col-lg-8">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myCart?.map((product, index) => (
                      <tr key={product?.id}>
                        <th>{index + 1}</th>
                        <th>{product?.title}</th>
                        <th><img width={'50px'} height={'50px'} src={product?.thumbnail} alt="" /></th>
                        <th>
                          <div className='d-flex'>
                            <button onClick={()=>handleDecrement(product)} className='btn fw-bolder'>-</button>
                            <input className='text-center' value={product?.quantity} type="text" readOnly style={{ width: "50px" }} />
                            <button onClick={()=>dispatch(incQuantity(product?.id))} className='btn fw-bolder'>+</button>
                          </div>
                        </th>
                        <th>{product?.totalprice}</th>
                        <th onClick={()=>dispatch(removeCartItem(product?.id))}  className='text-primary'><button className='btn'><i class="fa-solid fa-trash"></i></button></th>
                      </tr>
                    ))
                    }
                  </tbody>
                </table>
                <div className='float-end'>
                  <button onClick={()=>dispatch(emptyCart())} className='btn bg-black text-white me-3'>Empty cart</button>
                  <Link to={'/'} className='btn bg-black text-white'>Shop more</Link>
                </div>
              </div>
              <div className="col-lg-4">
                    <div className='border rounded p-3'>
                        <h4>Total amount : <span className='text-danger'>$3400</span></h4>
                        <hr />
                        <div className='d-grid'>
                            <button onClick={checkOut} className='btn btn-success'>Check out</button>
                        </div>
                    </div>
              </div>
            </div>
          </div>
          :
          <div className='d-flex flex-column align-items-center justify-content-center '>
            <img width={"400px"} src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
            <h1 style={{ color: "red" }}>Your cart is empty</h1>
          </div>
        }
      </div>
    </>
  )
}

export default Cart