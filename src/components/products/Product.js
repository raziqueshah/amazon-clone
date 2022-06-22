import React from 'react'
import './Product.css';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/actions';


const Product = ({id, title, price, rating, image, specification, detail}) => {

  const dispatch = useDispatch();

const onAddItemToBasket = () => {
  const item = {
    id, title, price, rating, image, specification, detail
  }
  dispatch(addToBasket(item));
}

  return (
    <div className='product'>
      <div className="info">
        <Link to={ `/product/${id}`} className='title' >
            <p>{title}</p>
        </Link>
        <p className="price">
            <strong>$</strong>
            <strong>{price}</strong>
        </p>
        <div className="rating">
            {Array(rating).fill().map((_, index)=> <p key={index}>⭐</p>)}
        </div>
        </div>

        <img src={image} alt="" />
        <button onClick={onAddItemToBasket}>
            <i>
                <ShoppingCartOutlined />
            </i>
            Add To Basket
        </button>
     
    </div>
  )
}

export default Product