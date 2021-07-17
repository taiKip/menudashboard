import { createContext } from "react";
import { IOrder } from "../interfaces/IOrder";
import { orderStatusType } from "../Types/orderStatusType";


import { TASKLISTACTIONS } from "../Types/taskListActions";
export interface IState{
    newOrders: IOrder[],
    prepOrders: IOrder[],
    deliveryOrders: IOrder[],
    page:orderStatusType
        
}
const initialState:IState = {
    newOrders: [] ,
    prepOrders: [] ,
    deliveryOrders: [],
    page:"new"
} 
const TaskListContext = createContext<{ state:IState, dispatch: (action:TASKLISTACTIONS)=>void }>({
    state: initialState,
    dispatch:(action:TASKLISTACTIONS)=>{}
})

export default TaskListContext;