import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useCart = () => {
  const { user } = useFirebase();
  const { uid } = user;
  const [bookedCar, setBookedCar] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cart/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setBookedCar(data);
        }
      });
  }, [uid]);

  // ADDING TO CART

  function addToCart(car) {
    delete car._id;
    car.email = user?.email;
    car.name = user?.displayName;
    car.uid = uid;
    car.status = "pending";

    fetch("http://localhost:5000/cart", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(car),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          const newBooked = [...bookedCar, car];
          setBookedCar(newBooked);
        }
      });
  }

  // REMOVE FROM CART

  // const remove = (id) => {
  //   fetch(`http://localhost:5000/cart/${id}`, {
  //     method: "delete",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount === 1) {
  //         const restAfterRemove = bookedCar.filter((car) => car._id !== id);
  //         setBookedCar(restAfterRemove);
  //       }
  //     });
  // };

  const remove = id => {
    const newBookedCars = bookedCar.filter((car) => car._id !== id);
    setBookedCar(newBookedCars);
    // removeFromDb(key);
  };

  return { setBookedCar, remove, addToCart, bookedCar };
};

export default useCart;