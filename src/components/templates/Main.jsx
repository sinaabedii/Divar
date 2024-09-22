import { sp } from "../../utils/numbers";

function Main({ posts }) {
  console.log(posts);

  const baseURL = import.meta.env.VITE_BASE_URL;

  return (
    <div className="flex flex-wrap justify-between mt-5 w-full">
      {posts.data.posts.map((post) => (
        <div
          className="w-80 flex justify-between border-2 m-2 p-4 rounded-md"
          key={post._id}
        >
          <div className="flex flex-col justify-between">
            {/* <p>{post.options.title}</p> */}
            <div className="text-sm text-gray-400">
              <p>{sp(post.amount)} تومان</p>
              {/* <span>{post.options.city}</span> */}
            </div>
          </div>
          <img
            className="w-36 h-32 rounded"
            src={`${baseURL}${post.images[0]}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Main;
