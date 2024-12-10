import { renderHook, waitFor } from "@testing-library/react";
import { useProductDetail } from "../viewmodels/ProductDetailPageViewModel";
import { fetchProductDetail } from "../services/productService";

jest.mock("../services/productService");

const mockFetchProductDetail = fetchProductDetail as jest.MockedFunction<typeof fetchProductDetail>;

describe("useProductDetail", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Fetching Product Details", async () => {
    const mockProductDetail = {
      code: "500",
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

    mockFetchProductDetail.mockResolvedValueOnce(mockProductDetail);
    const { result } = renderHook(() => useProductDetail("500"));
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.productDetail).toEqual(mockProductDetail);
  });

  it("Error Handling", async () => {
    mockFetchProductDetail.mockRejectedValueOnce(new Error("Failed to fetch"));
    const { result } = renderHook(() => useProductDetail("500"));
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.productDetail).toBeNull();
  });

  it("Handle Null Code", () => {
    const { result } = renderHook(() => useProductDetail(undefined));
    expect(result.current.productDetail).toBeNull();
    expect(result.current.isLoading).toBe(false);
  });
});
