import { renderHook, act, waitFor } from "@testing-library/react";
import { useMarketplacePageViewModel } from "../viewmodels/MarketplacePageViewModel";
import { fetchProducts } from "../services/productService";
import { ProductResponse } from "../models/product";

jest.mock("../services/productService");

const mockFetchProducts = fetchProducts as jest.MockedFunction<typeof fetchProducts>;

describe("useMarketplacePageViewModel", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Initial product fetching", async () => {
    const mockResponse: ProductResponse = {
      horizontalProductList: [
        {
            code: "001",
            name: "Product A",
            imageUrl: "https://example.com/image-a.jpg",
            price: 100,
            countOfPrices: 2,
            followCount: 10,
            dropRatio: 2,
            url: "https://example.com/product101.json"
        },
      ],
      productList: [
        {
            code: "002",
            name: "Product B",
            imageUrl: "https://example.com/image-b.jpg",
            price: 200,
            countOfPrices: 5,
            followCount: 20,
            dropRatio: 3,
            url: "https://example.com/product100.json"
        },
      ],
      nextUrl: null,
    };

    mockFetchProducts.mockResolvedValueOnce(mockResponse);
    const { result } = renderHook(() => useMarketplacePageViewModel());
    expect(result.current.loading).toBe(true);
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.horizontalProducts).toEqual(mockResponse.horizontalProductList);
    expect(result.current.verticalProducts).toEqual(mockResponse.productList);
  });

  it("Error Handling", async () => {
    mockFetchProducts.mockRejectedValueOnce(new Error("Network failure"));
    const { result } = renderHook(() => useMarketplacePageViewModel());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.horizontalProducts).toEqual([]);
    expect(result.current.verticalProducts).toEqual([]);
  });

  it("Handle Pagination", async () => {
    const mockResponse: ProductResponse = {
      horizontalProductList: [],
      productList: [
        {
          code: "003",
          name: "Product C",
          imageUrl: "https://example.com/image-c.jpg",
          price: 120,
          countOfPrices: 3,
          followCount: 15,
          dropRatio: 1,
          url: "https://example.com/product105.json"
        },
        {
          code: "004",
          name: "Product D",
          imageUrl: "https://example.com/image-d.jpg",
          price: 150,
          countOfPrices: 2,
          followCount: 25,
          dropRatio: 5,
          url: "https://example.com/product106.json"
        },
        {
          code: "005",
          name: "Product E",
          imageUrl: "https://example.com/image-e.jpg",
          price: 180,
          countOfPrices: 2,
          followCount: 8,
          dropRatio: 1,
          url: "https://example.com/product1050.json"
        },
        {
          code: "006",
          name: "Product F",
          imageUrl: "https://example.com/image-f.jpg",
          price: 220,
          countOfPrices: 4,
          followCount: 18,
          dropRatio: 3,
          url: "https://example.com/product109.json"
        },
      ],
      nextUrl: null,
    };

    mockFetchProducts.mockResolvedValueOnce(mockResponse);
    const { result } = renderHook(() => useMarketplacePageViewModel());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.paginatedProducts).toEqual([
      mockResponse.productList[0],
      mockResponse.productList[1],
    ]);
    act(() => {
      result.current.goToPage(2);
    });
    expect(result.current.paginatedProducts).toEqual([
      mockResponse.productList[2],
      mockResponse.productList[3],
    ]);
  });
});
