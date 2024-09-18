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
      className="container max-w-lg m-auto flex flex-col mt-24 border-2 border-solid border-gray-300 rounded-md p-1"
    >
      <p className="text-lg font-normal mb-5">ورود به حساب کاربری</p>
      <span className="text-gray-400 text-sm mb-5">
        برای استفاده از امکانات دیوار ، لطفا شماره موبایل خود را وارد کنید. کد
        تایید به این شماره پیامک خواهد شد
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
      <input
        className="m-4 p-1 border-2 border-solid border-gray-300 rounded-md"
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button
        className="w-16 px-1 py-3 border-none bg-red-800 text-white rounded-md cursor-pointer"
        type="submit"
      >
        ارسال کد تایید
      </button>
    </form>
  );
}

export default SendOtpForm;
