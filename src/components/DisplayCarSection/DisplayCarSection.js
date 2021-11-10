import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useCarData from '../../hooks/useCarData';
import Card from '../Card/Card';

const DisplayCar = () => {

  const [cars, setcars] = useCarData();
  console.log(cars);

  return (
    <div className="container section-container">
      <h1 className="fw-bold mb-5">Our Popular Tours</h1>
      <div className="all-tour">
        {cars.slice(0, 6).map((car) => (
          <Card car={car} key={car._id}></Card>
        ))}
      </div>
      <NavLink to="/all-cars">
        <Button className="see-more">See All</Button>
      </NavLink>
    </div>
  );
};

export default DisplayCar;