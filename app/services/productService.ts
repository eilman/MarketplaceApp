import { fetchJSON } from "./api";
import { ProductResponse } from "../models/product";

export const fetchProducts = async (url: string = "https://mock.akakce.dev/page.json"): Promise<ProductResponse> => {
  return await fetchJSON(url);
};

export const fetchProductDetail = async (code: string): Promise<any> => {
  const url = `https://mock.akakce.dev/product${code}.json`;
  return await fetchJSON(url);
};