import { createContext } from "react";
import { IOrder } from "../interfaces/IOrder";

const initialState: IOrder={
    user: {
        apartmentNumber: '',
        name: '',
        phoneNumber: '',
        streetAddress:'',
    },
    id: '',
    orderedItems: [],
    status:"new"
};
interface IContextType{
    order: IOrder|null,
    setOrder:(id:string)=>void
}
const OrderContext = createContext<IContextType>({ order: initialState, setOrder: (id:string) => { } })
export default OrderContext;