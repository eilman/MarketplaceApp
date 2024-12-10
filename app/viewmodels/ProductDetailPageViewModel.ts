import { useEffect, useState } from "react";
import { fetchProductDetail } from "../services/productService";
import { ProductDetail } from "~/models/product";


export const useProductDetail = (code: string | undefined) => {
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!code) {
      setIsLoading(false);
      setProductDetail(null);
      return;
    }
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
