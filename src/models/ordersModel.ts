import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IOrder } from '../interfaces';

const getAll = async (): Promise<IOrder[]> => {
  const [rows] = await connection.execute<RowDataPacket[] & IOrder[]>(
    `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(product.id) AS productsIds
    FROM Trybesmith.orders AS orders
    INNER JOIN Trybesmith.products AS product
    ON product.order_id = orders.id
    GROUP BY orders.id;`,
  );
  return rows as IOrder[];
};

const createOrder = async (userId: number): Promise<number> => {
  const [dataInserted] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUE (?)',
    [userId],
  );
  const { insertId } = dataInserted;
  return insertId;
};
 
export default { 
  getAll,
  createOrder,
};