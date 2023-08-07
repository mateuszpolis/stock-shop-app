export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
  priceHistory: number[];
  discount: number;
  stockQuantity: number;
  categories: string[];
  images: string[];
  reviews: string[];
  available: boolean;
  createdTime: string;
  updatedTime: string;
  weight: number;
  dimensions: string;
  rating: number;
};
