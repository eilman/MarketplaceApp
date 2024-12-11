import React from "react";
import Header from "../../components/Header";
import "../../styles/ProductDetailPage.css";
import { ProductDetail } from "~/models/product";

interface ProductDetailPageProps {
  productDetail: ProductDetail | null;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productDetail }) => {
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
                <h2 className="heading-lp">{productDetail.productName}</h2>
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
                <div className="product-detail-item">
                  <dt className="product-detail-title">Açıklamalar</dt>
                  <dd className="product-detail-value">
                    {productDetail.mkName} / {productDetail.productName}
                  </dd>
                </div>
                <div className="product-detail-item">
                  <dt className="product-detail-title">Değişim/İade</dt>
                  <dd className="product-detail-value">30 Gün</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="product-details-container">
            <div className="header-section">
              <h3 className="title">Ürün Detayları</h3>
            </div>
            <div className="details-container">
              <dl className="details-grid">
                <div className="details-item">
                  <dt className="details-label">Marka</dt>
                  <dd className="details-value">{productDetail.mkName}</dd>
                </div>
                <div className="details-item">
                  <dt className="details-label">Model</dt>
                  <dd className="details-value">{productDetail.productName}</dd>
                </div>
                <div className="details-item">
                  <dt className="details-label">Kategori</dt>
                  <dd className="details-value">Teknoloji</dd>
                </div>
                <div className="details-item">
                  <dt className="details-label">Değişim/İade</dt>
                  <dd className="details-value">30 Gün</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="product-details-container">
            <div className="header-section">
              <h3 className="title">Satıcı Bilgileri</h3>
            </div>
            <div className="details-container">
              <dl className="details-grid">
                <div className="details-item">
                  <dt className="details-label">Satıcı</dt>
                  <dd className="details-value">Dwight S.</dd>
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
