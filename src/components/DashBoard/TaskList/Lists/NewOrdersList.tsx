
import { useContext ,useEffect} from 'react';
import { useQuery } from 'react-query'
import TaskListContext from '../../../../contexts/TaskListContext';
import { fetchNewOrders } from '../../../../helpers/fetchData';
import { IOrder } from '../../../../interfaces/IOrder';

import classes from './NewOrdersList.module.css'
import Order from './Order';

const NewOrdersList = () => {
    const url = "https://happy-meals-bbca2-default-rtdb.firebaseio.com/orders.json";
    const { data, error, isLoading } = useQuery('newOrders',()=>fetchNewOrders(url))
    const {dispatch} = useContext(TaskListContext)
    //firebase returns data interms of an object which has keys which inturn has the data

    let dataArray:IOrder[]= [];
    for (const key in data) {
        dataArray.unshift({
            id: key,
            orderedItems: data[key].orderedItems,
            user: data[key].user,
            status:"new"
       })
    }
    
useEffect(() => {
    if (data) {
      dispatch({type:"initialize",payload:dataArray})
  }
   
}, [data])
    return (
        <ul className={classes["order-list"]}>
            {(dataArray.length > 0) && dataArray.map((order, index) => <Order key={order.id} order={order} index={index} />)}
            {error&&<p style={{color:"red"}}>Something went wrong</p>}
        </ul>
    )
}

export default NewOrdersList
