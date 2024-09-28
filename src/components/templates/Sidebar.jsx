function Sidebar({ categories }) {
  return (
    <div className="mb-5 mx-8">
      <h4 className="text-sm collapse md:visible lg:visible xl:visible text-neutral-300">
        دسته ها
      </h4>
      <ul className="grid grid-cols-4 items-baseline mt-3">
        {categories?.data.map((category) => (
          <li
            key={category._id}
            className="grid grid-cols-1 text-center mb-4 items-center gap-2 font-extralight text-neutral-400 hover:text-neutral-200 cursor-pointer"
          >
            <img className="w-6 h-6 mx-auto" src={`${category.icon}.svg`} />
            <p className="text-xs w-fi md:text-lg lg:text-xl xl:text-sm">
              {category.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
