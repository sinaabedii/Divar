import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/user";
import { Link } from "react-router-dom";
import { deleteAllCookies } from "../../utils/cookie";
// import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { IoMdPaper } from "react-icons/io";
import toast from "react-hot-toast";
import { TbLogin, TbLogout } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";

function HamburgerMenu() {
  // const [isOpen, setIsOpen] = useState(false);
  // const { refetch, data } = useQuery(["profile"], getProfile);

  // const signoutHandler = () => {
  //   deleteAllCookies();
  //   refetch();
  //   setIsOpen((prev) => !prev);
  //   if (data) {
  //     toast.success("شما با موفقیت خارج شدید .");
  //   } else {
  //     toast.error("اول وارد شوید");
  //   }
  // };

  // const isOpenHandler = () => {
  //   if (!data) {
  //     setIsOpen(false);
  //   } else {
  //     setIsOpen((prev) => !prev);
  //   }
  // };

  return (
    <div className="mx-auto space-x-2 items-center rounded-t-lg">
      <div className="flex items-center  relative">
        {/* {!isOpen ? (
          <div>
            <AiOutlineCaretDown className="mr-3 text-neutral-500" />
          </div>
        ) : (
          <div>
            <AiOutlineCaretUp className="mr-3  text-neutral-500" />
          </div>
        )} */}
        <button
          onClick={isOpenHandler}
          className="flex justify-center text-sm text-neutral-400 items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-700 hover:transition-colors focus:text-neutral-100"
        >
          {data ? (
            <span className="flex items-center gap-2">
              <FaRegUser className="w-4 h-4" />
              <h2>دیوار من</h2>
            </span>
          ) : (
            <Link to="/auth" className="w-fit">
              <span className="flex items-center gap-2">
                <TbLogin className="w-4 h-4" />
                <h2>وارد شوید</h2>
              </span>
            </Link>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="grid absolute w-32 border border-neutral-700 bg-neutral-800 rounded shadow-md shadow-neutral-400/20 ">
          {!data ? (
            <Link to="/auth">
              <div className="flex text-neutral-500 items-center border-b border-neutral-700 gap-2 pr-2 py-2 hover:bg-neutral-700 hover:transition-colors">
                <TbLogin className="w-4 h-4" />
                <p className="text-sm focus:text-neutral-100">ورود</p>
              </div>
            </Link>
          ) : null}
          <Link to="/dashboard">
            <div className="h-9 flex text-neutral-500 items-center pr-2 gap-2 border-b border-neutral-700 hover:bg-neutral-700 hover:transition-colors">
              <IoMdPaper />
              <h3 className="text-xs focus:text-neutral-100">آگهی های من</h3>
            </div>
          </Link>
          {data ? (
            <div className="h-8 text-neutral-500 w-full flex items-center pr-2 my-auto hover:bg-neutral-700 hover:transition-colors hover:rounded-b">
              <TbLogout />
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
