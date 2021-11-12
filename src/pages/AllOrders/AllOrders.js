import React from 'react';
import useCartData from '../../hooks/useCartData';
import CartCard from '../../components/CartCard/CartCard';
import Header from '../../components/Header/Header';

const AllOrders = () => {
  const [ cars ] = useCartData();

  console.log(cars);
  return (
    <div>
      <Header></Header>
      <h1>All Orders</h1>
      <div className="all-car">
        {cars.map((car) => (
          <CartCard car={car} key={car._id}></CartCard>
        ))}
      </div>
    </div>
  );
};

export default AllOrders;