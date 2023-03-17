import { Request, Response } from 'express';
import orderService from '../services/ordersService';

const getAll = async (req:Request, res:Response) => {
  const order = orderService.getAll();
  return res.status(200).json(order);
};

const ordersController = { getAll };

export default ordersController;