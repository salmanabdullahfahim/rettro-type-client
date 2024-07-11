import { TProduct } from "@/components/Dashboard/AllProducts/AllProducts";
import { ProductCard } from "@/components/Home/FeaturedProduct/ProductCard";
import { useGetProductsQuery } from "@/redux/api/api";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const AllProductPage = () => {
  const [filterPrice, setFilterPrice] = useState("");
  const [sort, setSort] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const queries = {
    searchTerm,
  };

  const { data, isLoading } = useGetProductsQuery(queries);

  return (
    <div>
      {/* Search box */}
      <div className="w-3/5 hidden md:flex items-center gap-x-2 border-[1px] border-darkText/50 rounded-full px-4 py-1.5 focus-within:border-blue-500 group mx-auto mt-8">
        <BsSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
        <input
          type="text"
          placeholder="Search any Products"
          className="placeholder:text-sm flex-1 outline-none "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

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
