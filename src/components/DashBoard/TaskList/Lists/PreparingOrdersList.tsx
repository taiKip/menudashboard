import {useEffect} from 'react'
import { useQuery } from 'react-query'
import { fetchNewOrders } from '../../../../helpers/fetchData'
import { IOrder } from '../../../../interfaces/IOrder'
import Order from './Order'
import classes from './NewOrdersList.module.css'
import TaskListContext from '../../../../contexts/TaskListContext'
import { useContext } from 'react'
const PreparingOrdersList = () => {
    const {dispatch}=useContext(TaskListContext)
    const {data,isLoading,error } = useQuery("fetchPrep", () => fetchNewOrders("https://happy-meals-bbca2-default-rtdb.firebaseio.com/preparing.json"))
    let dataArray: IOrder[]=[];
    if (data) {
        for (const key in data) {
            dataArray.push({
                id: key,
                orderedItems: data[key].orderedItems,
                user: data[key].user,
                status: data[key].status
            })
        
        }
      
         
      
    }
    useEffect(() => {
dispatch({type:"prep",payload:dataArray})
    },[data])
   
    return (
        <ul className={classes["order-list"]}>
            {isLoading && <p>Loading...</p>}
            {error && <p>something went wrong...</p>}
            {(dataArray.length > 0) && dataArray.map((order, index) => <Order key={order.id} order={order} index={index}/>)}
        </ul>
    )
}

export default PreparingOrdersList
