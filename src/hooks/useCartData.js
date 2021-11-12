import { useEffect } from "react";
import { useState } from "react";

const useCartData = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.log(err));
  }, []);

  return [cars, setCars];
};

export default useCartData;