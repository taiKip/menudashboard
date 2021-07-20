import { useState } from "react";
import { createContext ,ReactNode} from "react";
import { IMenuItem } from "../interfaces/IMenuItem";
interface IState{
    searchItem: string,
    setSearchItem:(a:string)=>void
}
export const SearchContext = createContext<IState>({ searchItem: "", setSearchItem: (a: string) => { } })

const SearchContextProvider = ({ children }: { children: ReactNode }) => {
    const [searchItem,setSearchItem] = useState('')
    return <SearchContext.Provider value={{searchItem,setSearchItem}}>
        {children}
    </SearchContext.Provider>
}

export default SearchContextProvider;