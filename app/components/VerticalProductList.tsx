import React, { Suspense } from "react";
import VerticalItemCard from "../components/VerticalItemCard";
import { Product } from "~/models/product";
const Pagination = React.lazy(() => import('@mui/material/Pagination'));

interface VerticalProductListProps {
    verticalProducts: Product[];
    products: Product[];
    currentPage: number;
    goToPage: (page: number) => void;
}

const VerticalProductList: React.FC<VerticalProductListProps> = ({
    verticalProducts,
    products,
    currentPage,
    goToPage,
}) => {
    return (
        <div>
        <div className="vertical-product-list">
            {products.map((product) => (
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
