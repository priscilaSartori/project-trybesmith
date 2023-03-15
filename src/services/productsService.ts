import { IProducts } from '../interfaces';
import * as productsModel from '../models/productsModel';

const create = async (IProduct: IProducts) => {
  const product = await productsModel.create(IProduct);
  return { status: 201, product };
};
export default create;