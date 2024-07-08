import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-3xl font-semibold hover:text-blue-200 cursor-pointer duration-200 flex items-center italic"
    >
      <img src="/logo.png" className="w-20 h-20"></img>
      Rettro Type
    </Link>
  );
};

export default Logo;
