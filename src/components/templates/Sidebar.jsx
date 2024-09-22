function Sidebar({ categories }) {
  return (
    <div className="w-52 mt-8">
      <h4>دسته ها</h4>
      <ul>
        {categories?.data.map((category) => (
          <li
            key={category._id}
            className="flex mx-5 my-0 font-extralight mr-3 text-gray-500"
          >
            <img src={`${category.icon}.svg`} />
            <p className="font-extralight mr-3 text-gray-500">
              {category.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
