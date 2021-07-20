import { IMenuItem } from './../interfaces/IMenuItem';
export type menuActions =
  | { type: "delete"; payload: string }
  | { type: "initialize"; payload: IMenuItem[] };