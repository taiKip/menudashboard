import React from "react";
import { useContext } from "react";
import OrderContext from "../../../../contexts/OrderContext";
import OrderStatusContext from "../../../../contexts/OrderStatusContext";
import { dayHelper } from "../../../../helpers/dayHelper";
import { IOrder } from "../../../../interfaces/IOrder";
import { IOrderItem } from "../../../../interfaces/IOrderItem";
import classes from "./Order.module.css";
interface ITotal extends IOrderItem{
    totalAmount:number
}
const Order = ({ order,toggle}: { order: IOrder ,toggle:()=>void }) => {
  const { setOrder } = useContext(OrderContext)
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
    setOrder(order)
    toggle()
  }
  const day = dayHelper(order.date.getDay());
  const hour = order.date.getHours();
  const min = order.date.getMinutes()
  const time = `${day},${hour}:${min}`
  return (
    <li className={classes.order} onClick={handleClick} >
      <div className={classes.detail}>
        <span>
                  <h4>Task#00{`${hour}${min}`}</h4>
        </span>
        <span>
          <p>{time}</p>
        </span>
      </div>
      <div className={classes.price}>
              <h3> €{amount.toFixed(2)}</h3>
      </div>
    </li>
  );
};

export default Order;
