import { BsChat } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { SlSupport } from "react-icons/sl";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center border-b-2 border-gray-300 px-2 pb-3 mx-6 mb-5">
      <div className="flex">
        <div className="flex items-center">
          <Link to="/">
            <img src="divar.svg" className="w-16 ml-4 border-l-2 pl-6" />
          </Link>
          <span className="flex items-center text-gray-400 h-12 gap-1 px-3 py-2 rounded-md cursor-pointer hover:bg-slate-50 hover:transition-colors">
            <img src="location.svg" />
            <p>تهران</p>
          </span>
        </div>
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="جستجو در همه آگهی ها"
            className="h-10 w-96 mr-4 mt-1 rounded text-sm bg-gray-200 border-none px-8 text-gray-600 outline-none placeholder:text-gray-400 placeholder:font-extralight"
          />
          <button className="border-none -m-7 text-xl text-gray-400 -mb-8 h-8  hover:text-gray-600">
            <CiSearch />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/auth">
          <span className="flex justify-center items-center gap-1 px-3 py-2 rounded-md hover:bg-slate-50 hover:transition-colors">
            <FaRegUser className="w-5 h-5" />
            <p>دیوار من</p>
          </span>
        </Link>
        <Link>
          <span className="flex justify-center items-center gap-1 px-3 py-2 rounded-md hover:bg-slate-50 hover:transition-colors">
            <BsChat className="w-5 h-5" />
            <p>چت</p>
          </span>
        </Link>
        <Link>
          <span className="flex justify-center items-center gap-1 px-3 py-2 rounded-md hover:bg-slate-50 hover:transition-colors">
            <SlSupport className="w-5 h-5" />
            <p>پشتیبانی</p>
          </span>
        </Link>
        <Link
          to="/dashboard"
          className="bg-red-800 text-white h-10 w-24 leading-10 text-center rounded-md mr-10 "
        >
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
