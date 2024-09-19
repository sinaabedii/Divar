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
      className="max-w-lg m-auto flex flex-col mt-24 border-2 border-solid border-gray-300 rounded-md p-7"
    >
      <p className="text-lg font-normal mb-5">تایید کد اس ام اس شده</p>
      <span className="text-gray-400 text-sm mb-5 ">
        کد پیامک شده به شماره «({mobile})»را وارد کنید.
      </span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        className="m-4 p-1 border-2 border-solid border-gray-300 rounded-md"
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        className="w-16 px-1 py-3 border-none bg-red-800 text-white rounded-md cursor-pointer"
        type="submit"
      >
        ورود
      </button>
      <button
        className="bg-white w-36 mt-8 border-2 border-solid border-red-800 text-red-800 "
        onClick={() => setStep(1)}
      >
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;
