import { ReactNode, useContext,useEffect } from 'react'
import { useState } from 'react'
import { IOrder } from '../interfaces/IOrder'
import OrderContext from './OrderContext'
import OrderStatusContext from './OrderStatusContext'
import TaskListContext from './TaskListContext'


const OrderContextProvider = ({children}:{children:ReactNode}) => {
    const [order, setOrder] = useState<IOrder | null>(null)
    const{page} = useContext(OrderStatusContext)
    const { state } = useContext(TaskListContext)
    useEffect(() => {
        console.log(page)
    },[page])
   
    const handleSetState = (id:string) => {
        let order: IOrder;
        let itemIndex: number;
        if (page === "new") {
            console.log("in orderContext new")
            itemIndex = state.newOrders.findIndex(item => item.id === id)
            order = state.newOrders[itemIndex]
            setOrder(order)
           
        }else {
            console.log("in orderContext prep")
            itemIndex = state.prepOrders.findIndex(item => item.id === id)
            order = state.prepOrders[itemIndex]
            setOrder(order)
        
        }

    } 
    return (
        <OrderContext.Provider value={{order:order,setOrder:handleSetState}}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider
