export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantify: number;
}

export interface ICartState {
  items: ICartItem[];
}