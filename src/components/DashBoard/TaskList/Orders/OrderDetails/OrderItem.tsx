import React from "react";
import classes from "./OrderItem.module.css";

//list item on the order details page
const OrderItem = ({ price, image, name, quantity }: { price: number, image: string, name: string, quantity: number }) => {
    const subTotal = quantity * price;
  return (
    <li className={classes["order-item"]}>
      <span className={classes["item-name"]}>
        <div className={classes["item-image"]}>
          <img src={image} alt="burger" />
              </div>
              <p >{name}</p>
          </span>
          <span>
x{quantity}
          </span>
          <span>
              €{subTotal.toFixed(2)}
          </span>
    </li>
  );
};

export default OrderItem;
