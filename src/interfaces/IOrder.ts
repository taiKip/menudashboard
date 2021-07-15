import { IOrderItem } from './IOrderItem';
import { IUser } from './IUser';
export interface IOrder{
    id:string,
    orderItems: IOrderItem[],
    user:IUser
}