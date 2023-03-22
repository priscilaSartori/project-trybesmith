// import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import orderService from '../services/ordersService';
// import { IOrder, IToken } from '../interfaces';
// import { secret } from '../middlewares/jwtConfig';
// import usersModel from '../models/usersModel';

const getAll = async (req:Request, res:Response) => {
  const order = await orderService.getAll();
  return res.status(200).json(order);
};

// const createOrder = async (req:Request, res:Response) => {

// };
  
export default { getAll, 
  // createOrder 
};
