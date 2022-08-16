import React, { useEffect, useState } from 'react';
import MyOrder from './MyOrder';

const MyOrders = () => {
   const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch("https://nameless-dusk-38073.herokuapp.com/orders")
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[]);

   return (
      <div className='w-full flex justify-center items-center h-screen flex-wrap'>
         {
            myOrders.map(order => <MyOrder
               key={order._id}
               order={order}
            >
            </MyOrder>)
         }
      </div>
   );
};

export default MyOrders;