import { IOrder } from '../interfaces/IOrder';


import { TASKLISTACTIONS } from './../Types/taskListActions';

export const orderReducer = (state: IOrder[] ,action: TASKLISTACTIONS) => {
    let state_copy: IOrder[];
    let order_index: number
    
    switch (action.type) {
        case "initialize":
            state = action.payload;
            return state;
        case "prep":
            state = action.payload;  //to set state with orders that are  bieng prepare
            return state
        default:
            return state
    }
}