import { IMenuItem } from './../interfaces/IMenuItem';
import { menuActions } from './../Types/menuActions';


const menuReducer = (state: IMenuItem[], action: menuActions) => {
    
    switch (action.type) {
        case "delete":
           
            return state;
        case "initialize":
             state = action.payload;
            return state;
    }
}

export default menuReducer
