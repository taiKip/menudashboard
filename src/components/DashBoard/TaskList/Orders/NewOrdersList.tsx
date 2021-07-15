import React from 'react'
import { useQuery } from 'react-query'
import { IOrder } from '../../../../interfaces/IOrder';

import classes from './NewOrdersList.module.css'
import Order from './Order';
const fetchNewOrders = async () => {
    const res = await fetch("https://happy-meals-bbca2-default-rtdb.firebaseio.com/orders.json");
    return res.json()
}
const NewOrdersList = () => {
    const { data, error, isLoading } = useQuery('newOrders', fetchNewOrders)
    
    let dataArray:IOrder[]= [];
    for (const key in data) {
        dataArray.unshift({
            id: key,
            orderItems: data[key].orderedItems,
            user:data[key].user
       })
    }
    console.log(dataArray)
    return (
        <ul className={classes["order-list"]}>
            {(dataArray.length > 0) && dataArray.map((order,index) => <Order key={order.id} order={order} index={index} />)}
        </ul>
    )
}

export default NewOrdersList
