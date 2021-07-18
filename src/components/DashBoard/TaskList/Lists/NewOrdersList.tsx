import { useContext, useEffect } from "react";
import TaskListContext from "../../../../contexts/TaskListContext";
import classes from "./NewOrdersList.module.css";
import Order from "./Order";
import useFetch from "../../../../hooks/useFetch";

const NewOrdersList = () => {
  const { dispatch } = useContext(TaskListContext);
  const { orders: newOrders,error,loading } = useFetch("orders");


    useEffect(() => {
      
        dispatch({ type: "initialize", payload: newOrders });
        
    }, [newOrders,dispatch])
 
  return (
      <ul className={classes["order-list"]}>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
      {newOrders.length > 0 &&
        newOrders.map((order) => <Order key={order.id} order={order} />)}
    </ul>
  );
};

export default NewOrdersList;
