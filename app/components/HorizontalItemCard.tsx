import { FC } from "react";
import { Product } from "../models/product";
import "../styles/MarketplacePage.css";

interface ItemCardProps {
  product: Product;
}

const ItemCard: FC<ItemCardProps> = ({ product }) => {
  return (
    <div className="horizontal-item">
        <img src={product.imageUrl} alt={product.name} />
        <div className="product-info">
        <h2 className="horizontal-item-h2">{product.name}</h2>
        <div className="horizontal-item-price-container">₺ {product.price}</div>
        <p>{product.countOfPrices} Satıcı</p>
        <p>{product.followCount}+ Takip</p>
        </div>
    </div>
  );
};

export default ItemCard;