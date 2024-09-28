import { FiMapPin } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

function Header() {
  return (
    <header className="px-2 flex justify-between items-center sticky top-0 border-b border-neutral-700 bg-neutral-700 mx-auto ">
      <div className="flex w-full px-2 mt-2 mb-1 items-center justify-between bg-neutral-800 rounded ring-1 ring-neutral-500">
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
    </header>
  );
}

export default Header;
