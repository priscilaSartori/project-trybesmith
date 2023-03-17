import orderModel from '../models/ordersModel';
import { IOrder } from '../interfaces';

const getAll = async (): Promise<IOrder[]> => {
  const order = await orderModel.getAll();
  return order;
};
const orderService = { getAll };

export default orderService;