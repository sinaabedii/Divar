import { Link } from "react-router-dom";
import { sendOtp } from "../../services/auth";
import { IoCloseSharp } from "react-icons/io5";
import toast from "react-hot-toast";

function SendOtpForm({ mobile, setStep, setMobile }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) return;
    const { response, error } = await sendOtp(mobile);
    if (response) setStep(2);
    if (error) console.log(error.response.data.message);
  };

  const acceptHandler = () => {
    if (mobile.length === 11) {
      toast.success("کد برای شما ارسال شد .");
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
      <label htmlFor="input" className="p-5 mb-3 text-lg text-neutral-200">
        شماره موبایل خود را وارد کنید
      </label>
      <span className="text-neutral-400 text-sm mb-3 pr-5 font-extralight">
        قبل از ثبت آگهی، لطفا وارد حساب خود شوید.
      </span>
      <span className="text-neutral-400 text-sm pr-5 font-extralight">
        کد تایید به این شماره پیامک می شود.
      </span>
      <div className="relative flex">
        <input
          className="m-4 w-full py-2 mx-5 border  text-neutral-200 bg-neutral-800 border-neutral-700 pr-5 pl-20  rounded-md placeholder:text-right placeholder:font-extralight outline-none focus:ring-rose-700 focus:ring-1"
          type="tel"
          maxLength={11}
          id="input"
          placeholder="شماره موبایل"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <p className="w-12 left-0 ml-7 absolute mt-6 bg-neutral-700 rounded-2xl px-4 py-1 font-extralight text-sm text-neutral-200">
          ۹۸+
        </p>
      </div>
      <p className="text-neutral-300 text-sm font-extralight px-6 pb-8 mb-4 ">
        <Link
          to="/General_terms_and_conditions"
          target="_blank"
          className="text-rose-700 ml-1"
        >
          <a>شرایط استفاده از خدمات </a>
        </Link>
        و
        <Link
          to="/account_privacy_policies"
          className="text-rose-700 mr-1"
          target="_blank"
        >
          <a>حریم خصوصی </a>
        </Link>
        دیوار را می پذیرم.
      </p>
      <span className="absolute w-full mx-auto mb-16 bottom-0 px-2  border-t border-neutral-700 pt-3 ">
        <button
          onClick={acceptHandler}
          className="w-full py-2  border-none bg-rose-500 text-neutral-800 rounded-md text-lg cursor-pointer hover:bg-rose-400 hover:transition-colors"
          type="submit"
        >
          تأیید
        </button>
      </span>
    </form>
  );
}

export default SendOtpForm;
