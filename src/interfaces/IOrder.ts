import { orderStatusType } from './../Types/orderStatusType';
import { IOrderItem } from './IOrderItem';
import { IUser } from './IUser';
export interface IOrder{
    id:string,
    orderedItems: IOrderItem[],
    user: IUser
    status:orderStatusType
}