import React, { ReactNode } from 'react'
import { useReducer } from 'react'
import { IOrder } from '../interfaces/IOrder'
import { orderReducer } from '../reducers/orderReducer'
import TaskListContext from './TaskListContext'

const initialState=[] as IOrder[]
const TaskListContextProvider = ({children}:{children:ReactNode}) => {
    const [state,dispatch] =useReducer(orderReducer,initialState)
    return (
        <TaskListContext.Provider value={{state,dispatch}}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider
