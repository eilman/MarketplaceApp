import { renderHook, act } from "@testing-library/react";
import { useMarketplacePageViewModel } from "../viewmodels/MarketplacePageViewModel";
import { Product } from "../models/product";

describe("useMarketplacePageViewModel tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockHorizontalProducts: Product[] = [
    {
      code: "001",
      name: "Product A",
      imageUrl: "https://example.com/image-a.jpg",
      price: 100,
      countOfPrices: 2,
      followCount: 10,
      dropRatio: 2,
      url: "https://example.com/product101.json",
    },
  ];

  const mockVerticalProducts: Product[] = [
    {
      code: "002",
      name: "Product B",
      imageUrl: "https://example.com/image-b.jpg",
      price: 200,
      countOfPrices: 5,
      followCount: 20,
      dropRatio: 3,
      url: "https://example.com/product100.json",
    },
    {
      code: "003",
      name: "Product C",
      imageUrl: "https://example.com/image-c.jpg",
      price: 120,
      countOfPrices: 3,
      followCount: 15,
      dropRatio: 1,
      url: "https://example.com/product105.json",
    },
    {
      code: "004",
      name: "Product D",
      imageUrl: "https://example.com/image-d.jpg",
      price: 150,
      countOfPrices: 2,
      followCount: 25,
      dropRatio: 5,
      url: "https://example.com/product106.json",
    },
    {
      code: "005",
      name: "Product E",
      imageUrl: "https://example.com/image-e.jpg",
      price: 180,
      countOfPrices: 2,
      followCount: 8,
      dropRatio: 1,
      url: "https://example.com/product1050.json",
    },
    {
      code: "006",
      name: "Product F",
      imageUrl: "https://example.com/image-f.jpg",
      price: 220,
      countOfPrices: 4,
      followCount: 18,
      dropRatio: 3,
      url: "https://example.com/product109.json",
    },
  ];

  it("Initial data fetching", () => {
    const { result } = renderHook(() =>
      useMarketplacePageViewModel({
        horizontalProducts: mockHorizontalProducts,
        verticalProducts: mockVerticalProducts,
      })
    );

    expect(result.current.horizontalProducts).toEqual(mockHorizontalProducts);
    expect(result.current.verticalProducts).toEqual(mockVerticalProducts);
    expect(result.current.paginatedProducts).toEqual([
      mockVerticalProducts[0],
      mockVerticalProducts[1],
    ]);
    expect(result.current.currentPage).toBe(1);
  });

  it("Handle pagination", () => {
    const { result } = renderHook(() =>
      useMarketplacePageViewModel({
        horizontalProducts: mockHorizontalProducts,
        verticalProducts: mockVerticalProducts,
      })
    );

    act(() => {
      result.current.goToPage(2);
    });

    expect(result.current.paginatedProducts).toEqual([
      mockVerticalProducts[2],
      mockVerticalProducts[3],
    ]);

    act(() => {
      result.current.goToPage(3);
    });

    expect(result.current.paginatedProducts).toEqual([
      mockVerticalProducts[4],
    ]);
  });

  it("Pagination edge cases", () => {
    const { result } = renderHook(() =>
      useMarketplacePageViewModel({
        horizontalProducts: [],
        verticalProducts: [],
      })
    );

    expect(result.current.paginatedProducts).toEqual([]);

    act(() => {
      result.current.goToPage(2);
    });

    expect(result.current.paginatedProducts).toEqual([]);
  });
});
