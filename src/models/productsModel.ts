import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Products, IProducts } from '../interfaces';

// eslint-disable-next-line import/prefer-default-export
export async function create(product: IProducts): Promise<Products> {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  const newProduct: Products = { id, name, amount };
  return newProduct;
}

export async function getAllProduct(): Promise<Products[]> {
  const query = 'SELECT * FROM Trybesmith.products';
  const [products] = await connection.execute(query);
  return products as Products[];
}