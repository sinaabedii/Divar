import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";
import { deleteAllCookies } from "../utils/cookie";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaRegUser, FaTwitter, FaUser } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import {
  MdOutlineMiscellaneousServices,
  MdOutlinePrivacyTip,
} from "react-icons/md";
import { SiAparat } from "react-icons/si";
import { TbLogin, TbLogout } from "react-icons/tb";

function User() {
  const { refetch, data } = useQuery(["profile"], getProfile);
  const signoutHandler = () => {
    deleteAllCookies();
    refetch();
    if (data) {
      toast.success("شما با موفقیت خارج شدید .");
    } else {
      toast.error("اول وارد شوید");
    }
  };

  return (
    <div className="grid mx-4">
      <p className="text-neutral-200 text-sm px-3 my-4 py-5">
        برای استفاده از تمام امکانات دیوار وارد حساب خود شوید.
      </p>
      {data ? (
        <span className="flex w-full px-2 mx-auto text-neutral-400 border-b border-neutral-600 items-center mb-4 py-2 gap-2 hover:text-neutral-200 transition-colors">
          <FaRegUser className="w-4 h-4" />
          <h2>کاربر دیوار</h2>
        </span>
      ) : (
        <Link to="/auth">
          <span className="flex w-full px-2 mx-auto text-neutral-400 border-b border-neutral-600 items-center mb-4 py-2 gap-2 hover:text-neutral-200 transition-colors">
            <TbLogin className="w-4 h-4" />
            <h2 className="text-sm">ورود به حساب کاربری</h2>
          </span>
        </Link>
      )}
      {data ? (
        <Link to="/dashboard">
          <span className="flex text-neutral-400 items-center py-2 mx-3 gap-2 w-full hover:text-neutral-200 transition-colors">
            <FaUser />
            <h3 className="text-sm">آگهی های من</h3>
          </span>
        </Link>
      ) : null}

      <Link to="/General_terms_and_conditions">
        <span className="flex text-neutral-400 items-center py-2 mx-3 gap-2 w-full hover:text-neutral-200 transition-colors">
          <MdOutlineMiscellaneousServices />
          <h3 className="text-sm">شرایط استفاده از خدمات</h3>
        </span>
      </Link>
      <Link to="/account_privacy_policies">
        <span className="flex w-full px-2 mx-auto pb-4 text-neutral-400 border-b border-neutral-600 items-center py-2 gap-2 hover:text-neutral-200  transition-colors">
          <MdOutlinePrivacyTip />
          <h3 className="text-sm">حریم خصوصی</h3>
        </span>
      </Link>
      {data ? (
        <Link to="/">
          <span
            onClick={signoutHandler}
            className="flex text-neutral-400 items-center py-2 mx-3 gap-2 w-full hover:text-neutral-200 transition-colors"
          >
            <TbLogout />
            <h3 className="text-sm">خروج</h3>
          </span>
        </Link>
      ) : null}
      <span className="flex text-neutral-400 items-center py-2 mx-3 gap-2 w-full hover:text-neutral-200 transition-colors">
        <IoMdInformationCircleOutline />
        <h3 className="text-sm">درباره دیوار</h3>
      </span>

      <div className="flex w-44 justify-between my-4 mx-auto items-center  ">
        <a href="https://twitter.com/divar_official">
          <FaTwitter className="w-5 h-5 text-neutral-400 hover:text-neutral-200 cursor-pointer transition-colors" />
        </a>
        <a href="https://www.instagram.com/divar.official">
          <AiFillInstagram className="w-5 h-5 text-neutral-400 hover:text-neutral-200 cursor-pointer transition-colors" />
        </a>
        <a href="https://www.linkedin.com/company/divarofficial">
          <FaLinkedin className="w-5 h-5 text-neutral-400 hover:text-neutral-200 cursor-pointer transition-colors" />
        </a>
        <a href="https://www.aparat.com/divar.official">
          <SiAparat className="w-5 h-5 text-neutral-400 hover:text-neutral-200 cursor-pointer transition-colors" />
        </a>
      </div>
    </div>
  );
}

export default User;
