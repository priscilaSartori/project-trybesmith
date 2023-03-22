// import jwt from 'jsonwebtoken';
import orderModel from '../models/ordersModel';
import { IOrder } from '../interfaces';
// import { secret, config } from '../middlewares/jwtConfig';

const getAll = async (): Promise<IOrder[]> => {
  const order = await orderModel.getAll();
  return order;
};

// const createOrder = async (userId: number, order: IOrder) => {
  
// };

const orderService = { getAll, 
  // createOrder 
};

export default orderService;