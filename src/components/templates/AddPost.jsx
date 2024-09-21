import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import { useState } from "react";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    images: null,
  });
  const queryClient = useQueryClient();
  const { data } = useQuery(["get-categories"], getCategory, {
    onSuccess: () => queryClient.invalidateQueries("my-post-list"),
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const files = event.target.files;

    if (name !== "images") {
      setForm({ ...form, [name]: value });
    } else {
      setForm({ ...form, [name]: files[0] });
    }
  };

  const addHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <form onChange={changeHandler}>
      <h3 className="mb-7 border-b-2 border-red-800 w-fit pb-1">
        افزوردن آگهی
      </h3>
      <label htmlFor="title" className="block text-sm mb-2 ">
        عنوان
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="block w-80 p-1 border-2 rounded-md mb-3 outline-gray-400"
      />
      <label htmlFor="content">توضیحات</label>
      <textarea
        name="content"
        id="content"
        className="block w-80 p-1 border-2 rounded-md mb-3 h-24 max-h-fit outline-gray-400"
      />
      <label htmlFor="amount">قیمت</label>
      <input
        type="number"
        name="amount"
        id="amount"
        className="block w-80 p-1 border-2 rounded-md mb-3 outline-gray-400"
      />
      <label htmlFor="city">شهر</label>
      <input
        type="text"
        name="city"
        id="city"
        className="block w-80 p-1 border-2 rounded-md mb-3 outline-gray-400"
      />
      <label htmlFor="category">دسته بندی</label>
      <select
        name="category"
        id="category"
        className="block w-80 p-1 border-2 rounded-md mb-3 outline-gray-400"
      >
        {data?.data.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      <label htmlFor="images">عکس</label>
      <input
        type="file"
        name="images"
        id="images"
        className="block w-80 p-1 border-2 rounded-md mb-3 outline-gray-400"
      />
      <button
        onClick={addHandler}
        className="bg-red-800 text-white border-none px-5 py-2 rounded-md cursor-pointer"
      >
        ایجاد
      </button>
    </form>
  );
}

export default AddPost;
