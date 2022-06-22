import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../utils/firebase';
import Order from '../Order/Order';
import './Orders.css';


const Orders = () => {
    const {user} = useSelector(state => state.data);
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        if(user){
            db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .orderBy("created", "desc")
            .onSnapshot((snapshot) => 
            setOrders(snapshot.docs.map((doc) =>({
                id: doc.id,
                data: doc.data(),
            }))
            )
            );
        } else {
            setOrders([]);
        }
    },[user]);


  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <div className="orders-order">
        {orders && orders.map((order,index)=>(
            <Order order={order} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Orders
