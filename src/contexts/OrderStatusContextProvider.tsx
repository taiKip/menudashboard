import React, { ReactNode } from 'react'
import { useState } from 'react'
import { orderStatusType } from '../Types/orderStatusType'
import OrderStatusContext from './OrderStatusContext'

const OrderStatusContextProvider = ({children}:{children:ReactNode}) => {
    const [page, setPage] = useState<orderStatusType>("new")
    const handleSetPage = (page: orderStatusType) => {
        setPage(page)
    }
    return (
        <OrderStatusContext.Provider value={{page,setPage:handleSetPage}}>
            {children}
      </OrderStatusContext.Provider>
    )
}

export default OrderStatusContextProvider
