import React from 'react'
import './Card.css'
import { useDispatch, useSelector } from 'react-redux';
import {add, remove} from '../redux/slices/CartSlice'
import {  toast } from 'react-hot-toast';

const Card = ({product}) => {
    const desc = product.description.substring(0,75);
    const title = product.title.substring(0,20);
    const {cart} = useSelector((state) => state);

    const dispatch = useDispatch();
    const addToCart = () => {
      dispatch(add(product));
      toast.error("Item added");
    }

    const removeFromCart= () => {
      dispatch(remove(product.id));
      toast.error("item removed from cart");
    }

  return (
    <div className='card'>
        <div className='title'><h3>{title} ...</h3></div>
        <div className='desc'>{desc} ...</div>
        <div className='img'>
            <img src={product.image} alt="" width="120" height="150" />
        </div>
        <div className='price_cart'>
            <p className='price'>${product.price}</p>
            <button className='cartbtn'>
              {
                cart.some((p) => p.id === product.id) ?
                (<p onClick={removeFromCart}>Remove Item</p>):
                (<p onClick={addToCart}>Add to Cart</p>)
              }
            </button>
        </div>
    </div>
  )
}

export default Card