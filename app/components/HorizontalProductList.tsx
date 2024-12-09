import React, { useState } from "react";
import { Product } from "../models/product";
//import { Pagination as MuiPagination } from "@mui/material";
import { Link } from "@remix-run/react";
import "../styles/MarketplacePage.css";

interface HorizontalProductListProps {
  products: Product[];
}

const HorizontalProductList: React.FC<HorizontalProductListProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  /*
  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };
*/

  return (
    <div className="horizontal-list-container">
      <div className="horizontal-list">
        {paginatedProducts.map((product) => (
          <Link 
          key={product.code} 
          to={`/productDetail/${product.code}`}
          className="horizontal-item"
        >
          <img src={product.imageUrl} alt={product.name} />
          <div className="product-info">
            <h2 className="heading-l">{product.name}</h2>
            <div className="price-container">₺ {product.price}</div>
            <p>{product.countOfPrices} Satıcı</p>
            <p>{product.followCount}+ Takip</p>
          </div>
        </Link>
        ))}
      </div>
      <div className="dots-pagination">
        {products.map((_, index) => (
          <button
            key={index}
            className={`dot ${
              index === currentPage - 1 ? "active-dot" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalProductList;
