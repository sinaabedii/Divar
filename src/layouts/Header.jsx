import { BsChat } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { SlSupport } from "react-icons/sl";
import { Link } from "react-router-dom";
import HamburgerMenu from "../components/templates/HamburgerMenu";

function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 border-b bg-white border-gray-300 px-16 py-2 mb-5">
      <div className="flex">
        <div className="flex items-center">
          <Link to="/">
            <img src="divar.svg" className="w-16 h-10 ml-4 border-l-2 pl-6" />
          </Link>
          <span className="flex items-center text-gray-400 h-12 gap-1 px-3 py-2 rounded-md cursor-pointer hover:bg-slate-50 hover:transition-colors">
            <img className="w-5 h-5" src="location.svg" />
            <p className="text-sm">تهران</p>
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
        {/* <Link to="/auth">
          <span className="flex justify-center text-gray-500 items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 hover:transition-colors">
            <FaRegUser className="w-4 h-4" />
            <p className="text-sm">دیوار من</p>
          </span>
        </Link> */}
        
        <HamburgerMenu />
        <Link
          to="/dashboard"
          className="bg-red-800 text-white h-10 w-20 leading-10 text-center rounded-md mr-10 hover:bg-red-800 hover:transition-colors"
        >
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
