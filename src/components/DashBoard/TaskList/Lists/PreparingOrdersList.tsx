import {useEffect} from 'react'
import Order from './Order'
import classes from './NewOrdersList.module.css'
import TaskListContext from '../../../../contexts/TaskListContext'
import { useContext } from 'react'
import useFetch from '../../../../hooks/useFetch'
const PreparingOrdersList = () => {
    const { orders:newOrders } = useFetch('prepOrders')
    const { dispatch } = useContext(TaskListContext)
    useEffect(() => {
      
        dispatch({ type: "prep", payload: newOrders })
        
 },[newOrders])
    return (
        <ul className={classes["order-list"]}>
            {newOrders.length > 0 &&
                newOrders.map((order) => <Order key={order.id} order={order} />)}
        </ul>
    )
}

export default PreparingOrdersList
