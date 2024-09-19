import { sendOtp } from "../../services/auth";

function SendOtpForm({ mobile, setStep, setMobile }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);
    if (response) setStep(2);
    if (error) console.log(error.response.data.message);
    console.log({ response, error });
  };
  return (
    <form
      onSubmit={submitHandler}
      className="container max-w-max m-auto flex flex-col mt-24 border-2 border-solid border-gray-300 rounded-md p-1"
    >
      <p className="text-lg font-normal mb-6 border-b-2 pb-6 p-5">
        ورود به حساب کاربری
      </p>
      <label htmlFor="input" className="p-5 mb-6 text-lg">
        شماره موبایل خود را وارد کنید
      </label>
      <span className="text-gray-500 text-sm mb-3 pr-5 font-extralight">
        قبل از ثبت آگهی، لطفا وارد حساب خود شوید.
      </span>
      <span className="text-gray-500 text-sm pr-5 font-extralight">
        کد تایید به این شماره پیامک می شود.
      </span>
      <div className="relative flex">
        <input
          className="m-4  w-full px-1 py-2 mx-6 border-2 border-solid pr-5 border-gray-300 rounded-md placeholder:font-extralight outline-red-700 bg-inherit"
          type="tel"
          id="input"
          placeholder="شماره موبایل"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <p className="w-12 absolute bg-gray-100 items-center justify-center text-center rounded-2xl px-4 py-1 font-extralight text-sm">
          ۹۸+
        </p>
      </div>
      <p className="text-gray-500 text-base font-extralight px-6">
        <a href="" className="text-red-700">
          شرایط استفاده از خدمات{" "}
        </a>
        و
        <a href="" className="text-red-700">
          حریم خصوصی{" "}
        </a>
        دیوار را می پذیرم.
      </p>
      <button
        className="w-28 py-2 border-none bg-red-700  text-white rounded-md text-lg cursor-pointer hover:bg-red-800 hover:transition-colors"
        type="submit"
      >
        تأیید
      </button>
    </form>
  );
}

export default SendOtpForm;
