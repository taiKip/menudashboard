import React from 'react'
import { useState } from 'react'
import DeliveryOrdersList from './Orders/DeliveryOrdersList'
import NewOrdersList from './Orders/NewOrdersList'
import PreparingOrdersList from './Orders/PreparingOrdersList'
import classes from './TaskList.module.css'
type pages = "new"|"preparing"|"delivery"
const TaskList = () => {
    const [page, setPage] = useState<pages>("new")
    const handleSetPage = (page:pages) => {
        setPage(page)
    }
    return (
        <div className={classes["task-list"]}>
            <div>
                <nav className={classes["nav-bar"]}>               
                       <h1>Task list</h1>
                <ul>
                    <li onClick={()=>handleSetPage("new")} className={`${classes["list-item"]} ${(page==="new")&&classes.active}`}>
                        New
                    </li>
                        <li onClick={() => handleSetPage("preparing")} className={`${classes["list-item"]} ${(page === "preparing") && classes.active}`}>
                        Preparing
                    </li>
                        <li onClick={() => handleSetPage("delivery")} className={`${classes["list-item"]} ${(page === "delivery") && classes.active}`}>
                        Delivery
                    </li>

                </ul>
                </nav>
                
            </div>
            <div>
                {(page === "new") && <NewOrdersList />}
                {(page === "delivery") && <DeliveryOrdersList />}
                {(page==="preparing")&&<PreparingOrdersList/>}
            </div>
           
        </div>
    )
}

export default TaskList
