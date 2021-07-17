import React from 'react'
import { useContext,useEffect } from 'react'
import { useQuery } from 'react-query';
import TaskListContext from '../../../../contexts/TaskListContext'
import { fetchNewOrders } from '../../../../helpers/fetchData';
import { IOrder } from '../../../../interfaces/IOrder';

const DeliveryOrdersList = () => {
  const url = "https://happy-meals-bbca2-default-rtdb.firebaseio.com/delivery.json";
  const { data, error, isLoading } = useQuery("fetchDelivery", () => fetchNewOrders(url))
  const { dispatch} = useContext(TaskListContext)
  
  let dataArray: IOrder[] = [];
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
    dispatch({ type: "prep", payload: dataArray })
  }, [data])

    return (
        <div>
       
        </div>
    )
}

export default DeliveryOrdersList
