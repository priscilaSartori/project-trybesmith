import { Request, Response } from 'express';
import orderService from '../services/ordersService';

// eslint-disable-next-line import/prefer-default-export
export const getAll = async (req:Request, res:Response) => {
  const order = orderService.getAll();
  return res.status(200).json(order);
};
