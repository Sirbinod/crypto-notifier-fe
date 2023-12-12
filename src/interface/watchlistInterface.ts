export interface WatchlistInterface<T> {
  _id: string;
  code: string;
  minPrice: number;
    maxPrice: number;
    crypto:T
}
