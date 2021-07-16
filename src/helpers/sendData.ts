import { IOrder } from './../interfaces/IOrder';
 export const sendData = async (url: string, order: IOrder) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      id: order.id,
      orderedItems: order.orderedItems,
      user: order.user,
      status: order.status === "new" ? "prep" : "delivery",
    }),
  });
     
  return res.json();
};
