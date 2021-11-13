import { useEffect } from "react";
import { useState } from "react";

const useCarData = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://limitless-everglades-07733.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(cars);
  return [cars, setCars];
};

export default useCarData;