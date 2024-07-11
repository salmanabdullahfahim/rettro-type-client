import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-2xl md:text-3xl font-semibold cursor-pointer duration-200 flex items-center italic"
    >
      <img src="/logo.png" className="w-20 h-20"></img>
      RettroType
    </Link>
  );
};

export default Logo;
