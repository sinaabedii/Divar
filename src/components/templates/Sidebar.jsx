function Sidebar({ categories }) {
  return (
    <div className="w-2/12 mt-8 pr-3">
      <h4 className="text-sm text-neutral-300">دسته ها</h4>
      <ul className="grid gap-5 mt-3">
        {categories?.data.map((category) => (
          <li
            key={category._id}
            className="flex font-extralight text-neutral-400 cursor-pointer hover:text-gray-700 hover:transition-colors"
          >
            <img className="w-5 h-5" src={`${category.icon}.svg`} />
            <p className="font-extralight mr-2 text-neutral-400">
              {category.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
