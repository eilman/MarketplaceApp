import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductDetailPage from "../pages/productDetail/ProductDetailPage";
import { ProductDetail } from "../models/product";

describe("ProductDetailPage tests", () => {
  const mockProductDetail: ProductDetail = {
    productName: "iPhone 15 128 GB",
    imageUrl: "https://example/apple/iphone-15.jpg",
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

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("iPhone 15 128 GB")).toBeInTheDocument();
    expect(screen.getByText("En Popüler 4. Cep Telefonu")).toBeInTheDocument();
  });
});
