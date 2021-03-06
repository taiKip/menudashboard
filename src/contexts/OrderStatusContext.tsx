import React from 'react'
import { createContext } from 'react'
import { orderStatusType } from '../Types/orderStatusType'
//switching  the order lists 
interface IContextType{
    page: orderStatusType,
    setPage:(page:orderStatusType)=>void
}
const OrderStatusContext = createContext<IContextType>({ page: "new", setPage: (a) => { } } )

export default OrderStatusContext
