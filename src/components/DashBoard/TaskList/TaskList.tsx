import { useContext } from "react";

import OrderStatusContext from "../../../contexts/OrderStatusContext";

import DeliveryOrdersList from "./Lists/DeliveryOrdersList";
import NewOrdersList from "./Lists/NewOrdersList";
import PreparingOrdersList from "./Lists/PreparingOrdersList";
import classes from "./TaskList.module.css";

const TaskList = () => {
  const { page, setPage } = useContext(OrderStatusContext);
  return (
    <div className={classes["task-list"]}>
      <div>
        <nav className={classes["nav-bar"]}>
          <h1>Task list</h1>
          <ul>
            <li
              onClick={() => setPage("new")}
              className={`${classes["list-item"]} ${
                page === "new" && classes.active
              }`}>
              New
            </li>
            <li
              onClick={() => setPage("prep")}
              className={`${classes["list-item"]} ${
                page === "prep" && classes.active
              }`}>
              Preparing
            </li>
            <li
              onClick={() => setPage("ready")}
              className={`${classes["list-item"]} ${
                page === "ready" && classes.active
              }`}>
              Delivery
            </li>
          </ul>
        </nav>
      </div>
      <div>
        {page === "new" && <NewOrdersList />}
        {page === "ready" && <DeliveryOrdersList />}
        {page === "prep" && <PreparingOrdersList />}
      </div>
    </div>
  );
};

export default TaskList;
