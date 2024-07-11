import { TProduct } from "@/components/Dashboard/AllProducts/AllProducts";
import { ProductCard } from "@/components/Home/FeaturedProduct/ProductCard";
import { useGetProductsQuery } from "@/redux/api/api";

const AllProductPage = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  return (
    <div>
      <h1 className="font-semibold text-2xl text-center">All Products</h1>

      <div className=" mx-12 grid items-center justify-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.data.map((product: TProduct) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default AllProductPage;
