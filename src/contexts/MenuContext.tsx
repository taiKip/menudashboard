import { useReducer } from "react";
import { createContext,ReactNode } from "react";
import { IMenuItem } from "../interfaces/IMenuItem";
import menuReducer from "../reducers/menuReducer";
import { menuActions } from "../Types/menuActions";
type stateType = IMenuItem[]
const innitialState: stateType=[]
export const MenuContext = createContext<{ state: stateType, dispatch: (action: menuActions) => void }>({ state: innitialState, dispatch: (action: menuActions) => { } })

const MenuContextProvider = ({ children }: { children: ReactNode }) => {
    const [state,dispatch] = useReducer(menuReducer,innitialState)
    return <MenuContext.Provider value={{state,dispatch}}>
{children}
    </MenuContext.Provider>
}

export default MenuContextProvider;