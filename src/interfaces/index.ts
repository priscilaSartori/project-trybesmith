export interface IProducts {
  id?: number;
  name: string;
  amount: string;
}

export interface Products extends IProducts {
  id: number;
}

export interface IUsers {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface Users extends IUsers {
  id: number;
}

export interface IOrder {
  // id: number;
  userId: number;
  productsIds: number[];
}

export interface Order extends IOrder {
  id: number;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IToken {
  users: {
    id: number;
    username: string;
    vocation: string;
    level: number;
    password: string;
  };
  iat: number;
  exp: number;
}