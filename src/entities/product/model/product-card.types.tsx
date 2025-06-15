//TODO: вытащить product в отельную сущность
export interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  url: string;
  onAddCard: (id: number) => void;
  onAddFavorite: (id: number) => void;
}
