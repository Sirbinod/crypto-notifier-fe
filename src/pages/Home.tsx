/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import Table from "../componnets/Table";
import useGetApiRequest from "../api/getRequest";
import { cryptoAPI } from "../api";
import { CryptoInterface, PaginatedData } from "../interface/cryptoInterface";
import { Response } from "../interface";
// import { FiSearch } from "react-icons/fi";



const Home: FC = () => {
  const [searchKey, setSearchKey] = useState<string>("");
  const [state, setState] = useState({ currentPage: 1, pageLimit: 50 });
  const { data } = useGetApiRequest<Response<PaginatedData<CryptoInterface[]>>>(
    `${cryptoAPI}?page=${state.currentPage}&limit=${state.pageLimit}&search=${
      searchKey ?? ""
    }`
  );
  const CryptoData = data?.data;

  const handlePrevious=()=>{
    if(state.currentPage > 1){
      setState({...state, currentPage:state.currentPage-1})
    }
  }
  const handleNext=()=>{
      setState({...state, currentPage:state.currentPage+1})
  }
  console.log(data, "09090909090909090909090909090909090");
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold mb-2">
            Cryptocurrency Coins List
          </h1>

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              className="block w-full bg-white px-4 py-2 ps-10 text-sm  border border-[#002358] rounded-2xl focus:border-[#002369]"
              placeholder="Search coins ..."
              required
            />
          </div>
        </div>
        <Table items={CryptoData?.items}/>
        {CryptoData && CryptoData?.pagination?.totalPages > 1 &&
        <div className="flex justify-center pt-6">
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm">
              <li>
                <a
                  onClick={handlePrevious}
                  className={`flex items-center cursor-pointer justify-center px-3 h-8 ms-0 leading-tight ${CryptoData?.pagination?.currentPage<2 && "text-gray-300"} bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 `}
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>

             { Array.from({ length: CryptoData?.pagination?.totalPages }, (_, index) => ( <li key={index}>
                <a
                  onClick={()=>setState({...state, currentPage:index+1})}
                  aria-current="page"
                  className={`z-10 flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 ${CryptoData?.pagination?.currentPage ===index+1 && "bg-blue-50"} hover:bg-blue-100 hover:text-blue-700 `}
                >
                  {index+1}
                </a>
              </li>))}
              <li>
                <a
                  onClick={handleNext}
                  className="flex items-center cursor-pointer justify-center px-3 h-8 leading-tight  bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>}
      </div>
    </>
  );
};
export default Home;
