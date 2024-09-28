// import HamburgerMenu from "../components/templates/HamburgerMenu";
// import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
// import { IoSearch } from "react-icons/io5";

function Header() {
  return (
    <header className="px-2 flex justify-between items-center sticky top-0 border-b border-neutral-700 bg-neutral-700 mx-auto ">
      <div className="flex w-full px-2 mt-2 mb-1 items-center justify-between bg-neutral-800 rounded ring-1 ring-neutral-500">
        {/* <Link to="/">
            <img
              src="divar.svg"
              className="w-16 h-10 ml-4 border-l-2 border-neutral-700 pl-6"
            />
          </Link> */}
        <div className="flex w-full items-center justify-between  px-2 ">
          <input
            type="text"
            placeholder="جستجو در همه آگهی ها"
            className="mt-1 rounded w-full text-sm p-1 bg-transparent text-neutral-200 outline-none focus:shadow-md placeholder:text-neutral-500 placeholder:font-extralight"
          />
          <button className=" border-none text-xl text-neutral-500 h-7 hover:text-gray-600">
            <IoSearch />
          </button>
        </div>
        <span className="flex items-center pr-2 gap-1 py-2 border-r-2 border-neutral-600 focus:text-neutral-100  cursor-pointer hover:bg-neutral-700 hover:transition-colors">
          <p className="text-sm text-neutral-400 ">تهران</p>
          <FiMapPin className="w-4 h-4 text-neutral-400" />
        </span>
      </div>
      {/* <div className="flex collapse md:visible lg:visible xl:visible items-center gap-2"> */}
      {/* <Link to="/auth">
          <span className="flex justify-center text-gray-500 items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-50 hover:transition-colors">
            <FaRegUser className="w-4 h-4" />
            <p className="text-sm">دیوار من</p>
          </span>
        </Link> */}
      {/* <HamburgerMenu /> */}
      {/* <Link
          to="/dashboard"
          className="bg-rose-500 w-fit px-2 text-neutral-800 h-10 leading-10 text-center rounded-md hover:bg-rose-400 hover:transition-colors"
        >
          ثبت آگهی
        </Link> */}
      {/* </div> */}
    </header>
  );
}

export default Header;
