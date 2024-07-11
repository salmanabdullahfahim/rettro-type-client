import { TProduct } from "@/components/Dashboard/AllProducts/AllProducts";

export function ProductCard({ product }: { product: TProduct }) {
  return (
    <div className="rounded-md border">
      <img
        src={product.image}
        alt={product.name}
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px] hover:scale-110 duration-200 cursor-pointer"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {product.name}{" "}
        </h1>

        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            Brand: {product.brand}
          </span>
        </div>
        <div className="mt-3 flex items-center space-x-2">
          <span className="block text-sm font-semibold">
            Available Quantity :{" "}
          </span>
          <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
          <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
          <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
        </div>
        <div className="mt-5 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Price : </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            {product.price}
          </span>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
