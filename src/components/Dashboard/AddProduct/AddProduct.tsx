import { useAddProductMutation } from "@/redux/api/api";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type TInput = {
  name: string;
  brand: string;
  price: number;
  description: string;
  availableQuantity: number;
  rating: number;
  image: string;
};

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm<TInput>();

  const [AddProduct] = useAddProductMutation();

  const onSubmit: SubmitHandler<TInput> = async (data) => {
    try {
      const res = await AddProduct(data).unwrap();

      if (res?.success) {
        toast.success(res?.message);
        reset(); // Reset the form after successful submission
      }
    } catch (error) {
      toast.error(error?.data?.errorSources[0]?.message);
    }
  };

  return (
    <div className="w-4/5 px-6">
      <h2 className="text-2xl font-semibold mt-5 italic md:mx-6">
        Add New Product
      </h2>
      <div className="my-8 md:mx-6 border-2 border-gray-600 p-6 md:p-8 rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-2 ">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Product Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                {...register("name")}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="imageLink"
                className="block text-gray-700 font-bold mb-2"
              >
                Image URL:
              </label>
              <input
                type="text"
                id="imageUrl"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                {...register("image")}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-2"
              >
                Price:
              </label>
              <input
                type="text"
                id="price"
                step={0.01}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                {...register("price", { valueAsNumber: true })}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="rating"
                className="block text-gray-700 font-bold mb-2"
              >
                Rating:
              </label>
              <input
                type="text"
                id="rating"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                {...register("rating", { valueAsNumber: true })}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="brand"
                className="block text-gray-700 font-bold mb-2"
              >
                Brand:
              </label>
              <input
                type="text"
                id="brand"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                {...register("brand")}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="availableQuantity"
                className="block text-gray-700 font-bold mb-2"
              >
                Available Quantity:
              </label>
              <input
                type="number"
                id="availableQuantity"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                {...register("availableQuantity", { valueAsNumber: true })}
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description:
              </label>
              <textarea
                id="description"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                {...register("description")}
                required
              ></textarea>
            </div>
          </div>
          <div className="text-end">
            <button
              type="submit"
              className="bg-black hover:bg-black/70 text-white font-bold py-2 px-12 rounded"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
