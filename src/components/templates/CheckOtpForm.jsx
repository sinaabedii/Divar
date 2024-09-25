import { useNavigate } from "react-router-dom";
import { checkOtp } from "../../services/auth";
import { setCookie } from "../../utils/cookie";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/user";

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);
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

  return (
    <form
      onSubmit={submitHandler}
      className="container max-w-md m-auto flex flex-col mt-24 border border-solid border-neutral-700 rounded-md p-1 shadow-md shadow-neutral-400/30"
    >
      <p className="text-lg font-normal mb-3 text-neutral-200 border-b border-neutral-700 pb-6 p-5">
        ورود به حساب کاربری
      </p>
      <label htmlFor="input" className="p-5 text-neutral-200 mb-3 text-lg">
        کد تأیید را وارد کنید
      </label>
      <span className="text-neutral-400 text-sm mb-5 pr-5 font-extralight">
        کد پیامک شده به شمارۀ «{mobile}» را وارد کنید.
      </span>
      <div className="grid">
        <input
          className="mb-2 py-2 mx-5 border border-solid px-5 text-neutral-200 border-neutral-600 rounded-md placeholder:text-right placeholder:font-extralight bg-transparent outline-none focus:ring-1 focus:ring-rose-700 "
          type="text"
          id="input"
          maxLength="5"
          placeholder="کد تأیید ۵ رقمی"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <span className="text-left ml-5">
          <button
            className="bg-neutral-700 text-sm text-neutral-400 w-32 rounded-3xl text mt-1 px-1 py-1.5  hover:bg-gray-200 hover:transition-colors"
            onClick={() => setStep(1)}
          >
            تغییر شمارۀ موبایل
          </button>
        </span>
      </div>
      <div className="w-full border-t border-neutral-700 mt-5 py-3 text-left">
        <button
          className="w-24 ml-5 py-2 left-0 border-none bg-rose-500 text-neutral-800 rounded-md cursor-pointer hover:bg-rose-400"
          type="submit"
        >
          ورود
        </button>
      </div>
    </form>
  );
}

export default CheckOtpForm;
