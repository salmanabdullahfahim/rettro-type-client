import { BsYoutube, BsLinkedin, BsFacebook, BsReddit } from "react-icons/bs";

import { Link } from "react-router-dom";
import Logo from "../Navbar/Logo";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <div className="w-full bg-[#242424] text-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-12">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p>Get Your Fingers Dancing on Our High-Performance Keyboards!</p>

          <div className="flex items-center gap-x-4">
            <span className="inline-flex justify-center items-center text-lg cursor-pointer">
              <BsYoutube />
            </span>

            <span className="inline-flex justify-center items-center text-lg cursor-pointer">
              <BsLinkedin />
            </span>
            <span className="inline-flex justify-center items-center text-lg cursor-pointer">
              <BsFacebook />
            </span>
            <span className="inline-flex justify-center items-center text-lg cursor-pointer">
              <BsReddit />
            </span>
          </div>
        </div>
        <div>
          <p className="text-lg">Latest Products</p>
          <ul className="mt-2 flex flex-col gap-y-2 text-sm font-light">
            <li className="flex flex-col">
              <span className="text-slate-200 hover:text-blue-400 cursor-pointer">
                When the new product is launch
              </span>
              <span className="text-blue-400">November 12, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate-100 hover:text-blue-400 cursor-pointer">
                When the new product is launch
              </span>
              <span className="text-blue-400">November 12, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate-100 hover:text-blue-400 cursor-pointer">
                When the new product is launch
              </span>
              <span className="text-blue-400">November 12, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate-100 hover:text-blue-400 cursor-pointer">
                When the new product is launch
              </span>
              <span className="text-blue-400">November 12, 2023</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg">Links</p>
          <ul className="flex flex-col mt-2 gap-y-2 text-base font-medium">
            <Link to="/">
              <li className="hover:text-blue-500 cursor-pointer duration-200">
                Home
              </li>
            </Link>
            <Link to="/cart">
              <li className="hover:text-blue-500 cursor-pointer duration-200">
                Cart
              </li>
            </Link>
            <Link to="/about">
              <li className="hover:text-blue-500 cursor-pointer duration-200">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-blue-500 cursor-pointer duration-200">
                Contact
              </li>
            </Link>
            <Link to="/newsletter">
              <li className="hover:text-blue-500 cursor-pointer duration-200">
                Newsletter
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-md mb-2">Pay us with your trusted partner.</p>
          <img
            src="/public/payment.png"
            alt="payment"
            className="w-full h-10 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
