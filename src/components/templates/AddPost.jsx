import { useState } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import { getCookie } from "../../utils/cookie";
import toast from "react-hot-toast";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    images: null,
  });
  const baseURL = import.meta.env.VITE_BASE_URL;
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
    //create formData in dataBase for add image file
    const formData = new FormData();
    for (let item in form) {
      formData.append(item, form[item]);
    }
    const token = getCookie("accessToken");
    axios
      .post(`${baseURL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => toast.success(response.data.message))
      .catch((error) => toast.error("مشکلی پیش آمده است"));
  };

  return (
    <form
      onChange={changeHandler}
      className=" border-neutral-600 mx-auto mt-2"
    >
      <h3 className="mb-3 border-b-2 border-rose-600 text-neutral-100 w-fit pb-1">
        افزوردن آگهی
      </h3>
      <label htmlFor="title" className="block text-sm mb-2 text-neutral-300">
        عنوان
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="block w-80 p-1 text-neutral-200 bg-neutral-800 border border-neutral-500 outline-none focus:ring-rose-700 focus:ring-1 rounded-md mb-3 "
      />
      <label htmlFor="content" className="text-neutral-300">
        توضیحات
      </label>
      <textarea
        name="content"
        id="content"
        className="block w-80 p-1 text-neutral-200 bg-neutral-800 border border-neutral-500 outline-none focus:ring-rose-700 focus:ring-1 rounded-md mb-3 h-24 max-h-fit "
      />
      <label htmlFor="amount" className="text-neutral-300">
        قیمت
      </label>
      <input
        type="number"
        name="amount"
        id="amount"
        className="block w-80 p-1  text-neutral-200 bg-neutral-800 border border-neutral-500 outline-none focus:ring-rose-700 focus:ring-1 rounded-md mb-3 "
      />
      <label htmlFor="city" className="text-neutral-300">
        شهر
      </label>
      <input
        type="text"
        name="city"
        id="city"
        className="block w-80 p-1  text-neutral-200 bg-neutral-800 border border-neutral-500 outline-none focus:ring-rose-700 focus:ring-1 rounded-md mb-3 "
      />
      <label htmlFor="category" className="text-neutral-300">
        دسته بندی
      </label>
      <select
        name="category"
        id="category"
        className="block w-80 p-1  text-neutral-200 bg-neutral-800 border border-neutral-500 outline-none focus:ring-rose-700 focus:ring-1 rounded-md mb-3 "
      >
        {data?.data.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      <label htmlFor="images" className="text-neutral-300">
        عکس
      </label>
      <input
        type="file"
        name="images"
        id="images"
        className="block w-80 p-1 text-neutral-200 bg-neutral-800 border border-neutral-500 outline-none focus:ring-rose-700 focus:ring-1 rounded-md mb-3 "
      />
      <button
        onClick={addHandler}
        className="bg-rose-500 text-neutral-800 border-none mr-60 inline px-5 py-2 rounded-md cursor-pointer"
      >
        ایجاد
      </button>
    </form>
  );
}

export default AddPost;
