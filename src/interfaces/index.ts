export interface IProducts {
  id?: number;
  name: string;
  amount: string;
}

export interface Products extends IProducts {
  id: number;
}

export interface IUsers {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface Users extends IUsers {
  id: number;
}

export interface IOrder {
  id: number;
  userId: number;
  productsIds: number[];
}

export interface ILogin {
  username: string;
  password: string;
}
