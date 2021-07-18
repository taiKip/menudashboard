import { useEffect } from 'react'
import Order from './Order'
import classes from './NewOrdersList.module.css'
import TaskListContext from '../../../../contexts/TaskListContext'
import { useContext } from 'react'
import useFetch from '../../../../hooks/useFetch'
const DeliveryOrdersList = () => {
  const { orders: newOrders } = useFetch('deliveryOrders')
  const { dispatch } = useContext(TaskListContext)
  useEffect(() => {
  
    dispatch({ type: "ready", payload: newOrders })
    
  }, [newOrders])
  return (
    <ul className={classes["order-list"]}>
      {newOrders.length > 0 &&
        newOrders.map((order) => <Order key={order.id} order={order} />)}
    </ul>
  )
}

export default DeliveryOrdersList
