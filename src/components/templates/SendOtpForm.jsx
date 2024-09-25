import { Link } from "react-router-dom";
import { sendOtp } from "../../services/auth";

function SendOtpForm({ mobile, setStep, setMobile }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);
    if (response) setStep(2);
    if (error) console.log(error.response.data.message);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="container max-w-md m-auto flex flex-col mt-24 border border-solid border-neutral-700 rounded-md p-1 shadow-md shadow-neutral-400/30"
    >
      <p className="text-lg text-neutral-200 font-normal mb-3 border-b border-neutral-700 pb-6 p-5">
        ورود به حساب کاربری
      </p>
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
      <p className="text-neutral-300 text-sm font-extralight px-6 pb-8 mb-4 border-b border-neutral-700">
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
      <button
        className="w-28 py-2 mr-80 border-none mb-3 bg-rose-500 text-neutral-800 rounded-md text-lg cursor-pointer hover:bg-rose-400 hover:transition-colors"
        type="submit"
      >
        تأیید
      </button>
    </form>
  );
}

export default SendOtpForm;
