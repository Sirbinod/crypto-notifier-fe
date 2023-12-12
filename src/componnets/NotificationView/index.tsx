/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import io from "socket.io-client";

interface PropsInterface {
  isOpen:boolean;
}
const NotificationView: FC<PropsInterface> = ({ isOpen }) => {
  const [notifications, setNotifications] = useState<any>([]);

  useEffect(() => {
    // Connect to the socket.io server
    const socket = io(`${import.meta.env.VITE_BASE_URL}`);

    // Listen for 'notification' events from the server
    socket.on("notification", (message: any) => {
  
      setNotifications([...notifications, message]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      {isOpen && (
        <div className="absolute top-0 z-40 right-0 mt-8 w-[500px] bg-white border rounded shadow-lg">
          <h2 className="px-3 py-2 border-b">Notification</h2>
          {/* List of Notifications */}
          <ul className="">
            {notifications.length <= 0 ? (
              <li className="px-4 border-b py-2 text-center hover:bg-gray-100 cursor-pointer text-sm">
                No Notification!
              </li>
            ) : (
              notifications.map((item: string, i: number) => (
                <li
                  className=" flex items-center gap-2 px-4 border-b py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  key={i}
                >
                  <IoMdInformationCircleOutline />
                  <span> {item ?? "No Notification!"}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};
export default NotificationView;