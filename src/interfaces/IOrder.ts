import { IFoodItem } from './IFoodItem';
import { IUser } from './IUser';
export interface IOrder{
    orderItems: IFoodItem[],
    user:IUser
}