import { FC } from "react";
import useGetApiRequest from "../api/getRequest";
import { Response } from "../interface";
import { watchlistAPI } from "../api";
import { CryptoInterface } from "../interface/cryptoInterface";
import { WatchlistInterface } from "../interface/watchlistInterface";
import Table from "../componnets/Table";

const Watchlist: FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = useGetApiRequest<Response<WatchlistInterface<CryptoInterface>[]>>(
    `${watchlistAPI}`
  );
  console.log(data, "99999999999999999")

  const cryptoData = data?.data.map(
    (item: WatchlistInterface<CryptoInterface>) => item?.crypto
  );
  console.log(cryptoData, "cryptoData,   99999999999999999");

  return (
    <>
      <div className="container mx-auto">
        <div className="mb-6 ">
          <h1 className="text-3xl font-extrabold mb-2">Your Watchlist coins</h1>
        </div>
        <Table items={cryptoData} />
      </div>
    </>
  );
};
export default Watchlist;
