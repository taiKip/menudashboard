import React from "react";
import { useContext} from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import Button from "./Button";
import classes from "./OrderDetails.module.css";
import OrderItem from "./OrderItem";
import PhoneIcon from "@material-ui/icons/Phone";
import { IOrder } from "../../../../../interfaces/IOrder";
import TaskListContext from "../../../../../contexts/TaskListContext";
import OrderStatusContext from "../../../../../contexts/OrderStatusContext";
import firebase from '../../../../../data/firebase'
const OrderDetails = ({toggle}:{toggle?:()=>void}) => {
  //contexts
  const { order } = useContext(OrderContext);
    const { state } = useContext(TaskListContext);
  const { page } = useContext(OrderStatusContext)
  //database
  const db = firebase.firestore();
  let dashboardOrder: IOrder | null = state.newOrders[0]; //if no order has been clicked the order details should display the details of the first order on the list

  let btnText: string="Accept order";
  
       
  
  if (page === 'new') {
    dashboardOrder = state.newOrders[0];
    btnText = "Accept order"
    }
    if (page === "prep") {
      dashboardOrder = state.prepOrders[0];
      btnText = "Ready"
    }
    if (page === "ready") {
      dashboardOrder = state.deliveryOrders[0];
      btnText = "Assign courior"
    }

  
   

  if (order) {
    dashboardOrder = order; //if theres an order clicked show the preview of it on order details
  }
  const handleStatus = () => {
    if (order) {
   
    switch (page) {
      case 'new':
        db.collection('prepOrders').add(order)
        db.collection('orders').doc(order.id).delete();
        break;
      case 'prep':
        db.collection('deliveryOrders').add(order);
        db.collection('prepOrders').doc(order.id).delete()
        break;
      }


    }
    if (toggle) {
      toggle();
    }


  }
  return (
    <>
   {!dashboardOrder&&<h3>No orders Available</h3>}
      {dashboardOrder && (
        <div className={classes["order-details"]}>
          <div className={classes.header}>
            <h1>{page.toUpperCase()}</h1>
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
                  <h3>{dashboardOrder.user.name}</h3>
                  <p>Phone Number</p>

                  <h3>{dashboardOrder.user.phoneNumber}</h3>
                </span>
                <span className={classes.phoneIcon}>
                  <PhoneIcon style={{ color: "green", fontSize: 40 }} />
                </span>
              </span>
            </div>
            <div>
              <ul className={classes["order-list"]}>
                {dashboardOrder.orderedItems.map((order) => (
                  <OrderItem
                    key={order.id}
                    name={order.name}
                    quantity={order.quantity}
                    price={order.price}
                    image={order.image}
                  />
                ))}
              </ul>
            </div>
          </div>
          <Button click={handleStatus} status={page}>
            {btnText}
          </Button>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
