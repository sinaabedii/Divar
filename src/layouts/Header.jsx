import HamburgerMenu from "../components/templates/HamburgerMenu";
import { Link } from "react-router-dom";
import { SlSupport } from "react-icons/sl";
import { FiMapPin } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 border-b border-neutral-700 bg-neutral-800  px-16 py-2 mb-5">
      <div className="flex">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="divar.svg"
              className="w-16 h-10 ml-4 border-l-2 border-neutral-700 pl-6"
            />
          </Link>
          <span className="flex items-center h-12 gap-1 px-3 py-2 focus:text-neutral-100 rounded-md cursor-pointer hover:bg-neutral-700 hover:transition-colors">
            <FiMapPin className="w-4 h-4 text-neutral-400" />
            <p className="text-sm text-neutral-400 ">تهران</p>
          </span>
        </div>
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="جستجو در همه آگهی ها"
            className="h-10 w-96 mr-4 mt-1 rounded text-sm bg-neutral-700 border-none px-8 text-gray-600 outline-none focus:shadow-md placeholder:text-neutral-500 placeholder:font-extralight"
          />
          <button className="border-none -m-7 text-xl text-neutral-500 -mb-8 h-8  hover:text-gray-600">
            <IoSearch />
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
        {/* <Link to="/chat">
          <span className="flex justify-center text-gray-500 items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 hover:transition-colors">
            <BsChat className="w-4 h-4" />
            <p className="text-sm">چت</p>
          </span>
        </Link> */}
        <Link>
          <span className="flex justify-center text-neutral-400 items-center focus:text-neutral-100 gap-2 px-3 py-2 rounded-md hover:bg-neutral-700 hover:transition-colors">
            <SlSupport className="w-4 h-4" />
            <p className="text-sm">پشتیبانی</p>
          </span>
        </Link>
        <HamburgerMenu />
        <Link
          to="/dashboard"
          className="bg-rose-500 text-neutral-800 h-10 w-24 leading-10 text-center rounded-md mr-5 hover:bg-rose-400 hover:transition-colors"
        >
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
