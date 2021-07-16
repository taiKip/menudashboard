import React from "react";
import { useContext,useState } from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import Button from "./Button";
import classes from "./OrderDetails.module.css";
import OrderItem from "./OrderItem";
import PhoneIcon from "@material-ui/icons/Phone";
import { IOrder } from "../../../../../interfaces/IOrder";
import TaskListContext from "../../../../../contexts/TaskListContext";
import { deletOrder } from "../../../../../helpers/deleteOrder";
import { sendData } from "../../../../../helpers/sendData";
import OrderStatusContext from "../../../../../contexts/OrderStatusContext";


const OrderDetails = () => {
    //contexts
    const { order } = useContext(OrderContext);
    const { state } = useContext(TaskListContext)
    const {page} = useContext(OrderStatusContext)
    let dashboardOrder: IOrder | null =null;
    if (page === "new") {
        if (order) {
            dashboardOrder = order
        } 
    }
   
    const[error,setError]= useState<string|null>(null)
    const handleStatus = () => {
        if (order) {
            
            sendData("https://happy-meals-bbca2-default-rtdb.firebaseio.com/preparing.json", order).catch(error => {
                setError(error.message)
            })
            deletOrder("https://happy-meals-bbca2-default-rtdb.firebaseio.com/orders/", order.id)
        
        }
    }
    
    
  return (
      <>
         
          {error && <p style={{ color: "red" }}>Something went wrong</p>}
          {(!dashboardOrder && !error)&&<h1>You have no orders pending</h1>}
      {dashboardOrder && (
        <div className={classes["order-details"]}>
          <div className={classes.header}>
                      <h1>{dashboardOrder.status.toUpperCase()}</h1>
          </div>
          <div className={classes.info}>
            <div className={classes.title}>
              <h1>Task Info</h1>
            </div>
            <div className={classes.contact}>
              <span>
                <p>Preparing time</p>
                <h3>00h:25m:30s</h3>
              </span>
              <span>
                <p>Address</p>
                              <h3>{dashboardOrder.user.streetAddress}</h3>
              </span>
              <span className={classes.phone}>
                <span className={classes.phoneNum}>
                                  <p>{dashboardOrder.user.name}</p>
                                  <h3>{dashboardOrder.user.phoneNumber}</h3>
                </span>
                <span>
                
                    <PhoneIcon style={{ color: "green", fontSize: 40 }} />
                
                </span>
              </span>
            </div>
            <div>
              <ul className={classes["order-list"]}>
                              {dashboardOrder.orderedItems.map(order => <OrderItem key={order.id} name={order.name} quantity={order.quantity} price={order.price} image={order.image}/>)}
              </ul>
            </div>
          </div>
                  <Button click={handleStatus} status={page}>
                   {(page==="new")?"Accept order":"Ready"}
                  </Button>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
