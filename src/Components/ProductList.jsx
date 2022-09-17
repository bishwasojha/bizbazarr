import React from 'react'
import { Card, Button} from 'react-bootstrap'
import { CartState } from '../context/Context';
import {AiOutlineStar} from 'react-icons/ai';
import {BsHeartFill} from 'react-icons/bs';
import {MdOutlineDeleteForever} from 'react-icons/md';
import  '../Style/ProductList.css';

const ProductList = ({ prod }) => {
  const { state: {cart, wishlist}, dispatch} = CartState();
  return (
    <>

     <Card className="h-100 card" style={{ width:'95%'}}>
      <div className="img-container" style={{position:'relative'}}>
      <Card.Img variant="top" src={prod.image} alt={prod.name} style = {{ height:'270', width:'270', }}/> 
      <div className="amount-badge d-flex justify-context-between">
        <span className='discount'>-25%</span>
         <span className='wishlist' title='AddToWishlist'>

          {wishlist.some((p) => p.id === prod.id) ? 
           (
           <button className='wishlist-delete-icon' title='RemoveFromWishlist' onClick={ () => {
            dispatch({
              type:'REMOVE_FROM_WISHLIST',
              payload:prod,
            })
           }}>
              <MdOutlineDeleteForever/> 
           </button> 
           ) : (
            <button className='wishlist-icon' title='AddToWishlist' onClick={()=>{
              dispatch({
                type:'ADD_TO_WISHLIST',
                payload:prod,
              })
            }}>
            <BsHeartFill /> 
             </button>
          )}
          </span>
        </div>   
      </div>
        <Card.Body >
          <div className='star' style={{display:'flex', fontSize:'20px', color:'grey'}}>
           <AiOutlineStar/>
           <AiOutlineStar/>
           <AiOutlineStar/>
           <AiOutlineStar/>
           <AiOutlineStar/>
          </div>
          <Card.Title  style={{
            color: "#111",
            fontWeight:'300',
          }}>{prod.name}</Card.Title>
          <Card.Text style={{
            color: "#189555",
            fontWeight:'400'
          }}>₹ {prod.price}</Card.Text>
          
         
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              REMOVE FROM CART
            </Button>
          ) : (
            <Button 
             className='btnprimary'
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {prod.inStock ? "ADD TO CART" : "OUT OF STOCK"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  )
}

export default ProductList;

