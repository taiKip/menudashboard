import { createContext } from "react";
import { IOrder } from "../interfaces/IOrder";


import { TASKLISTACTIONS } from "../Types/taskListActions";

const initialState= [] as IOrder[]
const TaskListContext = createContext<{ state: IOrder[], dispatch: (action:TASKLISTACTIONS)=>void }>({
    state: initialState,
    dispatch:(action:TASKLISTACTIONS)=>{}
})

export default TaskListContext;