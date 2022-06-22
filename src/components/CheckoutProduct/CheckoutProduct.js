import React from 'react';
import { useDispatch } from 'react-redux';
import './CheckoutProduct.css';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { removeFromBasket } from '../../redux/actions';


const CheckoutProduct = ({id, title, image, rating, price, hideButton}) => {
    const dispatch = useDispatch();
    const removeItemFromBasket = ()=>{
        dispatch(removeFromBasket(id));
    }

  return (
    <div className='checkout-product'>
      <img src={image} alt="" className='checkout-product-image' />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
            <strong>$</strong>
            <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
            {Array(rating).fill().map((_,index)=>(
                <p key={index}>⭐</p>
            ))}
        </div>
        {!hideButton && (
        <button onClick={removeItemFromBasket}>
            <i><ShoppingCartOutlined /></i>
            Remove from Basket
        </button>
        )}
      </div>
    </div>
  )
}

export default CheckoutProduct
