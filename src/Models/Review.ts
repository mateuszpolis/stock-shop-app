export type Review = {
  id: number;
  productId: number;
  userId: number;
  rating: number;
  reviewText: string;
  likes: number;
  ownsProduct: boolean;
  createdTime: string;
};
