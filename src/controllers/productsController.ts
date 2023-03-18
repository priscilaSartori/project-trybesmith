import { Request, Response } from 'express';
import { IProducts } from '../interfaces';
import * as productService from '../services/productsService';

// eslint-disable-next-line import/prefer-default-export
export async function createProduct(req: Request, res: Response) {
  const products = req.body as IProducts;
  const { status, product } = await productService.create(products);
  return res.status(status).json(product);
}

export async function getAllProduct(_req: Request, res: Response) {
  const { status, data } = await productService.getAllProduct();
  res.status(status).json(data);
}