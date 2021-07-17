import { IState } from './../contexts/TaskListContext';

import { TASKLISTACTIONS } from './../Types/taskListActions';

export const orderReducer = (state: IState ,action: TASKLISTACTIONS) => {
    
    
    switch (action.type) {
        case "initialize":
            state.newOrders = action.payload;
            return state;
        case "prep":
            state.prepOrders = action.payload;  //to set state with orders that are  bieng prepared
            state.page="prep"
            return state
        case "ready":
            state.deliveryOrders = action.payload;
            state.page="ready"
            return state;
        case "setpage":
            state.page = action.payload;
            return state;
        default:
            return state
    }
}