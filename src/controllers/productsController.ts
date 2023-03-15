import { Request, Response } from 'express';

import { IProducts } from '../interfaces';
import create from '../services/productsService';

const createProduct = async (req: Request, res: Response) => {
  const products = req.body as IProducts;
  const { status, product } = await create(products);
  return res.status(status).json(product);
};
export default createProduct;