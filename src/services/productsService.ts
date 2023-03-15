import { IProducts } from '../interfaces';
import * as productsModel from '../models/productsModel';

// eslint-disable-next-line import/prefer-default-export
export async function create(IProduct: IProducts) {
  const product = await productsModel.create(IProduct);
  return { status: 201, product };
}

export async function getAllProduct() {
  const data = await productsModel.getAll();
  return { status: 200, data };
}