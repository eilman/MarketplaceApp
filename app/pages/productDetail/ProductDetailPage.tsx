import { FC } from "react";
import { useParams } from "react-router-dom";
import Header from "~/components/Header";
import { useProductDetail } from "./ProductDetailPageViewModel";
import "../../styles/ProductDetailPage.css";

const ProductDetailPage: FC = () => {
  const { code } = useParams<{ code: string }>();
  const { productDetail, isLoading } = useProductDetail(code);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!productDetail) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="page-container">
      <Header />
      <div className="center-container">
        <div className="main-box">
          <div className="inner-box">
            <div className="md:flex" style={{ maxWidth: "fit-content" }}>
              <div className="md:flex-shrink-0" style={{ width: "400px" }}>
                <img
                  src={productDetail.imageUrl}
                  alt={productDetail.productName}
                  className="product-detail-img"
                />
              </div>
              <div className="container-padding">
                <h2 className="heading-m">{productDetail.mkName}</h2>
                <h2 className="heading-l">{productDetail.productName}</h2>
                <div className="badge-container">{productDetail.badge}</div>
                <div className="rating-container">
                  {Array.from({ length: productDetail.rating }, (_, i) => (
                    <span key={i} className="star">
                      ⭐
                    </span>
                  ))}
                </div>
                <div className="price-container">₺ {productDetail.price}</div>
                {productDetail.freeShipping && (
                  <div className="shipping-container">Ücretsiz Kargo</div>
                )}
                {productDetail.lastUpdate && (
                  <div className="update-container">
                    Son Güncelleme: {productDetail.lastUpdate}
                  </div>
                )}
                <div className="storage-option-container">
                  {productDetail.storageOptions.map((option, index) => (
                    <div key={index} className="storage-option">
                      {option}
                    </div>
                  ))}
                </div>
                <div className="button-container">
                  <button className="button">Satın Al</button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black flex items-center">
                    Ürün Detayları
                  </dt>
                  <dd className="mt-1 text-sm text-black/70 sm:mt-0 sm:col-span-2">
                    {productDetail.mkName} / {productDetail.productName}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-black flex items-center">
                    Değişim/İade
                  </dt>
                  <dd className="mt-1 text-sm text-black/70 sm:mt-0 sm:col-span-2">
                    30 Gün
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
