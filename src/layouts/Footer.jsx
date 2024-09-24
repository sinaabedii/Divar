import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiAparat } from "react-icons/si";

function Footer() {
  return (
    <footer className="text-center w-full mt-24 pt-3 mx-auto flex justify-between px-16 mb-5">
      <div className="flex gap-3">
        <img src="divar.svg" className="text-gray-400" />
        <a className="text-gray-400 text-sm border-r-2 mr-1 pr-2 hover:text-gray-600 cursor-pointer transition-colors">
          درباره دیوار
        </a>
        <a className="text-gray-400 text-sm border-r-2 mr-1 pr-2 hover:text-gray-600 cursor-pointer transition-colors">
          پشتیبانی و قوانین
        </a>
        <a className="text-gray-400 text-sm border-r-2 mr-1 pr-2 hover:text-gray-600 cursor-pointer transition-colors">
          اتاق اخبار
        </a>
        <a className="text-gray-400 text-sm border-r-2 mr-1 pr-2 hover:text-gray-600 cursor-pointer transition-colors">
          دریافت برنامه
        </a>
        <a className="text-gray-400 text-sm border-r-2 mr-1 pr-2 hover:text-gray-600 cursor-pointer transition-colors">
          تماس با پشتیبانی
        </a>
      </div>
      <div className="flex w-36 justify-between ">
        <a href="https://twitter.com/divar_official">
          <FaTwitter className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
        </a>
        <a href="https://www.instagram.com/divar.official">
          <AiFillInstagram className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
        </a>
        <a href="https://www.linkedin.com/company/divarofficial">
          <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
        </a>
        <a href="https://www.aparat.com/divar.official">
          <SiAparat className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
