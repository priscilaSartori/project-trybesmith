import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { ILogin } from '../interfaces';

const getAll = async (): Promise<ILogin[]> => {
  const [rows] = await connection.execute<ILogin[] & RowDataPacket[]>(
    `SELECT orders.id, orders.userId, JSON_ARRAYAGG(product.id) AS productsIds
    FROM Trybesmith.orders AS orders
    INNER JOIN Trybesmith.products AS product
    ON product.order_id = orders.id
    GROUP BY orders.id;`,
  );
  return rows as ILogin[];
};
const ordersModel = { getAll };

export default ordersModel;