export interface Product {
    code: string;
    name: string;
    imageUrl: string;
    price: number;
    rating: number;
    detailUrl: string;
    storageOptions: Array<string>;
    mkName: string;
    badge: string;
    countOfPrices: number;
    followCount: number;
    dropRatio: number;

  }
  
  export interface ProductResponse {
    horizontalProductList: Product[];
    productList: Product[];
    nextUrl: string | null;
  }