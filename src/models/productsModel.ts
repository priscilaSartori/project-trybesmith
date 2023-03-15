import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Products, IProducts } from '../interfaces';

export async function create(product: IProducts): Promise<Products> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Products = { id, name, amount };
  return newProduct;
}
export default create;