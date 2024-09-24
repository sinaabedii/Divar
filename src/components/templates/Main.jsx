import { sp } from "../../utils/numbers";

function Main({ AllPosts }) {
  console.log(AllPosts);

  const baseURL = import.meta.env.VITE_BASE_URL;

  return (
    <div className="ml-7 w-10/12">
      <p className="text-left ml-2 font-extralight text-xs text-gray-500">
        دیوار تهران - نیازمندی‌ های رایگان، آگهی‌های خرید، فروش نو و دست دوم و
        کارکرده، استخدام و خدمات
      </p>
      <div className="flex flex-wrap justify-between mt-2">
        {AllPosts.data.posts.map((post) => (
          <div
            className="w-80 flex justify-between border-2 m-2 p-4 rounded-md"
            key={post._id}
          >
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
        ))}
      </div>
    </div>
  );
}

export default Main;
