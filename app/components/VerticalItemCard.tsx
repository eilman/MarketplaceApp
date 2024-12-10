import { FC } from "react";
import { Product } from "../models/product";
import "../styles/VerticalItemCard.css";

interface ItemCardProps {
  product: Product;
}

const ItemCard: FC<ItemCardProps> = ({ product }) => {
  return (
    <div className="item-card">
      <img src={product.imageUrl} alt={product.name} />
      <h2 className="item-card-pName">{product.name}</h2>
      <div className="item-price-container">₺ {product.price}</div>
      <p>{product.countOfPrices} Satıcı</p>
      <p>{product.followCount}+ Takip</p>
    </div>
  );
};

export default ItemCard;
