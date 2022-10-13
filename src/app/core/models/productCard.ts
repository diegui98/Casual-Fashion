export interface ProductCard {
  name: string;
  image: {
    image: string[];
    color: string;
  }[];
  price: number;
  sale: boolean;
  inStock: boolean;
}
