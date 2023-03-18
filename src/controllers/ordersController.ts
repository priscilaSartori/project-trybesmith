import { Request, Response } from 'express';
import orderService from '../services/ordersService';
import { IOrder } from '../interfaces';

const getAll = async (req:Request, res:Response) => {
  const order = await orderService.getAll();
  return res.status(200).json(order);
};

const createOrder = async (req:Request, res:Response) => {
  const order = req.body as IOrder;
  const { status, orders } = await orderService.createOrder(order);
  return res.status(status).json(orders);
};

export default { getAll, createOrder };
