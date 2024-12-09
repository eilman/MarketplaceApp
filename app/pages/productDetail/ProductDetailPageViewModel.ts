import { useEffect, useState } from "react";
import { fetchProductDetail } from "~/services/productService";

export interface ProductDetail {
  code: string;
  productName: string;
  imageUrl: string;
  price: number;
  rating: number;
  storageOptions: string[];
  mkName: string;
  badge: string;
  freeShipping: boolean;
  lastUpdate: string;
}

export const useProductDetail = (code: string | undefined) => {
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!code) return;

    const loadProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetchProductDetail(code);
        setProductDetail(response);
      } catch (error) {
        console.error("Product details could not be fetched", error);
        setProductDetail(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [code]);

  return { productDetail, isLoading };
};
