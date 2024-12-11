import { ProductDetail } from "~/models/product";

interface UseProductDetailParams {
  productDetail: ProductDetail | null;
}

export const useProductDetail = ({ productDetail }: UseProductDetailParams) => {
  return { productDetail, isLoading: false };
};
