import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../services/admin";
import { MdOutlineChevronLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

function CategoryPage() {
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );
  return (
    <div className="h-screen mx-auto mt-5">
      <span className="flex w-full items-center py-2 justify-between px-6 border-b border-neutral-500">
        <h3 className="text-neutral-100 pb-1">انتخاب دسته بندی</h3>
        <Link to="/">
          <IoCloseSharp className="w-5 h-5 cursor-pointer text-neutral-300 " />
        </Link>
      </span>
      <ul className="grid w-[360px] mx-auto mt-4 items-baseline p-2 rounded">
        {categories?.data.map((category) => (
          <div className="flex justify-between border-b mb-3 pt-2 border-neutral-500 hover:bg-neutral-700 hover:rounded-md py-1 items-baseline ">
            <li
              key={category._id}
              className=" flex text-center mb-2 items-center gap-2 font-extralight text-neutral-400 hover:text-neutral-200 cursor-pointer"
            >
              <img className="w-5 h-5 mx-auto" src={`${category.icon}.svg`} />
              <p className="text-sm text-neutral-300">{category.name}</p>
            </li>
            <MdOutlineChevronLeft className="text-neutral-400 cursor-pointer w-5 h-5 rounded-full" />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;
