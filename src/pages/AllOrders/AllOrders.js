import React from 'react';
import useCartData from '../../hooks/useCartData';
import CartCard from '../../components/CartCard/CartCard';
import './AllOrders.css'

const AllOrders = () => {
  const [ cars ] = useCartData();

  console.log(cars);
  return (
    <div>
      <h1 className="dash-title">ALL ORDERS /</h1>
      <div className="all-car">
        {cars.map((car) => (
          <CartCard car={car} key={car._id}></CartCard>
        ))}
      </div>
    </div>
  );
};

export default AllOrders;