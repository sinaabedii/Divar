import { Link, useNavigate } from "react-router-dom";
import { checkOtp } from "../../services/auth";
import { setCookie } from "../../utils/cookie";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/user";
import { IoCloseSharp } from "react-icons/io5";
import toast from "react-hot-toast";

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const navigate = useNavigate();
  const { refetch, data } = useQuery(["profile"], getProfile);
  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return;
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
    }
    if (error) {
      console.log(error.response.data.message);
    }
  };
  const signInHandler = () => {
    refetch();
    if (code) {
      toast.success("شما با موفقیت وارد شدید .");
    } else {
      toast.error("کد را وارد کنید.");
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="container w-full h-screen mx-auto flex flex-col"
    >
      <span className="flex justify-between px-1 items-center border-b border-neutral-700">
        <p className="text-lg text-neutral-200 font-normal  p-4">
          ورود به حساب کاربری
        </p>
        <Link to="/">
          <IoCloseSharp className="h-5 w-5 ml-2 text-neutral-300" />
        </Link>
      </span>
      <label htmlFor="input" className="p-5 text-neutral-200 mb-3 text-md">
        کد تأیید را وارد کنید
      </label>
      <span className="text-neutral-400 text-sm mb-5 pr-5 font-extralight">
        کد پیامک شده به شمارۀ «{mobile}» را وارد کنید.
      </span>
      <div className="grid">
        <input
          className="mb-2 py-2 mx-5 border border-solid px-5 text-neutral-200 border-neutral-600 rounded-md placeholder:text-right placeholder:font-extralight placeholder:text-neutral-500 bg-transparent outline-none focus:ring-1 focus:ring-rose-700 "
          type="text"
          id="input"
          maxLength={5}
          placeholder="کد تأیید ۵ رقمی"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <span className="text-left ml-5">
          <button
            className="bg-neutral-700 text-xs text-neutral-200 w-28 rounded-3xl mt-1  py-1.5  hover:bg-neutral-600 hover:text-neutral-100 hover:transition-colors"
            onClick={() => setStep(1)}
          >
            تغییر شمارۀ موبایل
          </button>
        </span>
      </div>
      <span className="absolute w-full mx-auto mb-16 bottom-0 px-2  border-t border-neutral-700 pt-3 ">
        <button
          onClick={signInHandler}
          className="w-full py-2  border-none bg-rose-500 text-neutral-800 rounded-md text-lg cursor-pointer hover:bg-rose-400 hover:transition-colors"
          type="submit"
        >
          ورود
        </button>
      </span>
    </form>
  );
}

export default CheckOtpForm;
