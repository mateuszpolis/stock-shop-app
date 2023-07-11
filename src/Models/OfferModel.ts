export type Offer = {
  id: number;
  name: string;
  description: string;
  discount: number;
  price_current: number;
  price_before: number;
  categories: string[];
  image?: string;
};