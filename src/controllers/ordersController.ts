import { Request, Response } from 'express';
import orderService from '../services/ordersService';

const getAll = async (req:Request, res:Response) => {
  const order = await orderService.getAll();
  return res.status(200).json(order);
};

export default { getAll };
