import React from "react";
import { useContext } from "react";
import OrderContext from "../../../../contexts/OrderContext";
import { IOrder } from "../../../../interfaces/IOrder";
import { IOrderItem } from "../../../../interfaces/IOrderItem";
import classes from "./Order.module.css";
interface ITotal extends IOrderItem{
    totalAmount:number
}
const Order = ({ order, index }: { order: IOrder, index: number }) => {
  const {setOrder} = useContext(OrderContext)
    let newArray: ITotal[] = [];
    let amount: number = 0;
  if (order) {
      
        order.orderedItems.map(item => {
            const newItem = {
                ...item,
                totalAmount: item.price * item.quantity
            }
            newArray.push(newItem)
        })
        amount = newArray.reduce((accumulator, currentValue) => {
         return accumulator+currentValue.totalAmount
     },0)
    }
  const handleClick = () => {
    setOrder(order.id)
  }
  return (
    <li className={classes.order} onClick={handleClick}>
      <div className={classes.detail}>
        <span>
                  <h4>Task#00{index}</h4>
        </span>
        <span>
          <p> Today,10:45</p>
        </span>
      </div>
      <div className={classes.price}>
              <h3> €{amount.toFixed(2)}</h3>
      </div>
    </li>
  );
};

export default Order;
