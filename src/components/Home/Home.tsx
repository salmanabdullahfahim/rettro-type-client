import Banner from "./Banner/Banner";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import FeaturedBrands from "./FeaturedBrands/FeaturedBrands";
import ServiceAdds from "./ServiceAdds/ServiceAdds";

const Home = () => {
  return (
    <>
      <Banner />
      <ServiceAdds />
      <FeaturedBrands />
      <CustomerReviews />
    </>
  );
};

export default Home;
