import { Link } from "react-router-dom";
import { sp } from "../../utils/numbers";

function Main({ AllPosts, _id }) {
  const data = AllPosts.data.posts.filter((post) => post.options != undefined);
  const baseURL = import.meta.env.VITE_BASE_URL;

  return (
    <div className="xl:max-w-7xl lg:max-w-6xl md:max-w-5xl sm:max-w-4xl mx-auto">
      <p className="font-extralight text-right text-xs text-neutral-400 mx-14 h-auto">
        دیوار تهران - نیازمندی‌ های رایگان، آگهی‌های خرید، فروش نو و دست دوم،
        استخدام و خدمات
      </p>
      <div className="flex flex-wrap xl:justify-between justify-center mx-auto mt-2">
        {data.map((post) => (
          <Link to={`/post/${_id}`} key={post._id}>
            <div className="flex w-96 justify-between border-b border-neutral-600 py-2">
              <div className="flex flex-col justify-between">
                <p className="text-neutral-200">{post.options.title}</p>
                <div className="text-sm text-neutral-400">
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
