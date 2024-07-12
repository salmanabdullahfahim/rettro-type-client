import { TProduct } from "@/components/Dashboard/AllProducts/AllProducts";
import { ProductCard } from "@/components/Home/FeaturedProduct/ProductCard";
import { SortByPrice } from "@/components/SortByPrice/SortByPrice";
import { useGetProductsQuery } from "@/redux/api/api";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CardSkeleton } from "@/components/Skeleton/CardSkeleton";
import useDebounce from "@/hooks/useDebouncer";
import FilterByPriceProduct from "@/components/FilterByPrice/FilterByPriceProduct";
import { RxCross2 } from "react-icons/rx";
import { toast } from "sonner";

const AllProductPage = () => {
  const [filterPrice, setFilterPrice] = useState("");
  const [sort, setSort] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // debounce search term
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const queries = {
    searchTerm: debouncedSearchTerm,
    sort,
    priceRange: filterPrice,
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

      <div className="flex items-center justify-between">
        {/* filter by price range */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-x-2 mt-3 md:mt-8 ml-6 md:ml-12">
          <p className="font-semibold whitespace-nowrap">Filter By</p>

          <FilterByPriceProduct onFilterChange={setFilterPrice} />
          <button
            className="border hover:border-black px-4 py-2 mt-3 rounded-lg  text-sm font-medium flex items-center gap-x-2"
            onClick={() => {
              setSearchTerm("");
              setFilterPrice("");
              setSort("");

              toast.success("Filter cleared!", {
                duration: 1500,
                style: {
                  background: "#333",
                  color: "#fff",
                },
              });
            }}
          >
            <RxCross2 />
            Filter
          </button>
        </div>

        {/* sort by price */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-y-0 justify-end gap-x-2 mt-3 md:mt-8 mr-6 md:mr-12">
          <p className="font-semibold">Sort By Price</p>
          <SortByPrice setSort={setSort} />
        </div>
      </div>

      {isLoading ? (
        <div className="mx-12 grid items-center justify-center space-y-4 px-2 py-8 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {[...Array(8)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
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
