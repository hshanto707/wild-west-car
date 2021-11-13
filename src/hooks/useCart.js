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
    car.displayName = user?.displayName;
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
          alert("Successfully Aadded To Cart")
        }
      });
  }

  // REMOVE FROM CART

  const removeFromCart = (id) => {
    const confirm = window.confirm("are you sure?");
    if(confirm) {
      fetch(`http://localhost:5000/cart/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const restAfterRemove = bookedCar.filter((car) => car._id !== id);
          setBookedCar(restAfterRemove);
        }
        alert("Car Removed");
        window.location.reload(true);
      });
    }
  };

  // REMOVE FROM CAR

  const removeFromCar = (id) => {
    const confirm = window.confirm("are you sure?");
    if(confirm) {
      fetch(`http://localhost:5000/cars/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const restAfterRemove = bookedCar.filter((car) => car._id !== id);
          setBookedCar(restAfterRemove);
        }
        alert("Car Removed");
        window.location.reload(true);
      });
    }
  };

  return { setBookedCar, removeFromCart, removeFromCar, addToCart, bookedCar };
};

export default useCart;