import { sp } from "../../utils/numbers";

function Main({ AllPosts }) {
  const data = AllPosts.data.posts.filter((post) => post.options != undefined);
  const baseURL = import.meta.env.VITE_BASE_URL;

  return (
    <div>
      <p className="font-extralight text-right text-xs text-neutral-400 mx-14 h-auto">
        دیوار تهران - نیازمندی‌ های رایگان، آگهی‌های خرید، فروش نو و دست دوم،
        استخدام و خدمات
      </p>
      <div className="flex flex-wrap justify-center mt-2">
        {data.map((post) => (
          <div
            key={post._id}
            className="flex w-[340px] justify-between border-b border-neutral-700 py-2"
          >
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
        ))}
      </div>
    </div>
  );
}

export default Main;
