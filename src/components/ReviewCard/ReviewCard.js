import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewCard = (props) => {
  const {name, profession, description, rating} = props.review;

  return (
    <div className="card d-flex flex-column text-start">
      <div className="m-3">
        <h4 className="name fw-bolder fs-2 mt-3">
          {rating}<FontAwesomeIcon className="ms-2" icon={faStar} />
        </h4>
        <p className="details text-white mt-3">{description}</p>
        <h4 className="price fw-normal">{name}</h4>
        <h5 className="text-white mb-3">{profession}</h5>
      </div>
    </div>
  );
};

export default ReviewCard;