import { IOrder } from "../interfaces/IOrder";

export type TASKLISTACTIONS =
  | { type: "accept_order"; payload: string }
  | { type: "initialize"; payload: IOrder[] }
  | { type: "prep"; payload: IOrder[] };