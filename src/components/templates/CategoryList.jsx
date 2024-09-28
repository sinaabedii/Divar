import { useQuery } from "@tanstack/react-query";
import { deleteCategory, getCategory } from "../../services/admin";
import Loader from "../modules/Loader";
import { MdDelete } from "react-icons/md";

function CategoryList() {
  const { refetch, data, isLoading } = useQuery(
    ["get-categories"],
    getCategory
  );
  console.log({ data, isLoading });

  const deleteHandler = (id) => {
    deleteCategory(id);
    refetch();
  };

  return (
    <div className="w-full overflow-y-scroll pl-2 h-[405px] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-rose-600">
      <h3 className="mb-4 border-b-2 border-rose-600 text-neutral-100 w-fit pb-1">
        دسته بندی ها
      </h3>
      {isLoading ? (
        <Loader />
      ) : (
        data.data?.map((item) => (
          <div
            key={item._id}
            className="flex w- my-2 p-4 border items-center border-gray-300 rounded-md"
          >
            <img className="h-5 w-5" src={`${item.icon}.svg`} />
            <h5 className="mr-3 text-sm w-32 text-neutral-500">{item.name}</h5>
            <p className="w-full text-left text-neutral-500">
              slug : {item.slug}
            </p>
            <button onClick={() => deleteHandler(item._id)}>
              <MdDelete className="text-neutral-500 w-8 h-6 mr-3 cursor-pointer hover:text-rose-600 transition-colors" />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
