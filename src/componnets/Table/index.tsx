import { FC, HTMLAttributes } from "react";
import { CryptoInterface } from "../../interface/cryptoInterface";
import { formatNumberWithSuffix, formattedPrice } from "../../utils/helper";
import WatchlistIcon from "../WatchlistIcon";
import useGetApiRequest from "../../api/getRequest";
import { Response } from "../../interface";
import { WatchlistInterface } from "../../interface/watchlistInterface";
import { watchlistAPI } from "../../api";

interface TableProps extends HTMLAttributes<HTMLDivElement> {
  items?: CryptoInterface[];
}
const Table: FC<TableProps> = (props) => {
  const { data } = useGetApiRequest<
    Response<WatchlistInterface<CryptoInterface>[]>
  >(`${watchlistAPI}`);
  return (
    <div className="relative overflow-x-auto shadow-md border sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right ">
        <thead className="text-xs uppercase">
          <tr className="border-b">
            <th scope="col" className="px-6 py-3">
              All coins
            </th>
            <th scope="col" className="px-6 py-3">
              price
            </th>
            <th scope="col" className="px-6 py-3">
              Market cap
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              24h
            </th>
          </tr>
        </thead>
        <tbody>
          {props?.items?.map((item, index) => (
            <tr className="border-b hover:bg-slate-100 " key={item._id}>
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                <div className="flex items-center gap-4">
                  <WatchlistIcon
                    code={item?.code}
                    watchlist={data?.data}
                  />
                  <span>{index + 1}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-transparent">
                      <img
                        className="w-[100%] h-[100%]"
                        src={item?.image}
                        alt={item.name}
                      />
                    </div>
                    <div className="">
                      <h1 className="text-base font-semibold">{item?.name}</h1>
                      <h2 className="text-sm font-normal">{item?.code}</h2>
                    </div>
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">{formattedPrice(item?.price)}</td>
              <td className="px-6 py-4">
                {formatNumberWithSuffix(item?.marketCap)}
              </td>
              <td
                className={`px-6 py-4 text-end ${
                  Math.sign(item?.change24h) === -1
                    ? "text-red-700"
                    : "text-green-600"
                }`}
              >
                {item?.change24h}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
