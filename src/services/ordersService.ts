import orderModel from '../models/ordersModel';
import { IOrder } from '../interfaces';

const getAll = async (): Promise<IOrder[]> => {
  const order = await orderModel.getAll();
  return order;
};

const createOrder = async (order: IOrder) => {
  const orders = await orderModel.createOrder(order);
  return { status: 201, orders };
};

const orderService = { getAll, createOrder };

export default orderService;