import { useEffect } from "react";
import { useState } from "react";

const useCarData = () => {
  const [cars, setcars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setcars(data))
      .catch((err) => console.log(err));
  }, []);

  return [cars, setcars];
};

export default useCarData;