import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import Loader from "../modules/Loader";
import { MdDelete } from "react-icons/md";

function CategoryList() {
  const { data, isLoading } = useQuery(["get-categories"], getCategory);
  console.log({ data, isLoading });

  return (
    <div className="mx-6 my-5">
      <h3 className="mb-4 border-b-2 border-solid border-red-800 w-fit pb-1">
        دسته بندی ها
      </h3>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((item) => (
          <div
            key={item._id}
            className="flex my-2 p-4 border-2 border-solid rounded-md"
          >
            <img src={`${item.icon}.svg`} />
            <h5 className="mr-3 text-sm w-32">{item.name}</h5>
            <p className="w-full text-left text-red-800">slug : {item.slug}</p>
            <button>
              <MdDelete className="text-gray-700 w-8 h-6 mr-3 cursor-pointer hover:scale-125 bg-none transition-colors" />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
