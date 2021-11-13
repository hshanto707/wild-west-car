import React from 'react';
import useCarData from '../../hooks/useCarData';
import CartCard from '../../components/CartCard/CartCard';

const ManageCars = () => {
  const [ cars ] = useCarData();

  console.log(cars);
  return (
    <div>
      <h1 className="dash-title mb-3">Manage Cars /</h1>
      <div className="all-car">
        {cars.map((car) => (
          <CartCard car={car} key={car._id}></CartCard>
        ))}
      </div>
    </div>
  );
};

export default ManageCars;