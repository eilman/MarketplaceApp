export interface Product {
    code: string;
    name: string;
    imageUrl: string;
    dropRatio: number;
    price: number;
    countOfPrices: number;
    followCount: number;
    url: string;
  }

  export interface ProductDetail {
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
  
  export interface ProductResponse {
    horizontalProductList: Product[];
    productList: Product[];
    nextUrl: string | null;
  }