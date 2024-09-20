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
      className="container max-w-lg m-auto flex flex-col mt-24 border-2 border-solid border-gray-300 rounded-md p-7"
    >
      <p className="text-lg font-normal mb-6 border-b-2 pb-6 p-5 pr-5">
        ورود به حساب کاربری
      </p>
      <label htmlFor="input" className="my-8 pr-5 text-lg">
        کد تأیید را وارد کنید
      </label>
      <span className="text-gray-400 text-sm mb-5 pr-5 font-extralight">
        کد پیامک شده به شمارۀ «{mobile}» را وارد کنید.
      </span>
      <div className="grid">
        <input
          className="w-full py-2 px-3 border-2 border-solid border-gray-300 rounded-md placeholder:text-right placeholder:font-extralight outline-red-700 bg-inherit "
          type="text"
          id="input"
          maxLength="5"
          placeholder="کد تأیید ۵ رقمی"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          className="bg-gray-100 text-sm w-32  rounded-3xl mt-2 px-1 py-1.5 text-gray-400 hover:bg-gray-200 hover:transition-colors"
          onClick={() => setStep(1)}
        >
          تغییر شمارۀ موبایل
        </button>
      </div>
      <button
        className="w-16 px-1 py-3 border-none bg-red-800 text-white rounded-md cursor-pointer"
        type="submit"
      >
        ورود
      </button>
    </form>
  );
}

export default CheckOtpForm;
