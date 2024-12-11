import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ProductDetailPage from "~/pages/productDetail/ProductDetailPage";
import { fetchProductDetail } from "~/services/productService";
import { ProductDetail } from "~/models/product";

export const loader: LoaderFunction = async ({ params }) => {
  const { code } = params;

  if (!code) {
    throw new Response("Product code is required", { status: 400 });
  }

  try {
    const productDetail: ProductDetail = await fetchProductDetail(code);
    return { productDetail };
  } catch (error) {
    console.error("Error fetching product details", error);
    throw new Response("Product not found", { status: 404 });
  }
};

const ProductDetailRoute: React.FC = () => {
  const { productDetail } = useLoaderData<typeof loader>();
  return <ProductDetailPage productDetail={productDetail} />;
};

export default ProductDetailRoute;
