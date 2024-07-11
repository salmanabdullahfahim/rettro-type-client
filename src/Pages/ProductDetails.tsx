import { useGetProductQuery } from "@/redux/api/api";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { ProductDetailsSkeleton } from "@/components/Skeleton/ProductDetailsSkeleton";
import { toast } from "sonner";

export function ProductDetails() {
  const { id } = useParams();

  const { data, isLoading } = useGetProductQuery(id);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  if (isLoading)
    return (
      <>
        <ProductDetailsSkeleton />
      </>
    );

  const {
    _id,
    image,
    name,
    brand,
    availableQuantity,
    price,
    rating,
    description,
  } = data.data;

  const handleAddToCart = () => {
    const product = {
      _id,
      image,
      name,
      brand,
      availableQuantity,
      price,
      rating,
      description,
    };

    // Check if the product is already in the cart
    const cartItem = cartItems.find((item) => item._id === product._id);

    // If the product is in the cart and its quantity is less than or equal to 0
    if (cartItem && cartItem.availableQuantity <= 0) {
      toast.error("Product is out of stock!", {
        duration: 1500,
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    // If the product is not in the cart and its quantity is less than or equal to 0
    if (!cartItem && product.availableQuantity <= 0) {
      toast.error("Product is out of stock!", {
        duration: 1500,
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    // If the product is in stock, add it to the cart
    dispatch(addToCart(product));

    // Show success message
    toast.success("Product added to cart!", {
      icon: "🛒",
      duration: 1500,
      style: {
        background: "#333",
        color: "#fff",
      },
    });
  };
  return (
    <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="overflow-hidden mx-12">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
          <div className="items-start justify-between lg:flex lg:space-x-8">
            <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
              <div className="w-full xl:flex xl:flex-row-reverse">
                <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                  <div className="relative flex items-center justify-center">
                    <img
                      alt={data?.data?.name}
                      src={data?.data?.image}
                      width={650}
                      height={590}
                      className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
              <div className="pb-5">
                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">
                  {data?.data?.name}
                </h2>
                <p className="mt-4 font-semibold">${data?.data?.price}</p>
              </div>
              <div className=" pt-0.5">
                <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                  Brand: {data?.data?.brand}
                </h4>
                <h4 className="text-15px mb-2 font-normal capitalize text-opacity-70">
                  Available Quantity: {data?.data?.availableQuantity} Piece
                </h4>
              </div>
              <div className="pb-2" />
              <div className="pt-3 xl:pt-8">
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Product Details:
                </h3>
                <p className="text-sm">{data?.data?.description}</p>
              </div>
              <div className="flex items-center mb-2 gap-1 my-4">
                <p className="text-15px font-semibold">Rating: </p>
                {/* @ts-expect-error: Type issue with Rating component */}
                <Rating
                  initialRating={data?.data?.rating}
                  emptySymbol={<FaStar className="text-gray-300 " />}
                  fullSymbol={<FaStar className="text-yellow-500" />}
                  fractions={2}
                  readonly
                />
              </div>
              <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                <button
                  onClick={handleAddToCart}
                  type="button"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
