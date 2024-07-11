import Banner from "./Banner/Banner";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import FeaturedBrands from "./FeaturedBrands/FeaturedBrands";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import KeyboardImportance from "./KeyboardImportance/KeyboardImportance";
import ServiceAdds from "./ServiceAdds/ServiceAdds";

const Home = () => {
  return (
    <>
      <Banner />
      <ServiceAdds />
      <FeaturedProduct />
      <FeaturedBrands />
      <CustomerReviews />
      <KeyboardImportance />
    </>
  );
};

export default Home;
