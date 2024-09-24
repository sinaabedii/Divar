import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/user";
import { Link } from "react-router-dom";
import { deleteAllCookies } from "../../utils/cookie";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { IoIosLogOut, IoMdPaper } from "react-icons/io";
import toast from "react-hot-toast";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { refetch, data } = useQuery(["profile"], getProfile);

  const signoutHandler = () => {
    deleteAllCookies();
    refetch();
    setIsOpen((prev) => !prev);
    if (data) {
      toast.success("شما با موفقیت خارج شدید .");
    } else {
      toast.error("اول وارد شوید");
    }
  };

  const isOpenHandler = () => {
    if (!data) {
      setIsOpen(false);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className="bg-white grid mx-auto border-b my-auto space-x-2 w-[120px] h-[40px] items-center shadow-md rounded-t-lg">
      <div className="flex items-center py-2">
        {!isOpen ? (
          <div>
            <AiOutlineCaretDown className="mr-3 text-gray-500" />
          </div>
        ) : (
          <div>
            <AiOutlineCaretUp className="mr-3  text-gray-500" />
          </div>
        )}
        <button
          onClick={isOpenHandler}
          className="w-full h-full text-gray-500 items-center font-bold text-base tracking-wider outline-none "
        >
          {data ? "دیوار من" : <Link to="/auth">وارد شوید</Link>}
        </button>
      </div>

      {isOpen && (
        <div className="grid bg-white w-full rounded-b-lg shadow-md ">
          <Link to="/dashboard">
            <div className="h-9 flex text-gray-500 items-center pr-2 gap-2 border-b hover:bg-gray-50 hover:transition-colors">
              <IoMdPaper />
              <h3 className="text-xs">آگهی های من</h3>
            </div>
          </Link>
          {data ? (
            <div className="h-8 text-gray-500 w-full flex items-center pr-2 my-auto  hover:bg-gray-50 hover:transition-colors hover:rounded-b-lg">
              <IoIosLogOut />
              <button className="text-xs w-full" onClick={signoutHandler}>
                خروج
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
