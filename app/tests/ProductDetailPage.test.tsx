import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductDetailPage from "../pages/productDetail/ProductDetailPage";
import { ProductDetail } from "../models/product";

describe("ProductDetailPage tests", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    
  const mockProductDetail: ProductDetail = {
    productName: "IPhone 15 128 GB",
    imageUrl: "https://example/apple/Iphone-15.jpg",
    price: 100,
    rating: 4,
    storageOptions: ["128GB", "256GB", "512GB"],
    mkName: "Apple",
    badge: "En Popüler 4. Cep Telefonu",
    freeShipping: true,
    lastUpdate: "yesterday",
  };

  it("Handle Details", () => {
    render(
      <MemoryRouter>
        <ProductDetailPage productDetail={mockProductDetail} />
      </MemoryRouter>
    );

    expect(screen.getByText("Apple", { selector: ".heading-m" })).toBeInTheDocument();
    expect(screen.getByText("IPhone 15 128 GB", { selector: ".heading-lp" })).toBeInTheDocument();
    expect(screen.getByText("En Popüler 4. Cep Telefonu", { selector: ".badge-container" })).toBeInTheDocument();
    expect(screen.getByText("Ücretsiz Kargo", { selector: ".shipping-container" })).toBeInTheDocument();
    expect(screen.getByText("Son Güncelleme: yesterday", { selector: ".update-container" })).toBeInTheDocument();

    mockProductDetail.storageOptions.forEach((option) => {
      expect(screen.getByText(option, { selector: ".storage-option" })).toBeInTheDocument();
    });
  });

  it("Handle Null Data", () => {
    render(
      <MemoryRouter>
        <ProductDetailPage productDetail={null} />
      </MemoryRouter>
    );

    expect(screen.getByText("Product not found.")).toBeInTheDocument();
  });
});
