import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import {remove} from '../redux/slices/CartSlice'
import {  toast } from 'react-hot-toast';


const CartItem = ({item,Index}) => {
    const dispatch = useDispatch();
    const removeFromCart = ()=> {
        dispatch(remove(item.id));
        toast.error("item removed")
    }
  return (
    <div>
        <div>
            <div>
                <img src={item.image} alt="" width="100"/>
            </div>
            <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <div>
                    <p>{item.price}</p>
                    <div onClick={removeFromCart}><FcDeleteDatabase/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem