import { FC } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";



const Layout: FC = () => {
  return (
<>
<Header/>
<main className="py-10">
<Outlet />
      </main>

</>
  );
};
export default Layout;
