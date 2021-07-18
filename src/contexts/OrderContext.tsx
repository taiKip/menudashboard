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
    status: "new",
    date:new Date()
};
interface IContextType{
    order: IOrder|null,
    setOrder:(order:IOrder)=>void
}
const OrderContext = createContext<IContextType>({ order: initialState, setOrder: (order:IOrder) => { } })
export default OrderContext;