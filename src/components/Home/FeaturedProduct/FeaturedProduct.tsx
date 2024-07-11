import { useGetProductsQuery } from "@/redux/api/api";
import { ProductCard } from "./ProductCard";
import { TProduct } from "@/components/Dashboard/AllProducts/AllProducts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  console.log(data);
  return (
    <div className="w-full">
      <h2 className="text-3xl mb-2 font-bold text-center">
        {" "}
        FEATURED <span className="text-headerText"> PRODUCTS</span>
      </h2>

      <div className=" mx-12 grid items-center justify-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.data
            .slice(0, 6)
            .map((product: TProduct) => (
              <ProductCard key={product._id} product={product} />
            ))
        )}
      </div>

      <div className="text-center">
        <Link to="/products">
          <Button type="button" className="text-sm font-medium">
            See All Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
