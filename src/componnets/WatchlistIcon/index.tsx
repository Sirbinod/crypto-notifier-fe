import { FC, useEffect, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import Modal from "../Model";
import Input from "../Input";
import { createData, deleteData } from "../../api/request";
import { watchlistAPI } from "../../api";

import { WatchlistInterface } from "../../interface/watchlistInterface";
import { CryptoInterface } from "../../interface/cryptoInterface";

interface WatchlistIconProps {
  code: string;
  watchlist?: WatchlistInterface<CryptoInterface>[];
}

const WatchlistIcon: FC<WatchlistIconProps> = ({ code, watchlist }) => {
  const [isWatchlisted, setWatchlist] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();

 
  
  const handleWatchlistToggle = async() => {
    if (!isWatchlisted) {
      setModalIsOpen(true);
    } else {
      const selectData = watchlist?.find((d)=>d.code ===code)
      await deleteData(`${watchlistAPI}`, selectData?._id);
    }
    setWatchlist((prev) => !prev);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleWatchlist = async() => {
    const newObj = { code,minPrice, maxPrice };
    const res = await createData(`${watchlistAPI}`, newObj);
    if(res.status) setModalIsOpen(false)
  }
  
  useEffect(() => {
    const includesCode = watchlist?.some((item) => item.code === code);
    if (includesCode) {
      setWatchlist(true);
    } else {
      setWatchlist(false);
      
    }
  }, [watchlist, code])
  return (
    <>
      <IoIosHeart
        className={`text-2xl cursor-pointer ${
          isWatchlisted ? "text-red-500" : "text-[#b3d1ff]"
        }`}
        onClick={handleWatchlistToggle}
      />
      {modalIsOpen && (
        <Modal title={code} isOpen={modalIsOpen} onClose={closeModal}>
          <form className="flex flex-col gap-2">
            <Input
              type="number"
              placeholder="Min Price"
              value={minPrice !== undefined ? minPrice.toString() : ""}
              onChange={(e) => setMinPrice(parseInt(e.target.value, 10))}
            />
            <Input
              type="number"
              placeholder="Max Price"
              value={maxPrice !== undefined ? maxPrice.toString() : ""}
              onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
            />

            <button
              type="button"
              onClick={handleWatchlist}
              className="bg-[#003458] text-white p-2 rounded"
            >
              Submit
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default WatchlistIcon;
