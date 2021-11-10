import React from 'react';

const Card = (props) => {
  const {name, price} = props.car;
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default Card;