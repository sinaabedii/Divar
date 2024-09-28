import { IoIosMenu, IoMdAddCircle } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" xl:max-w-7xl lg:max-w-6xl md:max-w-5xl sm:max-w-4xl sticky bottom-0 bg-neutral-700 mx-auto ">
      <div className="flex justify-between">
        <button className="grid w-16 text-neutral-400  hover:bg-neutral-600 hover:text-neutral-300 transition-colors py-1 ">
          <Link to="/" className="focus:text-rose-500">
            <img src="divar.svg" className="mx-auto text-neutral-400 " />
            <h3 className="text-sm">آگهی ها</h3>
          </Link>
        </button>
        <button className="grid w-16 text-neutral-400 hover:bg-neutral-600 hover:text-neutral-300 transition-colors py-1">
          <Link className="focus:text-rose-500">
            <IoIosMenu className="w-5 h-5 mx-auto mb-1" />
            <h3 className="text-sm">دسته ها</h3>
          </Link>
        </button>
        <button className="grid w-16 text-neutral-400 hover:bg-neutral-600 hover:text-neutral-300 transition-colors py-1">
          <Link to="/dashboard" className="focus:text-rose-500">
            <IoMdAddCircle className="w-5 h-5 mx-auto mb-1" />
            <h3 className="text-sm">ثبت آگهی</h3>
          </Link>
        </button>
        <button className="grid w-16 text-neutral-400 hover:bg-neutral-600 hover:text-neutral-300 transition-colors py-1">
          <Link to="/chat" className="focus:text-rose-500">
            <IoChatbubblesSharp className="w-5 h-5 mx-auto mb-1" />
            <h3 className="text-sm">چت</h3>
          </Link>
        </button>
        <button className="grid w-16 text-neutral-400 hover:bg-neutral-600 hover:text-neutral-300 transition-colors py-1">
          <Link to="/user" className="focus:text-rose-500">
            <FaUser className="w-5 h-5 mx-auto mb-1" />
            <h3 className="text-sm">دیوار من</h3>
          </Link>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
