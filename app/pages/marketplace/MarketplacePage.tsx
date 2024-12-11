import React from "react";
import { useMarketplacePageViewModel } from "../../viewmodels/MarketplacePageViewModel";
import Header from "../../components/Header";
import HorizontalProductList from "../../components/HorizontalProductList";
import "../../styles/MarketplacePage.css";
import VerticalProductList from "../../components/VerticalProductList";
import { Product } from "~/models/product";

interface MarketplacePageProps {
  horizontalProducts: Product[];
  verticalProducts: Product[];
}

const MarketplacePage: React.FC<MarketplacePageProps> = ({
  horizontalProducts,
  verticalProducts,
}) => {
  const { paginatedProducts, currentPage, goToPage, loading } = useMarketplacePageViewModel({
    horizontalProducts,
    verticalProducts,
  });

  return (
    <div className="page-container">
      <Header />
      <div className="center-container">
        <div className="main-box">
          <div className="mb-8">
            <HorizontalProductList products={horizontalProducts} />
          </div>
          {loading && <div className="loading">Loading products...</div>}
          <VerticalProductList
            verticalProducts={verticalProducts}
            products={paginatedProducts}
            currentPage={currentPage}
            goToPage={goToPage}
          />
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;