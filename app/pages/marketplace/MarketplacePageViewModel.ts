import { useState, useEffect } from "react";
import { fetchProducts } from "~/services/productService";
import { Product, ProductResponse } from "~/models/product";

export const useMarketplacePageViewModel = () => {
  const [horizontalProducts, setHorizontalProducts] = useState<Product[]>([]);
  const [verticalProducts, setVerticalProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        let nextUrl: string | null = null;
        const initialData: ProductResponse = await fetchProducts();

        if (initialData.horizontalProductList) {
          setHorizontalProducts(initialData.horizontalProductList);
        }

        if (initialData.productList) {
          setVerticalProducts(initialData.productList);
        }

        nextUrl = initialData.nextUrl;

        while (nextUrl) {
          const nextData: ProductResponse = await fetchProducts(nextUrl);
          if (nextData.horizontalProductList) {
            setHorizontalProducts((prev) => [...prev, ...nextData.horizontalProductList]);
          }

          if (nextData.productList) {
            setVerticalProducts((prev) => [...prev, ...nextData.productList]);
          }

          nextUrl = nextData.nextUrl;
        }
      } catch (error) {
        console.error("Error loading products", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const paginatedProducts = verticalProducts.slice(
    (currentPage - 1) * 2,
    currentPage * 2
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    horizontalProducts,
    verticalProducts,
    paginatedProducts,
    currentPage,
    goToPage,
    loading,
  };
};
