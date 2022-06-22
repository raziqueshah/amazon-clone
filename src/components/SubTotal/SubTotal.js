import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBasketTotal } from '../../utils/BasketTotal';
import './SubTotal.css';

const SubTotal = () => {
    const {basket, user} = useSelector(state => state.data);
    const navigate = useNavigate();
    const handleCheckout = ()=>{
        if(user) {
            navigate('/payment')
        } else{
            navigate('/login')
        }
    }
  return (
    <div className='subTotal'>
      <CurrencyFormat renderText={(value) =>(
        <>
        <p>
            SubTotal ({basket.length} items) : <strong>{value}</strong>
        </p>
        <small className="subtotal-gift">
            <input type="checkbox" />
            This orders contain a gift
        </small>
        </>
      )} decimalScale={2} value={getBasketTotal(basket)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal
