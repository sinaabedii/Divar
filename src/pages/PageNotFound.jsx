import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="mx-auto h-screen ">
      <div className="mx-auto grid gap-5">
        <img
          className="w-96 h-56 mx-auto "
          src="https://s100.divarcdn.com/static/public/engaged-user/custom404/general-page.png"
          alt="این راه به جایی نمی رسد."
        />
        <h2 className="mx-auto text-2xl text-neutral-200 ">
          این صفحه حذف شده یا وجود ندارد.
        </h2>
        <p className="mx-auto text-sm text-neutral-400">
          برای دیدن آگهی‌ها به صفحهٔ اصلی دیوار برگردید.
        </p>
        <Link to="/" className="mx-auto">
          <button className="bg-red-800 w-fit mx-auto px-3 py-1.5 rounded-md text-white hover:bg-red-900 hover:transition-colors ">
            صفحه اصلی دیوار
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
