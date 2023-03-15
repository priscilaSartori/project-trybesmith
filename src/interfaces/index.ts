export interface IProducts {
  id?: number;
  name: string;
  amount: string;
}

export interface Products extends IProducts {
  id: number;
}