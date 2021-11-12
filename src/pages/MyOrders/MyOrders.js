import React from 'react';
import Header from '../../components/Header/Header';
import useCart from '../../hooks/useCart';
import CartCard from '../../components/CartCard/CartCard';

const MyOrders = () => {
  const {bookedCar} = useCart();

  return (
    <div>
      <Header></Header>
      <h1>My Orders</h1>
      <div className="all-car">
        {bookedCar.map((car) => (
          <CartCard car={car} key={car._id}></CartCard>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;