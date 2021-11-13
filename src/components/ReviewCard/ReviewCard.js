import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewCard = (props) => {
  const {name, profession, description, rating} = props.review;

  return (
    <div className="card d-flex flex-column text-start">
      <div className="mx-3">
        <h4 className="name fw-bolder fs-2 mt-3">
          {rating}<FontAwesomeIcon className="ms-2" icon={faStar} />
        </h4>
        <p className="details text-white mt-3">{description}</p>
        <h6 className="price fw-normal mb-3">{name}, {profession}</h6>
      </div>
    </div>
  );
};

export default ReviewCard;