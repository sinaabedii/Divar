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
    <div className="mx-9 w-9/12">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3 className="px-4 py-3 border-b-2 border-rose-600 text-neutral-100 w-fit pb-1 ">
            آگهی های شما
          </h3>
          {data_list.map((post) => (
            <div
              key={post._id}
              className="flex items-center justify-between border-2 w-full  text-center border-gray-300 rounded-md my-1 p-1"
            >
              <img
                src={`${baseURL}${post.images[0]}`}
                className="w-24 h-16 rounded ml-7 "
              />
              <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
              <div className="w-full">
                <p className="text-sm">{post.options.title}</p>
                <span className="text-xs text-gray-400">
                  {post.options.content}
                </span>
              </div>
              <div className="min-w-fit ml-3 text-center">
                <span>{sp(post.amount)} تومان</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
