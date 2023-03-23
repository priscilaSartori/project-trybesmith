import { Request, Response } from 'express';
import orderService from '../services/ordersService';
import usersModel from '../models/usersModel';

const getAll = async (req:Request, res:Response) => {
  const order = await orderService.getAll();
  return res.status(200).json(order);
};

const createOrder = async (req:Request, res:Response) => {
  const { data, productsIds } = req.body;
  const dataUsername = await usersModel.getIdUsername(data.users[0].username);
  const { id } = dataUsername[0];
  const result = await orderService.createOrder(id, productsIds);
  return res.status(201).json(result);
};
  
export default { 
  getAll, 
  createOrder, 
};
