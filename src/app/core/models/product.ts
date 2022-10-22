export interface Product {
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
