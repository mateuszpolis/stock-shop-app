export type Review = {
  id: number;
  userId: number;
  userFirstName: string;
  userLastName: string;
  productId: number;
  rating: number;
  reviewText: string;
  likes: number;
  ownsProduct: boolean;
  createdTime: Date;
};

export type ReviewCreate = {
  productId: number;
  userId: number;
  rating: number;
  reviewText: string;
};
