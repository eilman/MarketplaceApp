import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MarketplacePage from "~/pages/marketplace/MarketplacePage";
import { fetchProducts } from "~/services/productService";
import { Product, ProductResponse } from "~/models/product";

export const loader: LoaderFunction = async () => {
  try {
    let nextUrl: string | null = null;
    let horizontalProducts: Product[] = [];
    let verticalProducts: Product[] = [];

    const initialData: ProductResponse = await fetchProducts();
    if (initialData.horizontalProductList) {
      horizontalProducts = initialData.horizontalProductList;
    }
    if (initialData.productList) {
      verticalProducts = initialData.productList;
    }
    nextUrl = initialData.nextUrl;

    while (nextUrl) {
      const nextData: ProductResponse = await fetchProducts(nextUrl);
      if (nextData.horizontalProductList) {
        horizontalProducts = [...horizontalProducts, ...nextData.horizontalProductList];
      }
      if (nextData.productList) {
        verticalProducts = [...verticalProducts, ...nextData.productList];
      }
      nextUrl = nextData.nextUrl;
    }

    return { horizontalProducts, verticalProducts };
  } catch (error) {
    console.error("Error fetching products", error);
    return { horizontalProducts: [], verticalProducts: [] };
  }
};

const MarketplaceRoute: React.FC = () => {
  const { horizontalProducts, verticalProducts } = useLoaderData<typeof loader>();

  return (
    <MarketplacePage
      horizontalProducts={horizontalProducts}
      verticalProducts={verticalProducts}
    />
  );
};

export default MarketplaceRoute;