import { Link } from "react-router-dom";
import { sp } from "../../utils/numbers";

function Main({ AllPosts, _id }) {
  const data = AllPosts.data.posts.filter((post) => post.options != undefined);
  const baseURL = import.meta.env.VITE_BASE_URL;

  return (
    <div className="w-10/12">
      <p className="text-left ml-2 font-extralight text-xs text-gray-500">
        دیوار تهران - نیازمندی‌ های رایگان، آگهی‌های خرید، فروش نو و دست دوم و
        کارکرده، استخدام و خدمات
      </p>
      <div className="flex flex-wrap justify-between mt-2">
        {data.map((post) => (
          <Link to={`/post/${_id}`} key={post._id}>
            <div className="w-80 flex justify-between border m-2 p-4 rounded-md">
              <div className="flex flex-col justify-between">
                <p>{post.options.title}</p>
                <div className="text-sm text-gray-400">
                  <p>{sp(post.amount)} تومان</p>
                  <span>{post.options.city}</span>
                </div>
              </div>
              <img
                className="w-36 h-32 rounded"
                src={`${baseURL}${post.images[0]}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Main;
