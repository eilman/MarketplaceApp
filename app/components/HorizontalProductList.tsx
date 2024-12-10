import React, { useState } from "react";
import { Product } from "../models/product";
import { Link } from "@remix-run/react";
import HorizontalItemCard from "../components/HorizontalItemCard";
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

  return (
    <div>
      <div>
        {paginatedProducts.map((product) => (
          <Link 
          key={product.code} 
          to={`/productDetail/${product.code}`}
        >
          <HorizontalItemCard product={product} />
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
