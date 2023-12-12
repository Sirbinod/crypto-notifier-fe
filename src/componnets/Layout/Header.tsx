import { FC, useState } from "react";
import { FcBullish } from "react-icons/fc";
import { FiBell, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import NotificationView from "../NotificationView";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const authData = Cookies.get("authentication");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let auth: any;

  if (authData) auth = JSON.parse(authData);

  return (
    <header className="bg-white py-4 border-b-2  shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-2xl pb-[4px]">
            {" "}
            <FcBullish />
          </div>
          <span className="text-2xl font-medium">Crypto Notifier</span>
        </div>

        <div className="flex items-center text-lg gap-4">
          {auth?.isLogged ? (
            <>
              {" "}
              <div className="relative">
                <div
                  className="cursor-pointer"
                  onClick={() => setIsOpen((pre) => !pre)}
                >
                  <FiBell size={24} />
                </div>

                {/* Dropdown */}

                <NotificationView isOpen={isOpen}/>
              </div>
              <Link to={"/watchlist"}>
                <div className="hover:cursor-pointer text-xl">
                  <FiHeart />
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/signup"}>Sign Up</Link>
              <Link to={"/login"}>Sign In</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
