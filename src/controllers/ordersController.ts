import { Request, Response } from 'express';
import orderService from '../services/ordersService';
import usersModel from '../models/usersModel';

const getAll = async (req:Request, res:Response) => {
  const order = await orderService.getAll();
  return res.status(200).json(order);
};

const createOrder = async (req:Request, res:Response) => {
  const { data: { username }, productsIds } = req.body;
  const [data] = await usersModel.getIdUsername(username);
  const { id } = data;
  const result = await orderService.createOrder(id, productsIds);
  return res.status(201).json(result);
};
  
export default { 
  getAll, 
  createOrder, 
};
