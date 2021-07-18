import { ReactNode } from 'react'
import { useState } from 'react'
import { IOrder } from '../interfaces/IOrder'
import OrderContext from './OrderContext'



const OrderContextProvider = ({children}:{children:ReactNode}) => {
    const [order, setOrder] = useState<IOrder | null>(null)
  
 
    return (
        <OrderContext.Provider value={{order:order,setOrder:setOrder}}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider
