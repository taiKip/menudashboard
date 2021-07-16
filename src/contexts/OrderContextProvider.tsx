import { ReactNode, useContext } from 'react'
import { useState } from 'react'
import { IOrder } from '../interfaces/IOrder'
import OrderContext from './OrderContext'
import TaskListContext from './TaskListContext'


const OrderContextProvider = ({children}:{children:ReactNode}) => {
    const [order, setOrder] = useState<IOrder | null>(null)
    const {state} = useContext(TaskListContext)
    const handleSetState = (id:string) => {
        let order: IOrder;
        const itemIndex = state.findIndex(item => item.id === id)
        order = state[itemIndex]
       setOrder(order)
    } 
    return (
        <OrderContext.Provider value={{order:order,setOrder:handleSetState}}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider
