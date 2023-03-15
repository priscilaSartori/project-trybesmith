import { Request, Response } from 'express';

import { IProducts } from '../interfaces';
import * as productsService from '../services/productsService';

const createProduct = async (req: Request, res: Response) => {
  const products = req.body as IProducts;
  const { status, data, error } = await productsService.create(products);
  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
};
export default createProduct;