export interface CryptoInterface {
    _id:string;
    image: string;
    name: string;
    code: string;
    price: number;
    marketCap: number;
    change24h: number;
  }

  export interface PaginatedData<T> {
    items: T;
    pagination: {
      totalPages: number;
      totalItems: number;
      currentPage: number;
      perPage: number;
    };
  }