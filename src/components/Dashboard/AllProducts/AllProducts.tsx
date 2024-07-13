import { useGetProductsQuery } from "@/redux/api/api";
import { DeleteProductModal } from "../DeleteProductModal/DeleteProductModal";
import { UpdateProductModal } from "../UpdateProductModal/UpdateProductModal";
import SkeletonTable from "@/components/Skeleton/SkeletonTable";

export type TProduct = {
  _id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  availableQuantity: number;
  rating: number;
  image: string;
};

export function AllProducts() {
  const { data, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) return <SkeletonTable />;

  return (
    <>
      <section className="mx-auto w-full max-w-4xl py-10">
        <div className="flex flex-col space-y-4 space-x-3 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg md:text-2xl font-semibold px-4 md:px-0">
              All Products
            </h2>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                      >
                        <span>Photo</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                      >
                        <span>Product Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                      >
                        <span>Price</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                      >
                        <span>Brand</span>
                      </th>
                      <th
                        scope="col"
                        className=" py-3.5 text-middle text-md font-semibold text-gray-700"
                      >
                        <span>Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.data.map((product: TProduct) => (
                      <tr key={product._id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-full w-full object-contain rounded-md"
                              src={product.image}
                              alt={product.name}
                            />
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm font-medium text-gray-900">
                            {product.name}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900">
                            ${product.price}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900">
                            {product.brand}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <UpdateProductModal product={product} />
                          <DeleteProductModal product={product} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
