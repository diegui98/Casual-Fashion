export interface Product {
  id: number;
  name: string;
  image: {
    image: string[];
    color: string;
    size: number[];
  }[];
  price: number;
  sale: boolean;
  inStock: boolean;
}
