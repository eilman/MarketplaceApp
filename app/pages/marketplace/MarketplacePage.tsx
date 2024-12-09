import { useEffect } from "react";
import { useMarketplacePageViewModel } from "./MarketplacePageViewModel";
import Header from "~/components/Header";
import HorizontalProductList from "~/components/HorizontalProductList";
import ItemCard from "~/components/ItemCard";
import "../../styles/MarketplacePage.css";

const MarketplacePage: React.FC = () => {
  const {
    horizontalProducts,
    verticalProducts,
    paginatedProducts,
    currentPage,
    goToPage,
    loading,
  } = useMarketplacePageViewModel();

  return (
    <div className="page-container">
      <Header />
      <div className="center-container">
        <div className="bg-white shadow-lg rounded-[30px] p-8 w-full max-w-4xl">
          <div className="mb-8">
            <HorizontalProductList products={horizontalProducts} />
          </div>
          {loading && <div className="loading">Loading products...</div>}
          <div className="vertical-product-list-container">
            <div className="vertical-product-list">
              {paginatedProducts.map((product) => (
                <a
                  key={product.code}
                  href={`/productDetail/${product.code}`}
                  className="block"
                >
                  <ItemCard product={product} />
                </a>
              ))}
            </div>
            <div className="numbers-pagination">
              {Array.from(
                { length: Math.ceil(verticalProducts.length / 2) },
                (_, index) => (
                  <button
                    key={index}
                    className={`number-button ${
                      currentPage === index + 1 ? "active-page" : ""
                    }`}
                    onClick={() => goToPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
