import { useState } from "react";
import { Product } from "~/models/product";

interface UseMarketplacePageViewModelParams {
  horizontalProducts: Product[];
  verticalProducts: Product[];
}

export const useMarketplacePageViewModel = ({
  horizontalProducts: initialHorizontalProducts,
  verticalProducts: initialVerticalProducts,
}: UseMarketplacePageViewModelParams) => {
  const [verticalProducts, setVerticalProducts] = useState<Product[]>(initialVerticalProducts);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedProducts = verticalProducts.slice(
    (currentPage - 1) * 2,
    currentPage * 2
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    horizontalProducts: initialHorizontalProducts,
    verticalProducts,
    paginatedProducts,
    currentPage,
    goToPage,
    loading: false,
  };
};