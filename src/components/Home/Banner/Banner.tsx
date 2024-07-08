import Slider from "react-slick";

import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

import BannerText from "./BannerText";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="bg-slate-100 hover:bg-white rounded-full cursor-pointer absolute right-5 top-1/2 z-20 flex justify-center items-center p-3"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="bg-slate-100 hover:bg-white rounded-full cursor-pointer absolute left-5 top-1/2 z-20 flex justify-center items-center p-3"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="w-ful h-full relative">
          <img src="/bannerone.jpg" alt="banner 3" />
          <BannerText title="Outware Picks" />
        </div>
        <div className="w-ful h-full relative">
          <img src="/bannertwo.jpg" alt="banner2" />
          <BannerText title="Seasonal Offer" />
        </div>
      </Slider>
      <div className="absolute w-full h-44 bg-gradient-to-t from-gray-50 to-transparent bottom-0 left-0 z-10" />
    </div>
  );
};

export default Banner;
