import orderModel from '../models/ordersModel';
import { IOrder } from '../interfaces';
import { update } from '../models/productsModel';

const getAll = async (): Promise<IOrder[]> => {
  const order = await orderModel.getAll();
  return order;
};

const createOrder = async (userId: number, productsIds: number[]) => {
  const orderId = await orderModel.createOrder(userId);
  await Promise.all(productsIds.map((prodId) => update(orderId, prodId)));
  return { userId, productsIds };
};

const orderService = { 
  getAll, 
  createOrder, 
};

export default orderService;