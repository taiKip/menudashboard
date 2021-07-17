import { ReactNode } from 'react'
import { useReducer } from 'react'
import { orderReducer } from '../reducers/orderReducer'
import TaskListContext, { IState } from './TaskListContext'

const initialState: IState = {
    newOrders: [],
    deliveryOrders: [],
    prepOrders: [],
    page:"new"
}
const TaskListContextProvider = ({children}:{children:ReactNode}) => {
    const [state,dispatch] =useReducer(orderReducer,initialState)
    return (
        <TaskListContext.Provider value={{state,dispatch}}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider
