/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useGetProductsQuery,
  useUpdateQuantityMutation,
} from "@/redux/api/api";
import { useAppSelector } from "@/redux/hooks";
import { FaMapMarkerAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CheckOut = () => {
  const { totalOrderPrice } = useAppSelector((state) => state.cart);

  const cartItems = useAppSelector((state) => state.cart.items);
  const { data: products } = useGetProductsQuery(undefined);
  const [updateQuantity, { isLoading, isError }] = useUpdateQuantityMutation();

  const navigate = useNavigate();

  console.log(isLoading, isError);

  const handlePlaceOrder = async () => {
    try {
      if (isLoading) return;

      const updates = cartItems
        .map((item) => {
          const product = products?.data.find((p: any) => p._id === item._id);

          if (product) {
            return {
              id: product._id,
              availableQuantity: product.availableQuantity - item.cartQuantity,
            };
          }
          return null;
        })
        .filter(Boolean);
      console.log(updates);
      await updateQuantity({ updates });

      toast.success("Order placed successfully", {
        duration: 1500,
        style: {
          background: "#736100",
          color: "#fff",
        },
      });

      navigate("/order-confirmed");
    } catch (error) {
      console.error("Error placing order:", error);

      toast.error("Error placing order", {
        duration: 1500,
        style: {
          background: "#736100",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div className="md:px-12 w-full p-4 mt-12  rounded-md ">
      <div className="md:flex items-start gap-8  ">
        <div className="md:w-1/2  w-full rounded-lg   p-4">
          <div className=" w-full ">
            <div className="flex items-center gap-x-6">
              <div>
                <FaMapMarkerAlt className="text-headerText -mt-4 text-4xl" />
              </div>
              <div>
                <h2 className="text-3xl mb-1 font-bold  ">
                  Product Delivery Information
                </h2>
                <h2 className=" tracking-widest mb-7  ">
                  We will deliver your order to this address
                </h2>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="font-semibold">Name*</h2>
              <div className="flex mt-1 justify-center">
                <input
                  name="Enter Name"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2 "
                  required={true}
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold">Email*</h2>
              <div className="flex mt-1 justify-center">
                <input
                  name="Enter Email"
                  type="email"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2 "
                  required={true}
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold">Phone Number*</h2>
              <div className="flex mt-1 justify-center">
                <input
                  name="Enter Phone Number"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2 "
                  required={true}
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold">Delivery Address*</h2>
              <div className="flex mt-1 justify-center">
                <input
                  name="Enter Delivery Address"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2 "
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold">Payment Method*</h2>
              <div className="flex flex-col mt-1 space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    required={true}
                    value="cashOnDelivery"
                    className="form-radio text-headerText"
                  />
                  <span className="text-lg">Cash on Delivery</span>
                </label>
              </div>
            </div>{" "}
            <button
              onClick={handlePlaceOrder}
              className="text-white font-medium text-sm mt-8 mx-auto  px-12 py-3 rounded-lg  bg-black/90 hover:bg-black/70 duration-200"
            >
              Place Order{" "}
            </button>
          </div>
        </div>
        <div className="md:w-1/2  w-full rounded-lg  p-4">
          <div className="border md:w-8/12 flex justify-center md:mt-48 items-center border-dashed py-2 mb-4 px-3 mx-auto rounded-md border-headerText">
            <div className=" ">
              <h2 className="rounded-md font-medium text-lg p-2 mb-2 text-center">
                Order Total: ${totalOrderPrice.toFixed(2)}
              </h2>
              <h2 className=" rounded-md  p-2 text-base mb-2 text-center">
                Free Shipping on 200 and above. Just <br /> for you.{" "}
                <NavLink
                  to="/products"
                  className={
                    "text-headerText  font-bold hover:underline duration-200"
                  }
                >
                  Order More Products
                </NavLink>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
