import { TProduct } from "@/components/Dashboard/AllProducts/AllProducts";
import { ProductCard } from "@/components/Home/FeaturedProduct/ProductCard";
import { SortByPrice } from "@/components/SortByPrice/SortByPrice";
import { useGetProductsQuery } from "@/redux/api/api";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const AllProductPage = () => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const queries = {
    searchTerm,
    sort,
  };

  const { data, isLoading } = useGetProductsQuery(queries);

  return (
    <div>
      {/* Search box */}
      <div className="w-3/5 hidden md:flex items-center gap-x-2 border-[1px] border-darkText/90 rounded-full px-4 py-1.5 focus-within:border-gray-600 group mx-auto mt-8">
        <BsSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
        <input
          type="text"
          placeholder="Search any Products"
          className="placeholder:text-sm flex-1 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* sort by price */}
      <div className="flex items-center justify-end gap-x-2 mt-3 md:mt-8 mr-6 md:mr-12">
        <p className="font-semibold">Sort By Price</p>
        <SortByPrice setSort={setSort} />
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : data?.data.length === 0 ? (
        <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4">
          <p className="border-[1px] border-darkText w-3/4 p-2 text-center rounded-md font-semibold">
            No product found
          </p>
        </div>
      ) : (
        <div className="mx-12 grid items-center justify-center space-y-4 px-2 py-8 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {data?.data.map((product: TProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProductPage;
