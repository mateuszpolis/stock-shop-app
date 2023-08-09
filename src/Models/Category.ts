export type Category = {
  id: number;
  name: string;
  descritpion: string;
  hasChildren: boolean;
  parentCategory: number;
  transactions: number;
  visits: number;
};
