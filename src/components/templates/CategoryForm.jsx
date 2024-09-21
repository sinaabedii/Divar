import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addCategory } from "../../services/admin";

function CategoryForm() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const { mutate, data, isLoading, error } = useMutation(addCategory, {
    onSuccess: () => queryClient.invalidateQueries("get-categories"),
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;
    mutate(form);
  };

  return (
    <form onChange={changeHandler} onSubmit={submitHandler} className="px-6">
      <h3 className="mb-7 border-b-2 border-solid border-red-800 w-fit pb-1">
        دسته بندی جدید
      </h3>
      <div className="flex gap-3">
        {!!error && (
          <p className="bg-red-800 text-white mb-5 p-1 text-center rounded-md">
            مشکلی پیش آمده است
          </p>
        )}
        {data?.status === 201 &&
          // <p className="bg-red-800 text-white mb-5 p-1 text-center rounded-md">
          //   دسته بندی با موفقیت اضافه شد
          // </p>
          alert("دسته بندی با موفقیت اضافه شد")}
          
        <span className="flex items-baseline gap-1">
          <label htmlFor="name" className="flex text-sm mb-3">
            اسم دسته بندی
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-72 p-1 border-2 border-solid rounded-md mb-8"
          />
        </span>
        <span className="flex items-baseline gap-1">
          <label htmlFor="slug" className="flex text-sm mb-3">
            اسلاگ
          </label>
          <input
            type="text"
            name="slug"
            id="slug"
            className="block w-72 p-1 border-2 border-solid rounded-md mb-8"
          />
        </span>
        <span className="flex items-baseline gap-1">
          <label htmlFor="icon" className="flex text-sm mb-3">
            آیکون
          </label>
          <input
            type="text"
            name="icon"
            id="icon"
            className="block w-72 p-1 border-2 border-solid rounded-md mb-8"
          />
        </span>
        <button
          type="submit"
          className="bg-red-800 text-white border-none h-9 px-6 rounded-md text-sm cursor-pointer disabled:opacity-50"
          disabled={isLoading}
        >
          ایجاد
        </button>
      </div>
    </form>
  );
}

export default CategoryForm;
