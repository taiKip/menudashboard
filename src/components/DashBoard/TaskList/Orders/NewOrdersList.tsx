import React from 'react'
import { useQuery } from 'react-query'
const fetchNewOrders = async () => {
    const res = await fetch("https://happy-meals-bbca2-default-rtdb.firebaseio.com/orders.json");
    return res.json()
}
const NewOrdersList = () => {
    const { data, error, isLoading } = useQuery('newOrders', fetchNewOrders)
    
    let dataArray = [];
    for (const key in data) {
        dataArray.push({
            id: key,
            ordereItems: data[key].orderedItems,
            user:data[key].user
       })
    }
    console.log(dataArray)
    return (
        <ul>
           
        </ul>
    )
}

export default NewOrdersList
