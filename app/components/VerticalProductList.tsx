import React, { Suspense } from "react";
import VerticalItemCard from "~/components/VerticalItemCard";
import { useMarketplacePageViewModel } from "../viewmodels/MarketplacePageViewModel";
import "../styles/MarketplacePage.css";

const Pagination = React.lazy(() => import('@mui/material/Pagination'));

const VerticalProductList: React.FC= () => {
const {
    verticalProducts,
    paginatedProducts,
    currentPage,
    goToPage,
    } = useMarketplacePageViewModel();

  return (
    <div>
        <div className="vertical-product-list">
            {paginatedProducts.map((product) => (
            <a
                key={product.code}
                href={`/productDetail/${product.code}`}
                className="block"
            >
                <VerticalItemCard product={product} />
            </a>
            ))}
        </div>
        <div className="vertical-pagination">
            {typeof window !== 'undefined' ? (
            <Suspense fallback={<div>Loading pagination...</div>}>
                <Pagination
                count={Math.ceil(verticalProducts.length / 2)}
                page={currentPage}
                size="small"
                onChange={(event, value) => goToPage(value)}
                />
            </Suspense>
            ) : (
            <div>Loading...</div>
            )}
        </div>
    </div>
  );
};

export default VerticalProductList;
