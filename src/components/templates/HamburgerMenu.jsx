import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import { deleteAllCookies } from "../../utils/cookie";
import { getProfile } from "../../services/user";
import toast from "react-hot-toast";
import { BsChat } from "react-icons/bs";
import { SlSupport } from "react-icons/sl";
import { IoIosLogOut } from "react-icons/io";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { refetch, data, error } = useQuery(["profile"], getProfile);
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
    <div className="bg-white-400 relative grid space-x-2 w-[120px] h-[40px] items-center shadow-md rounded-lg">
      <div className="flex items-center">
        {!isOpen ? (
          <div>
            <AiOutlineCaretDown className="mr-3" />
          </div>
        ) : (
          <div>
            <AiOutlineCaretUp className="mr-3 " />
          </div>
        )}
        <button
          onClick={isOpenHandler}
          className=" w-full  h-full items-center font-bold text-base  tracking-wider text-black"
        >
          {data ? "دیوار من" : <Link to="/auth">وارد شوید</Link>}
        </button>
      </div>

      {isOpen && (
        <div className="">
          <Link to="/chat">
            <span className="flex justify-center text-gray-500 items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 hover:transition-colors">
              <BsChat className="w-4 h-4" />
              <button>چت</button>
            </span>
          </Link>
          <Link>
            <span className="flex justify-center text-gray-500 items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 hover:transition-colors">
              <SlSupport className="w-4 h-4" />
              <button>پشتیبانی</button>
            </span>
          </Link>
          {data ? (
            <div className="shadow-md flex">
              <IoIosLogOut />
              <button className="block" onClick={signoutHandler}>
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
