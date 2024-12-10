import React from "react";
import { useMarketplacePageViewModel } from "../../viewmodels/MarketplacePageViewModel";
import Header from "../../components/Header";
import HorizontalProductList from "../../components/HorizontalProductList";
import "../../styles/MarketplacePage.css";
import VerticalProductList from "../../components/VerticalProductList";


const MarketplacePage: React.FC = () => {
  const {
    horizontalProducts,
    loading,
  } = useMarketplacePageViewModel();

  return (
    <div className="page-container">
      <Header />
      <div className="center-container">
        <div className="main-box">
          <div className="mb-8">
            <HorizontalProductList products={horizontalProducts} />
          </div>
          {loading && <div className="loading">Loading products...</div>}
            <VerticalProductList />
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
