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

export async function update(createOrder:number, prodId: number): Promise<void> {
  console.log('prodmodel prodId', prodId);
  console.log('prodmodel createOrder', createOrder);
  await connection.execute<ResultSetHeader>(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
    [createOrder, prodId],
  );
}