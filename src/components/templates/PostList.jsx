import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/user";
import Loader from "../modules/Loader";
import { sp } from "../../utils/numbers";

function PostList() {
  const { data, isLoading } = useQuery(["my-post-list"], getPosts);
  const data_list = data?.data.posts.filter(
    (post) => post.options != undefined
  );
  const baseURL = import.meta.env.VITE_BASE_URL;

  return (
    <div className="mx-9 w-9/12 -mt-4">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3 className="px-4 py-3 border-b-2 border-rose-600 text-neutral-100 w-fit pb-1 mb-3">
            آگهی های شما
          </h3>
          <div className="overflow-y-scroll pl-2 h-[510px] [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-rose-600">
            {data_list.map((post) => (
              <div
                key={post._id}
                className="flex items-center px-2 justify-between border-2 w-full text-center border-gray-300 rounded-md my-1 mt-2 p-1"
              >
                <img
                  src={`${baseURL}${post.images[0]}`}
                  className="w-28 h-20 rounded text-right"
                />
                <p className="w-24 text-neutral-500">
                  {new Date(post.createdAt).toLocaleDateString("fa-IR")}
                </p>
                <div className=" flex gap-2 text-neutral-500">
                  <p className="w-24 text-sm text-right">
                    {post.options.title}
                  </p>
                  <span className="w-24 text-xs text-right">
                    {post.options.content}
                  </span>
                </div>
                <div className="w-56 text-right text-neutral-500">
                  <span>{sp(post.amount)} تومان</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PostList;
