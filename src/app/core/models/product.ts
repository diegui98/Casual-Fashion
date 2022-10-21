export interface Product {
  name: string;
  image: {
    image: string[];
    color: string;
  }[];
  price: number;
  sale: boolean;
  inStock: boolean;
  size: number[];
}
